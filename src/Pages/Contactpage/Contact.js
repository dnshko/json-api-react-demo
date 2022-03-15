
/* import './App.css'; */
/* import './App.css'; */
import '../Homepage/Footer.css'
import Footer from '../Homepage/Footer';
import PersonDetails from '../Homepage/PersonDetails';
import Viewbutton from '../Homepage/Viewbutton';



import Header from '../Homepage/Header';
import Navi from '../Homepage/Navi';
import Slider from '../Homepage/Slider';
import Address from './Address';

function Contact() {
  return (
    <div className="App">
      <Header/>
      <Navi/>
      <Slider/>
      <Address/><br/><br/>
      <Footer/>
   
  
     
    </div>
    
  );
}

export default Contact;
