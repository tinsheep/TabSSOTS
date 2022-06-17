"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
exports.__esModule = true;
var react_1 = require("react");
var microsoftTeams = require("@microsoft/teams-js");
var react_northstar_1 = require("@fluentui/react-northstar");
/**
 * The 'captureVideoDesktop' component
 * of your app.
 */
var CaptureVideoDesktop = function () {
    //  var stream: MediaStream = null;
    var _a = react_1.useState(new MediaStream), capturedVideo = _a[0], setCapturedVideo = _a[1];
    react_1.useEffect(function () {
        // initializing microsoft teams sdk
        microsoftTeams.initialize();
    });
    function captureVideo() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (mediaStream) {
            var videoElement = document.querySelector("video");
            videoElement.srcObject = mediaStream;
            setCapturedVideo(mediaStream);
        })["catch"](function (error) { return console.log(error); });
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(react_northstar_1.Card, null,
            React.createElement(react_northstar_1.CardHeader, null,
                React.createElement(react_northstar_1.Text, { content: "Capture Video (Web only)", weight: "bold" })),
            React.createElement(react_northstar_1.CardBody, null,
                React.createElement(react_northstar_1.Flex, { column: true, gap: "gap.small" },
                    React.createElement(react_northstar_1.Text, { content: "Checks for permission to use media input" }),
                    React.createElement(react_northstar_1.Text, { content: "SDK used: ", weight: "semibold" }),
                    React.createElement(react_northstar_1.Text, { content: "navigator" }),
                    React.createElement(react_northstar_1.Text, { content: "Method: ", weight: "semibold" }),
                    React.createElement(react_northstar_1.Text, { content: "navigator.mediaDevices.getUserMedia" }),
                    React.createElement(react_northstar_1.Button, { content: "Capture video", onClick: captureVideo }),
                    React.createElement("video", { controls: true }))))));
};
exports["default"] = CaptureVideoDesktop;

//# sourceMappingURL=CaptureVideoDesktop.js.map
