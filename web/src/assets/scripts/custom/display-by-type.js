
// let allMethods = await lodashMethods()

(() => {
    
    const whichPageWeWorkingWith = document.querySelector('.methodContainer').id
    console.log(whichPageWeWorkingWith)

    let appendContent = (methodType) => {}

    let content = `<div class="browseMethodsMethodBlock">
    
                <h2>{{method.methodName}}
                </h2>
                <ul>
                    <li>{{method.method | safe}}</li>
                    <li>{{method.links | safe}}</li>
                    <li>
                        <b>Description:
                        </b>{{method.description | safe}}
                    </li>
                    <li>
                        <b>Arguments:
                        </b>{{method.arguments | safe}}
                    </li>
                    <li>
                        <b>Returns:
                        </b>{{method.returns | safe}}
                    </li>
                    <li>
                        <b>Example:
                        </b>{{method.example | safe}}
                    </li>
                    <li>
                        <b>Category:
                        </b>{{method.category | safe}}
                    </li>
                    <li>
                        <b>Featured On:
                        </b>{{method.featured_on | safe}}
                    </li>
                    <li>{{method.related_methods | safe}}
                    </li>
                    <li>
                        {{method.lodash_version | safe}}
                    </li>
                </ul>
</div>`
})()
