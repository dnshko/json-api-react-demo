import React from 'react'
import { Row ,Col,Button} from 'react-bootstrap'
import Slider from "react-slick";  
// import style from "../../test.module.css"
import { Facebook, Instagram, Linkedin, Youtube } from 'react-feather';
import "../../footerpage.css"

import { useContext } from 'react';
import { homeContext } from '../../Context/HomeContext';

export default function Footerpage() {
    const [post] = useContext(homeContext);
    // const settings = {
    //   dots: true,
    //   arrows:true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
     
    //   responsive:[{
    //     breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }

    //   }],
      
    // };
 

    return (
        // <div className='main-footer1'>
        <div style={{ backgroundColor: "#730E28" ,marginBottom:"-14px"}}>
         

<div class="container" style={{paddingLeft:"20px"}}>
{/* <h4> Single Item</h4> */}
<div>


        <Slider    dots={true}  
        slidesToShow={3}  
        slidesToScroll={1}  
        autoplay={false}  
        arrows={true}  
        autoplaySpeed={3000}
        responsive= {[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]}>
          <div>
           <button className="fbtn">{post.branch1}</button>
          </div>
          <div>
          <button className="fbtn">{post.branch2}</button>
          </div>
          <div>
          <button className="fbtn">{post.branch3}</button>
          </div>

          <div>
          <button className="fbtn">{post.branch3}</button>
          </div>
        
</Slider>
</div>
    {/* <Row className="ro1" style={{marginTop:"-190px",paddingLeft:"85px"}} > */}
    <Row>
    <Col lg={4}>
    {/* <button className="fbtn">{post.branch1}</button> */}
    <Row style={{marginTop:"40px"}}><h1>{post.footerHeading1}</h1></Row>
    
    <Row>
       
<div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
<div style={{display:'flex',flexDirection:'row',alignItems:'flex-left',textAlign:'center'}}>
            <Button className="ibutton" ><Facebook className='iconfont'/></Button>
            <Button className="ibutton" ><Instagram className='iconfont'/></Button>
            <Button className="ibutton" ><Youtube className='iconfont'/></Button>
            <Button className="ibutton" ><Linkedin className='iconfont'/></Button>
            </div> </div>
    </Row>
    </Col>
    <Col lg={4}>
        {/* <button  className="fbtn">{post.branch2}</button> */}
        <Row>
          
            <Row>
            <Col style={{marginRight:"70px"}}>
            {/* <ul> */}
     {/* <h3 className="quick" >Quick Links</h3> */}
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                <h2 className='quick'>{post.footerHeading2}</h2>
                <p ><a className="a1" href="#">{post.link1}</a></p>
                <p ><a className="a1" href="#">{post.link2}</a></p>
                <p ><a className="a1" href="#">{post.link3}</a></p>
                <p ><a  className="a1"href="#">{post.link4}</a></p>
                </div>
            
         </div>
         {/* </ul> */}
            </Col>
            </Row>
         
        </Row>
        </Col>
    <Col lg={4}>
    {/* <button className="fbtn">{post.branch3}</button> */}

    <Row>
            {/* <Col><h2 className='quick'>Contact Us</h2></Col> */}
            <Row>
            <Col style={{marginRight:"63px"}} >
            {/* <p
             className='p1'>Address</p> */}
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
               
            <h2 className='quick'>{post.footerHeading3}</h2>
            <p className='contactp' >{post.contactPara1}</p>
            <p className='contactp' >{post.contactPara2}</p>
            <p className='contactp'>{post.contactPara3}</p>
            </div></div>
            </Col>
            </Row>
         
        </Row>
    </Col>
</Row>
     <hr style={{color:"#FFBE71",marginTop:"60px",size:"5px"}}></hr>   

     <div>
<h2 className='copy'>{post.copyright}</h2>
</div>  



  </div> 

  <div>
  <img  src={post.footerImg}  className='footerimg'/>
</div>
        </div>
    )
}
