import React from 'react'
import './Address.css'
import mapp from '../../assets/mapp.png';
import {Row,Col,Container} from 'react-bootstrap'
import {GoogleApiWrapper} from 'google-maps-react';
import {Mapp} from './Mapp'
import p1 from '../../assets/Vector (1).png';
import p2 from '../../assets/Vector (2).png';
import p3 from '../../assets/Vector (3).png';
function Address() {
    return (

        <div>
            
<Container>
 
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15741.523003512955!2d77.76066754523009!3d9.475572754705302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e5255963c47d06d!2sBaboolsoft!5e0!3m2!1sen!2sin!4v1640161642920!5m2!1sen!2sin" width="1080" height="450" ></iframe><br/><br/><br/>
    {/* <Mapp/> */}
     
    <div className="conn2" >
      
        
    <Row >
    
        <Col>
        
            <div >
            <Container> <br/><br/><br/>
     
        <h1  className="head1">GET IN TOUCH</h1><br/><br/>

        <p className="para"> Matrimony is eager to help you find your partner at the earliest. Our customer service team will be pleased to assist you anytime you have a query. You can contact our customer service team.</p>
      
        <img className="pic1"  src={p1} /><br/><br/><br/><br/><br/>
        <h3 className="address">Address</h3>
        <img className="pic2"  src={p2} /><br/><br/>
        <h3 className="address1">+91 - 9000000000</h3>
        <img className="pic3"  src={p3} /><br/>
        <h3 className="address2">Live Chat</h3>
        
    
        </Container> 
        </div>
        
        </Col>
       
        <Col className="col2">
        <Container > <br/><br/><br/><br/><br/>
        <h1  className="head2">leave a message</h1><br/><br/>
        <div  >
          <input className="inputt" type="text" name="t1" placeholder="Name"/>
        </div><br/><br/><br/>

        <div className="divv" >
          <input className="inputt" type="email" name="t1" placeholder="Email"/>
        </div><br/><br/><br/>

        <div className="" >
        <textarea className="inputt1" placeholder="Write your message here" ></textarea>
         {/*  <input type="text" name="t1" /> */}
        </div><br/><br/><br/>
        <div className="" >
        <button type="submit" className="btnn"> SEND </button>
        </div>
        </Container>
        </Col>
    </Row>
  
 
    


    </div>
             
    </Container>
  





        </div>
    )
}

export default Address
