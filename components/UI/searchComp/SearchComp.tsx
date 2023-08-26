import { FC } from "react";
import classes from "./searchComp.module.css";
import { BsSearch, BsFillCalendarWeekFill } from "react-icons/bs";

const SearchComp: FC = () => {
	return (
		<div className={classes.searchComp}>
			<div className={classes.form}>
				<div className={classes.input}>
					<input type='text' placeholder='Where you want?' />
					<BsSearch />
				</div>
				<div className={classes.input}>
					<input type='text' placeholder='Months or dates' />
					<BsFillCalendarWeekFill />
				</div>
				<button type='submit'>Search</button>
			</div>
		</div>
	);
};

export default SearchComp;
