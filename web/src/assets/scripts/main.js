// Focus Visible Polyfill
import 'focus-visible'

// Internal Modules
import './modules/nav'

// Algolia
import './modules/algoliaSearch'
import lodashMethods from '../../data/lodashMethods'
(async () => {
    let lodashMethods = require('../../data/lodashMethods')
    // console.log(await lodashMethods())
    let lodashMethodss = await lodashMethods()
    console.log(lodashMethodss);
    let spot = document.getElementById('singleMethod')
    spot.insertAdjacentHTML('afterbegin', `<h2>${lodashMethodss[0].method_name}</h2>`)
})()
