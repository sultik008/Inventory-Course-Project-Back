import { Pool } from "pg";

const db = new Pool({
  connectionString: 'postgresql://postgres:Sultik008@localhost:5432/inventory'
})
export default db