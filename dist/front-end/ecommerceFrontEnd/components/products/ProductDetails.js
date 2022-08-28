"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const cart_slice_1 = require("../../features/shoppingCart/cart-slice");
const toolkit_1 = require("@reduxjs/toolkit");
const getUserId_1 = require("../../utils/getUserId");
const Rating_1 = require("./Rating");
function ProductDetails({ product }) {
    const dispatch = (0, react_redux_1.useDispatch)();
    const addProduct = async () => {
        const { id, price, image } = product;
        let userId = "null";
        const myUserId = (0, getUserId_1.default)();
        if (userId && userId !== null) {
            userId = myUserId;
        }
        const cartItem = {
            productId: id,
            totalPrice: price + "",
            image,
            userId,
        };
        const res = await dispatch((0, cart_slice_1.saveItem)(cartItem));
        const result = await (0, toolkit_1.unwrapResult)(res);
        dispatch((0, cart_slice_1.addToCart)(result));
    };
    return (<>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg p-8" src={product.image} alt={product.image}/>
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                {product.title}
              </h3>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <Rating_1.default count={product.rating}/>

              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {product.rating}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              <a onClick={addProduct} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>);
}
exports.default = ProductDetails;
//# sourceMappingURL=ProductDetails.js.map