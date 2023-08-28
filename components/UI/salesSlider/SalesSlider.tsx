"use client";
import classes from "./salesSlider.module.css";
import Slider from "react-slick";
import img1 from "../../../public/Rectangle.png";
import img2 from "../../../public/Rectangle2.png";
import img3 from "../../../public/Rectangle3.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SalesCard from "../salesCard/SalesCard";

const list = [
	{
		title: "Tour “Three Capitals of Uzbekistan” for 6 days/nights",
		days: "7 days",
		seats: "4 seats",
		countries: "10 countries",
		price: "$ 865",
		stars: "5.0",
		img: img1,
		sales: "20%",
	},
	{
		title: "Tour “Three Capitals of Uzbekistan” for 6 days/nights",
		days: "7 days",
		seats: "4 seats",
		countries: "10 countries",
		price: "$ 865",
		stars: "5.0",
		img: img2,
		sales: "20%",
	},
	{
		title: "Tour “Three Capitals of Uzbekistan” for 6 days/nights",
		days: "7 days",
		seats: "4 seats",
		countries: "10 countries",
		price: "$ 865",
		stars: "5.0",
		img: img3,
		sales: "20%",
	},
	{
		title: "Tour “Three Capitals of Uzbekistan” for 6 days/nights",
		days: "7 days",
		seats: "4 seats",
		countries: "10 countries",
		price: "$ 865",
		stars: "5.0",
		img: img1,
		sales: "20%",
	},
	{
		title: "Tour “Three Capitals of Uzbekistan” for 6 days/nights",
		days: "7 days",
		seats: "4 seats",
		countries: "10 countries",
		price: "$ 865",
		stars: "5.0",
		img: img3,
		sales: "20%",
	},
	{
		title: "Tour “Three Capitals of Uzbekistan” for 6 days/nights",
		days: "7 days",
		seats: "4 seats",
		countries: "10 countries",
		price: "$ 865",
		stars: "5.0",
		img: img2,
		sales: "20%",
	},
];
const CustomPrevArrow = (props: any) => (
	<button
		className={`${classes.arrow} ${classes.prev}`}
		onClick={props.onClick}>
		<IoIosArrowBack />
	</button>
);

const CustomNextArrow = (props: any) => (
	<button
		className={`${classes.arrow} ${classes.next}`}
		onClick={props.onClick}>
		<IoIosArrowForward />
	</button>
);

const SalesSlider = () => {
	const settings = {
		speed: 700,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 620,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
		],
	};
	return (
		<div className={classes.SliderTour}>
			<Slider {...settings}>
				{list.map((el, index) => (
					<SalesCard data={el} key={index} />
				))}
			</Slider>
		</div>
	);
};

export default SalesSlider;
