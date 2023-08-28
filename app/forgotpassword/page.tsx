import Container from "@/components/UI/container/Container";
import classes from "./forgotPassword.module.css";
import { AiOutlineMail, AiFillEye } from "react-icons/ai";
import Link from "next/link";

const ForgotPassword = () => {
	return (
		<div className={classes.forgotPassword}>
			<Container>
				<div className={classes.inner}>
					<p>FORGOT YOUR PASSWORD? LET`S RESTORE</p>
					<span>E-mail</span>
					<div className={classes.email}>
						<AiOutlineMail />
						<input type='email' placeholder='Your e-mail' />
					</div>
					<button>SEND</button>
					<div className={classes.text}>
						Back to <Link href={"/login"}> login page</Link>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default ForgotPassword;
