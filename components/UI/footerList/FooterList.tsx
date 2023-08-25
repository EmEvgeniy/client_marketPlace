"use client";
import { FC } from "react";
import icon1 from "../../../public/icon1.svg";
import icon2 from "../../../public/icon2.svg";
import icon3 from "../../../public/icon3.svg";
import icon4 from "../../../public/icon4.svg";
import { useLand } from "@/store/store";
import Image from "next/image";
import classes from "./footerList.module.css";

const list = [
	{
		icon: icon1,
		title: "Secure payment",
		text: "Payment through a reliable system with flexible transfer system",
	},
	{
		icon: icon2,
		title: "Small groups",
		text: "Comfortable atmosphere with travelers like-minded people",
	},
	{
		icon: icon3,
		title: "Guaranteed Tours",
		text: "With us you will find more than 100.000 tours with guaranteed departure",
	},
	{
		icon: icon4,
		title: "Verified travel experts",
		text: "We work with 10.123 travel experts",
	},
];
const list2 = [
	{
		icon: icon1,
		title: "Безопасный платеж",
		text: "Оплата через надежную систему с гибкой системой переводов",
	},
	{
		icon: icon2,
		title: "Небольшие группы",
		text: "Комфортная атмосфера с путешественниками-единомышленниками человек",
	},
	{
		icon: icon3,
		title: "Гарантированные туры",
		text: "У нас вы найдете более 100 000 туров с гарантированным выездом",
	},
	{
		icon: icon4,
		title: "Проверенные тревел-эксперты",
		text: "Мы работаем с 10 123 экспертами по туризму",
	},
];
const FooterList: FC = () => {
	const lang = useLand((state) => state.lang);
	return (
		<div className={classes.list}>
			{lang == "RU"
				? list2.map((el, index) => (
						<div key={index} className={classes.list_item}>
							<Image
								src={el.icon}
								alt='icon'
								width={0}
								height={0}
								sizes='100vw'
								className={classes.icon}
							/>
							<div className={classes.text}>
								<p className={classes.text_title}>{el.title}</p>
								<p>{el.text}</p>
							</div>
						</div>
				  ))
				: list.map((el, index) => (
						<div key={index} className={classes.list_item}>
							<Image
								src={el.icon}
								alt='icon'
								width={0}
								height={0}
								sizes='100vw'
								className={classes.icon}
							/>
							<div className={classes.text}>
								<p className={classes.text_title}>{el.title}</p>
								<p>{el.text}</p>
							</div>
						</div>
				  ))}
		</div>
	);
};

export default FooterList;
