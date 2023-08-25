"use client";
import { useLand } from "@/store/store";
import Link from "next/link";
import { FC } from "react";
import classes from "./footerList2.module.css";

const list = [
	{ title: "Как забронировать тур", link: "/how_to_book_a_tour" },
	{ title: "Блог о путешествиях", link: "/travel_blog" },
	{ title: "Отзывы путешественников", link: "/traveler_reviews" },
	{ title: "Партнерская программа", link: "/affiliate_program" },
	{ title: "Стать автором тура", link: "/become_a_tour_author" },
	{ title: "Корпоративные туры", link: "/corporate_tours" },
	{ title: "Помощь", link: "/help" },
	{ title: "Работайте с нами", link: "/work_with_us" },
];
const list2 = [
	{ title: "How to book a tour", link: "/how_to_book_a_tour" },
	{ title: "Travel blog", link: "/travel_blog" },
	{ title: "Traveler reviews", link: "/traveler_reviews" },
	{ title: "Affiliate program", link: "/affiliate_program" },
	{ title: "Become a Tour Author", link: "/become_a_tour_author" },
	{ title: "Corporate tours", link: "/corporate_tours" },
	{ title: "Help", link: "/help" },
	{ title: "Work with us", link: "/work_with_us" },
];

const FooterList2: FC = () => {
	const lang = useLand((state) => state.lang);
	return (
		<div className={classes.list}>
			{lang === "EN"
				? list2.map((el, index) => (
						<Link key={index} href={el.link}>
							{el.title}
						</Link>
				  ))
				: list.map((el, index) => (
						<Link key={index} href={el.link}>
							{el.title}
						</Link>
				  ))}
		</div>
	);
};

export default FooterList2;
