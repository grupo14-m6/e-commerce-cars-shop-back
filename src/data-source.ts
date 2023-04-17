import path from "path";
import "reflect-metadata";
import { DataSourceOptions, DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Car } from "./entities/car.entity";
import { ImageCar } from "./entities/image.entity";
import { Brand } from "./entities/brand.entity";
import { initials1681742141998 } from "./migrations/1681742141998-initials";

const DataSourceSettings = (): DataSourceOptions => {
  const entities = [User, Car, ImageCar, Brand];
  const migrations = [initials1681742141998];

  const node_env = process.env.NODE_ENV;

  if (node_env === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities,
      migrations,
    };
  }

  return {
    type: "postgres",
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: +process.env.DB_PORT,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    entities,
    migrations,
  };
};

const dataSource = DataSourceSettings();
const appDataSource = new DataSource(dataSource);

export default appDataSource;
