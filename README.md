
# PIS 10 
## Integrantes:
- Steven Silva 
- Bryan Taday 
- Mario Orrala
- Andrea Cardenas

### Especificación del proyecto

Para este proyecto cada arduino se comunicará a un raspberry master y este a su vez a casa, para que casa sea el encargado de enviar la información a AWS.
El arduino se encargara de enviar los datos de temperatura y humedad de un lugar especifico del hogar a firebase cada minuto, mientras que el raspberry Pi 4 se encargara de enviar los mismos datos al AWS tambien. Ademas, se tendra un pagina desarrollada en Angular 8 que se comunicara con firebase con la finalidad de que el dueño del arduino y raspberry Pi 4 pueda visualizar las mediciones de temperatura y humedad en tiempo real. 

### Componentes del proyecto

- Raspberry PI 4 
- Arduino MKR1010 
- DHT11
- Angular 8
- Micropython

### Arquitectura del proyecto

##### Arduino
![](https://i.imgur.com/fkUbfWJ.jpg)
##### Raspberry PI 4
![](https://i.imgur.com/yTM0uv3.jpg)
