## Sitio que organiza toda la informacion de los GDG de Argentina.

El site esta construido con NODE JS en el servidor

#Configuración del cliente

La aplicación cliente esta basada en AngularJS, para la creación del proyecto cliente se utiliza Yeoman (Yo, Bower, Grunt).
La aplicación cliente recide en el directorio webapp del proyecto.
Para mas información sobre Yeoman, pueden ver el siguiente tutorial en español:

([Howto install Yeoman](http://csrinaldi.blogspot.com.ar/2013/11/construyendo-apliciones-web-modernas.html):
    
Los pasos que deben seguir una vez descardo todo el codigo desde github son los siguientes:

    cd <dir>/src/main/webapp
    
Una vez dentro del directorio ejecutar:

    bower update
    
Si estan detrás de un proxy deben agregar al directorio .bowerrc ubicado en el directorio webapp las siguientes líneas:

    "proxy":"http://<host>:<port>",
    "https-proxy":"https://<host>:<port>"
    
El archivo debería quedarles de la siguiente manera:

    {
        "proxy":"http://<host>:<port>",
        "https-proxy":"https://<host>:<port>"
        "directory": "app/bower_components"
    }
    
    
