import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "../config/swagger";


const serveSwagger = swaggerUi.serve;
const setupSwagger = swaggerUi.setup(swaggerDocument);

export { serveSwagger, setupSwagger };