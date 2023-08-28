"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useLand } from "@/store/store";

const TitlePopular = () => {
	const lang = useLand((state) => state.lang);
	const title = "POPULAR TOURS";
	const title2 = "ПОПУЛЯРНЫЕ ТУРЫ";
	return (
		<AnimatePresence>
			<motion.h3
				initial={{ opacity: 0, x: "-100%" }}
				whileInView={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: "-100%" }}
				transition={{duration:.5,delay: .4}}
				>
				{lang == "EN" ? `${title}` : `${title2}`}
			</motion.h3>
		</AnimatePresence>
	);
};

export default TitlePopular;
