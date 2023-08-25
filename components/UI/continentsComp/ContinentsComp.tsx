"use client";
import { useLand } from "@/store/store";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import classes from "./continentsComp.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

const list = [
	{ title: "Eurasia", link: "/eurasia" },
	{ title: "Africa", link: "/africa" },
	{ title: "North America", link: "/north_america" },
	{ title: "Australia", link: "/australia" },
	{ title: "Antarctica", link: "/antarctica" },
	{ title: "Antarctica", link: "/antarctica" },
	{ title: "Antarctica", link: "/antarctica" },
];

const list2 = [
	{ title: "Евразия", link: "/eurasia" },
	{ title: "Африка", link: "/africa" },
	{ title: "Северная Америка", link: "/north_america" },
	{ title: "Австралия", link: "/australia" },
	{ title: "Антарктика", link: "/antarctica" },
	{ title: "Антарктика", link: "/antarctica" },
	{ title: "Антарктика", link: "/antarctica" },
];

const ContinentsComp: FC = () => {
	const lang = useLand((state) => state.lang);
	const [num, setNum] = useState<boolean>(false);
	const rtoRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const onClick: EventListener = (e: Event) => {
			if (rtoRef.current?.contains(e.target as Node)) {
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
				ref={rtoRef}
				onClick={handleRootClick}>
				<MdKeyboardArrowDown />
			</motion.span>
		</div>
	);
};

export default ContinentsComp;
