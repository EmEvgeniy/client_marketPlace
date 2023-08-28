"use client";
import { FC } from "react";
import classes from "./benefitsComp.module.css";
import icon1 from "../../../public/4.svg";
import icon2 from "../../../public/5.svg";
import icon3 from "../../../public/6.svg";
import icon4 from "../../../public/7.svg";
import { useLand } from "@/store/store";
import Image from "next/image";
import Container from "../container/Container";
import { motion } from "framer-motion";

const list = [
	{
		title: "Secure payment",
		icon: icon1,
		text: "Payment through a reliable system with flexible transfer system",
	},
	{
		title: "Guaranteed Tours",
		icon: icon2,
		text: "With us you will find more than 100.000 tours with guaranteed departure",
	},
	{
		title: "Small groups",
		icon: icon3,
		text: "Comfortable atmosphere with travelers like-minded people",
	},
	{
		title: "Verified travel experts",
		icon: icon4,
		text: "We work with 10.123 travel experts",
	},
];
const list2 = [
	{
		title: "Безопасный платеж",
		icon: icon1,
		text: "Оплата через надежную систему с гибкой системой переводов",
	},
	{
		title: "Гарантированные туры",
		icon: icon2,
		text: "У нас вы найдете более 100.000 туров с гарантированным выездом",
	},
	{
		title: "Малые группы",
		icon: icon3,
		text: "Комфортная атмосфера с путешественниками-единомышленниками",
	},
	{
		title: "Проверенные эксперты по туризму",
		icon: icon4,
		text: "Мы работаем с 10.123 экспертами по путешествиям",
	},
];

const BenefitsComp: FC = () => {
	const lang = useLand((state) => state.lang);
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0 }}
			transition={{ delay: 0.5, duration: 0.5 }}
			className={classes.benefits}>
			<Container>
				<div className={classes.inner}>
					{lang == "EN"
						? list.map((el, index) => (
								<div key={index} className={classes.inner_item}>
									<Image src={el.icon} alt='icon' width={50} height={50} />
									<p className={classes.title}>{el.title}</p>
									<p className={classes.text}>{el.text}</p>
								</div>
						  ))
						: list2.map((el, index) => (
								<div key={index} className={classes.inner_item}>
									<Image src={el.icon} alt='icon' width={50} height={50} />
									<p className={classes.title}>{el.title}</p>
									<p className={classes.text}>{el.text}</p>
								</div>
						  ))}
				</div>
			</Container>
		</motion.div>
	);
};

export default BenefitsComp;
