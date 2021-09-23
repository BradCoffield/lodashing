require("dotenv").config();
const sanityClient = require("@sanity/client");
const apiToken = process.env.SANITY_TOKEN;
const projectId = process.env.SANITY_PROJECT_ID;

const client = sanityClient({
  projectId,
  dataset: "lodash-search",
  apiVersion: "2021-09-21", // use current UTC date - see "specifying API version"!
  token: apiToken,
  useCdn: false, // `false` if you want to ensure fresh data
});

const query = "*[]";
client.fetch(query).then((data) => {
  console.log(data);

  const fs = require("fs");

 

  // // convert JSON object to a string
  // const data = JSON.stringify(user);

  // write file to disk
  fs.writeFile("./data.json", JSON.stringify(data), "utf8", (err) => {
    if (err) {
      console.log(`Error writing file: ${err}`);
    } else {
      console.log(`File is written successfully!`);
    }
  });
});
