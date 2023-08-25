"use client";
import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { useCurrency } from "@/store/store";
import { FaDollarSign } from "react-icons/fa";
import { BiRuble } from "react-icons/bi";
import classes from "./currency.module.css";

const Currency: FC = () => {
	const [active, setActive] = useState(false);
	const { currency, currencyMenu, changeCurrency } = useCurrency();
	const rotRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const onClick: EventListener = (e: Event) => {
			if (rotRef.current?.contains(e.target as Node)) {
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
			<div className={classes.inner} ref={rotRef} onClick={handleRootClick}>
				{currency === "RUB" ? <BiRuble /> : <FaDollarSign />}
				<span>{currency}</span>
			</div>
			<div className={`${classes.list} ${active ? classes.active : ""}`}>
				{currencyMenu
					.filter((el) => el !== currency)
					.map((el, index) => (
						<div
							key={index}
							className={classes.list_item}
							onClick={() => changeCurrency(el)}>
							{el === "RUB" ? <BiRuble /> : <FaDollarSign />}
							<span>{el}</span>
						</div>
					))}
			</div>
		</div>
	);
};

export default Currency;
