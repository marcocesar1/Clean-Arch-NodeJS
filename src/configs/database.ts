import { DataSource } from "typeorm";
import { User } from "../domain/models";

const dataSource = new DataSource({
  url: process.env.DB_URL,
  type: "mysql",
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  synchronize: true,
  logging: false,
  entities: [User],
  subscribers: [],
  migrations: [],
});

export default dataSource;
