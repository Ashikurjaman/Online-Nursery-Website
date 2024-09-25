import React, { FormEvent, useState } from "react";
import { useAddCategoryMutation } from "../../Redux/Api/Api";

const CategoryUpdate = () => {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");

  const [addCategory, { isLoading, isSuccess, isError }] =
    useAddCategoryMutation();

  const handelSubmit = (e: FormEvent) => {
    // e.preventDefault();
    const form = e.target;
    const data = {
      title,
      imgUrl,
      description,
    };

    addCategory(data);

    form.reset();
  };
  return (
    <div>
      <button
        className="btn  text-slate-300 bg-[#384B70]"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Add Category
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
                  placeholder="Type here"
                  onChange={(e) => setTitle(e.target.value)}
                  className="input input-bordered input-sm w-full max-w-lg"
                />
              </div>

              <div className="flex flex-col flex-1">
                <label className="mb-3" htmlFor="">
                  Image url
                </label>
                <input
                  type="text"
                  onChange={(e) => setImgUrl(e.target.value)}
                  placeholder="Type here"
                  className="input input-bordered input-sm w-full max-w-lg"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="mb-3" htmlFor="">
                  Description
                </label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  className="textarea textarea-bordered"
                  placeholder="Description"
                ></textarea>
              </div>
              <button className="btn">Close</button>
              <button className="btn" type="submit">
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
              <th> Image</th>
              <th>Category Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
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
  );
};

export default CategoryUpdate;
