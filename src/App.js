import { Message } from './components/message/message';
import './App.css';
import user from './user.png'
import { Header } from './components/header/Header';
import { Input } from './components/footer/Input';
import io from 'socket.io-client';
import React from 'react';


function App() {
  const [messages, setMessages] = React.useState([]);
  const ENDPOINT = "http://localhost:3030";
  const [currentSocket,setCurrentSocket] = React.useState()
  const [socket,setSocket] = React.useState()

  
  React.useEffect(()=>{
    const newSocket = io.connect(ENDPOINT)
  
    setSocket(newSocket)
    newSocket.on("mensage_recibido", msg => {
      console.log(msg)
      if(!currentSocket) {setCurrentSocket(msg.user)}
      setMessages((prevState) => {
        return [...prevState, msg]      
      })
    })
    return ()=> newSocket.close() 
  },[])


  return (
    <div className="App">
        <Header user="User"/>
        
        {
          messages&& messages.length > 0 && messages.map((message,index) => {
            return <section key={index} > <Message img={user} colorUser="green" message={message}/> </section> 
          })
        } 
       
        <Input className="input" currentSocket={currentSocket} socket={socket} setMessages={setMessages}/>
    </div>
  );
}

export default App;
