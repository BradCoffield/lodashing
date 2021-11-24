import algoliasearch from 'algoliasearch/lite'
import instantsearch from 'instantsearch.js'
// import '@algolia/autocomplete-theme-classic'
import {
    searchBox,
    hits,
    pagination,
    poweredBy
} from 'instantsearch.js/es/widgets'

const searchClient = algoliasearch(
    'FV3J0ZLSKP',
    '40956cb6b138494860fded733e8118ed'
)

const search = instantsearch({
    indexName: 'lodashing',
    searchClient,
    routing: true,
    searchFunction(helper) {
        const container = document.querySelector('#hits-and-pagination')
        container.style.display = helper.state.query === '' ? 'none' : ''

        helper.search()
    }
})

search.addWidgets([
    poweredBy({
        container: '#powered-by'
    }),
    searchBox({
        container: '#searchbox',
        searchAsYouType: true,
        showReset: false,
        showSubmit: true,
        placeholder: "Search lodash's capabilities",
        showLoadingIndicator: true
    }),
    hits({
        container: '#hits',
        escapeHTML: false,
        templates: {
            empty: `<div>
                <p>No results have been found for {{ query }}</p>
                <a role="button" href=".">Reset your search</a>
              </div>`,
            item: `
<article class="results-item">
        <div class="results-interior-one"> 
            <a class="unstyled-link" href="/methods/{{methodName}}/"><h2>{{#helpers.highlight}}{ "attribute": "methodName" }{{/helpers.highlight}}</h2></a>
         <div class="category-area {{category}}-class"> {{category}}  </div>
           </div>
         <div class="results-interior-two"> <p>{{#helpers.snippet}}{ "attribute": "description" }{{/helpers.snippet}}</p></div>
        
 
 
  <br/> 
  
 
 
</article>
`
        }
    }),
    pagination({
        container: '#pagination'
    })
])

search.start()
//  END MINE
