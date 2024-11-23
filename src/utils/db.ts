import { PrismaClient, Prisma } from "@prisma/client";
import logger from "./log";

const prismaClient = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "error",
    },
    {
      emit: "event",
      level: "info",
    },
    {
      emit: "event",
      level: "warn",
    },
  ],
});

prismaClient.$on("error", (e: Prisma.LogEvent) => {
  logger.error(e);
});

prismaClient.$on("query", (e: Prisma.QueryEvent) => {
  logger.info(e);
});

prismaClient.$on("info", (e: Prisma.LogEvent) => {
  logger.info(e);
});

prismaClient.$on("warn", (e: Prisma.LogEvent) => {
  logger.warn(e);
});

export default prismaClient;
