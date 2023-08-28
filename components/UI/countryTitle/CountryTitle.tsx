"use client";
import { FC } from "react";
import classes from "./countryTitle.module.css";
import { useLand } from "@/store/store";

const CountryTitle: FC = () => {
	const lang = useLand((state) => state.lang);
	return (
		<div className={classes.CountryTitle}>
			<h5>
				{lang == "EN" ? "WHERE CAN YOU GO NOW?" : "КУДА МОЖНО ПОЙТИ СЕЙЧАС?"}
			</h5>
			<p>
				{lang == "EN"
					? "A selection of popular destinations by type today"
					: "Подборка популярных сегодня направлений по типам"}
			</p>
		</div>
	);
};

export default CountryTitle;
