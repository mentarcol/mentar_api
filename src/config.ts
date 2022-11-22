import { registerAs } from '@nestjs/config';

/**
 * De esta forma estamos tipando las variables de entorno.
 * Cada que vayamos a 'configuration' desde cualquier lado, podemos leer las variables de entorno que tenemos.
 */
export default registerAs('configuration', () => {
  return {
    database: {
      // Hace referencia a los archivos '.env'
      username: process.env.MONGO_USERNAME,
      password: process.env.MONGO_PASSWORD,
      db: process.env.MONGO_DB,
    },
    email: {
      username: process.env.EMAIL,
      password: process.env.EMAIL_PASSWORD,
    },
  };
});
