require('dotenv').config()
const sanityClient = require('@sanity/client')

const projectId = process.env.SANITY_PROJECT_ID
const apiToken = process.env.SANITY_TOKEN

const client = sanityClient({
    projectId,
    dataset: 'lodash-search',
    apiVersion: '2021-09-21', // use current UTC date - see "specifying API version"!
    token: apiToken,
    useCdn: false
})

module.exports = async function () {
  console.log("lodashMethods");
    const query = `*[_type == "lodash_method"] | order(method_name asc) | order(category asc)`
    const params = {}

    return await client.fetch(query, params)
}
