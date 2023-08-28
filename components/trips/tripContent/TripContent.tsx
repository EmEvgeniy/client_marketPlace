"use client";
import { useEffect, useRef, useState } from "react";
import classes from "./tripContent.module.css";
import img1 from "../../../public/Rectangle.png";
import img2 from "../../../public/Rectangle2.png";
import img3 from "../../../public/Rectangle3.png";

import TourCard from "@/components/UI/tourCard/TourCard";
import SearchInput from "@/components/UI/searchInput/SearchInput";
import SortComp from "@/components/UI/sortComp/SortComp";
import CalendarComp from "@/components/UI/calendarComp/CalendarComp";

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

const TripContent = () => {
	return (
		<div className={classes.tripContent}>
			<div className={classes.sort_wrap}>
				<div className={classes.top}>
					<SortComp />
				</div>
				<div className={classes.bottom}>
					<SearchInput ph='Where you want?' />
					<CalendarComp/>
				</div>
			</div>

			<div className={classes.inner}>
				{list.map((el, index) => (
					<TourCard data={el} key={index} />
				))}
			</div>
		</div>
	);
};

export default TripContent;
