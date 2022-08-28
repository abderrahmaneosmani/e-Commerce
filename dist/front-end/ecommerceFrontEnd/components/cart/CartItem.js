"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const cart_slice_1 = require("../../features/shoppingCart/cart-slice");
const react_redux_1 = require("react-redux");
function CartItem({ item }) {
    const dispatch = (0, react_redux_1.useDispatch)();
    const remove = () => {
        dispatch((0, cart_slice_1.deleteItem)(item.id));
        dispatch((0, cart_slice_1.removeItem)(item.id));
    };
    const incrementQuantity = () => {
        dispatch((0, cart_slice_1.increaseQuantity)(item.productId));
    };
    const decrementQuantity = () => {
        dispatch((0, cart_slice_1.desIncreaseQuantity)(item.productId));
    };
    const totalPrice = +item.totalPrice * +item.quantity;
    return (<div>
      <li key={item.id} className="py-6 flex">
        <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
          <img src={item.image} alt={item.image} className="w-full h-full object-center object-cover"/>
        </div>

        <div className="ml-4 flex-1 flex flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href={item.href}>{item.name}</a>
              </h3>
              <p className="ml-4">{totalPrice}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{item.title}</p>
          </div>
          <div className="flex-1 flex items-end justify-between text-sm">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={incrementQuantity}>
              +
            </button>
            <p className="text-gray-500">Qty {+item.quantity}</p>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={decrementQuantity}>
              -
            </button>
            <div className="flex">
              <button onClick={remove} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>);
}
exports.default = CartItem;
//# sourceMappingURL=CartItem.js.map