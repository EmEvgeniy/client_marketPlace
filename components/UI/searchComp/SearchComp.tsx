"use client";
import { FC } from "react";
import classes from "./searchComp.module.css";
import { BsSearch, BsFillCalendarWeekFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

const SearchComp: FC = () => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.2 }}
				className={classes.searchComp}>
				<div className={classes.form}>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						transition={{ delay: 0.2, duration: 0.3 }}
						className={classes.input}>
						<input type='text' placeholder='Where you want?' />
						<BsSearch />
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						transition={{ delay: 0.3, duration: 0.4 }}
						className={classes.input}>
						<input type='text' placeholder='Months or dates' />
						<BsFillCalendarWeekFill />
					</motion.div>
					<motion.button
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						type='submit'>
						Search
					</motion.button>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default SearchComp;
