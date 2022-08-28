"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
function Avatar(_a) {
    var { className = "", image = "", size = "base", status = "", statusBottom = false } = _a, newProps = __rest(_a, ["className", "image", "size", "status", "statusBottom"]);
    let finalClass = `${className} relative rounded-full`;
    if (!image)
        finalClass += " bg-gray-300 flex items-center justify-center";
    let statusClass = `absolute rounded-full right-0 ${statusBottom ? "bottom-0" : "top-0"}`;
    if (size === "xs") {
        finalClass += " w-4 h-4";
        statusClass += " w-1 h-1";
    }
    else if (size === "sm") {
        finalClass += " w-8 h-8";
        statusClass += " w-2 h-2";
    }
    else if (size === "base") {
        finalClass += " w-12 h-12";
        statusClass += " w-4 h-4";
    }
    else if (size === "lg") {
        finalClass += " w-16 h-16";
        statusClass += " w-5 h-5";
    }
    else if (size === "xl") {
        finalClass += " w-20 h-20";
        statusClass += " w-6 h-6";
    }
    else if (size === "2xl") {
        finalClass += " w-24 h-24";
        statusClass += " w-6 h-6";
    }
    if (status === "offline")
        statusClass += " bg-gray-200";
    else if (status === "online")
        statusClass += " bg-green-400";
    else if (status === "busy")
        statusClass += " bg-red-600";
    return (<div className={finalClass} {...newProps}>
      {image ? (<img src={image} className="absolute left-0 top-0 w-full h-full rounded-full object-cover"/>) : (<react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faUser}/>)}
      {status && <div className={statusClass}/>}
    </div>);
}
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map