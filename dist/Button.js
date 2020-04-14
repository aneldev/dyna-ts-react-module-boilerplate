"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./Button.less");
var EStyle;
(function (EStyle) {
    EStyle["ROUNDED"] = "ROUNDED";
})(EStyle = exports.EStyle || (exports.EStyle = {}));
var EColor;
(function (EColor) {
    EColor["WHITE_BLACK"] = "WHITE_BLACK";
    EColor["WHITE_RED"] = "WHITE_RED";
    EColor["BLACK_WHITE"] = "BLACK_WHITE";
    EColor["TRANSPARENT_WHITE"] = "TRANSPARENT_WHITE";
})(EColor = exports.EColor || (exports.EColor = {}));
var ESize;
(function (ESize) {
    ESize["SMALL"] = "SMALL";
    ESize["MEDIUM"] = "MEDIUM";
    ESize["LARGE"] = "LARGE";
    ESize["XLARGE"] = "XLARGE";
})(ESize = exports.ESize || (exports.ESize = {}));
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a = this.props, children = _a.children, style = _a.style, color = _a.color, size = _a.size, href = _a.href, onClick = _a.onClick;
        var classNameXXXX = "--style-" + style + " --color-" + color + " --size-" + size;
        return (React.createElement("a", { className: className, href: href, onClick: onClick },
            React.createElement("button", null, children)));
    };
    Button.defaultProps = {
        children: null,
        style: EStyle.ROUNDED,
        color: EColor.WHITE_BLACK,
        size: ESize.MEDIUM,
        href: undefined,
        onClick: function () { return undefined; },
    };
    return Button;
}(React.Component));
exports.Button = Button;
//# sourceMappingURL=Button.js.map