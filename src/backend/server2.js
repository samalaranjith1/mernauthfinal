const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://samalaranjith1:Ranjith1956@cluster0.r3efdtw.mongodb.net/users?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    await createListing(client, {
      username: "ranjithsamala",
      email: "ranjith@gmail.com",
      password: "ranjith@gmail.com",
    });
  } finally {
    await client.close();
  }
}

main().catch(console.error);

const createListing = async (client, newListing) => {
  const result = await client
    .db("usersDB")
    .collection("users")
    .insertOne(newListing);

  console.log(
    await client
      .db("usersDB")
      .collection("users")
      .findOne({ email: `ranjith@gmail.com` })
  );
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
};
