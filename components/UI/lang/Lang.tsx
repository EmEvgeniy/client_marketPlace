"use client";
import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { useLand } from "@/store/store";
import classes from "./lang.module.css";

const Lang: FC = () => {
	const [active, setActive] = useState(false);
	const lang = useLand((state) => state.lang);
	const langs = useLand((state) => state.langs);
	const changeLang = useLand((state) => state.changeLang);
	const rootRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const onClick: EventListener = (e: Event) => {
			if (rootRef.current?.contains(e.target as Node)) {
				setActive(true);
			} else {
				setActive(false);
			}
		};

		document.addEventListener("click", onClick);
		return () => {
			document.removeEventListener("click", onClick);
		};
	}, []);

	const handleRootClick = () => {
		setActive(true);
	};

	return (
		<div className={classes.lang}>
			<div className={classes.inner} ref={rootRef} onClick={handleRootClick}>
				<BsGlobe />
				<span>{lang}</span>
			</div>
			<div className={`${classes.list} ${active ? classes.active : ""}`}>
				{langs
					.filter((el) => el !== lang)
					.map((el, index) => (
						<div
							key={index}
							className={classes.list_item}
							onClick={() => changeLang(el)}>
							<BsGlobe />
							<span>{el}</span>
						</div>
					))}
			</div>
		</div>
	);
};

export default Lang;
