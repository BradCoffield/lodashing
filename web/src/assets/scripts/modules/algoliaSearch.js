import algoliasearch from 'algoliasearch/lite'
import instantsearch from 'instantsearch.js'
import { searchBox, hits, pagination } from 'instantsearch.js/es/widgets'

const searchClient = algoliasearch(
    'FV3J0ZLSKP',
    '40956cb6b138494860fded733e8118ed'
)

const search = instantsearch({
    indexName: 'lodashing',
    searchClient
})

search.addWidgets([
    searchBox({
        container: '#searchbox',
        searchAsYouType: false,
        showReset: true,
        showSubmit: true
    }),
    hits({
        container: '#hits',
        escapeHTML: false,
        templates: {
            item: `
<article>
  <h1>{{#helpers.highlight}}{ "attribute": "methodName" }{{/helpers.highlight}}</h1>
  <p>{{#helpers.snippet}}{ "attribute": "description" }{{/helpers.snippet}}</p>
  <br/> 
  <p>{{#helpers.highlight}}{ "attribute": "category" }{{/helpers.highlight}}  </p>
  <p><a href="/methods/{{methodName}}/">Details</a></p>
</article>
`
        }
    }),
    pagination({
        container: '#pagination'
    })
])

search.start()
