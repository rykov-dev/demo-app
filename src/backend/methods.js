import { Pool } from "pg";
import { GET_ALL_QUERY } from "./queries.js";

const connectionString = process.env.DB_CONNECTION_STRING;
const pool = new Pool({ connectionString });

export async function getAllProjects() {
   const result = await pool.query(GET_ALL_QUERY);

   return result.rows;
}