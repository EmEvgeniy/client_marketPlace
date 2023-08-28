import Container from "@/components/UI/container/Container";
import classes from "./salesTour.module.css";
import SalesTitle from "./salesTitle/SalesTitle";
import SalesSlider from "@/components/UI/salesSlider/SalesSlider";

const SalesTour = () => {
	return (
		<div className={classes.PopularTour}>
			<Container>
				<div className={classes.inner}>
					<SalesTitle />
					<SalesSlider />
				</div>
			</Container>
		</div>
	);
};

export default SalesTour;
