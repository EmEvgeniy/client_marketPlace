"use client";
import { FC } from "react";
import classes from "./subComp.module.css";
import { useLand } from "@/store/store";

const SubComp: FC = () => {
	const lang = useLand((state) => state.lang);
	return (
		<form className={classes.form}>
			<p>
				{lang == "EN"
					? "We collect the best travel destinations from authors and send out 2 times a week"
					: "Собираем лучшие направления путешествий от авторов и рассылаем 2 раза в неделю."}
			</p>
			<input
				type='text'
				placeholder={lang == "EN" ? "Your name" : "Ваше имя"}
			/>
			<input
				type='email'
				placeholder={lang == "EN" ? "Your email" : "Ваш email"}
			/>
			<span>
				{lang == "EN"
					? "By clicking on the button, you consent to the processing of your personal data"
					: "Нажимая на кнопку, вы даете согласие на обработку ваших персональных данных"}
			</span>
			<button>{lang == "EN" ? "Subscribe" : "Подписаться"}</button>
		</form>
	);
};

export default SubComp;
