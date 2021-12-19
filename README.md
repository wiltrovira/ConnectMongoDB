# ConnectMongoDB

Ejemplo básico de NodeJS para conectar a una base de datos de MongoDB. Solo se publica para efectos académicos.

Utiliza el driver de MongoDB.

La cadena de conexión se debe guardar en un archivo .env (Este archivo no se sube al repositorio por razones de seguridad)
    EXAMPLE_MONGODB_CONNSTRING=mongodb://cadenaDeConexion

Nota: La base de datos puede estar en un servidor de MongoDB local, en Atlas MongoDB, Azure CosmosDb u otro servicio en la nube.

## Ejemplos

Se incorporan 2 ejemplos para conectar a la base de datos:

1. Se conecta a través del driver de mongodb
2. Se conecta a través de mongoose

## versiones

1. node --version = v16.13.1
2. npm -version = 8.3.0

## Comandos utilizados

1. npm init -y
2. npm install dotenv  (versión 10.0.0)
3. npm install mongodb (versión 4.2.2)
4. npm install mongoose (versión 6.1.2)
