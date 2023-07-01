import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

const Home = () => {
  function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="slide-image d-block w-100"
            src="build-website-1.avif"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Are you ready to take your business to new heights?</h3>
            <p>
              here, I specialize in creating powerful websites that drive
              growth, engagement, and success for businesses of all sizes.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slide-image d-block w-100 "
            src="build-website-2.avif"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>What is my mission?</h3>
            <p>
              My mission is to help you establish a compelling online presence,
              attract your target audience, and achieve your business
              objectives.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slide-image d-block w-100"
            src="build-website-3.avif"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  return (
    <div className="container">
      {/* <ControlledCarousel /> */}
    </div>
  );
};

export default Home;
