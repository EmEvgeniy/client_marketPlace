import classes from "./theHeader.module.css";
import Container from "../UI/container/Container";
import Logo from "../UI/logo/Logo";
import Nav from "../UI/nav/Nav";
import Auth from "../UI/auth/Auth";
import Lang from "../UI/lang/Lang";
import Currency from "../UI/currency/Currency";
import AdaptiveMenu from "../UI/adaptiveMenu/AdaptiveMenu";

const TheHeader = () => {
	return (
		<header className={classes.header}>
			<Container>
				<div className={classes.inner}>
					<div className={classes.burger}>
						<AdaptiveMenu />
					</div>
					<Logo />
					<nav>
						<Nav />
					</nav>
					<div className={classes.interactive}>
						<Auth />
						<Lang />
						<Currency />
					</div>
				</div>
			</Container>
		</header>
	);
};

export default TheHeader;
