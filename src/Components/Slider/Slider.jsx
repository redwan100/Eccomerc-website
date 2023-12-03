// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import banner from "../../assets/banner1.jpg";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const banners = [banner, banner, banner, banner];

const Slider = () => {
  return (
    <div className="my-3">
      <Swiper
        navigation={true}
        autoplay={true}
        effect="fade"
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner}>
            <img
              src={banner}
              alt="banner"
              className="w-full h-fit  object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
