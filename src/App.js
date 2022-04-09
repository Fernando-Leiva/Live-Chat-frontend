import { Message } from './components/message/message';
import './App.css';
import user from './user.png'
import { Header } from './components/header/Header';
import { Input } from './components/footer/Input';

function App() {
  return (
    <div className="App">
        <Header user='User'/>
        
        <Message  img={user} colorUser="green" message='Hola soy nuevo en sockets  '/>
     
        <Input />
    </div>
  );
}

export default App;
