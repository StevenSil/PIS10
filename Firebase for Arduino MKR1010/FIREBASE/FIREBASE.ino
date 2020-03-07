#include "Firebase_Arduino_WiFiNINA.h"

#include <WiFiNINA.h>
#include <DHT.h>

#define DHTPIN 3
#define DHTTYPE DHT11 
DHT dht(DHTPIN, DHTTYPE);

#define WIFI_SSID ""      
#define WIFI_PASSWORD ""           

#define FIREBASE_HOST "yourhost.com"
#define FIREBASE_AUTH "youtauth"

FirebaseData lol;

void setup() {
  Serial.begin(9600);                                                       
  dht.begin();
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);                                    
  Serial.print("Connecting to ");
  Serial.print(WIFI_SSID);
  while (WiFi.status() != WL_CONNECTED) {
  Serial.print(".");
  delay(500);
  }
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH, WIFI_SSID, WIFI_PASSWORD); 
  Firebase.reconnectWiFi(true);  
}

void loop() {
  float h = dht.readHumidity();                                              
  float t = dht.readTemperature(); 
  Serial.print("Humidity: ");  Serial.print(h);
  String fireHumid = String(h);                                         
  Serial.print("%  Temperature: ");  Serial.print(t);  Serial.println("Â°C ");
  String fireTemp = String(t);                                                     
  String routeH= "/Sensor/Humedad";
  String routeT= "/Sensor/Temperatura";
  if (Firebase.pushInt(lol, routeH, h))
    {
      Serial.println("----------Push result-----------");
      Serial.println("PATH: " + lol.dataPath());
      Serial.print("PUSH NAME: ");
      Serial.println(lol.pushName());
      Serial.println("--------------------------------");
      Serial.println();
    }
    else
    {
      Serial.println("----------Can't push data--------");
      Serial.println("REASON: " + lol.errorReason());
      Serial.println("--------------------------------");
      Serial.println();
    }
  if (Firebase.pushInt(lol, routeT, t))
    {
      Serial.println("----------Push result-----------");
      Serial.println("PATH: " + lol.dataPath());
      Serial.print("PUSH NAME: ");
      Serial.println(lol.pushName());
      Serial.println("--------------------------------");
      Serial.println();
    }
    else
    {
      Serial.println("----------Can't push data--------");
      Serial.println("REASON: " + lol.errorReason());
      Serial.println("--------------------------------");
      Serial.println();
    }
  //Firebase.setString(lol,routeH,fireHumid);                                
  //Firebase.setString(lol,routeT,fireTemp);
  delay(1000);  
  }
