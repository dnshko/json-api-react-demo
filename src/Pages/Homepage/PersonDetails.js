import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import "./Slickdemo.css";
import x from "../../assets/bar.png";
import person from "../../assets/person.png";
// import p from '../../assets/imgper.PNG';
/* import StarRating from 'react-bootstrap-star-rating'; */
import "../.././assets/css/styles.css";
import "./Slickdemo.css";
import axios from "axios";

export class PersonDetails extends Component {
  // const [post, setPost] = React.useState([]);

  // React.componentDidMount(() => {
  //   axios.get("http://localhost:8000/landingPage").then((response) => {
  //     console.log(response.data[0]);
  //     setPost(response.data[0]);

  //   });
  // }, []);
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/landingPage")
      .then((response) => {
        this.setState({
          data: response.data[0],
        });
        // console.log(response.data[0])
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("sample", this.data);
  }

  render() {
    var images = [
      { img: person },
      { img: person },
      { img: person },
      { img: person },
      { img: person },
    ];
    var imgSlides = () =>
      images.map((num) => (
        <div class="container">
          <div className="imgpad">
            <Card>
              <Card.Body>
                <div>
                  {/* <Card.Img style={{marginLeft:"90px",width:"70px"}}  className="cardimg1"  src = {p} alt="" /> */}
                  <Card.Img
                    style={{
                      width: "50px",
                      height: "50px",
                      display: "initial",
                    }}
                    src="../../assets/imgper.PNG"
                  />
                  {/* <img src={p} alt ="" style={{width:'100px',height:'100px',display:'initial'}}></img> */}
                  {/* <img src={p} alt="" className='imgcard'></img> */}
                </div>

                {/* <Card.Title>{this.personSlider1Heading}</Card.Title> */}
                {/*  <Card.Text>
        <StarRating
          defaultValue={5}
          min={0}
          max={10}
          step={0.5} />
          </Card.Text> */}
                <Rating name="Rating Label" value={3} />
                <Card.Text>
                  <p>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      ));
    return (
      <div className="App">
        <div className="container">
          <div className="row title" style={{ marginBottom: "80px" }}>
            <Slider
              dots={true}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={false}
              arrows={true}
              autoplaySpeed={3000}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ]}
            >
              {imgSlides()}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
export default PersonDetails;
