import React from 'react';
import { Row, Col,Button } from 'react-bootstrap';
import x from '../../assets/bar.png';
import './Footer.css'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{
    faYoutube,
    faFacebook,
    faLinkedin,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'




function Footer() {
    return (
        
        <div className="main-footer">
            
            <div className="lay"> 
             <div className="container"> 
             <div className="da">
<Row className="ro1" style={{marginTop:"-190px",paddingLeft:"85px"}} >
    <Col ><button className="btn1">Branch1</button></Col>
    <Col className="cent" ><button  className="btn21" > Branch1</button></Col>
    <Col ><button className="btn21">Branch1</button></Col>
  </Row>
  </div>
<div className="ds">
  <Row className="mat">
    <Col><h1 className="matrimonyheading" >Matrimony</h1>
     </Col>
     </Row>
     </div>
     <div className="quicklinks">
         <Row >
     <Col></Col>
     <Col>
     <ul >
     <h3 className="quick" >Quick Links</h3>
      
         <li className="c1"><a className="a1" href="./about.html">About Us</a></li>
         <li className="c1"><a className="a1" href="./about.html">Privacy Policy</a></li>
         <li className="c1"><a className="a1" href="./about.html">Success Story</a></li>
         <li className="c1"><a className="a1" href="./about.html">Terms and Conditions</a></li>
        
         </ul></Col>
</Row>
 </div>
 <div className="du">
 {/* <div className="quicklinks"> */}
         <Row>
     <Col><ul>
     {/* <h3 className="contactus" >Contact US</h3>
         <li className="con1"><a  className="contact"  href="./about.html">Address</a></li>
         <li className="con1"><a className="contact1"  href="./about.html">matrimony@gmail.com</a></li>
         <li className="con1"><a className="contact" href="./about.html">+91-90000000000</a></li>
          */}

<h3 className="quick" >Contact US</h3>
         <li className="c1"><a  className="a1"  href="./about.html">Address</a></li>
         <li className="c1"><a className="a1"  href="./about.html">matrimony@gmail.com</a></li>
         <li className="c1"><a className="a1" href="./about.html">+91-90000000000</a></li>
         

         </ul></Col>
</Row>

 </div>
 <div className="socialmedia" >
        <Row xs="auto">
            <Col className="media" ><a  href="https://www.youtube.com/"><FontAwesomeIcon className="fontt"  icon={faYoutube} size="3x"  /></a> </Col>
            <Col className="media" ><a  href="https://www.facebook.com/"><FontAwesomeIcon className="fontt" icon={faFacebook} size="3x"  /></a> </Col>
            <Col className="media" ><a  href="https://www.instagram.com/"><FontAwesomeIcon className="fontt" icon={faInstagram} size="3x"  /></a> </Col>
            <Col className="media" ><a  href="https://www.linkedin.com/"><FontAwesomeIcon className="fontt" icon={faLinkedin} size="3x"  /></a> </Col>
           
        </Row>
        
 </div>
 
 <hr style={{color:"#FFBE71",marginTop:"60px",size:"5px"}}  /><br/>

 <div>
<h2 className="copyright">Copyright @ 2021 Matrimony</h2>
</div>
 <hr style={{color:"",marginBottom:"-270px",size:"5px"}}/><br/> 


  </div>
  <img className="footerr"  src={x}/>
</div>


            </div>


              
     
    )
}

export default Footer
