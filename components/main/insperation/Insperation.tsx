import { FC } from "react";
import classes from "./insperation.module.css";
import Container from "@/components/UI/container/Container";
import TitleComp from "@/components/UI/titleComp/TitleComp";
import InsperationContent from "./insperationContent/InsperationContent";

const Insperation: FC = () => {
	return (
		<div className={classes.Insperation}>
			<Container>
				<div className={classes.inner}>
					<TitleComp />
					<InsperationContent />
				</div>
			</Container>
		</div>
	);
};

export default Insperation;
