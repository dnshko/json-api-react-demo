
/* import './App.css'; */
/* import './App.css'; */
import '../Homepage/Footer.css'
import Footer from '../Homepage/Footer';
import PersonDetails from '../Homepage/PersonDetails';
import Viewbutton from '../Homepage/Viewbutton';



import Header from '../Homepage/Header';
import Navi from '../Homepage/Navi';
import Slider from '../Homepage/Slider';
import Service from '../Homepage/Service';
import Support from '../Homepage/Support'
function Home() {
  return (
    <div className="App">
      <Header/>
      <Navi/>
      <Slider/>
      <Service/>
      <Support/>
    
      <PersonDetails/><br/><br/><br/><br/>
      <Viewbutton/><br/><br/><br/><br/><br/><br/>
      <Footer/>
   
  
     
    </div>
    
  );
}

export default Home;
