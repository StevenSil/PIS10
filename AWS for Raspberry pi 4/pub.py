
import paho.mqtt.client as paho
import os
import socket
import ssl
from time import sleep
from random import uniform
import sys
import time
import Adafruit_DHT
 
connflag = False
sensor = Adafruit_DHT.DHT11

pin = 21

 
def on_connect(client, userdata, flags, rc):                # func for making connection
    global connflag
    print "Conectando a Aws"
    connflag = True
    print("Conexion establecida: " + str(rc) )
 
def on_message(client, userdata, msg):                      # Func for Sending msg
    print(msg.topic+" "+str(msg.payload))
 
#def on_log(client, userdata, level, buf):
#    print(msg.topic+" "+str(msg.payload))
 
mqttc = paho.Client()                                       # mqttc object
mqttc.on_connect = on_connect                               # assign on_connect func
mqttc.on_message = on_message                               # assign on_message func


#### Change following parameters #### 
awshost = "yourhost.amazonaws.com"
awsport = 8883                                              # Port no.   
clientId = "IoTSE"                                     # Thing_Name
thingName = "IoTSE"                                    # Thing_Name
caPath = "root-CA.crt"                                      # Root_CA_Certificate_Name
certPath = "IoTSE.cert.pem"                            # <Thing_Name>.cert.pem
keyPath = "IoTSE.private.key"                          # <Thing_Name>.private.key
 
mqttc.tls_set(caPath, certfile=certPath, keyfile=keyPath, cert_reqs=ssl.CERT_REQUIRED, tls_version=ssl.PROTOCOL_TLSv1_2, ciphers=None)  # pass parameters
 
mqttc.connect(awshost, awsport, keepalive=60)               # connect to aws server
 
mqttc.loop_start()

try:    

    while True:
        humedad, temperatura = Adafruit_DHT.read_retry(sensor, pin)
    
        mqttc.publish("Temperatura", temperatura,qos=1)
        
        
        mqttc.publish("Humedad%", humedad,qos=1)

        print('Temperatura={0:0.1f} Humedad={1:0.1f}%'.format(temperatura, humedad))
        time.sleep(4)
        
        
        
except Exception,e:
    print str(e)