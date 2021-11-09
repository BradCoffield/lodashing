// require('dotenv').config()
// const sanityClient = require('@sanity/client')

// const projectId = process.env.SANITY_PROJECT_ID
// const apiToken = process.env.SANITY_TOKEN

// const client = sanityClient({
//     projectId,
//     dataset: 'lodash-search',
//     apiVersion: '2021-09-21', // use current UTC date - see "specifying API version"!
//     token: apiToken,
//     useCdn: false
// })

// module.exports = async function () {
//   console.log("lodashMethods");
//     const query = `*[_type == "lodash_method"] | order(method_name asc) | order(category asc)`
//     const params = {}

//     return await client.fetch(query, params)

// }

// let data = [
//     {
//         _createdAt: '2021-10-07T16:14:31Z',
//         _id: '00901198478164886',
//         _rev: 'Sa9dY1lVfAGzoQXRnyKAfj',
//         _type: 'lodash_method',
//         _updatedAt: '2021-10-07T17:48:05Z',
//         arguments:
//             '<li><code>array</code> <em>(Array)</em>: The array to query.</li>',
//         category: 'Array Methods',
//         description: 'Gets all but the first element of <code>array</code>.',
//         example:
//             '<pre><div>_<span class="delimiter method">.</span><span class="name">tail</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;3]</span></div></pre>',
//         featured_on: [],
//         links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8139">source</a> <a href="https://www.npmjs.com/package/lodash.tail">npm package</a>',
//         lodash_version: '4.17.15',
//         method: '_.tail(array)',
//         methodName: 'tail',
//         related_methods: [],
//         returns: '<em>(Array)</em>: Returns the slice of <code>array</code>.',
//         search_helpers: ['"everything but the start"']
//     },
//     {
//         _createdAt: '2021-10-07T16:14:31Z',
//         _id: '009507986072070195',
//         _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
//         _type: 'lodash_method',
//         _updatedAt: '2021-10-07T16:14:31Z',
//         arguments: '<em>_.extendWith</em>',
//         category: 'Object Methods',
//         description:
//             'This method is like <a href="#assignIn"><code>_.assignIn</code></a> except that it accepts <code>customizer</code> which is invoked to produce the assigned values. If <code>customizer</code> returns <code>undefined</code>, assignment is handled by the method instead. The <code>customizer</code> is invoked with five arguments: <em>(objValue, srcValue, key, object, source)</em>.<br><br><strong>Note:</strong> This method mutates <code>object</code>.',
//         example:
//             '<pre><div><span class="type">function</span>&nbsp;<span class="name">customizer</span>(objValue<span class="delimiter">,</span>&nbsp;srcValue)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;_<span class="delimiter method">.</span><span class="name">isUndefined</span>(objValue)&nbsp;?&nbsp;srcValue&nbsp;:&nbsp;objValue;</div><div>}</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;defaults&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">partialRight</span>(_<span class="delimiter">.</span>assignInWith<span class="delimiter">,</span>&nbsp;customizer);</div><div>&nbsp;</div><div><span class="name">defaults</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;1,&nbsp;\'b\':&nbsp;2&nbsp;}</span></div></pre>',
//         featured_on: [],
//         links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12671">source</a> <a href="https://www.npmjs.com/package/lodash.assigninwith">npm package</a>',
//         lodash_version: '4.17.15',
//         method: '_.assignInWith(object, sources, [customizer])',
//         methodName: 'assignInWith',
//         related_methods: [],
//         returns: '<em>(Object)</em>: Returns <code>object</code>.',
//         search_helpers: []
//     }
// ]

// module.exports = () => {
//     return data
// }
