## Sitio que organiza toda la informacion de los GDG de Argentina.

Requires [Apache Maven](http://maven.apache.org) 3.0 or greater, and JDK 6+ in order to run.

To build, run

    mvn package

Building will run the tests, but to explicitly run tests you can use the test target

    mvn test

To start the app, use the [App Engine Maven Plugin](http://code.google.com/p/appengine-maven-plugin/) that is already included in this demo.  Just run the command.

    mvn appengine:devserver

For further information, consult the [Java App Engine](https://developers.google.com/appengine/docs/java/overview) documentation.

To see all the available goals for the App Engine plugin, run

    mvn help:describe -Dplugin=appengine
    
In webapp folder app directory contains the angular client application.

Tools:
    1) Yeoman ([Howto install Yeoman](http://csrinaldi.blogspot.com.ar/2013/11/construyendo-apliciones-web-modernas.html): 
    2) Plugin for Angular
    
    
    
    
