"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const search_1 = require("../../../features/products/search");
function Search() {
    const [input, setInput] = (0, react_1.useState)("");
    const dispatch = (0, react_redux_1.useDispatch)();
    if (input.length > 0) {
        dispatch((0, search_1.emptyQuery)());
        dispatch((0, search_1.addQuery)(input));
    }
    return (<div className="w-full mx-auto mt-2 mb-4 sm:mx-0 sm:mb-0 sm:mt-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-1/2 sm:h-full justify-center items-center block sm:flex">
      <form className="relative w-full">
        <input value={input} onInput={(e) => setInput(e.target.value)} type="search" className="text-black w-30  sm:w-full max-w-full border border-gray-300 rounded-sm pr-4 pl-10 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400" placeholder="Search for something..."/>
      </form>
    </div>);
}
exports.default = Search;
//# sourceMappingURL=Search.js.map