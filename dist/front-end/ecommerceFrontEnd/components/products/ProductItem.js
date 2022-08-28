"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Rating_1 = require("./Rating");
function ProductItem({ product }) {
    return (<div key={product.id} className="group relative ">
      <div className="shadow-md w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img src={product.image} alt={product.image} className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a>
              <span aria-hidden="true" className="absolute inset-0"/>
              {product.title}
            </a>
          </h3>
          <p className="text-gray-700 font-bold text-xl">
            ${product.price.toFixed(2)}
            <div className="flex items-center mt-2.5 mb-5">
              <Rating_1.default count={product.rating}/>

              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {product.rating}
              </span>
            </div>
          </p>
          
        </div>
      </div>
    </div>);
}
exports.default = ProductItem;
//# sourceMappingURL=ProductItem.js.map