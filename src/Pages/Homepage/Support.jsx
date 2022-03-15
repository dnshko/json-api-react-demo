import {React,useContext} from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap'
import { Globe } from 'react-feather'
import { homeContext } from '../../Context/HomeContext'

export default function Support() {
    const [post]=useContext(homeContext)
    

    return (
        <div style={{ marginTop: '170px' }} >

            <div style={{ backgroundColor: "#730E28" }} >

                <Card.Img src="./1 1.png" alt="Card image" className='imgpos' />
                {/* <img src="./1 1.png"  alt=""/> */}
                {/* style={{marginTop:"-25px"}} 
            height:'550px', width: '550px' ,*/}

                <div class='container'>
                    <Row>
                        <Col lg={6}>
                            <Card.Img src={post.supportImg} alt="" className='phoneimg' />
                        </Col>
                        <Col>
                           
                            <p className='p1'>{post.supportHeading}</p>
                            <h5 style={{paddingLeft:"20px"}}>{post.supportSubheading}</h5>

                            <p className='sp2'>{post.supportP1}</p>

                            <p className='sp2'>{post.supportP2}</p>

                            <p className='sp2' >{post.supportP3}</p>



                            <Row>
                                <Col sm={5}>




                                    {/* <Card.Img src="./playstore.png" style={{ height: '58.87px', width: '200px' }} class="img1"></Card.Img>
                        
                                <Card.Img src="./appstore.png" style={{ height: '58.92px', width: '200px', marginTop: '20px' }} class="img1"></Card.Img> */}

                                    {/* <Col>  */}
                                    <img src={post.playStoreimg} className='img2'></img>


                                    <img src={post.appStoreimg} class='img2'></img>

                                </Col>
                                <Col sm={2}>
                                  
                                    <img src={post.qrImage} class="img1"></img>

                                </Col>
                                <Col sm={5}></Col>
                            </Row>





                        </Col>


                    </Row>
                </div><br></br><br></br>
                {/* </div> */}

                <div className='supportbg'>




                    <div class="container">
                        <div style={{ marginBottom: '25px', marginTop: '28px' }} >
                            <Row>
                                <Col sm={4}>

                                    <div className="col" className='support1'>
                                        <Card style={{
                                            width: 220,
                                            height: 120,
                                            //Below lines will help to set the border radius
                                            borderBottomLeftRadius: 30,
                                            borderBottomRightRadius: 30,
                                            borderTopRightRadius: 30,
                                            borderTopLeftRadius: 30,
                                            // marginTop: '30px',
                                            marginLeft: '40px',
                                            boxShadow: "0px 4px 4px 0px #00000040",


                                            backgroundColor: '#f9e1c2',
                                        }}>

                                            <div >
                                                {/* <Globe style={{height:'100px',width:'100px'}}/> */}
                                                <Card.Img src={post.icon1} alt="" style={{ height: '30px', width: '30px', marginTop:"10px" }} />
                                                <br></br><h2 className='cardh2'>{post.icon1Text1}</h2>
                                            </div>


                                        </Card>



                                    </div>
                                </Col>
                                <Col sm={4}>

                                    <div className="col" className='support2'>
                                        <Card style={{
                                            width: 220,
                                            height: 120,
                                            //Below lines will help to set the border radius
                                            borderBottomLeftRadius: 30,
                                            borderBottomRightRadius: 30,
                                            borderTopRightRadius: 30,
                                            borderTopLeftRadius: 30,
                                            // marginTop: '30px',
                                            marginLeft: '30px',
                                            boxShadow: "0px 4px 4px 0px #00000040",
                                            backgroundColor: '#f9e1c2',
                                        }}>

                                            <div >
                                                {/* <Globe style={{height:'100px',width:'100px'}}/> */}
                                                <Card.Img src={post.icon2} alt="" style={{ height: '30px', width: '30px' ,marginTop:"10px"}} />
                                                <h2 className='cardh2'>{post.icon2Text2}</h2>
                                            </div>


                                        </Card>



                                    </div>
                                </Col>

                                <Col sm={4}>
                                    <div className="col" className='support3' >
                                        <Card style={{
                                            width: 220,
                                            height: 120,
                                            //Below lines will help to set the border radius
                                            borderBottomLeftRadius: 30,
                                            borderBottomRightRadius: 30,
                                            borderTopRightRadius: 30,
                                            borderTopLeftRadius: 30,
                                            boxShadow: "0px 4px 4px 0px #00000040",
                                            // marginTop: '30px',
                                            marginLeft: "45px",
                                            backgroundColor: '#f9e1c2',
                                        }}>

                                            <div >
                                                {/* <Globe style={{height:'100px',width:'100px'}}/> */}
                                                <Card.Img src={post.icon3} alt="" style={{ height: '55px', width: '55px',paddingLeft:"6.9px",marginLeft:'6.5px'}} />
                                                <h2 style={{fontSize:"22px"}} >{post.icon3Text3}</h2>
                                            </div>


                                        </Card>



                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </div>
                </div>
            </div>


            <div class="container" style={{ marginTop: '130px' }}>
                <h2 className='head1'><i>{post.featureHeading2}</i></h2>
                <p style={{ marginTop: '40px' }} className='sp2'>
                {post.fearurePara}
                   </p>
            </div>


        </div>
    )
}
