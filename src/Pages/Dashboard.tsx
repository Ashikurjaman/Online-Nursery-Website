import { useState } from "react";
import CategoryUpdate from "../Components/Dasboard/CategoryUpdate";
import ProductUpdate from "../Components/Dasboard/ProductUpdate";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState<string>("product"); // Default to category

  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex justify-center ">
        <div className="w-full p-4">
          {activeSection === "category" && (
            <div>
              <h2 className="text-2xl font-bold text-center">Category List</h2>
              <CategoryUpdate />
            </div>
          )}
          {activeSection === "product" && (
            <div>
              <h2 className="text-2xl font-bold text-center">Product List</h2>
              <ProductUpdate />
            </div>
          )}
        </div>

        {/* <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          // className="drawer-overlay"
        ></label>

        <ul className="menu bg-base-200 text-base-content min-h-full w-40 mt-16 p-4">
          <h2 className="text-2xl font-bold ">Dashboard</h2>
          {/* Sidebar content here */}
          <li>
            <a onClick={() => setActiveSection("product")}>Product</a>
          </li>
          <li>
            <a onClick={() => setActiveSection("category")}>Category</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
