import * as process from "process";
import { config } from 'dotenv';
import {resolve} from 'path';
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const envPath = resolve(__dirname, process.env.NODE_ENV === 'development' ? `../../.env.local` : `../../.env.production`);
config({path: envPath})

const connectionString: string = process.env.DATABASE_URL as string;
const client = postgres(connectionString);

export const db = drizzle(client);

export * from './schema';


