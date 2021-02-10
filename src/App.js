import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
      <Route exact path='/' component={Home}/>
      <Route path='/Contact' component={Contact} />
      <Route path='/Portfolio' component={Portfolio} />
    </div>
    </Router>
    
  );
}

export default App;
