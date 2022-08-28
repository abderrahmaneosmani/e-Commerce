"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = require("@headlessui/react");
const Avatar_1 = require("./Avatar");
const firebase_reducer_1 = require("../../../features/firebase/firebase-reducer");
const react_redux_1 = require("react-redux");
const router_1 = require("next/router");
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function Settings() {
    const dispatch = (0, react_redux_1.useDispatch)();
    const router = (0, router_1.useRouter)();
    const handleLogout = () => {
        dispatch((0, firebase_reducer_1.Logout)());
        router.push("/");
    };
    return (<react_2.Menu as="div" className="relative inline-block text-left">
      <div className="px-4">
        <react_2.Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2  text-sm font-medium text-gray-700  focus:outline-none focus:ring-2">
          <Avatar_1.default image="https://picsum.photos/200/200.jpg" status="online" className="cursor-pointer my-2"/>
        </react_2.Menu.Button>
      </div>

      <react_2.Transition as={react_1.Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
        <react_2.Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <form method="POST" action="#">
              <react_2.Menu.Item>
                {({ active }) => (<button onClick={handleLogout} type="submit" className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block w-full text-left px-4 py-2 text-sm")}>
                    Sign out
                  </button>)}
              </react_2.Menu.Item>
            </form>
          </div>
        </react_2.Menu.Items>
      </react_2.Transition>
    </react_2.Menu>);
}
exports.default = Settings;
//# sourceMappingURL=Setting.js.map