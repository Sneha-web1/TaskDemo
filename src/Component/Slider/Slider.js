import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
import SliderImg1 from "../../Assets/slider-img-1.jpeg";
import SliderImg2 from "../../Assets/slider-img-2.jpeg";
import SliderImg3 from "../../Assets/slider-img-3.jpeg";
import SliderImg4 from "../../Assets/slider-img-4.jpeg";
function IndividualIntervalsExample() {
  return (
    <Carousel id="home">
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={SliderImg1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={SliderImg2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SliderImg3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SliderImg4} alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
