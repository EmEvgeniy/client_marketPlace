import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import classes from "./cardComp.module.css";

interface CardData {
	img: StaticImageData;
	title: string;
	text: string;
}

interface CardCompProps {
	data: CardData;
}

const CardComp: FC<CardCompProps> = ({ data }) => {
	return (
		<div className={classes.CardComp}>
			<Image
				src={data.img}
				alt='card'
				width={0}
				height={0}
				style={{ width: "100%", height: "100%" }}
			/>
			<p className={classes.title}>{data.title}</p>
			<p className={classes.text}>{data.text}</p>
		</div>
	);
};

export default CardComp;
