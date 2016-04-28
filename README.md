![DomoGeeek](https://github.com/ltoinel/DomoGeeek/raw/master/assets/logo.jpg "Domogeek")

This module is a gateway between Z-Wave devices and the MQTT broker and takes part from the DomoGeeek project.

This module is based on node-openzwave and allows you to transform Z-Wave messages into MQTT messages.
Works perfectly on a Raspberry Pi with an Aeon Lab Z-Wave USB dongle.

## Install 

```sh
$ npm install
$ vi config.js 
```

You can enable the debug flag to analyze the messages exchanged on the network.


## Test 

```sh
$ ./start.sh
```

By default, each family of messages are sent into specific MQTT topics (alarm, sensor ...).

## Deploy 

```sh
$ sudo npm install pm2 -g
$ ./pm2.sh
$ pm2 startup
$ pm2 save
```
