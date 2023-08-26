"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import img1 from "../../../public/img1.png";
import img2 from "../../../public/img2.png";
import img3 from "../../../public/img3.png";
import Image from "next/image";
import BenefitsComp from "../benefitsComp/BenefitsComp";

export default function SliderBackground() {
	return (
		<>
			<Swiper
				spaceBetween={0}
				effect={"fade"}
				autoplay={{ delay: 5000 }}
				pagination={{
					clickable: true,
				}}
				modules={[EffectFade, Pagination, Autoplay]}
				className='custom-swiper-container'>
				<SwiperSlide>
					<Image
						src={img1}
						width={0}
						height={0}
						alt='background'
						style={{ width: "100%", height: "100%" }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={img2}
						width={0}
						height={0}
						alt='background'
						style={{ width: "100%", height: "100%" }}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={img3}
						width={0}
						height={0}
						alt='background'
						style={{ width: "100%", height: "100%" }}
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
