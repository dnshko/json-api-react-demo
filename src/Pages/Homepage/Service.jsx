import {React,useContext} from 'react'
import {Row,Col} from 'react-bootstrap'
import { Search } from 'react-feather';
import { homeContext } from '../../Context/HomeContext'


export default function Service() {
  const [post]=useContext(homeContext)
 
    return (
        <div class='container' style={{marginTop:'130px'}}>

            <h2><b>{post.featureHeading1}</b></h2>
            <div style={{marginTop:'90px'}}>

            
           <Row>
               <div class="col-lg-4">
               <Col>
            
             
               <img src={post.serviceImage1}></img>
              <p className='sp' >{post.serviceText1}</p>
               </Col>
             </div>
             <div class="col-lg-4">
               <Col>
               
            
               <img src={post.serviceImage2}></img>
               <p className='sp' >{post.serviceText2}</p>
               </Col>
               </div>

             <div class="col-lg-4">
               <Col>
               
              
               <img src={post.serviceImage3}></img>
               <p className='sp' >{post.serviceText3}</p>
               </Col>
              </div>
           </Row>
           </div>

         </div>
    
    )
}
