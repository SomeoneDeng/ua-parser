var express = require("express")
var url = require('url')
const DeviceDetector = require('node-device-detector')
const InfoDevice = require('node-device-detector/parser/device/info-device');





const detector = new DeviceDetector;

console.log('server start..')
// server
express().get("/api/parse", function (req, resp) {
    var params = url.parse(req.url, true).query;
    const result = detector.detect(params.ua);

    const infoDevice = new InfoDevice;
    const deviceInfo = infoDevice.info(result.device.brand, result.device.model);

    result.device.info = deviceInfo

    resp.send(result)
}).listen(29999)
