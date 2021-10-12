

(async () => {
    let lodashMethods = require('../../../data/lodashMethods')
    // console.log(await lodashMethods())
    let allMethods = await lodashMethods()
    let randomMethod = _.random(allMethods.length)
    let spot = document.getElementById('singleMethod')
    let randomDash = allMethods[randomMethod]
    spot.insertAdjacentHTML(
        'afterbegin',
        `<div class="randomDash">
        <h2 class="methodName">${randomDash.methodName}</h2>
        <p>${randomDash.category}</p>
        <p>${randomDash.description}<p>Links: ${randomDash.links}</p></p>
        <p>Returns: ${randomDash.returns} </p>
        <p>Example: ${randomDash.example}</p>
        
        
        
        
        </div>`
    )
})()
