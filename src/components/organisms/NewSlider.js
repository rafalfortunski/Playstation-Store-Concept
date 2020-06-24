import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewSlider extends Component {
  render() {
    const settings = {
      accessibility: false,
      arrows: false,
      autoplay: true,
      dots: false,
      infinite: true,
      centerPadding: "100px",
      speed: 500,
      slidesToShow: this.props.slidesToShow ? this.props.slidesToShow : 4,
      slidesToScroll: 1,
      swipeToSlide: true,
    };
    return (
      <div>
        <Slider {...settings}>{this.props.children}</Slider>
      </div>
    );
  }
}

export default NewSlider;
