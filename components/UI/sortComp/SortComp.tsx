"use client";
import { useEffect, useRef, useState } from "react";
import classes from "./sortComp.module.css";

const SortComp = () => {
	const [active, setActive] = useState<boolean>(false);
	const rottRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const onClick: EventListener = (e: Event) => {
			if (rottRef.current?.contains(e.target as Node)) {
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
		<div className={classes.sort}>
			<span ref={rottRef} onClick={handleRootClick}>
				Sort by:
			</span>
			<div
				className={
					active
						? `${classes.sort_list} ${classes.active}`
						: `${classes.sort_list}`
				}>
				<p>Popularity</p>
				<p>Featured</p>
				<p>New</p>
				<p>Immediate</p>
				<p>Cheap first</p>
				<p>Dear ones first</p>
				<p>Discount</p>
			</div>
		</div>
	);
};

export default SortComp;
