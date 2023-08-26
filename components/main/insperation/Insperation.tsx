import { FC } from "react";
import classes from "./insperation.module.css";
import Container from "@/components/UI/container/Container";

const Insperation: FC = () => {
	return (
		<div className={classes.Insperation}>
			<Container>
				<div className={classes.inner}>
					<h2>PLACES FOR INSPIRATION</h2>
					<p>A selection of popular destinations by type today</p>
				</div>
			</Container>
		</div>
	);
};

export default Insperation;
