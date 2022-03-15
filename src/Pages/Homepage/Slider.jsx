import { React, useContext } from "react";
import { Carousel, Row, Col, Card } from "react-bootstrap";

import Button from "@material-ui/core/Button";
import Search from "@material-ui/icons/Search";

import CustomDropdown from "./CustomDropdown";
// import "../../styles.css"
import { homeContext } from "../../Context/HomeContext";

export default function Slider() {
  const [post] = useContext(homeContext);
  return (
    <div class="container" style={{ marginTop: "50px" }}>
      <Row>
        <Card
          style={{
            height: "670px",
            boxShadow: "0px 4px 4px 0px #00000040",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            overflow: "hidden",
          }}
        >
          <Card.Body>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  // src="./Rectangle 20.png"
                  src={post.sliderImage1}
                  alt=""
                />
                <Carousel.Caption>
                  <h4 className="text1">Matrimony</h4>
                  <h4 className="text2">Free Registeration</h4>
                  {/* <Button className='btnslide'><p className='btntext'>REGISTER NOW</p> </Button> */}

                  <button className="btnslide">
                    <h4 className="btntext">REGISTER NOW</h4>
                  </button>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={post.sliderImage1}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={post.sliderImage1}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            <div style={{ marginTop: "20px", fontSize: "14px" }}>
              {/* <Form.Select aria-label="Default select example">
  <option>select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
 </Form.Select> */}
              <Row>
                <Col md={2}>
                  {/* <p className="coltitle">Age</p> */}
                  Age
                  <Row>
                    <Col>
                      <CustomDropdown></CustomDropdown>
                    </Col>

                    <Col>
                      <CustomDropdown></CustomDropdown>
                    </Col>
                  </Row>
                </Col>
                <Col md={1}>
                  Gender
                  <Row>
                    <Col>
                      <CustomDropdown></CustomDropdown>
                    </Col>
                  </Row>
                </Col>

                <Col md={2}>
                  Caste
                  <Row>
                    <Col>
                      <CustomDropdown></CustomDropdown>
                    </Col>
                  </Row>
                </Col>
                <Col md={2}>
                  Subcaste
                  <Row>
                    <Col>
                      <CustomDropdown></CustomDropdown>
                    </Col>
                  </Row>
                </Col>
                <Col md={2}>
                  Education
                  <Row>
                    <Col>
                      <CustomDropdown></CustomDropdown>
                    </Col>
                  </Row>
                </Col>
                <Col md={2}>
                  District
                  <Row>
                    <Col>
                      <CustomDropdown></CustomDropdown>
                    </Col>
                  </Row>
                </Col>

                <Col>
                  <Row>
                    <Col>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#701C1C",
                          color: "white",
                          marginTop: "35px",
                          paddingTop: "7px",
                          paddingBottom: "7px",
                        }}
                      >
                        <Search style={{ color: "white" }}></Search>
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}
