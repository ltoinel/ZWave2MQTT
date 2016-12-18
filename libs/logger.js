/**
 * ZWave2MQTT v1.1 https://github.com/ltoinel/ZWave2MQTT
 * 
 * Copyright 2015 Released under the Apache License 2.0 (Apache-2.0)
 * 
 * @desc: Logger factory for Domogeeek apps
 * @author: ltoinel@free.fr
 */

exports.getLogger = function getLogger(appname, debug) {

	var level = "info";
	if (debug) level = "debug";
	var bunyan = require('bunyan');
	var logger = bunyan.createLogger({
		name : appname,
		streams : [ {
			level : level,
			stream : process.stdout
		// log INFO and above to stdout
		}, {
			level : 'error',
			path : './logs/'+appname+'.log' 
		// log ERROR and above to a file
		} ]
	});

	return logger;
};
