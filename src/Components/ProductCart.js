import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty } from "../Redux/Reducers/cartSlice";
import { Link } from "react-router-dom";

export default function ProductCart() {
  const dispatch = useDispatch();

  const AllProducts = useSelector((state) => state.cart.cart);
  console.log(AllProducts);

  return (
    <div class="container mx-auto mt-10">
      <div class="flex shadow-md my-10">
        <div class="w-3/4 bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Shopping Cart</h1>
            <h2 class="font-semibold text-2xl">{AllProducts?.length} Items</h2>
          </div>
          <div class="flex mt-10 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>

          {AllProducts &&
            AllProducts.map((item) => (
              <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div class="flex w-2/5">
                  <div class="w-20">
                    <img
                      class="h-24"
                      src={item.img[1]}
                      // src="https://drive.google.com/uc?id=1vXhvO9HoljNolvAXLwtw_qX3WNZ0m75v"
                      alt=""
                    />
                  </div>
                  <div class="flex flex-col justify-between ml-4 flex-grow">
                    <span class="font-bold text-sm">Airpods</span>
                    <span class="text-red-500 text-xs"></span>
                    <a
                      href="#"
                      class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                    >
                      Remove
                    </a>
                  </div>
                </div>
                <div class="flex justify-center w-1/5">
                  <svg
                    onClick={() => dispatch(decreaseQty(item))}
                    class="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                  <input
                    class="mx-2 border text-center w-8"
                    type="text"
                    value={item.qty}
                  />

                  <svg
                    onClick={() => dispatch(increaseQty(item))}
                    class="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span class="text-center w-1/5 font-semibold text-sm">
                  ${item.price}
                </span>
                <span class="text-center w-1/5 font-semibold text-sm">
                  ${item.price * item.qty}
                </span>
              </div>
            ))}

          <Link to="/" class="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg
              class="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>

          <Link to="/checkout" class="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg
              className="fill-current ml-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059C339.792 183.911 313.941 194.619 313.941 216z" />
            </svg>
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
