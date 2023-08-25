"use client";
import { useLand } from "@/store/store";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import classes from "./countryComp.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

const list = [
	{ title: "Uzbekistan", link: "/uzbekistan" },
	{ title: "Kazakhstan", link: "/kazakhstan" },
	{ title: "Sweden", link: "/sweden" },
	{ title: "Russia", link: "/russia" },
	{ title: "Tajikistan", link: "/tajikistan" },
	{ title: "Tajikistan", link: "/tajikistan" },
	{ title: "Tajikistan", link: "/tajikistan" },
	{ title: "Tajikistan", link: "/tajikistan" },
];

const list2 = [
	{ title: "Узбекистан", link: "/uzbekistan" },
	{ title: "Казахстан", link: "/kazakhstan" },
	{ title: "Швеция", link: "/sweden" },
	{ title: "Россия", link: "/russia" },
	{ title: "Таджикистан", link: "/tajikistan" },
	{ title: "Таджикистан", link: "/tajikistan" },
	{ title: "Таджикистан", link: "/tajikistan" },
	{ title: "Таджикистан", link: "/tajikistan" },
	{ title: "Таджикистан", link: "/tajikistan" },
];

const CountryComp: FC = () => {
	const lang = useLand((state) => state.lang);
	const [num, setNum] = useState<boolean>(false);
	const rtooRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const onClick: EventListener = (e: Event) => {
			if (rtooRef.current?.contains(e.target as Node)) {
				setNum(true);
			} else {
				setNum(false);
			}
		};

		document.addEventListener("click", onClick);
		return () => {
			document.removeEventListener("click", onClick);
		};
	}, []);

	const handleRootClick = () => {
		setNum(true);
	};

	return (
		<div className={classes.tourType}>
			<p>{lang === "EN" ? "Tours by type:" : "Туры по типу"}</p>
			<motion.div
				initial={{ height: "110px", overflow: "hidden" }}
				animate={
					num
						? { height: "auto", overflow: "hidden" }
						: { height: "110px", overflow: "hidden" }
				}
				className={classes.list}>
				{lang === "EN"
					? list.map((el, index) => (
							<Link href={el.link} key={index}>
								{el.title}
							</Link>
					  ))
					: list2.map((el, index) => (
							<Link href={el.link} key={index}>
								{el.title}
							</Link>
					  ))}
			</motion.div>
			<motion.span
				initial={{ transform: "rotate(0deg)" }}
				animate={
					num ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }
				}
				ref={rtooRef}
				onClick={handleRootClick}>
				<MdKeyboardArrowDown />
			</motion.span>
		</div>
	);
};

export default CountryComp;
