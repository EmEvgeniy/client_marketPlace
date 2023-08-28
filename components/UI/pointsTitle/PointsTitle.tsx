"use client"
import { useLand } from "@/store/store";
import { FC } from "react";

const PointsTitle: FC = () => {
	const lang = useLand((state) => state.lang);
	const title = "HOW IS EVERYTHING SET?";
	const title2 = "КАК ВСЕ УСТАНОВЛЕНО?";
	return <h4>{lang == "EN" ? `${title}` : `${title2}`}</h4>;
};

export default PointsTitle;
