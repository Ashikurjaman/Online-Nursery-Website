import { FormEvent, useState } from "react";
import { useAddProductsMutation } from "../../Redux/Api/Api";

const ProductUpdate = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setprice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imgUrl, setImg] = useState("");
  const [rating, setRating] = useState("");
  const [addProduct, { isLoading, isSuccess, isError }] =
    useAddProductsMutation();
  const handelSubmit = (e: FormEvent) => {
    // e.preventDefault();
    const form = e.target;
    const data = {
      title,
      category,
      price,
      quantity,
      imgUrl,
      rating,
    };
    addProduct(data);

    form.reset();
  };
  return (
    <div>
      <div>
        <button
          className="btn  text-slate-300 bg-[#384B70]"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Add Product
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form
                onSubmit={handelSubmit}
                method="dialog"
                className="mx-auto space-y-3"
              >
                {/* if there is a button in form, it will close the modal */}
                <div className="flex flex-col flex-1">
                  <label className="mb-3" htmlFor="">
                    Title
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-full max-w-lg"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label className="mb-3" htmlFor="">
                    Category Name
                  </label>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option disabled selected></option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
                <div className="flex flex-col flex-1">
                  <label className="mb-3" htmlFor="">
                    Price
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setprice(e.target.value)}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-full max-w-lg"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label className="mb-3" htmlFor="">
                    Quantity
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-full max-w-lg"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label className="mb-3" htmlFor="">
                    Image url
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setImg(e.target.value)}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-full max-w-lg"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label className="mb-3" htmlFor="">
                    Rating
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setRating(e.target.value)}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-full max-w-lg"
                  />
                </div>
                <button className="btn text-slate-300 bg-[#384B70]">
                  Close
                </button>
                <button
                  className="btn text-slate-300 bg-[#384B70]"
                  type="submit"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </dialog>
        <div className="pl-7">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td></td>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td></td>
                <td className="flex gap-3">
                  <tr>
                    <button className="btn text-slate-300 bg-[#384B70]">
                      Edit
                    </button>
                  </tr>
                  <tr>
                    <button className="btn text-slate-300 bg-[#384B70]">
                      Delete
                    </button>
                  </tr>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="join mt-10">
          <div className=" ml-96 ">
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="1"
              defaultChecked
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="2"
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="3"
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
