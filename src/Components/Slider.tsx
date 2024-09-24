import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Slider = () => {
  return (
    <>
      <Carousel
        className=""
        showArrows={true}
        selectedItem={0}
        showStatus={false}
      >
        <div className="">
          <img src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/collection.webp" />
        </div>
        <div className="">
          <img src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/at-home.webp" />
        </div>
        <div className="">
          <img src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/plants.webp" />
        </div>
        <div className="">
          <img src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/food.webp" />
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
