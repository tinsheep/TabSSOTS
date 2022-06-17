"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_northstar_1 = require("@fluentui/react-northstar");
require("./Welcome.css");
var EditCode_1 = require("./EditCode");
var AzureFunctions_1 = require("./AzureFunctions");
var Graph_1 = require("./Graph");
var CurrentUser_1 = require("./CurrentUser");
var teamsfx_react_1 = require("@microsoft/teamsfx-react");
var Deploy_1 = require("./Deploy");
var Publish_1 = require("./Publish");
var Context_1 = require("../Context");
var CaptureVideoDesktop_1 = require("./CaptureVideoDesktop");
var CaptureAudioDesktop_1 = require("./CaptureAudioDesktop");
var react_northstar_2 = require("@fluentui/react-northstar");
function Welcome(props) {
    var _this = this;
    var _a = __assign({ showFunction: true, environment: window.location.hostname === "localhost" ? "local" : "azure" }, props), showFunction = _a.showFunction, environment = _a.environment;
    var friendlyEnvironmentName = {
        local: "local environment",
        azure: "Azure environment"
    }[environment] || "local environment";
    var steps = ["local", "azure", "publish"];
    var friendlyStepsName = {
        local: "1. Build your app locally",
        azure: "2. Provision and Deploy to the Cloud",
        publish: "3. Publish to Teams"
    };
    var _b = react_1.useState("local"), selectedMenuItem = _b[0], setSelectedMenuItem = _b[1];
    var items = steps.map(function (step) {
        return {
            key: step,
            content: friendlyStepsName[step] || "",
            onClick: function () { return setSelectedMenuItem(step); }
        };
    });
    var teamsfx = react_1.useContext(Context_1.TeamsFxContext).teamsfx;
    var _c = teamsfx_react_1.useData(function () { return __awaiter(_this, void 0, void 0, function () {
        var userInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!teamsfx) return [3 /*break*/, 2];
                    return [4 /*yield*/, teamsfx.getUserInfo()];
                case 1:
                    userInfo = _a.sent();
                    return [2 /*return*/, userInfo];
                case 2: return [2 /*return*/];
            }
        });
    }); }), loading = _c.loading, data = _c.data, error = _c.error;
    var userName = (loading || error) ? "" : data.displayName;
    return (React.createElement("div", { className: "welcome page" },
        React.createElement("div", { className: "narrow page-padding" },
            React.createElement(react_northstar_1.Image, { src: "hello.png" }),
            React.createElement("h1", { className: "center" },
                "Congratulations",
                userName ? ", " + userName : "",
                "!"),
            React.createElement("p", { className: "center" },
                "Your app is running in your ",
                friendlyEnvironmentName),
            React.createElement(react_northstar_1.Menu, { defaultActiveIndex: 0, items: items, underlined: true, secondary: true }),
            React.createElement("div", { className: "sections" },
                selectedMenuItem === "local" && (React.createElement("div", null,
                    React.createElement(EditCode_1.EditCode, { showFunction: showFunction }),
                    React.createElement(CurrentUser_1.CurrentUser, { userName: userName }),
                    React.createElement(react_northstar_2.Grid, { columns: 1 },
                        React.createElement(react_northstar_2.Segment
                        /* Component to capture audio in web browser */
                        , { 
                            /* Component to capture audio in web browser */
                            content: React.createElement(CaptureAudioDesktop_1["default"], null) }),
                        React.createElement(react_northstar_2.Segment
                        /* Component to capture video in web browser */
                        , { 
                            /* Component to capture video in web browser */
                            content: React.createElement(CaptureVideoDesktop_1["default"], null) })),
                    React.createElement(Graph_1.Graph, null),
                    showFunction && React.createElement(AzureFunctions_1.AzureFunctions, null))),
                selectedMenuItem === "azure" && (React.createElement("div", null,
                    React.createElement(Deploy_1.Deploy, null))),
                selectedMenuItem === "publish" && (React.createElement("div", null,
                    React.createElement(Publish_1.Publish, null)))))));
}
exports.Welcome = Welcome;

//# sourceMappingURL=Welcome.js.map
