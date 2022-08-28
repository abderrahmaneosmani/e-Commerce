"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/globals.css");
const Layout_1 = require("../components/layout/Layout");
const react_redux_1 = require("react-redux");
const store_1 = require("../app/store");
function MyApp({ Component, pageProps }) {
    return (<react_redux_1.Provider store={store_1.store}>
      <Layout_1.default>
        <Component {...pageProps}/>
      </Layout_1.default>
    </react_redux_1.Provider>);
}
exports.default = MyApp;
//# sourceMappingURL=_app.js.map