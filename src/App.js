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
  const [userTopName, setUserTopName] = React.useState('User')
  const [showModal,setShowModal] = React.useState(false) 

  
  React.useEffect(()=>{
    const newSocket = io.connect(ENDPOINT)
    newSocket.on("top_name",topName=>{
      console.log(topName)
      setUserTopName(topName.name)
    })
    setSocket(newSocket)
    newSocket.on("mensage_recibido", msg => {
      console.log(msg)
      if(!currentSocket) {setCurrentSocket(msg.user)}
      setMessages((prevState) => {
        console.log(msg)
        if(msg instanceof Array){
          return []
        }else{
          return [...prevState, msg]      
        }
      })
    })
    return ()=> newSocket.close() 
  },[])


  return (
    
    <div className="App">
     
        <Header setShowModal={setShowModal} user={userTopName}/>
        
        <div className='body'> 
        {
          messages && messages.length > 0 && messages.map((message,index) => {
            return <section key={index} style={{display:'flex', flexDirection:'row',justifyContent: message.user==='Me'? 'flex-start' :'flex-end'}} > <Message img={user} colorUser={message.user==="Me"? "gray":'green'} message={message}/> </section> 
          })
        }   
        </div>
       
        <Input className="input" currentSocket={currentSocket} socket={socket} setMessages={setMessages}/>
    </div>
  );
}

export default App;
