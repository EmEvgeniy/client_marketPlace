"use client";
import { FC } from "react";
import classes from "./titleComp.module.css";
import { useLand } from "@/store/store";
import { AnimatePresence, motion } from "framer-motion";

const list = {
	title: "PLACES FOR INSPIRATION",
	text: "A selection of popular destinations by type today",
};
const list2 = {
	title: "МЕСТА ДЛЯ ВДОХНОВЕНИЯ",
	text: "Подборка популярных сегодня направлений по типам",
};

const TitleComp: FC = () => {
	const lang = useLand((state) => state.lang);
	return (
		<AnimatePresence>
			<div className={classes.TitleComp}>
				<motion.h2
					initial={{ opacity: 0, x: "-100%" }}
					whileInView={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: "-100%" }}
					transition={{ delay: 0.3, duration: 0.3 }}>
					{lang == "EN" ? list.title : list2.title}
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, x: "-100%" }}
					whileInView={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: "-100%" }}
					transition={{ delay: 0.35, duration: 0.3 }}>
					{lang == "EN" ? list.text : list2.text}
				</motion.p>
			</div>
		</AnimatePresence>
	);
};

export default TitleComp;
