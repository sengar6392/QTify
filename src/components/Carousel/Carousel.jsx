import React from "react";
import { Navigation, Pagination, Scrollbar, A11y,Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Box, Button } from "@mui/material";
import CustomCard from "../card/CustomCard";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";

const Carousel = ({ slides,renderComponent }) => {
  return (
    <Box p={2} display={"flex"} justifyContent={"center"}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Controller]}
        spaceBetween={2}
        slidesPerView={6}
        style={{paddingLeft:"10px"}}
        allowTouchMove
      >
        <CarouselLeftNavigation/>
        <CarouselRightNavigation/>

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <CustomCard cardData={slide} data={slides} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
