"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const outline_1 = require("@heroicons/react/outline");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const link_1 = require("next/link");
const Setting_1 = require("./Setting");
const auth_1 = require("../../../features/auth/auth");
const store_1 = require("../../../app/store");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const Search_1 = require("./Search");
const getUserId_1 = require("../../../utils/getUserId");
const react_redux_1 = require("react-redux");
const cart_slice_1 = require("../../../features/shoppingCart/cart-slice");
const ListCart_1 = require("../../cart/ListCart");
function Navbar() {
    const [mobileOpen, setMobileOpen] = (0, react_1.useState)(false);
    const authenticated = (0, store_1.useSelector)(auth_1.isUserAuthenticatedSelector);
    const shoppingCart = (0, store_1.useSelector)((state) => state.cartItem);
    const count = shoppingCart.cartItems.length;
    const [open, setOpen] = (0, react_1.useState)(false);
    const handleOpen = () => setOpen(!open);
    const userId = (0, getUserId_1.default)();
    const dipatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        if (userId && userId !== null) {
            dipatch((0, cart_slice_1.getAllCartItems)(userId));
        }
    }, []);
    const cart = (0, store_1.useSelector)((state) => state.cartItem);
    const getTotalPrice = () => {
        return cart.cartItems.reduce((accumulator, item) => accumulator + item.quantity * item.totalPrice, 0);
    };
    return (<div className="z-0 flex items-center h-20 px-6 justify-between border-b border-gray-300 bg-cyan-600 text-white relative ">
      <Search_1.default />

      <div className=" flex-1 ml-10 items-center hidden lg:flex">
        <link_1.default href="/">
          <a>
            <div className="h-8 mx-4">
              <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"/>
            </div>
          </a>
        </link_1.default>
      </div>

      <div className="items-center hidden lg:flex">
        {!authenticated && (<>
            <link_1.default href="/auth/login">
              <a className="px-4">Sign In</a>
            </link_1.default>
            <link_1.default href="/auth/register">
              <a className="px-4">Register</a>
            </link_1.default>
          </>)}
        <div className="ml-4 flow-root lg:ml-6">
          <a className="group -m-2 p-2 flex items-center ">
            <outline_1.ShoppingBagIcon className="flex-shrink-0 h-6 w-6 text-white-400 group-hover:text-gray-500" aria-hidden="true" onClick={handleOpen}/>
            <span className="ml-1 text-sm font-medium text-white-700 group-hover:text-gray-800">
              {count}
            </span>
            <ListCart_1.default products={cart.cartItems} totalPrice={getTotalPrice()} open={open} handleOpen={handleOpen}/>
          </a>
        </div>
        {authenticated && <Setting_1.default />}
      </div>
      <react_fontawesome_1.FontAwesomeIcon icon={mobileOpen ? free_solid_svg_icons_1.faTimes : free_solid_svg_icons_1.faBars} onClick={() => setMobileOpen(!mobileOpen)} className="text-white text-3xl cursor-pointer lg:hidden"/>
      {mobileOpen && (<div className="bg-cyan-600 absolute top-full left-0 flex flex-col w-full pb-8 lg:hidden">
          <div className="flex-1 flex flex-col items-center text-xl">
            {!authenticated && (<>
                <link_1.default href="/auth/login">
                  <a className="px-4">Sign In</a>
                </link_1.default>
                <link_1.default href="/auth/register">
                  <a className="px-4">Register</a>
                </link_1.default>
              </>)}

            <a className="group -m-2 p-2 flex items-center ">
              <outline_1.ShoppingBagIcon className="flex-shrink-0 h-6 w-6 text-white-400 group-hover:text-gray-500" aria-hidden="true" onClick={handleOpen}/>
              <span className="ml-1 text-sm font-medium text-white-700 group-hover:text-gray-800">
                {count}
              </span>
              <ListCart_1.default products={cart.cartItems} totalPrice={getTotalPrice()} open={open} handleOpen={handleOpen}/>
              {authenticated && <Setting_1.default />}
            </a>

            <div className="my-2 flex justify-center">
              {authenticated && <Setting_1.default />}
            </div>
          </div>
        </div>)}
    </div>);
}
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map