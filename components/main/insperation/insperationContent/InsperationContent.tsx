"use client";
import { FC } from "react";
import CardComp from "@/components/UI/cardComp/CardComp";
import classes from "./insperationContent.module.css";
import img1 from "../../../../public/image1.png";
import img2 from "../../../../public/image2.png";
import img3 from "../../../../public/image3.png";
import { StaticImageData } from "next/image";
import { useLand } from "@/store/store";

interface ListItem {
	img: StaticImageData;
	title: string;
	text: string;
}

const list: ListItem[] = [
	{
		img: img1,
		title: "Immerse yourself in the culture of the East",
		text: "🇺🇿 Uzbekistan",
	},
	{
		img: img2,
		title: "Feel the atmosphere of the mountains",
		text: "🗻 Mountain",
	},
	{
		img: img3,
		title: "Touch the nature of Kyrgyzstan",
		text: "🇰🇬 Kyrgyzstan",
	},
	{
		img: img1,
		title: "Immerse yourself in the culture of the East",
		text: "🇺🇿 Uzbekistan",
	},
	{
		img: img2,
		title: "Feel the atmosphere of the mountains",
		text: "🗻 Mountain",
	},
	{
		img: img3,
		title: "Touch the nature of Kyrgyzstan",
		text: "🇰🇬 Kyrgyzstan",
	},
];

const list2: ListItem[] = [
	{
		img: img1,
		title: "Погрузитесь в культуру Востока",
		text: "🇺🇿 Узбекистан",
	},
	{
		img: img2,
		title: "Почувствуй атмосферу гор",
		text: "🗻 Горы",
	},
	{
		img: img3,
		title: "Прикоснитесь к природе Кыргызстана",
		text: "🗻 Кыргызстан",
	},
	{
		img: img1,
		title: "Погрузитесь в культуру Востока",
		text: "🇺🇿 Узбекистан",
	},
	{
		img: img2,
		title: "Почувствуй атмосферу гор",
		text: "🗻 Горы",
	},
	{
		img: img3,
		title: "Прикоснитесь к природе Кыргызстана",
		text: "🗻 Кыргызстан",
	},
];

const InsperationContent: FC = () => {
	const lang = useLand((state) => state.lang);

	return (
		<div className={classes.InsperationContent}>
			<div className={classes.inner}>
				{lang == "EN"
					? list.map((el, index) => <CardComp key={index} data={el} />)
					: list2.map((el, index) => <CardComp key={index} data={el} />)}
			</div>
		</div>
	);
};

export default InsperationContent;
