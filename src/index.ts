import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeormStore } from 'connect-typeorm';
import ExpressSession from 'express-session';
import { entities } from './typeorm';

// Define express variable

// Create an exportable `TypeormStore` to allow access everywhere
export const databaseOptions: DataSourceOptions = {
    type: "postgres",
    host: process.env.PSQL_DB_HOST,
    port: 5432,
    username: process.env.PSQL_DB_USERNAME,
    password: process.env.PSQL_DB_PASSWORD,
    database: process.env.PSQL_DB_DATABASE,
    synchronize: true,
    entities: entities
};

// Create an exportable `DataSource` to allow `getRepository()` access everywhere. 
// `databaseOptions` is an object of type DataSourceOptions and may depend on your configuration/needs.
export const dataSource = new DataSource(databaseOptions);   
