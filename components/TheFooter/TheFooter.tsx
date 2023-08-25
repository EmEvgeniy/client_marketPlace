import Link from "next/link";
import Container from "../UI/container/Container";
import classes from "./theFooter.module.css";
import FooterList from "../UI/footerList/FooterList";
import FooterList2 from "../UI/footerList2/FooterList2";
import SubComp from "../UI/subComp/SubComp";
import TourType from "../UI/tourType/TourType";
import ContinentsComp from "../UI/continentsComp/ContinentsComp";
import CountryComp from "../UI/countryComp/CountryComp";

export default function TheFooter() {
	return (
		<footer className={classes.footer}>
			<Container>
				<div className={classes.inner}>
					<div className={classes.top}>
						<div className={classes.logo}>
							<Link href={"/"}>Logo</Link>
						</div>
						<p>Author`s tours - a new approach to unexplored travel routes</p>
					</div>
					<div className={classes.middle}>
						<FooterList />
						<FooterList2 />
						<SubComp />
					</div>
				</div>
			</Container>
			<div className={classes.rights}>
				<Container>
					<div className={classes.right_inner}>
						<p>
							© 2023 minzifatravel.com All rights reserved |{" "}
							<Link href={"/public_offer"} style={{ fontWeight: 700 }}>
								Public offer
							</Link>{" "}
							|{" "}
							<Link href={"/privacy_policy"} style={{ fontWeight: 700 }}>
								Privacy Policy
							</Link>
						</p>
					</div>
				</Container>
			</div>
			<div className={classes.bottom}>
				<Container>
					<div className={classes.bottom_inner}>
						<TourType />
						<ContinentsComp />
						<CountryComp />
					</div>
				</Container>
			</div>
		</footer>
	);
}
