import Container from "@/components/UI/container/Container";
import classes from "./login.module.css";
import { AiOutlineMail, AiFillEye } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from "next/link";

function Login() {
	return (
		<div className={classes.login}>
			<Container>
				<div className={classes.inner}>
					<p>Please sign in</p>
					<span>E-mail</span>
					<div className={classes.email}>
						<AiOutlineMail />
						<input type='email' placeholder='Your e-mail' />
					</div>
					<span>Password</span>
					<div className={classes.password}>
						<RiLockPasswordFill />
						<input type='password' placeholder='Your password' />
						<AiFillEye />
					</div>
					<button>SIGN IN</button>
					<Link href={"/forgotpassword"}>Forgot password?</Link>
					<div className={classes.text}>
						If this is your first time on the site, please fill out registration
						form.<Link href={"/registration"}> Register</Link>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Login;
