"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = require("@headlessui/react");
const outline_1 = require("@heroicons/react/outline");
const CartItem_1 = require("./CartItem");
function ListCart({ products, totalPrice, open, handleOpen, }) {
    return (<>
      <react_2.Transition.Root show={open} as={react_1.Fragment}>
        <react_2.Dialog as="div" className="fixed inset-0 overflow-hidden z-10" onClose={() => handleOpen(!open)}>
          <div className="absolute inset-0 overflow-hidden">
            <react_2.Transition.Child as={react_1.Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
              <react_2.Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
            </react_2.Transition.Child>

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <react_2.Transition.Child as={react_1.Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <react_2.Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </react_2.Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => handleOpen()}>
                            <span className="sr-only">Close panel</span>
                            <outline_1.XIcon className="h-6 w-6" aria-hidden="true"/>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (<CartItem_1.default item={product}/>))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a href="#" className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          or{" "}
                          <button type="button" className="text-indigo-600 font-medium hover:text-indigo-500">
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </react_2.Transition.Child>
            </div>
          </div>
        </react_2.Dialog>
      </react_2.Transition.Root>
    </>);
}
exports.default = ListCart;
//# sourceMappingURL=ListCart.js.map