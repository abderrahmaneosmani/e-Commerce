"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@headlessui/react");
const link_1 = require("next/link");
const react_2 = require("react");
function ListCategories({ sections }) {
    return (<div>
      <react_1.Disclosure.Panel className="pt-6">
        <div className="space-y-4">
          {sections.map((category, categoryIdx) => (<link_1.default href={`https://ecommerce-front-end-six.vercel.app/products/category/${category.id}`}>
              <div key={category.value} className="flex items-center">
                <label htmlFor={`filter-${category.id}-${categoryIdx}`} className="ml-3 text-sm text-gray-600">
                  {category.title}
                </label>
              </div>
            </link_1.default>))}
        </div>
      </react_1.Disclosure.Panel>
    </div>);
}
exports.default = ListCategories;
//# sourceMappingURL=ListCategories.js.map