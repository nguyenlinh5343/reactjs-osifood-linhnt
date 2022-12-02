import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import '../styled/base.scss';

function Slide(props) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		className:'slide-top'
	};
console.log(props);
	return (
		<>
			<section style={{
				marginTop: props.headerHeight
			}}>
				<div className="container2">
				<Slider {...settings}>
					<div>
						<a href="">
							<img src="https://theme.hstatic.net/200000459373/1000812576/14/slide_3_img.jpg?v=282"/>
						</a>
					</div>
					<div>
						<a  href="">
							<img src="https://theme.hstatic.net/200000459373/1000812576/14/slide_4_img.jpg?v=282"/>
						</a>
					</div>
					<div>
						<a href="">
							<img src="https://theme.hstatic.net/200000459373/1000812576/14/slide_2_img.jpg?v=282"/>
						</a>
					</div>
				</Slider>
				</div>
			</section>


		</>
	)
}

export default Slide;