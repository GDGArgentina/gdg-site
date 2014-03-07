## Sitio que organiza toda la informacion de los GDG de Argentina.

Requiere [Apache Maven](http://maven.apache.org) 3.0 o mayor, y JDK 6+.

Para construir el proyecto

    mvn package

Construcción del proyecto con corrida de test

    mvn test

Iniciar la app, usar el plugin de maven [App Engine Maven Plugin](http://code.google.com/p/appengine-maven-plugin/) incluido en el proyecto, corriendo el comando:

    mvn appengine:devserver

Para mas información, consulte la documentación de [Java App Engine](https://developers.google.com/appengine/docs/java/overview).

Para ver todos los goals que provee el plugin, ejecutar la siguiente línea:

    mvn help:describe -Dplugin=appengine
    

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
    
    
