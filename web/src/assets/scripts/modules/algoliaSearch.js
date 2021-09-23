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
        container: '#searchbox'
    }),
    hits({
        container: '#hits',
        templates: {
            item: `
<article>
  <h1>{{#helpers.highlight}}{ "attribute": "methodName" }{{/helpers.highlight}}</h1>
  <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
</article>
`
        }
    }),
    pagination({
        container: '#pagination'
    })
])

search.start()
