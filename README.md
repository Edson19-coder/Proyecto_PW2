
# Proyecto Progración Web 02 
## INTEGRANTES:
 - Edson Juan Lugo Sánchez
 - Carlos Adrian Betancourt Samaniego
 - Ricardo Keervan Paz Carreón
## LA APLICACIÓN:
Nuestro proyecto consiste en dos funcionalidades principales referente un e-commerce de armado de computadoras, las cuales son las siguientes:
### 1. Armado de computadora:
Esta sera la funcionalidad principal y base por al cual el usuario interectuara en nuestra pagina.
Se tendra que registrar e ingresar a la pagina con un usuario para poder interectuar con esta función , ya que es necesario el tener un token activo para el uso de la funcionalida: Esta funcionalidad sera dividida en unos pares de pasos los cuales se tienen que seguir para poder hacer un building de computadora compatible con cada uno de los componentes.
1. Se debera escoger una marca de procesador , en este caso manejaremos INTEL y AMD.
2. Se mostrara y escojera un procesador de la marca previamente escogida.
3. Una vez seleccionado el procesador seran mostradas las placas madres las cuales son compatibles con este.
4. A partir de aqui el escoger memoria ram, almacenamiento y entre otros , no se limitara ya que esto no es problema con la compatibilidad.
5. Otro elemento clabe a escoger sera el Gabinete , los cuales seran mostrados dependiendo del tamaño de la placa madre escogida previamente en el paso 3.
6. Una vez seleccionado todo lo anteriro , se hara el calculo de los watts necesarios para poder mostrar las mejores fuentes de poder dependiendo del consumo de la computadora.

Una vez cumplido estos pasos , se mandaran todos estos productos al carrito , donde posteriormente seran pagados por el cliente y enviados por los provedores.

### 2. Vista de productos disponibles en la pagina:
En esta funcionalidad se le dara la posibilidad de ver todos los productos disponibles en la pagina al usuario en la pagina de inicio y ver cada una de las caracteristicas asi como detalles , imagenes y precio de los productos los cuales podras utilizar para sus ensambles dentro de la pagina.

## CONTENIDO DE LAS CARPETAS:
Al entrar a este repositorio se mostraran dos carpetas principales junto con este README.md que son las siguientes:
### Api
Dentro de esta carpeta estara todo lo relacionado con el Back-end (Controladores, Modelos, Rutas, etc), seran descritas las carpetas en el orden mostrado por **Github**.

- Controllers: Dentro de esta carpeta estan todos los contraladores necesarios para el proyecto , los cuales cumplen con la funcion de hacer el correcto uso de los datos recibidos por el cliente, estos seran recividos y validados si son necesarios, una vez procesado los datos seran enviados por la conexion a nuestra base de datos.
- Middlewares: Dentro de esta carpeta por ahora solo esta previsto la presencia de un documento el cual nos ayudara para la funcion de autentificación del usuairo mediante tokens, este validara si el token a expirado o no , asi como el validar si el token existe en la cabecera de la petición.
- Models: Aqui es donde se encuntran cada uno de los esquemas utilizados base al almacenamiento que sera manipulado.
- Routes: Dentro de carpeta seran almacenadas cada una de las rutas (end points) creadas para el uso de los metodos creados en los controladores.
- Services: Actualmente esta carpeta solo esta siendo usada para alamacenar la funcion de la creación de los tokens para la autentificación del usuario.
### Client
**SIN DESARROLLAR**
