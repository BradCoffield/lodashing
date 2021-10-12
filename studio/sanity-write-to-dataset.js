require("dotenv").config();
const sanityClient = require("@sanity/client");
const seedrandom = require("seedrandom");
const ourLodashData = require("/home/brad/Dropbox/Web Design/1-Coding Projects/022-scraping-lodash/lodash-methods.json");

const apiToken = process.env.SANITY_TOKEN;
const projectId = process.env.SANITY_PROJECT_ID;

const client = sanityClient({
  projectId,
  dataset: "lodash-search",
  apiVersion: "2021-09-21", // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
});

// console.log(ourLodashData)
const createIdBasedOnTitle = ourLodashData.map((i) => {
  let rng = seedrandom(i.title);
  return { ...i, id: rng() };
});

function sanitizeMethodName(i) {
  let match = /^.*(?=\()/.exec(i.substring(2));
  let result = ""
  if (match && match[0]) {
    console.log(match[0]);
    result = match[0]
  }
  return result;
}

function transform(i) {
  return {
    _id: i.id.toString().substr(2),
    _type: "lodash_method",
    method: i.title,
    methodName: sanitizeMethodName(i.title),
    links: i.links,
    description: i.description,
    arguments: i.arguments,
    returns: i.returns,
    example: i.example,
    category: i.category,
    search_helpers: [], 
    featured_on: [],
    related_methods: [],
    lodash_version: i.lodashVersion,
  };
}

 

let readyToGo = createIdBasedOnTitle.map((item) => {
  return transform(item);
});

console.log(readyToGo);

let transaction = client.transaction();
readyToGo.forEach((document) => {
  transaction.createOrReplace(document);
});

return transaction.commit();
