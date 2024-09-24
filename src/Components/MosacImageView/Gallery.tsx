import "react-photo-album/rows.css";

import img1 from "../../assets/leaves-19364_640.jpg";
import img2 from "../../assets/img2.jpg";

const Gallery = () => {
  return (
    <div className="w-9/12 mx-auto mt-20">
      <h2 className="text-center text-2xl mb-10 font-bold ">
        <span className="border-b-4 border-[#507687] p-2">Image Gallery</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://gardengoodsdirect.com/cdn/shop/files/american-boxwood-11461712248896_280x318_crop_center.jpg"
              alt=""
            />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={img2} alt="" />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://treesdirect.co.uk/app/uploads/2022/04/japanese-maple-400x400.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://cdn.pixabay.com/photo/2023/06/21/00/33/plant-8078147_1280.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://gardengoodsdirect.com/cdn/shop/files/fiddle-leaf-fig-bushes-15623985496106_280x318_crop_center.jpg?v=1695469574"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/Spice-Plants.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.thetreecenter.com/c/uploads/2015/04/Skyrocket_Juniper-1-jpg-340x453.avif"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/Kokedama-Plants.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://www.thetreecenter.com/c/uploads/2021/01/Daubs_Frosted_Juniper_Tree_Form_3G_01-340x453.avif"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/Spice-Plants.jpg"
              alt=""
            />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={img1} alt="" />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://cdn.pixabay.com/photo/2018/07/24/21/34/plums-3560078_960_720.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
