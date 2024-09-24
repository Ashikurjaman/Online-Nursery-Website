import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../../assets/Flower-Plants.jpg";
const Category = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-10 ">
        {" "}
        <span className="border-b-4 border-[#507687] p-2 ">Category</span>
      </h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <p className="text-xl text-center">Flower Plants</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/Fruits-Plants.webp"
            alt=""
          />
          <p className="text-xl text-center">Fruits Plants</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/Bonsai-Plants.webp"
            alt=""
          />
          <p className="text-xl text-center">Bonsai Plants</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/Bamboo-Plants.webp"
            alt=""
          />
          <p className="text-xl text-center">Bamboo Plants</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/Cactus-Plants.webp"
            alt=""
          />
          <p className="text-xl text-center">Cactus Plants</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/Rose-Plants.webp"
            alt=""
          />
          <p className="text-xl text-center">Rose Plants</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/Fertilizers-2.webp"
            alt=""
          />
          <p className="text-xl text-center">Plants Pot</p>
        </SwiperSlide>
        <SwiperSlide className="mb-10 ">
          <img
            src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/Fertilizers.webp"
            alt=""
          />
          <p className="text-xl text-center">Fertilizers</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
