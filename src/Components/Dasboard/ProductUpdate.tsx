const ProductUpdate = () => {
  return (
    <div>
      <div>
        <button
          className="btn"
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
              <form method="dialog" className="mx-auto space-y-3">
                {/* if there is a button in form, it will close the modal */}
                <div className="flex flex-col flex-1">
                  <label htmlFor="">Title</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="">Category Name</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="">Price</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="">Quantity</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="">Image url</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="">Rating</label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <button className="btn">Close</button>
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
                    <button>Edit</button>
                  </tr>
                  <tr>
                    <button>Delete</button>
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
