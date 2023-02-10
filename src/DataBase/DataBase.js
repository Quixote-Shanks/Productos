const { createPool } = require("mysql2/promise");

module.exports = connect = async () => {
  const connection = await createPool({
    host: "db4free.net",
    user: "productshop",
    password: "Gbenekama419",
    database: "productshop",
    connectionLimit: 10,
  });

  return connection;
};
