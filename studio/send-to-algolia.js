
require("dotenv").config();
const sanityClient = require("@sanity/client");
const apiToken = process.env.SANITY_TOKEN;
const projectId = process.env.SANITY_PROJECT_ID;


var algoliasearch = require("algoliasearch");
var clientAlgolia = algoliasearch(
  process.env.ALGOLIA_PROJECT_ID,
  process.env.ALGOLIA_API_KEY
);
var lodashingIndex = clientAlgolia.initIndex("lodashing");


const client = sanityClient({
  projectId,
  dataset: "lodash-search",
  apiVersion: "2021-09-21", // use current UTC date - see "specifying API version"!
  token: apiToken,
  useCdn: false, // `false` if you want to ensure fresh data
});

const query = `*[_type == "lodash_method"]`;
client.fetch(query).then((data) => {
  let processedData = data.map((i) => {
    return {
      objectID: i._id,
      methodName: i.method_name,
      description: i.description,
      category: i.category,
    };
  });
  lodashingIndex
    .saveObjects(processedData, { autoGenerateObjectIDIfNotExist: false })
    .then(({ objectIDs }) => {
      console.log(objectIDs);
    });
});



