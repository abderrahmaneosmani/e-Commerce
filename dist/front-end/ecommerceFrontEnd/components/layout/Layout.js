"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Navbar_1 = require("./navbar/Navbar");
function Layout({ children }) {
    return (<>
      <Navbar_1.default />
      <main>{children}</main>
    </>);
}
exports.default = Layout;
//# sourceMappingURL=Layout.js.map