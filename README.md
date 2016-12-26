![DomoGeeek](https://github.com/ltoinel/DomoGeeek/raw/master/assets/logo.jpg "Domogeek")

This module is a gateway between Z-Wave devices and the MQTT broker and takes part from the DomoGeeek project.

This module is based on node-openzwave and allows you to transform Z-Wave messages into MQTT messages.
Works perfectly on a Raspberry Pi with an Aeon Lab Z-Wave USB dongle.

## Prerequisites

Compile OpenZwave

```sh
sudo apt-get install libudev-dev
cd ~ 
wget http://old.openzwave.com/downloads/openzwave-1.4.1.tar.gz
tar zxvf openzwave-*.gz
cd openzwave-* && make && sudo make install
export LD_LIBRARY_PATH=/usr/local/lib
sudo sed -i '$a LD_LIBRARY_PATH=/usr/local/lib' /etc/environment
```

## Install 

Install dependencies

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
