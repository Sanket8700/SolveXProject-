const { format, createLogger, transports } = require("winston");
const { combine, timestamp, label, prettyPrint } = format;
require("winston-daily-rotate-file");

const CATEGORY = "fleete";

//DailyRotateFile func()
const fileRotateTransport = new transports.DailyRotateFile({
    filename: "logs/error-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    maxFiles: "1d",
    level: "error"
  });

  const fileRotateTransportNew = new transports.DailyRotateFile({
    filename: "logs/info-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    maxFiles: "1d",
    level: "info"
  });

const logger = createLogger({
    level: "debug",
    format: combine(
        label({ label: CATEGORY }),
        timestamp({
            format: "YYYY-MM-DD hh:mm:ss",
        }),
        prettyPrint()
    ),
    transports: [
        fileRotateTransport,
        fileRotateTransportNew,
        new transports.Console(),
    ],
});

module.exports = logger;