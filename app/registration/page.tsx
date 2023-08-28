"use client";
import Container from "@/components/UI/container/Container";
import {
	Button,
	FormControlLabel,
	Radio,
	RadioGroup,
	TextField,
	ThemeProvider,
	createTheme,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import classes from "./singUp.module.css";
import { useForm } from "react-hook-form";

const theme = createTheme({
	palette: {
		primary: {
			main: "#FFCB66",
			light: "#FFCB66",
			dark: "#FFCB66",
			contrastText: "#000",
		},
	},
});

const SingUP = () => {
	// const registrationStatus = useSelector((state) => state.regist.value);
	// const [postRegistrationForm] = useGetRegistrationMutation();
	const { register, handleSubmit } = useForm({
		mode: "onBlur",
	});
	const onSubmited = async (e: Event, data: object) => {
		// if (data) {
		// 	await postRegistrationForm(data)
		// 		.then((res) => console.log(res.data))
		// 		.catch((e) => console.log(e));
		// }
		console.log(data);
	};
	return (
		<div className={classes.SignUp}>
			<Container>
				<div className={classes.inner}>
					<form onSubmit={handleSubmit(onSubmited)} className={classes.form}>
						<h2>START A NEW JOURNEY</h2>
						<div className={classes.top}>
							<ThemeProvider theme={theme}>
								<RadioGroup
									aria-labelledby='demo-radio-buttons-group-label'
									defaultValue='1'
									row
									name='radio-buttons-group'
									sx={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										width: "100%",
									}}>
									<div className={classes.checkbox_wrapper}>
										<div className={classes.checkbox}>
											<FormControlLabel
												value='3'
												control={
													<Radio
														{...register("user_type", {
															required: "Поле обязателно к заполнению",
														})}
													/>
												}
												label='I am a traveler'
												sx={{ whiteSpace: "nowrap" }}
											/>
										</div>
										<div className={classes.checkbox}>
											<FormControlLabel
												value='2'
												control={
													<Radio
														{...register("user_type", {
															required: "Поле обязателно к заполнению",
														})}
													/>
												}
												label='I am a travel expert'
												sx={{ whiteSpace: "nowrap" }}
											/>
										</div>
									</div>
								</RadioGroup>
							</ThemeProvider>
						</div>
						<div className={classes.info}>
							<ThemeProvider theme={theme}>
								<TextField
									{...register("name", {
										required: "Поле обязателно к заполнению",
									})}
									sx={{ width: "100%" }}
									label='Your first name'
									type='text'
									variant='outlined'
									size='small'
								/>
								<TextField
									{...register("surname", {
										required: "Поле обязателно к заполнению",
									})}
									sx={{ width: "100%" }}
									type='text'
									label='Your second name'
									variant='outlined'
									size='small'
								/>
							</ThemeProvider>
						</div>
						<span>
							Name and surname must match the data in the identity card
						</span>
						<ThemeProvider theme={theme}>
							<TextField
								{...register("email", {
									required: "Поле обязателно к заполнению",
									pattern:
										/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								})}
								sx={{ width: "100%", my: "15px" }}
								label='E-MAIL'
								type='email'
								variant='outlined'
								size='small'
							/>
							<span>We will send a message to your e-mail to confirm it.</span>
							<TextField
								{...register("phone", {
									required: "Поле обязателно к заполнению",
								})}
								sx={{ width: "100%", my: "15px" }}
								label='+998 (90) 123 45 67'
								type='number'
								variant='outlined'
								size='small'
							/>

							<TextField
								{...register("password", {
									required: "Поле обязателно к заполнению",
								})}
								sx={{ width: "100%", my: "15px" }}
								label='Create new password'
								type='password'
								variant='outlined'
								size='small'
							/>

							<TextField
								{...register("password_confirmation", {
									required: "Поле обязателно к заполнению",
								})}
								sx={{ width: "100%", my: "15px" }}
								label='Confirm the password'
								type='password'
								variant='outlined'
								size='small'
							/>
						</ThemeProvider>
						<div className={classes.politic}>
							<Link href={"/privacy_policy"}>
								<p>
									By clicking on the button you consent to the processing of
									personal data and agree to the Privacy Policy
								</p>
							</Link>
						</div>
						<ThemeProvider theme={theme}>
							<Button type='submit' variant='contained' className={classes.btn}>
								Согласиться и продолжить
							</Button>
						</ThemeProvider>
					</form>
				</div>
			</Container>
		</div>
	);
};

export default SingUP;
