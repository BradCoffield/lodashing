import algoliasearch from 'algoliasearch/lite'
import instantsearch from 'instantsearch.js'
import { searchBox, hits } from 'instantsearch.js/es/widgets'

const searchClient = algoliasearch(
    'FV3J0ZLSKP',
    '40956cb6b138494860fded733e8118ed'
)

const search = instantsearch({
    indexName: 'demo_ecommerce',
    searchClient
})

search.addWidgets([
    searchBox({
        container: '#searchbox'
    }),

    hits({
        container: '#hits'
    })
])

search.start()
