"use client";
import { useLand } from "@/store/store";
import Link from "next/link";

const menu1 = [
	{ title: "Trips", link: "/trips" },
	{ title: "Tour organizers", link: "/tour_organizers" },
	{ title: "Help", link: "/help" },
];
const menu2 = [
	{ title: "Путешествия", link: "/trips" },
	{ title: "Организаторы туров", link: "/tour_organizers" },
	{ title: "Помощь", link: "/help" },
];
const Nav = () => {
	const lang = useLand((state) => state.lang);
	return (
		<>
			{lang === "EN"
				? menu1.map((el, index) => (
						<Link key={index} href={el.link}>
							{el.title}
						</Link>
				  ))
				: menu2.map((el, index) => (
						<Link key={index} href={el.link}>
							{el.title}
						</Link>
				  ))}
		</>
	);
};

export default Nav;
