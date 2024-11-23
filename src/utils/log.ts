import winston from "winston";

const logger: winston.Logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [new winston.transports.Console({})],
});

export default logger;
