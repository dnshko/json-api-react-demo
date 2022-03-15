import {React,useContext} from 'react'
import Slider from "react-slick";  
import {Card,CardGroup,Col,Row} from 'react-bootstrap'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './Slickdemo.css';
import x from '../../assets/bar.png';
import person from '../../assets/person.png' ;
import p from '../../assets/imgper.PNG'

import { homeContext } from '../../Context/HomeContext'

export default function PersonDetails1() {

  const [post]=useContext(homeContext)


    var images = [    
           
        { img: p },    
        { img: p },    
        { img: p },    
        { img: p },    
        { img: p },    
      ];   
var imgSlides = () =>  
images.map(num => ( 
  <div class="container" >

<div className="imgpad">  
  <Card >

  <Card.Body >
    <div >
 
<Card.Img style={{width:'50px',height:'50px',display:'initial'}} src={p} />
    
    </div>
 
    <Card.Title>{post.personSlider1Heading}</Card.Title>
   {/*  <Card.Text>
    <StarRating
      defaultValue={5}
      min={0}
      max={10}
      step={0.5} />
      </Card.Text> */}
      <Rating
        name="Rating Label"
        value={3}
       
      />
    <Card.Text>
    <p>{post.personSlider1para}
      </p>
      
    </Card.Text>
  </Card.Body>
 
</Card>
  </div> 

  </div>



 
  
));  


    return (
       
            <div className="App">  
         <div className='container'>        
        <div className="row title" style={{marginBottom: "80px"}} >  
               
       <div className='col'>

     
        <Slider 
    dots={true}  
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
        ]}
        > 
  {imgSlides()}
  </Slider> 
  </div> 
 


            </div>    
            </div>  
 

        
           
        
    </div> 
        
    )
}
