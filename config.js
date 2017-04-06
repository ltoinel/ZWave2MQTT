/**
 * DomoGeeek v1.0
 * https://github.com/ltoinel/domogeeek
 *
 * Copyright 2014 ZWave2MQTT
 * Released under the Apache License 2.0 (Apache-2.0)
 * 
 * @desc: Configuration file for the ZwaveBus
 * @author: ltoinel@free.fr
 */

var config = {};

//Debug
config.debug = false;

// MQTT Message Broker 
config.mqtt = {};
config.mqtt.uri = "mqtt://192.168.1.2";
config.mqtt.options = {
//username: 'AnUser',
//password: 'APassword',
keepalive: 20,
clean: true,
clientId: 'zwave2mqtt'
};

// Zwavebus
config.saveconfig = false;
config.logging = false;
config.consoleoutput = true;
config.suppressrefresh = false;
config.device = '/dev/ttyZwaveStick';

module.exports = config;
