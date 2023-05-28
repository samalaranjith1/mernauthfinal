const { MongoClient } = require("mongodb");
const uri = require("./atlas_uri");

//connecting to database
const client = new MongoClient(uri);
const dbname = "users";

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(`Connected to the ${dbname} database`);
  } catch (error) {
    console.log(`Error connecting to the database : ${error}`);
  }
};

const main = async () => {
  try {
    await connectToDatabase();
    const databasesList = await client.db().admin().listDatabases();
    databasesList.databases.forEach((db) => console.log(`${db.name}`));
  } catch (error) {
    console.log(`Error connecting to the database : ${error}`);
  } finally {
    await client.close();
  }
};
//Run the main function
main();
