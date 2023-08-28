"use client";
import classes from "./sliderTours.module.css";
import Slider from "react-slick";
import img1 from "../../../public/Rectangle.png";
import img2 from "../../../public/Rectangle2.png";
import img3 from "../../../public/Rectangle3.png";
import SliderCard from "../sliderCard/SliderCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const list = [
	{
		title: "Tour “Three Capitals of Uzbekistan” for 6 days/nights",
		days: "7 days",
		seats: "4 seats",
		countries: "10 countries",
		price: "$ 865",
		stars: "5.0",
		img: img1,
	},
	{
		title: "Tour “Three Capitals of Uzbekistan” for 6 days/nights",
		days: "7 days",
		seats: "4 seats",
		countries: "10 countries",
		price: "$ 865",
		stars: "5.0",
		img: img2,
	},
	{
		title: "Tour “Three Capitals of Uzbekistan” for 6 days/nights",
		days: "7 days",
		seats: "4 seats",
		countries: "10 countries",
		price: "$ 865",
		stars: "5.0",
		img: img3,
	},
	{
		title: "Tour “Three Capitals of Uzbekistan” for 6 days/nights",
		days: "7 days",
		seats: "4 seats",
		countries: "10 countries",
		price: "$ 865",
		stars: "5.0",
		img: img1,
	},
	{
		title: "Tour “Three Capitals of Uzbekistan” for 6 days/nights",
		days: "7 days",
		seats: "4 seats",
		countries: "10 countries",
		price: "$ 865",
		stars: "5.0",
		img: img3,
	},
	{
		title: "Tour “Three Capitals of Uzbekistan” for 6 days/nights",
		days: "7 days",
		seats: "4 seats",
		countries: "10 countries",
		price: "$ 865",
		stars: "5.0",
		img: img2,
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

const SliderTours = () => {
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
		<motion.div
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			transition={{ duration: 0.5, delay: 0.3 }}
			className={classes.SliderTour}>
			<Slider {...settings}>
				{list.map((el, index) => (
					<SliderCard data={el} key={index} />
				))}
			</Slider>
		</motion.div>
	);
};

export default SliderTours;
