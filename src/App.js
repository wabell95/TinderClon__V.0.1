import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TarjetaTinder from './TarjetaTinder';
import BotonesSwipe from './BotonesSwipe';
import ListadoChats from './ListadoChats';
import ChatIndividual from './ChatIndividual';

function App() {
  return (
    <>
      <Router>
      
      <Switch>
        
        <Route path="/chat/:persona">
          <Header botonRetroceder="/chats"/>
          <ChatIndividual/>
          
        </Route>
        
        <Route path="/chats">
          <Header botonRetroceder="/chats"/>
          <ListadoChats/>
        </Route>
        
        <Route path="/">
          <Header/>
          <TarjetaTinder/>
          <BotonesSwipe/>
        </Route>
        
      </Switch>
      
    </Router>
    </>
  );
}

export default App;
