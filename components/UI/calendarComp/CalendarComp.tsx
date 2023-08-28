"use client";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import classes from "./calendarComp.module.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

const CalendarComp = () => {
	const [value, setValue] = useState(null);
	return (
		<div className={classes.calendar}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DemoContainer components={["DatePicker"]}>
					<DatePicker
						value={value}
						onChange={(newValue) => setValue(newValue)}
					/>
				</DemoContainer>
			</LocalizationProvider>
		</div>
	);
};

export default CalendarComp;
