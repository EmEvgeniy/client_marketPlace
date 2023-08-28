import Container from "@/components/UI/container/Container";
import classes from "./trips.module.css";
import FilterComp from "@/components/trips/filterComp/FilterComp";
import TripContent from "@/components/trips/tripContent/TripContent";

const Trips = () => {
	return (
		<div className={classes.Trips}>
			<Container>
				<div className={classes.inner}>
					<FilterComp />
					<TripContent/>
				</div>
			</Container>
		</div>
	);
};

export default Trips;
