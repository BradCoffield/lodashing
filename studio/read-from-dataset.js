const dotenv = require("dotenv").config();
const sanityClient = require("@sanity/client");
const apiToken = process.env.SANITY_TOKEN;
const projectId = process.env.SANITY_PROJECT_ID;

 
console.log(apiToken);

 

/*  
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
});
 */