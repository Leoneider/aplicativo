
#Arquitectura Hexagonal
ExpresJs con Typescript y bases de datos Postgres y Cassandra.

## EJECUTAR PROYECTO DESARROLLO
npm start

## MIGRACIONES

**Crear Migraciones:**
`npm run typeorm migration:create -- -n MigrationNameHere`

**Generar Migraciones:**
`npm run typeorm migration:generate -- -n MigrationNameHere`


**Ejecutar Migraciones:**
`npm run typeorm migration:run`


## TEST
Anatomía de un test unitario AAA

• Preparación (Arrange): en esta parte del test preparamos el contexto para poder realizar la prueba. Por ejemplo, si probamos un método de una clase, primero tendremos que instanciar dicha clase para probarlo. Además, una parte la preparación puede estar contenida en el método SetUp (Before en el caso de Jest), si es común a todos los test de la clase. 

• Actuación (Act): ejecutamos la acción que queremos probar. Por ejemplo, invocar un método con unos parámetros.

• Aserción (Assert): verificamos si el resultado de la acción es el esperado. Por ejemplo, el resultado de la invocación del método anterior tiene que devolver un valor determinado.
