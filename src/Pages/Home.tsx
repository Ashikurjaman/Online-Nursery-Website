import Category from "../Components/Layouts/Category/Category";
import Gallery from "../Components/MosacImageView/Gallery";
import Slider from "../Components/Slider";
import Products from "./Products";

const Home = () => {
  return (
    <div className="">
      <Slider />
      <Products />
      <Category />
      <Gallery />
    </div>
  );
};

export default Home;
