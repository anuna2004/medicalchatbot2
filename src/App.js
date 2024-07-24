import {Route, Routes} from 'react-router-dom'; 


import Home from './components/Home';
import Login from './components/Login';
import ChatBot from './components/ChatBot';

function App() {
  return (
     <div>
 
 <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/ChatBot" element={<ChatBot/>}/>
       
      </Routes>

    
  


     </div>
  );
}

export default App;
