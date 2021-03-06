let data = [
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '00901198478164886',
        _rev: 'Sa9dY1lVfAGzoQXRnyKAfj',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T17:48:05Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to query.</li>',
        category: 'Array Methods',
        description: 'Gets all but the first element of <code>array</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">tail</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;3]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8139">source</a> <a href="https://www.npmjs.com/package/lodash.tail">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.tail(array)',
        methodName: 'tail',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the slice of <code>array</code>.',
        search_helpers: ['"everything but the start"']
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '012933916922826175',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The sorted array to inspect.</li><li><code>value</code> <em>(*)</em>: The value to evaluate.</li>',
        category: 'Array Methods',
        description:
            'Uses a binary search to determine the lowest index at which <code>value</code> should be inserted into <code>array</code> in order to maintain its sort order.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">sortedIndex</span>([<span class="numeric">30</span><span class="delimiter">,</span>&nbsp;<span class="numeric">50</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">40</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;1</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7944">source</a> <a href="https://www.npmjs.com/package/lodash.sortedindex">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.sortedIndex(array, value)',
        methodName: 'sortedIndex',
        related_methods: [],
        returns:
            '<em>(number)</em>: Returns the index at which <code>value</code> should be inserted into <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '02210319300156651',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to inspect.</li><li><code>value</code> <em>(*)</em>: The value to search for.</li><li><code>[fromIndex=0]</code> <em>(number)</em>: The index to search from.</li>',
        category: 'Array Methods',
        description:
            'Gets the index at which the first occurrence of <code>value</code> is found in <code>array</code> using <a href="http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero"><code>SameValueZero</code></a> for equality comparisons. If <code>fromIndex</code> is negative, it\'s used as the offset from the end of <code>array</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="support">indexOf</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;1</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Search&nbsp;from&nbsp;the&nbsp;`fromIndex`.</span></div><div>_<span class="delimiter method">.</span><span class="support">indexOf</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7450">source</a> <a href="https://www.npmjs.com/package/lodash.indexof">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.indexOf(array, value, [fromIndex=0])',
        methodName: 'indexOf',
        related_methods: [],
        returns:
            '<em>(number)</em>: Returns the index of the matched value, else <code>-1</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '029697245738922896',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to fill.</li><li><code>value</code> <em>(*)</em>: The value to fill <code>array</code> with.</li><li><code>[start=0]</code> <em>(number)</em>: The start position.</li><li><code>[end=array.length]</code> <em>(number)</em>: The end position.</li>',
        category: 'Array Methods',
        description:
            'Fills elements of <code>array</code> with <code>value</code> from <code>start</code> up to, but not including, <code>end</code>.<br><br><strong>Note:</strong> This method mutates <code>array</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">fill</span>(array<span class="delimiter">,</span>&nbsp;<span class="string">\'a\'</span>);</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(array);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'a\',&nbsp;\'a\',&nbsp;\'a\']</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">fill</span>(<span class="support">Array</span>(<span class="numeric">3</span>)<span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;2,&nbsp;2]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">fill</span>([<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="numeric">6</span><span class="delimiter">,</span>&nbsp;<span class="numeric">8</span><span class="delimiter">,</span>&nbsp;<span class="numeric">10</span>]<span class="delimiter">,</span>&nbsp;<span class="string">\'*\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[4,&nbsp;\'*\',&nbsp;\'*\',&nbsp;10]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7202">source</a> <a href="https://www.npmjs.com/package/lodash.fill">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.fill(array, value, [start=0], [end=array.length])',
        methodName: 'fill',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '055195730859949124',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array of grouped elements to process.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The function to combine regrouped values.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#unzip"><code>_.unzip</code></a> except that it accepts <code>iteratee</code> to specify how regrouped values should be combined. The iteratee is invoked with the elements of each group: <em>(...group)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;zipped&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">zip</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">10</span><span class="delimiter">,</span>&nbsp;<span class="numeric">20</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">100</span><span class="delimiter">,</span>&nbsp;<span class="numeric">200</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[[1,&nbsp;10,&nbsp;100],&nbsp;[2,&nbsp;20,&nbsp;200]]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">unzipWith</span>(zipped<span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>add);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[3,&nbsp;30,&nbsp;300]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8502">source</a> <a href="https://www.npmjs.com/package/lodash.unzipwith">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.unzipWith(array, [iteratee=_.identity])',
        methodName: 'unzipWith',
        related_methods: [],
        returns:
            '<em>(Array)</em>: Returns the new array of regrouped elements.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '06739837396025493',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to query.</li>',
        category: 'Array Methods',
        description: 'Gets the last element of <code>array</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">last</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7609">source</a> <a href="https://www.npmjs.com/package/lodash.last">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.last(array)',
        methodName: 'last',
        related_methods: [],
        returns:
            '<em>(*)</em>: Returns the last element of <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '10483494622498447',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[arrays]</code> <em>(...Array)</em>: The arrays to inspect.</li><li><code>[comparator]</code> <em>(Function)</em>: The comparator invoked per element.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#xor"><code>_.xor</code></a> except that it accepts <code>comparator</code> which is invoked to compare elements of <code>arrays</code>. The order of result values is determined by the order they occur in the arrays. The comparator is invoked with two arguments: <em>(arrVal, othVal)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}];</div><div><span class="type">var</span>&nbsp;others&nbsp;=&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">xorWith</span>(objects<span class="delimiter">,</span>&nbsp;others<span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>isEqual);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'x\':&nbsp;2,&nbsp;\'y\':&nbsp;1&nbsp;},&nbsp;{&nbsp;\'x\':&nbsp;1,&nbsp;\'y\':&nbsp;1&nbsp;}]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8615">source</a> <a href="https://www.npmjs.com/package/lodash.xorwith">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.xorWith([arrays], [comparator])',
        methodName: 'xorWith',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new array of filtered values.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '1424730039360794',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to compact.</li>',
        category: 'Array Methods',
        description:
            'Creates an array with all falsey values removed. The values <code>false</code>, <code>null</code>, <code>0</code>, <code>""</code>, <code>undefined</code>, and <code>NaN</code> are falsey.',
        example:
            '<pre><div>_<span class="delimiter">.</span><span class="support">compact</span>([<span class="numeric">0</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;false<span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="string">\'\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L6874">source</a> <a href="https://www.npmjs.com/package/lodash.compact">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.compact(array)',
        methodName: 'compact',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new array of filtered values.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '16959051192803593',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[arrays]</code> <em>(...Array)</em>: The arrays to process.</li>',
        category: 'Array Methods',
        description:
            'Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">zip</span>([<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]<span class="delimiter">,</span>&nbsp;[true<span class="delimiter">,</span>&nbsp;false]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[[\'a\',&nbsp;1,&nbsp;true],&nbsp;[\'b\',&nbsp;2,&nbsp;false]]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8637">source</a> <a href="https://www.npmjs.com/package/lodash.zip">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.zip([arrays])',
        methodName: 'zip',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new array of grouped elements.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '1703440322008984',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to modify.</li><li><code>[values]</code> <em>(...*)</em>: The values to remove.</li>',
        category: 'Array Methods',
        description:
            'Removes all given values from <code>array</code> using <a href="http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero"><code>SameValueZero</code></a> for equality comparisons.<br><br><strong>Note:</strong> Unlike <a href="#without"><code>_.without</code></a>, this method mutates <code>array</code>. Use <a href="#remove"><code>_.remove</code></a> to remove elements from an array by predicate.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">pull</span>(array<span class="delimiter">,</span>&nbsp;<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>);</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(array);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'b\',&nbsp;\'b\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7698">source</a> <a href="https://www.npmjs.com/package/lodash.pull">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.pull(array, [values])',
        methodName: 'pull',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '17873406956475152',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to modify.</li><li><code>values</code> <em>(Array)</em>: The values to remove.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The iteratee invoked per element.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#pullAll"><code>_.pullAll</code></a> except that it accepts <code>iteratee</code> which is invoked for each element of <code>array</code> and <code>values</code> to generate the criterion by which they\'re compared. The iteratee is invoked with one argument: <em>(value)</em>.<br><br><strong>Note:</strong> Unlike <a href="#differenceBy"><code>_.differenceBy</code></a>, this method mutates <code>array</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">pullAllBy</span>(array<span class="delimiter">,</span>&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;}]<span class="delimiter">,</span>&nbsp;<span class="string">\'x\'</span>);</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(array);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'x\':&nbsp;2&nbsp;}]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7749">source</a> <a href="https://www.npmjs.com/package/lodash.pullallby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.pullAllBy(array, values, [iteratee=_.identity])',
        methodName: 'pullAllBy',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '17958072682089402',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to modify.</li>',
        category: 'Array Methods',
        description:
            'Reverses <code>array</code> so that the first element becomes the last, the second element becomes the second to last, and so on.<br><br><strong>Note:</strong> This method mutates <code>array</code> and is based on <a href="https://mdn.io/Array/reverse"><code>Array#reverse</code></a>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="support">reverse</span>(array);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[3,&nbsp;2,&nbsp;1]</span></div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(array);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[3,&nbsp;2,&nbsp;1]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7891">source</a> <a href="https://www.npmjs.com/package/lodash.reverse">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.reverse(array)',
        methodName: 'reverse',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '24952686803132254',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[props=[]]</code> <em>(Array)</em>: The property identifiers.</li><li><code>[values=[]]</code> <em>(Array)</em>: The property values.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#zipObject"><code>_.zipObject</code></a> except that it supports property paths.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">zipObjectDeep</span>([<span class="string">\'a.b[0].c\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'a.b[1].d\'</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;{&nbsp;\'b\':&nbsp;[{&nbsp;\'c\':&nbsp;1&nbsp;},&nbsp;{&nbsp;\'d\':&nbsp;2&nbsp;}]&nbsp;}&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8674">source</a> <a href="https://www.npmjs.com/package/lodash.zipobjectdeep">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.zipObjectDeep([props=[]], [values=[]])',
        methodName: 'zipObjectDeep',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the new object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '2632421232570293',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to inspect.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The iteratee invoked per element.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#uniq"><code>_.uniq</code></a> except that it accepts <code>iteratee</code> which is invoked for each element in <code>array</code> to generate the criterion by which uniqueness is computed. The order of result values is determined by the order they occur in the array. The iteratee is invoked with one argument:<br><em>(value)</em>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">uniqBy</span>([<span class="numeric">2<span class="delimiter">.</span>1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1<span class="delimiter">.</span>2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2<span class="delimiter">.</span>3</span>]<span class="delimiter">,</span>&nbsp;<span class="support">Math</span><span class="delimiter">.</span>floor);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2.1,&nbsp;1.2]</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">uniqBy</span>([{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}]<span class="delimiter">,</span>&nbsp;<span class="string">\'x\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'x\':&nbsp;1&nbsp;},&nbsp;{&nbsp;\'x\':&nbsp;2&nbsp;}]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8417">source</a> <a href="https://www.npmjs.com/package/lodash.uniqby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.uniqBy(array, [iteratee=_.identity])',
        methodName: 'uniqBy',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new duplicate free array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '2913541165223757',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to flatten.</li>',
        category: 'Array Methods',
        description: 'Flattens <code>array</code> a single level deep.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">flatten</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;[<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;[<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;[<span class="numeric">4</span>]]<span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>]]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;[3,&nbsp;[4]],&nbsp;5]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7325">source</a> <a href="https://www.npmjs.com/package/lodash.flatten">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.flatten(array)',
        methodName: 'flatten',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new flattened array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '3077153577595764',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to query.</li><li><code>[n=1]</code> <em>(number)</em>: The number of elements to drop.</li>',
        category: 'Array Methods',
        description:
            'Creates a slice of <code>array</code> with <code>n</code> elements dropped from the beginning.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">drop</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;3]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">drop</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[3]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">drop</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">drop</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">0</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7047">source</a> <a href="https://www.npmjs.com/package/lodash.drop">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.drop(array, [n=1])',
        methodName: 'drop',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the slice of <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '32311009172720007',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[arrays]</code> <em>(...Array)</em>: The arrays to inspect.</li>',
        category: 'Array Methods',
        description:
            'Creates an array of unique values that is the <a href="https://en.wikipedia.org/wiki/Symmetric_difference">symmetric difference</a> of the given arrays. The order of result values is determined by the order they occur in the arrays.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">xor</span>([<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;3]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8559">source</a> <a href="https://www.npmjs.com/package/lodash.xor">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.xor([arrays])',
        methodName: 'xor',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new array of filtered values.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '34019964327796415',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to inspect.</li>',
        category: 'Array Methods',
        description:
            'Creates a duplicate-free version of an array, using <a href="http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero"><code>SameValueZero</code></a> for equality comparisons, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">uniq</span>([<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;1]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8390">source</a> <a href="https://www.npmjs.com/package/lodash.uniq">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.uniq(array)',
        methodName: 'uniq',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new duplicate free array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '3668930084431309',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to inspect.</li><li><code>[values]</code> <em>(...Array)</em>: The values to exclude.</li><li><code>[comparator]</code> <em>(Function)</em>: The comparator invoked per element.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#difference"><code>_.difference</code></a> except that it accepts <code>comparator</code> which is invoked to compare elements of <code>array</code> to <code>values</code>. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: <em>(arrVal, othVal)</em>.<br><br><strong>Note:</strong> Unlike <a href="#pullAllWith"><code>_.pullAllWith</code></a>, this method returns a new array.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">differenceWith</span>(objects<span class="delimiter">,</span>&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}]<span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>isEqual);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'x\':&nbsp;2,&nbsp;\'y\':&nbsp;1&nbsp;}]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7012">source</a> <a href="https://www.npmjs.com/package/lodash.differencewith">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.differenceWith(array, [values], [comparator])',
        methodName: 'differenceWith',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new array of filtered values.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '37982026520642054',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to query.</li>',
        category: 'Array Methods',
        description: 'Gets all but the last element of <code>array</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">initial</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7476">source</a> <a href="https://www.npmjs.com/package/lodash.initial">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.initial(array)',
        methodName: 'initial',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the slice of <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '4062400884628575',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[arrays]</code> <em>(...Array)</em>: The arrays to inspect.</li>',
        category: 'Array Methods',
        description:
            'Creates an array of unique values that are included in all given arrays using <a href="http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero"><code>SameValueZero</code></a> for equality comparisons. The order and references of result values are determined by the first array.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">intersection</span>([<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7498">source</a> <a href="https://www.npmjs.com/package/lodash.intersection">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.intersection([arrays])',
        methodName: 'intersection',
        related_methods: [],
        returns:
            '<em>(Array)</em>: Returns the new array of intersecting values.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '42130314986424644',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to query.</li><li><code>[n=0]</code> <em>(number)</em>: The index of the element to return.</li>',
        category: 'Array Methods',
        description:
            'Gets the element at index <code>n</code> of <code>array</code>. If <code>n</code> is negative, the nth element from the end is returned.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'d\'</span>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">nth</span>(array<span class="delimiter">,</span>&nbsp;<span class="numeric">1</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'b\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">nth</span>(array<span class="delimiter">,</span>&nbsp;-<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'c\';</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7671">source</a> <a href="https://www.npmjs.com/package/lodash.nth">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.nth(array, [n=0])',
        methodName: 'nth',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the nth element of <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '42362764245543183',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to inspect.</li><li><code>value</code> <em>(*)</em>: The value to search for.</li><li><code>[fromIndex=array.length-1]</code> <em>(number)</em>: The index to search from.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#indexOf"><code>_.indexOf</code></a> except that it iterates over elements of <code>array</code> from right to left.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="support">lastIndexOf</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Search&nbsp;from&nbsp;the&nbsp;`fromIndex`.</span></div><div>_<span class="delimiter method">.</span><span class="support">lastIndexOf</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;1</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7635">source</a> <a href="https://www.npmjs.com/package/lodash.lastindexof">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.lastIndexOf(array, value, [fromIndex=array.length-1])',
        methodName: 'lastIndexOf',
        related_methods: [],
        returns:
            '<em>(number)</em>: Returns the index of the matched value, else <code>-1</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '4244245751282596',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to modify.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Array Methods',
        description:
            'Removes all elements from <code>array</code> that <code>predicate</code> returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: <em>(value, index, array)</em>.<br><br><strong>Note:</strong> Unlike <a href="#filter"><code>_.filter</code></a>, this method mutates <code>array</code>. Use <a href="#pull"><code>_.pull</code></a> to pull elements from an array by value.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>];</div><div><span class="type">var</span>&nbsp;evens&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">remove</span>(array<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(n)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;n&nbsp;%&nbsp;<span class="numeric">2</span>&nbsp;==&nbsp;<span class="numeric">0</span>;</div><div>});</div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(array);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;3]</span></div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(evens);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;4]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7847">source</a> <a href="https://www.npmjs.com/package/lodash.remove">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.remove(array, [predicate=_.identity])',
        methodName: 'remove',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new array of removed elements.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '44607080669050625',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The sorted array to inspect.</li><li><code>value</code> <em>(*)</em>: The value to evaluate.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The iteratee invoked per element.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#sortedLastIndex"><code>_.sortedLastIndex</code></a> except that it accepts <code>iteratee</code> which is invoked for <code>value</code> and each element of <code>array</code> to compute their sort ranking. The iteratee is invoked with one argument: <em>(value)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">4</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">5</span>&nbsp;}];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">sortedLastIndexBy</span>(objects<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">4</span>&nbsp;}<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;o<span class="delimiter">.</span><span class="support">x</span>;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;1</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">sortedLastIndexBy</span>(objects<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">4</span>&nbsp;}<span class="delimiter">,</span>&nbsp;<span class="string">\'x\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;1</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8051">source</a> <a href="https://www.npmjs.com/package/lodash.sortedlastindexby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.sortedLastIndexBy(array, value, [iteratee=_.identity])',
        methodName: 'sortedLastIndexBy',
        related_methods: [],
        returns:
            '<em>(number)</em>: Returns the index at which <code>value</code> should be inserted into <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '49220700982824095',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The sorted array to inspect.</li><li><code>value</code> <em>(*)</em>: The value to evaluate.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#sortedIndex"><code>_.sortedIndex</code></a> except that it returns the highest index at which <code>value</code> should be inserted into <code>array</code> in order to maintain its sort order.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">sortedLastIndex</span>([<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;<span class="numeric">6</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;4</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8022">source</a> <a href="https://www.npmjs.com/package/lodash.sortedlastindex">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.sortedLastIndex(array, value)',
        methodName: 'sortedLastIndex',
        related_methods: [],
        returns:
            '<em>(number)</em>: Returns the index at which <code>value</code> should be inserted into <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '49826615749257225',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[arrays]</code> <em>(...Array)</em>: The arrays to process.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The function to combine grouped values.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#zip"><code>_.zip</code></a> except that it accepts <code>iteratee</code> to specify how grouped values should be combined. The iteratee is invoked with the elements of each group: <em>(...group)</em>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">zipWith</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">10</span><span class="delimiter">,</span>&nbsp;<span class="numeric">20</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">100</span><span class="delimiter">,</span>&nbsp;<span class="numeric">200</span>]<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(a<span class="delimiter">,</span>&nbsp;b<span class="delimiter">,</span>&nbsp;c)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;a&nbsp;+&nbsp;b&nbsp;+&nbsp;c;</div><div>});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[111,&nbsp;222]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8698">source</a> <a href="https://www.npmjs.com/package/lodash.zipwith">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.zipWith([arrays], [iteratee=_.identity])',
        methodName: 'zipWith',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new array of grouped elements.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5027955787312847',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to modify.</li><li><code>values</code> <em>(Array)</em>: The values to remove.</li><li><code>[comparator]</code> <em>(Function)</em>: The comparator invoked per element.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#pullAll"><code>_.pullAll</code></a> except that it accepts <code>comparator</code> which is invoked to compare elements of <code>array</code> to <code>values</code>. The comparator is invoked with two arguments: <em>(arrVal, othVal)</em>.<br><br><strong>Note:</strong> Unlike <a href="#differenceWith"><code>_.differenceWith</code></a>, this method mutates <code>array</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">4</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">6</span>&nbsp;}];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">pullAllWith</span>(array<span class="delimiter">,</span>&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">4</span>&nbsp;}]<span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>isEqual);</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(array);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'x\':&nbsp;1,&nbsp;\'y\':&nbsp;2&nbsp;},&nbsp;{&nbsp;\'x\':&nbsp;5,&nbsp;\'y\':&nbsp;6&nbsp;}]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7778">source</a> <a href="https://www.npmjs.com/package/lodash.pullallwith">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.pullAllWith(array, values, [comparator])',
        methodName: 'pullAllWith',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5376265526553171',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[arrays]</code> <em>(...Array)</em>: The arrays to inspect.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The iteratee invoked per element.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#xor"><code>_.xor</code></a> except that it accepts <code>iteratee</code> which is invoked for each element of each <code>arrays</code> to generate the criterion by which by which they\'re compared. The order of result values is determined by the order they occur in the arrays. The iteratee is invoked with one argument: <em>(value)</em>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">xorBy</span>([<span class="numeric">2<span class="delimiter">.</span>1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1<span class="delimiter">.</span>2</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">2<span class="delimiter">.</span>3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3<span class="delimiter">.</span>4</span>]<span class="delimiter">,</span>&nbsp;<span class="support">Math</span><span class="delimiter">.</span>floor);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1.2,&nbsp;3.4]</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">xorBy</span>([{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}]<span class="delimiter">,</span>&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}]<span class="delimiter">,</span>&nbsp;<span class="string">\'x\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'x\':&nbsp;2&nbsp;}]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8586">source</a> <a href="https://www.npmjs.com/package/lodash.xorby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.xorBy([arrays], [iteratee=_.identity])',
        methodName: 'xorBy',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new array of filtered values.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5522260521204594',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to inspect.</li><li><code>value</code> <em>(*)</em>: The value to search for.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#indexOf"><code>_.indexOf</code></a> except that it performs a binary search on a sorted <code>array</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">sortedIndexOf</span>([<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;<span class="numeric">6</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;1</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7993">source</a> <a href="https://www.npmjs.com/package/lodash.sortedindexof">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.sortedIndexOf(array, value)',
        methodName: 'sortedIndexOf',
        related_methods: [],
        returns:
            '<em>(number)</em>: Returns the index of the matched value, else <code>-1</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5581078714562856',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to modify.</li><li><code>[indexes]</code> <em>(...(number|number[]))</em>: The indexes of elements to remove.</li>',
        category: 'Array Methods',
        description:
            'Removes elements from <code>array</code> corresponding to <code>indexes</code> and returns an array of removed elements.<br><br><strong>Note:</strong> Unlike <a href="#at"><code>_.at</code></a>, this method mutates <code>array</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'d\'</span>];</div><div><span class="type">var</span>&nbsp;pulled&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">pullAt</span>(array<span class="delimiter">,</span>&nbsp;[<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(array);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'a\',&nbsp;\'c\']</span></div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(pulled);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'b\',&nbsp;\'d\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7808">source</a> <a href="https://www.npmjs.com/package/lodash.pullat">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.pullAt(array, [indexes])',
        methodName: 'pullAt',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new array of removed elements.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5590671785853379',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to inspect.</li><li><code>[iteratee]</code> <em>(Function)</em>: The iteratee invoked per element.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#uniqBy"><code>_.uniqBy</code></a> except that it\'s designed and optimized for sorted arrays.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">sortedUniqBy</span>([<span class="numeric">1<span class="delimiter">.</span>1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1<span class="delimiter">.</span>2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2<span class="delimiter">.</span>3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2<span class="delimiter">.</span>4</span>]<span class="delimiter">,</span>&nbsp;<span class="support">Math</span><span class="delimiter">.</span>floor);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1.1,&nbsp;2.3]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8119">source</a> <a href="https://www.npmjs.com/package/lodash.sorteduniqby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.sortedUniqBy(array, [iteratee])',
        methodName: 'sortedUniqBy',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new duplicate free array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5685513989162433',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to query.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Array Methods',
        description:
            'Creates a slice of <code>array</code> excluding elements dropped from the beginning. Elements are dropped until <code>predicate</code> returns falsey. The predicate is invoked with three arguments: <em>(value, index, array)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'pebbles\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}</div><div>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">dropWhile</span>(users<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;!o<span class="delimiter">.</span>active;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'pebbles\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matches`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">dropWhile</span>(users<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'fred\',&nbsp;\'pebbles\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matchesProperty`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">dropWhile</span>(users<span class="delimiter">,</span>&nbsp;[<span class="string">\'active\'</span><span class="delimiter">,</span>&nbsp;false]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'pebbles\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">dropWhile</span>(users<span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'barney\',&nbsp;\'fred\',&nbsp;\'pebbles\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7167">source</a> <a href="https://www.npmjs.com/package/lodash.dropwhile">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.dropWhile(array, [predicate=_.identity])',
        methodName: 'dropWhile',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the slice of <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5775898408570779',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to modify.</li><li><code>values</code> <em>(Array)</em>: The values to remove.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#pull"><code>_.pull</code></a> except that it accepts an array of values to remove.<br><br><strong>Note:</strong> Unlike <a href="#difference"><code>_.difference</code></a>, this method mutates <code>array</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">pullAll</span>(array<span class="delimiter">,</span>&nbsp;[<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>]);</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(array);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'b\',&nbsp;\'b\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7720">source</a> <a href="https://www.npmjs.com/package/lodash.pullall">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.pullAll(array, values)',
        methodName: 'pullAll',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5789751922320996',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[arrays]</code> <em>(...Array)</em>: The arrays to inspect.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The iteratee invoked per element.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#intersection"><code>_.intersection</code></a> except that it accepts <code>iteratee</code> which is invoked for each element of each <code>arrays</code> to generate the criterion by which they\'re compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:<br><em>(value)</em>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">intersectionBy</span>([<span class="numeric">2<span class="delimiter">.</span>1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1<span class="delimiter">.</span>2</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">2<span class="delimiter">.</span>3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3<span class="delimiter">.</span>4</span>]<span class="delimiter">,</span>&nbsp;<span class="support">Math</span><span class="delimiter">.</span>floor);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2.1]</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">intersectionBy</span>([{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}]<span class="delimiter">,</span>&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}]<span class="delimiter">,</span>&nbsp;<span class="string">\'x\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'x\':&nbsp;1&nbsp;}]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7528">source</a> <a href="https://www.npmjs.com/package/lodash.intersectionby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.intersectionBy([arrays], [iteratee=_.identity])',
        methodName: 'intersectionBy',
        related_methods: [],
        returns:
            '<em>(Array)</em>: Returns the new array of intersecting values.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '58963755799486',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[arrays]</code> <em>(...Array)</em>: The arrays to inspect.</li><li><code>[comparator]</code> <em>(Function)</em>: The comparator invoked per element.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#union"><code>_.union</code></a> except that it accepts <code>comparator</code> which is invoked to compare elements of <code>arrays</code>. Result values are chosen from the first array in which the value occurs. The comparator is invoked with two arguments: <em>(arrVal, othVal)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}];</div><div><span class="type">var</span>&nbsp;others&nbsp;=&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">unionWith</span>(objects<span class="delimiter">,</span>&nbsp;others<span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>isEqual);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'x\':&nbsp;1,&nbsp;\'y\':&nbsp;2&nbsp;},&nbsp;{&nbsp;\'x\':&nbsp;2,&nbsp;\'y\':&nbsp;1&nbsp;},&nbsp;{&nbsp;\'x\':&nbsp;1,&nbsp;\'y\':&nbsp;1&nbsp;}]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8366">source</a> <a href="https://www.npmjs.com/package/lodash.unionwith">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.unionWith([arrays], [comparator])',
        methodName: 'unionWith',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new array of combined values.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6165643306460497',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to process.</li><li><code>[size=1]</code> <em>(number)</em>: The length of each chunk</li>',
        category: 'Array Methods',
        description:
            "Creates an array of elements split into groups the length of <code>size</code>. If <code>array</code> can't be split evenly, the final chunk will be the remaining elements.",
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">chunk</span>([<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'d\'</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[[\'a\',&nbsp;\'b\'],&nbsp;[\'c\',&nbsp;\'d\']]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">chunk</span>([<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'d\'</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[[\'a\',&nbsp;\'b\',&nbsp;\'c\'],&nbsp;[\'d\']]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L6839">source</a> <a href="https://www.npmjs.com/package/lodash.chunk">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.chunk(array, [size=1])',
        methodName: 'chunk',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new array of chunks.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6298662207878952',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to query.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Array Methods',
        description:
            'Creates a slice of <code>array</code> with elements taken from the end. Elements are taken until <code>predicate</code> returns falsey. The predicate is invoked with three arguments: <em>(value, index, array)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'pebbles\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}</div><div>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">takeRightWhile</span>(users<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;!o<span class="delimiter">.</span>active;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'fred\',&nbsp;\'pebbles\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matches`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">takeRightWhile</span>(users<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'pebbles\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'pebbles\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matchesProperty`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">takeRightWhile</span>(users<span class="delimiter">,</span>&nbsp;[<span class="string">\'active\'</span><span class="delimiter">,</span>&nbsp;false]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'fred\',&nbsp;\'pebbles\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">takeRightWhile</span>(users<span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8247">source</a> <a href="https://www.npmjs.com/package/lodash.takerightwhile">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.takeRightWhile(array, [predicate=_.identity])',
        methodName: 'takeRightWhile',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the slice of <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6741274276657307',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to inspect.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li><li><code>[fromIndex=0]</code> <em>(number)</em>: The index to search from.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#find"><code>_.find</code></a> except that it returns the index of the first element <code>predicate</code> returns truthy for instead of the element itself.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'pebbles\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}</div><div>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">findIndex</span>(users<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;o<span class="delimiter">.</span>user&nbsp;==&nbsp;<span class="string">\'barney\'</span>;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;0</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matches`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">findIndex</span>(users<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;1</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matchesProperty`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">findIndex</span>(users<span class="delimiter">,</span>&nbsp;[<span class="string">\'active\'</span><span class="delimiter">,</span>&nbsp;false]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;0</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">findIndex</span>(users<span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;2</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7249">source</a> <a href="https://www.npmjs.com/package/lodash.findindex">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.findIndex(array, [predicate=_.identity], [fromIndex=0])',
        methodName: 'findIndex',
        related_methods: [],
        returns:
            '<em>(number)</em>: Returns the index of the found element, else <code>-1</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6823725209141134',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to concatenate.</li><li><code>[values]</code> <em>(...*)</em>: The values to concatenate.</li>',
        category: 'Array Methods',
        description:
            'Creates a new array concatenating <code>array</code> with any additional arrays and/or values.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[<span class="numeric">1</span>];</div><div><span class="type">var</span>&nbsp;other&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="support">concat</span>(array<span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;[<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;[[<span class="numeric">4</span>]]);</div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(other);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3,&nbsp;[4]]</span></div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(array);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L6911">source</a> <a href="https://www.npmjs.com/package/lodash.concat">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.concat(array, [values])',
        methodName: 'concat',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new concatenated array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6985041328972638',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to inspect.</li><li><code>[values]</code> <em>(...Array)</em>: The values to exclude.</li>',
        category: 'Array Methods',
        description:
            'Creates an array of <code>array</code> values not included in the other given arrays using <a href="http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero"><code>SameValueZero</code></a> for equality comparisons. The order and references of result values are determined by the first array.<br><br><strong>Note:</strong> Unlike <a href="#pullAll"><code>_.pullAll</code></a>, this method returns a new array.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">difference</span>([<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L6947">source</a> <a href="https://www.npmjs.com/package/lodash.difference">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.difference(array, [values])',
        methodName: 'difference',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new array of filtered values.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7012201343400267',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments: '<em>_.first</em>',
        category: 'Array Methods',
        description: 'Gets the first element of <code>array</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">head</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;1</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">head</span>([]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;undefined</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7423">source</a> <a href="https://www.npmjs.com/package/lodash.head">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.head(array)',
        methodName: 'head',
        related_methods: [],
        returns:
            '<em>(*)</em>: Returns the first element of <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7027310569269111',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The sorted array to inspect.</li><li><code>value</code> <em>(*)</em>: The value to evaluate.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The iteratee invoked per element.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#sortedIndex"><code>_.sortedIndex</code></a> except that it accepts <code>iteratee</code> which is invoked for <code>value</code> and each element of <code>array</code> to compute their sort ranking. The iteratee is invoked with one argument: <em>(value)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">4</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">5</span>&nbsp;}];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">sortedIndexBy</span>(objects<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">4</span>&nbsp;}<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;o<span class="delimiter">.</span><span class="support">x</span>;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;0</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">sortedIndexBy</span>(objects<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">4</span>&nbsp;}<span class="delimiter">,</span>&nbsp;<span class="string">\'x\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;0</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7973">source</a> <a href="https://www.npmjs.com/package/lodash.sortedindexby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.sortedIndexBy(array, value, [iteratee=_.identity])',
        methodName: 'sortedIndexBy',
        related_methods: [],
        returns:
            '<em>(number)</em>: Returns the index at which <code>value</code> should be inserted into <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7145518358359149',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to flatten.</li><li><code>[depth=1]</code> <em>(number)</em>: The maximum recursion depth.</li>',
        category: 'Array Methods',
        description:
            'Recursively flatten <code>array</code> up to <code>depth</code> times.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;[<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;[<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;[<span class="numeric">4</span>]]<span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>]];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">flattenDepth</span>(array<span class="delimiter">,</span>&nbsp;<span class="numeric">1</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;[3,&nbsp;[4]],&nbsp;5]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">flattenDepth</span>(array<span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3,&nbsp;[4],&nbsp;5]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7369">source</a> <a href="https://www.npmjs.com/package/lodash.flattendepth">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.flattenDepth(array, [depth=1])',
        methodName: 'flattenDepth',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new flattened array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7379915095870162',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array of grouped elements to process.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#zip"><code>_.zip</code></a> except that it accepts an array of grouped elements and creates an array regrouping the elements to their pre-zip configuration.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;zipped&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">zip</span>([<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]<span class="delimiter">,</span>&nbsp;[true<span class="delimiter">,</span>&nbsp;false]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[[\'a\',&nbsp;1,&nbsp;true],&nbsp;[\'b\',&nbsp;2,&nbsp;false]]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">unzip</span>(zipped);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[[\'a\',&nbsp;\'b\'],&nbsp;[1,&nbsp;2],&nbsp;[true,&nbsp;false]]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8465">source</a> <a href="https://www.npmjs.com/package/lodash.unzip">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.unzip(array)',
        methodName: 'unzip',
        related_methods: [],
        returns:
            '<em>(Array)</em>: Returns the new array of regrouped elements.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '747694108660786',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[arrays]</code> <em>(...Array)</em>: The arrays to inspect.</li><li><code>[comparator]</code> <em>(Function)</em>: The comparator invoked per element.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#intersection"><code>_.intersection</code></a> except that it accepts <code>comparator</code> which is invoked to compare elements of <code>arrays</code>. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: <em>(arrVal, othVal)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}];</div><div><span class="type">var</span>&nbsp;others&nbsp;=&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">intersectionWith</span>(objects<span class="delimiter">,</span>&nbsp;others<span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>isEqual);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'x\':&nbsp;1,&nbsp;\'y\':&nbsp;2&nbsp;}]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7563">source</a> <a href="https://www.npmjs.com/package/lodash.intersectionwith">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.intersectionWith([arrays], [comparator])',
        methodName: 'intersectionWith',
        related_methods: [],
        returns:
            '<em>(Array)</em>: Returns the new array of intersecting values.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7569405970110094',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to inspect.</li><li><code>[values]</code> <em>(...Array)</em>: The values to exclude.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The iteratee invoked per element.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#difference"><code>_.difference</code></a> except that it accepts <code>iteratee</code> which is invoked for each element of <code>array</code> and <code>values</code> to generate the criterion by which they\'re compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:<br><em>(value)</em>.<br><br><strong>Note:</strong> Unlike <a href="#pullAllBy"><code>_.pullAllBy</code></a>, this method returns a new array.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">differenceBy</span>([<span class="numeric">2<span class="delimiter">.</span>1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1<span class="delimiter">.</span>2</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">2<span class="delimiter">.</span>3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3<span class="delimiter">.</span>4</span>]<span class="delimiter">,</span>&nbsp;<span class="support">Math</span><span class="delimiter">.</span>floor);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1.2]</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">differenceBy</span>([{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}]<span class="delimiter">,</span>&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}]<span class="delimiter">,</span>&nbsp;<span class="string">\'x\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'x\':&nbsp;2&nbsp;}]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L6979">source</a> <a href="https://www.npmjs.com/package/lodash.differenceby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.differenceBy(array, [values], [iteratee=_.identity])',
        methodName: 'differenceBy',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new array of filtered values.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7598070012152254',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[arrays]</code> <em>(...Array)</em>: The arrays to inspect.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The iteratee invoked per element.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#union"><code>_.union</code></a> except that it accepts <code>iteratee</code> which is invoked for each element of each <code>arrays</code> to generate the criterion by which uniqueness is computed. Result values are chosen from the first array in which the value occurs. The iteratee is invoked with one argument:<br><em>(value)</em>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">unionBy</span>([<span class="numeric">2<span class="delimiter">.</span>1</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">1<span class="delimiter">.</span>2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2<span class="delimiter">.</span>3</span>]<span class="delimiter">,</span>&nbsp;<span class="support">Math</span><span class="delimiter">.</span>floor);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2.1,&nbsp;1.2]</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">unionBy</span>([{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}]<span class="delimiter">,</span>&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}]<span class="delimiter">,</span>&nbsp;<span class="string">\'x\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'x\':&nbsp;1&nbsp;},&nbsp;{&nbsp;\'x\':&nbsp;2&nbsp;}]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8337">source</a> <a href="https://www.npmjs.com/package/lodash.unionby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.unionBy([arrays], [iteratee=_.identity])',
        methodName: 'unionBy',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new array of combined values.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7690802769683669',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to slice.</li><li><code>[start=0]</code> <em>(number)</em>: The start position.</li><li><code>[end=array.length]</code> <em>(number)</em>: The end position.</li>',
        category: 'Array Methods',
        description:
            'Creates a slice of <code>array</code> from <code>start</code> up to, but not including, <code>end</code>.<br><br><strong>Note:</strong> This method is used instead of <a href="https://mdn.io/Array/slice"><code>Array#slice</code></a> to ensure dense arrays are returned.',
        example: 'Returns',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7911">source</a> <a href="https://www.npmjs.com/package/lodash.slice">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.slice(array, [start=0], [end=array.length])',
        methodName: 'slice',
        related_methods: [],
        returns: 'Arguments',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8091736798846851',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to inspect.</li><li><code>[comparator]</code> <em>(Function)</em>: The comparator invoked per element.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#uniq"><code>_.uniq</code></a> except that it accepts <code>comparator</code> which is invoked to compare elements of <code>array</code>. The order of result values is determined by the order they occur in the array.The comparator is invoked with two arguments: <em>(arrVal, othVal)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">uniqWith</span>(objects<span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>isEqual);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'x\':&nbsp;1,&nbsp;\'y\':&nbsp;2&nbsp;},&nbsp;{&nbsp;\'x\':&nbsp;2,&nbsp;\'y\':&nbsp;1&nbsp;}]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8441">source</a> <a href="https://www.npmjs.com/package/lodash.uniqwith">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.uniqWith(array, [comparator])',
        methodName: 'uniqWith',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new duplicate free array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '813730748058155',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to flatten.</li>',
        category: 'Array Methods',
        description: 'Recursively flattens <code>array</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">flattenDeep</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;[<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;[<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;[<span class="numeric">4</span>]]<span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>]]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3,&nbsp;4,&nbsp;5]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7344">source</a> <a href="https://www.npmjs.com/package/lodash.flattendeep">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.flattenDeep(array)',
        methodName: 'flattenDeep',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new flattened array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8172757671125955',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>array</code> <em>(Array)</em>: The array to convert.</li><li><code>[separator=',']</code> <em>(string)</em>: The element separator.</li>",
        category: 'Array Methods',
        description:
            'Converts all elements in <code>array</code> into a string separated by <code>separator</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="support">join</span>([<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>]<span class="delimiter">,</span>&nbsp;<span class="string">\'~\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'a~b~c\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7591">source</a> <a href="https://www.npmjs.com/package/lodash.join">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.join(array, [separator=','])",
        methodName: 'join',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the joined string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8341589688111869',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[arrays]</code> <em>(...Array)</em>: The arrays to inspect.</li>',
        category: 'Array Methods',
        description:
            'Creates an array of unique values, in order, from all given arrays using <a href="http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero"><code>SameValueZero</code></a> for equality comparisons.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">union</span>([<span class="numeric">2</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;1]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8310">source</a> <a href="https://www.npmjs.com/package/lodash.union">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.union([arrays])',
        methodName: 'union',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new array of combined values.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8629576077441774',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to inspect.</li><li><code>value</code> <em>(*)</em>: The value to search for.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#lastIndexOf"><code>_.lastIndexOf</code></a> except that it performs a binary search on a sorted <code>array</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">sortedLastIndexOf</span>([<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;<span class="numeric">6</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8071">source</a> <a href="https://www.npmjs.com/package/lodash.sortedlastindexof">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.sortedLastIndexOf(array, value)',
        methodName: 'sortedLastIndexOf',
        related_methods: [],
        returns:
            '<em>(number)</em>: Returns the index of the matched value, else <code>-1</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8779236950223468',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to query.</li><li><code>[n=1]</code> <em>(number)</em>: The number of elements to take.</li>',
        category: 'Array Methods',
        description:
            'Creates a slice of <code>array</code> with <code>n</code> elements taken from the end.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">takeRight</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[3]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">takeRight</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;3]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">takeRight</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">takeRight</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">0</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8202">source</a> <a href="https://www.npmjs.com/package/lodash.takeright">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.takeRight(array, [n=1])',
        methodName: 'takeRight',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the slice of <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8896495524098612',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to inspect.</li><li><code>[values]</code> <em>(...*)</em>: The values to exclude.</li>',
        category: 'Array Methods',
        description:
            'Creates an array excluding all given values using <a href="http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero"><code>SameValueZero</code></a> for equality comparisons.<br><br><strong>Note:</strong> Unlike <a href="#pull"><code>_.pull</code></a>, this method returns a new array.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">without</span>([<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[3]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8535">source</a> <a href="https://www.npmjs.com/package/lodash.without">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.without(array, [values])',
        methodName: 'without',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new array of filtered values.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '891137862892982',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to inspect.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#uniq"><code>_.uniq</code></a> except that it\'s designed and optimized for sorted arrays.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">sortedUniq</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8097">source</a> <a href="https://www.npmjs.com/package/lodash.sorteduniq">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.sortedUniq(array)',
        methodName: 'sortedUniq',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new duplicate free array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '931309473979766',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to query.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Array Methods',
        description:
            'Creates a slice of <code>array</code> with elements taken from the beginning. Elements are taken until <code>predicate</code> returns falsey. The predicate is invoked with three arguments: <em>(value, index, array)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'pebbles\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}</div><div>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">takeWhile</span>(users<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;!o<span class="delimiter">.</span>active;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'barney\',&nbsp;\'fred\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matches`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">takeWhile</span>(users<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'barney\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matchesProperty`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">takeWhile</span>(users<span class="delimiter">,</span>&nbsp;[<span class="string">\'active\'</span><span class="delimiter">,</span>&nbsp;false]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'barney\',&nbsp;\'fred\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">takeWhile</span>(users<span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8288">source</a> <a href="https://www.npmjs.com/package/lodash.takewhile">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.takeWhile(array, [predicate=_.identity])',
        methodName: 'takeWhile',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the slice of <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9427695035586223',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to inspect.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li><li><code>[fromIndex=array.length-1]</code> <em>(number)</em>: The index to search from.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#findIndex"><code>_.findIndex</code></a> except that it iterates over elements of <code>collection</code> from right to left.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'pebbles\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}</div><div>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">findLastIndex</span>(users<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;o<span class="delimiter">.</span>user&nbsp;==&nbsp;<span class="string">\'pebbles\'</span>;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;2</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matches`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">findLastIndex</span>(users<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;0</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matchesProperty`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">findLastIndex</span>(users<span class="delimiter">,</span>&nbsp;[<span class="string">\'active\'</span><span class="delimiter">,</span>&nbsp;false]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;2</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">findLastIndex</span>(users<span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;0</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7296">source</a> <a href="https://www.npmjs.com/package/lodash.findlastindex">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])',
        methodName: 'findLastIndex',
        related_methods: [],
        returns:
            '<em>(number)</em>: Returns the index of the found element, else <code>-1</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9571235771508858',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to query.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Array Methods',
        description:
            'Creates a slice of <code>array</code> excluding elements dropped from the end. Elements are dropped until <code>predicate</code> returns falsey. The predicate is invoked with three arguments: <em>(value, index, array)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'pebbles\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}</div><div>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">dropRightWhile</span>(users<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;!o<span class="delimiter">.</span>active;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'barney\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matches`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">dropRightWhile</span>(users<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'pebbles\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'barney\',&nbsp;\'fred\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matchesProperty`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">dropRightWhile</span>(users<span class="delimiter">,</span>&nbsp;[<span class="string">\'active\'</span><span class="delimiter">,</span>&nbsp;false]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'barney\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">dropRightWhile</span>(users<span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'barney\',&nbsp;\'fred\',&nbsp;\'pebbles\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7126">source</a> <a href="https://www.npmjs.com/package/lodash.droprightwhile">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.dropRightWhile(array, [predicate=_.identity])',
        methodName: 'dropRightWhile',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the slice of <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '981874107147779',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[props=[]]</code> <em>(Array)</em>: The property identifiers.</li><li><code>[values=[]]</code> <em>(Array)</em>: The property values.</li>',
        category: 'Array Methods',
        description:
            'This method is like <a href="#fromPairs"><code>_.fromPairs</code></a> except that it accepts two arrays, one of property identifiers and one of corresponding values.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">zipObject</span>([<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;1,&nbsp;\'b\':&nbsp;2&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8655">source</a> <a href="https://www.npmjs.com/package/lodash.zipobject">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.zipObject([props=[]], [values=[]])',
        methodName: 'zipObject',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the new object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9851634342396604',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to query.</li><li><code>[n=1]</code> <em>(number)</em>: The number of elements to drop.</li>',
        category: 'Array Methods',
        description:
            'Creates a slice of <code>array</code> with <code>n</code> elements dropped from the end.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">dropRight</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">dropRight</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">dropRight</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">dropRight</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">0</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7081">source</a> <a href="https://www.npmjs.com/package/lodash.dropright">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.dropRight(array, [n=1])',
        methodName: 'dropRight',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the slice of <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9852724343504057',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to query.</li><li><code>[n=1]</code> <em>(number)</em>: The number of elements to take.</li>',
        category: 'Array Methods',
        description:
            'Creates a slice of <code>array</code> with <code>n</code> elements taken from the beginning.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">take</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">take</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">take</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">take</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">0</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8169">source</a> <a href="https://www.npmjs.com/package/lodash.take">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.take(array, [n=1])',
        methodName: 'take',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the slice of <code>array</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9893504075182679',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>pairs</code> <em>(Array)</em>: The key-value pairs.</li>',
        category: 'Array Methods',
        description:
            'The inverse of <a href="#toPairs"><code>_.toPairs</code></a>; this method returns an object composed from key-value <code>pairs</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">fromPairs</span>([[<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span>]<span class="delimiter">,</span>&nbsp;[<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;1,&nbsp;\'b\':&nbsp;2&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7393">source</a> <a href="https://www.npmjs.com/package/lodash.frompairs">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.fromPairs(pairs)',
        methodName: 'fromPairs',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the new object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '1137946379168245',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The iteratee to transform keys.</li>',
        category: 'Collection Methods',
        description:
            'Creates an object composed of keys generated from the results of running each element of <code>collection</code> thru <code>iteratee</code>. The corresponding value of each key is the number of times the key was returned by <code>iteratee</code>. The iteratee is invoked with one argument: <em>(value)</em>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">countBy</span>([<span class="numeric">6<span class="delimiter">.</span>1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4<span class="delimiter">.</span>2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">6<span class="delimiter">.</span>3</span>]<span class="delimiter">,</span>&nbsp;<span class="support">Math</span><span class="delimiter">.</span>floor);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'4\':&nbsp;1,&nbsp;\'6\':&nbsp;2&nbsp;}</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">countBy</span>([<span class="string">\'one\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'two\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'three\'</span>]<span class="delimiter">,</span>&nbsp;<span class="string">\'length\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'3\':&nbsp;2,&nbsp;\'5\':&nbsp;1&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9077">source</a> <a href="https://www.npmjs.com/package/lodash.countby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.countBy(collection, [iteratee=_.identity])',
        methodName: 'countBy',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the composed aggregate object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '1847034740446501',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Collection Methods',
        description:
            'Creates a flattened array of values by running each element in <code>collection</code> thru <code>iteratee</code> and flattening the mapped results. The iteratee is invoked with three arguments: <em>(value, index|key, collection)</em>.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">duplicate</span>(n)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;[n<span class="delimiter">,</span>&nbsp;n];</div><div>}</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">flatMap</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]<span class="delimiter">,</span>&nbsp;duplicate);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;1,&nbsp;2,&nbsp;2]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9256">source</a> <a href="https://www.npmjs.com/package/lodash.flatmap">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.flatMap(collection, [iteratee=_.identity])',
        methodName: 'flatMap',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new flattened array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '19879087998989312',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments: '<em>_.eachRight</em>',
        category: 'Collection Methods',
        description:
            'This method is like <a href="#forEach"><code>_.forEach</code></a> except that it iterates over elements of <code>collection</code> from right to left.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">forEachRight</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(value)&nbsp;{</div><div>&nbsp;&nbsp;<span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(value);</div><div>});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;Logs&nbsp;`2`&nbsp;then&nbsp;`1`.</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9365">source</a> <a href="https://www.npmjs.com/package/lodash.foreachright">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.forEachRight(collection, [iteratee=_.identity])',
        methodName: 'forEachRight',
        related_methods: [],
        returns: '<em>(*)</em>: Returns <code>collection</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '23058158041449597',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The iteratee to transform keys.</li>',
        category: 'Collection Methods',
        description:
            'Creates an object composed of keys generated from the results of running each element of <code>collection</code> thru <code>iteratee</code>. The order of grouped values is determined by the order they occur in <code>collection</code>. The corresponding value of each key is an array of elements responsible for generating the key. The iteratee is invoked with one argument: <em>(value)</em>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">groupBy</span>([<span class="numeric">6<span class="delimiter">.</span>1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4<span class="delimiter">.</span>2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">6<span class="delimiter">.</span>3</span>]<span class="delimiter">,</span>&nbsp;<span class="support">Math</span><span class="delimiter">.</span>floor);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'4\':&nbsp;[4.2],&nbsp;\'6\':&nbsp;[6.1,&nbsp;6.3]&nbsp;}</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">groupBy</span>([<span class="string">\'one\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'two\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'three\'</span>]<span class="delimiter">,</span>&nbsp;<span class="string">\'length\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'3\':&nbsp;[\'one\',&nbsp;\'two\'],&nbsp;\'5\':&nbsp;[\'three\']&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9393">source</a> <a href="https://www.npmjs.com/package/lodash.groupby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.groupBy(collection, [iteratee=_.identity])',
        methodName: 'groupBy',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the composed aggregate object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '2971920286786334',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to iterate over.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Collection Methods',
        description:
            'Iterates over elements of <code>collection</code>, returning an array of all elements <code>predicate</code> returns truthy for. The predicate is invoked with three arguments: <em>(value, index|key, collection)</em>.<br><br><strong>Note:</strong> Unlike <a href="#remove"><code>_.remove</code></a>, this method returns a new array.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">36</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">40</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}</div><div>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">filter</span>(users<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;!o<span class="delimiter">.</span>active;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'fred\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matches`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">filter</span>(users<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">36</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'barney\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matchesProperty`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">filter</span>(users<span class="delimiter">,</span>&nbsp;[<span class="string">\'active\'</span><span class="delimiter">,</span>&nbsp;false]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'fred\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">filter</span>(users<span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'barney\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9171">source</a> <a href="https://www.npmjs.com/package/lodash.filter">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.filter(collection, [predicate=_.identity])',
        methodName: 'filter',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new filtered array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '3369266972665614',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to inspect.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li><li><code>[fromIndex=collection.length-1]</code> <em>(number)</em>: The index to search from.</li>',
        category: 'Collection Methods',
        description:
            'This method is like <a href="#find"><code>_.find</code></a> except that it iterates over elements of <code>collection</code> from right to left.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">findLast</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>]<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(n)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;n&nbsp;%&nbsp;<span class="numeric">2</span>&nbsp;==&nbsp;<span class="numeric">1</span>;</div><div>});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9233">source</a> <a href="https://www.npmjs.com/package/lodash.findlast">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.findLast(collection, [predicate=_.identity], [fromIndex=collection.length-1])',
        methodName: 'findLast',
        related_methods: [],
        returns:
            '<em>(*)</em>: Returns the matched element, else <code>undefined</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '36867579695187874',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to iterate over.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Collection Methods',
        description:
            'Creates an array of elements split into two groups, the first of which contains elements <code>predicate</code> returns truthy for, the second of which contains elements <code>predicate</code> returns falsey for. The predicate is invoked with one argument: <em>(value)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">36</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">40</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'pebbles\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}</div><div>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">partition</span>(users<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;o<span class="delimiter">.</span>active;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[[\'fred\'],&nbsp;[\'barney\',&nbsp;\'pebbles\']]</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matches`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">partition</span>(users<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[[\'pebbles\'],&nbsp;[\'barney\',&nbsp;\'fred\']]</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matchesProperty`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">partition</span>(users<span class="delimiter">,</span>&nbsp;[<span class="string">\'active\'</span><span class="delimiter">,</span>&nbsp;false]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[[\'barney\',&nbsp;\'pebbles\'],&nbsp;[\'fred\']]</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">partition</span>(users<span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[[\'fred\'],&nbsp;[\'barney\',&nbsp;\'pebbles\']]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9636">source</a> <a href="https://www.npmjs.com/package/lodash.partition">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.partition(collection, [predicate=_.identity])',
        methodName: 'partition',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the array of grouped elements.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '37544247624745686',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to iterate over.</li><li><code>path</code> <em>(Array|Function|string)</em>: The path of the method to invoke or the function invoked per iteration.</li><li><code>[args]</code> <em>(...*)</em>: The arguments to invoke each method with.</li>',
        category: 'Collection Methods',
        description:
            "Invokes the method at <code>path</code> of each element in <code>collection</code>, returning an array of the results of each invoked method. Any additional arguments are provided to each invoked method. If <code>path</code> is a function, it's invoked for, and <code>this</code> bound to, each element in <code>collection</code>.",
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">invokeMap</span>([[<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">7</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span>]]<span class="delimiter">,</span>&nbsp;<span class="string">\'sort\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[[1,&nbsp;5,&nbsp;7],&nbsp;[1,&nbsp;2,&nbsp;3]]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">invokeMap</span>([<span class="numeric">123</span><span class="delimiter">,</span>&nbsp;<span class="numeric">456</span>]<span class="delimiter">,</span>&nbsp;<span class="support">String</span><span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>split<span class="delimiter">,</span>&nbsp;<span class="string">\'\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[[\'1\',&nbsp;\'2\',&nbsp;\'3\'],&nbsp;[\'4\',&nbsp;\'5\',&nbsp;\'6\']]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9467">source</a> <a href="https://www.npmjs.com/package/lodash.invokemap">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.invokeMap(collection, path, [args])',
        methodName: 'invokeMap',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the array of results.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '37590332049001485',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to iterate over.</li><li><code>[iteratees=[_.identity]]</code> <em>(...(Function|Function[]))</em>: The iteratees to sort by.</li>',
        category: 'Collection Methods',
        description:
            'Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee. This method performs a stable sort, that is, it preserves the original sort order of equal elements. The iteratees are invoked with one argument: <em>(value)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">48</span>&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">36</span>&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">40</span>&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">34</span>&nbsp;}</div><div>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">sortBy</span>(users<span class="delimiter">,</span>&nbsp;[<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;o<span class="delimiter">.</span>user;&nbsp;}]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[[\'barney\',&nbsp;36],&nbsp;[\'barney\',&nbsp;34],&nbsp;[\'fred\',&nbsp;48],&nbsp;[\'fred\',&nbsp;40]]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">sortBy</span>(users<span class="delimiter">,</span>&nbsp;[<span class="string">\'user\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'age\'</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[[\'barney\',&nbsp;34],&nbsp;[\'barney\',&nbsp;36],&nbsp;[\'fred\',&nbsp;40],&nbsp;[\'fred\',&nbsp;48]]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9929">source</a> <a href="https://www.npmjs.com/package/lodash.sortby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.sortBy(collection, [iteratees=[_.identity]])',
        methodName: 'sortBy',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new sorted array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '4486740827421939',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li><li><code>[accumulator]</code> <em>(*)</em>: The initial value.</li>',
        category: 'Collection Methods',
        description:
            'Reduces <code>collection</code> to a value which is the accumulated result of running each element in <code>collection</code> thru <code>iteratee</code>, where each successive invocation is supplied the return value of the previous. If <code>accumulator</code> is not given, the first element of <code>collection</code> is used as the initial value. The iteratee is invoked with four arguments:<br><em>(accumulator, value, index|key, collection)</em>.<br><br>Many lodash methods are guarded to work as iteratees for methods like <a href="#reduce"><code>_.reduce</code></a>, <a href="#reduceRight"><code>_.reduceRight</code></a>, and <a href="#transform"><code>_.transform</code></a>.<br><br>The guarded methods are:<br><code>assign</code>, <code>defaults</code>, <code>defaultsDeep</code>, <code>includes</code>, <code>merge</code>, <code>orderBy</code>, and <code>sortBy</code>',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">reduce</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(sum<span class="delimiter">,</span>&nbsp;n)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;sum&nbsp;+&nbsp;n;</div><div>}<span class="delimiter">,</span>&nbsp;<span class="numeric">0</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">reduce</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(result<span class="delimiter">,</span>&nbsp;value<span class="delimiter">,</span>&nbsp;key)&nbsp;{</div><div>&nbsp;&nbsp;(result[value]&nbsp;||&nbsp;(result[value]&nbsp;=&nbsp;[]))<span class="delimiter method">.</span><span class="support">push</span>(key);</div><div>&nbsp;&nbsp;return&nbsp;result;</div><div>}<span class="delimiter">,</span>&nbsp;{});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'1\':&nbsp;[\'a\',&nbsp;\'c\'],&nbsp;\'2\':&nbsp;[\'b\']&nbsp;}&nbsp;(iteration&nbsp;order&nbsp;is&nbsp;not&nbsp;guaranteed)</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9677">source</a> <a href="https://www.npmjs.com/package/lodash.reduce">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.reduce(collection, [iteratee=_.identity], [accumulator])',
        methodName: 'reduce',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the accumulated value.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '4631047745195758',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to inspect.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li><li><code>[fromIndex=0]</code> <em>(number)</em>: The index to search from.</li>',
        category: 'Collection Methods',
        description:
            'Iterates over elements of <code>collection</code>, returning the first element <code>predicate</code> returns truthy for. The predicate is invoked with three arguments: <em>(value, index|key, collection)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">36</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">40</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'pebbles\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}</div><div>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="support">find</span>(users<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;o<span class="delimiter">.</span>age&nbsp;&lt;&nbsp;<span class="numeric">40</span>;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;object&nbsp;for&nbsp;\'barney\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matches`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="support">find</span>(users<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;object&nbsp;for&nbsp;\'pebbles\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matchesProperty`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="support">find</span>(users<span class="delimiter">,</span>&nbsp;[<span class="string">\'active\'</span><span class="delimiter">,</span>&nbsp;false]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;object&nbsp;for&nbsp;\'fred\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="support">find</span>(users<span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;object&nbsp;for&nbsp;\'barney\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9212">source</a> <a href="https://www.npmjs.com/package/lodash.find">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.find(collection, [predicate=_.identity], [fromIndex=0])',
        methodName: 'find',
        related_methods: [],
        returns:
            '<em>(*)</em>: Returns the matched element, else <code>undefined</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '4685200887992516',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Collection Methods',
        description:
            'This method is like <a href="#flatMap"><code>_.flatMap</code></a> except that it recursively flattens the mapped results.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">duplicate</span>(n)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;[[[n<span class="delimiter">,</span>&nbsp;n]]];</div><div>}</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">flatMapDeep</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]<span class="delimiter">,</span>&nbsp;duplicate);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;1,&nbsp;2,&nbsp;2]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9280">source</a> <a href="https://www.npmjs.com/package/lodash.flatmapdeep">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.flatMapDeep(collection, [iteratee=_.identity])',
        methodName: 'flatMapDeep',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new flattened array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '473422277310059',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li><li><code>[accumulator]</code> <em>(*)</em>: The initial value.</li>',
        category: 'Collection Methods',
        description:
            'This method is like <a href="#reduce"><code>_.reduce</code></a> except that it iterates over elements of <code>collection</code> from right to left.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[[<span class="numeric">0</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;[<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>]];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">reduceRight</span>(array<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(flattened<span class="delimiter">,</span>&nbsp;other)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;flattened<span class="delimiter method">.</span><span class="support">concat</span>(other);</div><div>}<span class="delimiter">,</span>&nbsp;[]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[4,&nbsp;5,&nbsp;2,&nbsp;3,&nbsp;0,&nbsp;1]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9706">source</a> <a href="https://www.npmjs.com/package/lodash.reduceright">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.reduceRight(collection, [iteratee=_.identity], [accumulator])',
        methodName: 'reduceRight',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the accumulated value.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5330580239280991',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to sample.</li><li><code>[n=1]</code> <em>(number)</em>: The number of elements to sample.</li>',
        category: 'Collection Methods',
        description:
            'Gets <code>n</code> random elements at unique keys from <code>collection</code> up to the size of <code>collection</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">sampleSize</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[3,&nbsp;1]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">sampleSize</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;3,&nbsp;1]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9791">source</a> <a href="https://www.npmjs.com/package/lodash.samplesize">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.sampleSize(collection, [n=1])',
        methodName: 'sampleSize',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the random elements.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5735209232706626',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object|string)</em>: The collection to inspect.</li>',
        category: 'Collection Methods',
        description:
            'Gets the size of <code>collection</code> by returning its length for array-like values or the number of own enumerable string keyed properties for objects.',
        example:
            '<pre><div>_<span class="delimiter">.</span><span class="support">size</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3</span></div><div>&nbsp;</div><div>_<span class="delimiter">.</span><span class="support">size</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;2</span></div><div>&nbsp;</div><div>_<span class="delimiter">.</span><span class="support">size</span>(<span class="string">\'pebbles\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;7</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9842">source</a> <a href="https://www.npmjs.com/package/lodash.size">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.size(collection)',
        methodName: 'size',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the collection size.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6545230452444695',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to iterate over.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Collection Methods',
        description:
            'The opposite of <a href="#filter"><code>_.filter</code></a>; this method returns the elements of <code>collection</code> that <code>predicate</code> does <strong>not</strong> return truthy for.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">36</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">40</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}</div><div>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">reject</span>(users<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;!o<span class="delimiter">.</span>active;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'fred\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matches`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">reject</span>(users<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">40</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'barney\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matchesProperty`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">reject</span>(users<span class="delimiter">,</span>&nbsp;[<span class="string">\'active\'</span><span class="delimiter">,</span>&nbsp;false]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'fred\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">reject</span>(users<span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[\'barney\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9747">source</a> <a href="https://www.npmjs.com/package/lodash.reject">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.reject(collection, [predicate=_.identity])',
        methodName: 'reject',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new filtered array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6750041268236291',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to iterate over.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Collection Methods',
        description:
            'Checks if <code>predicate</code> returns truthy for <strong>any</strong> element of <code>collection</code>. Iteration is stopped once <code>predicate</code> returns truthy. The predicate is invoked with three arguments: <em>(value, index|key, collection)</em>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">some</span>([null<span class="delimiter">,</span>&nbsp;<span class="numeric">0</span><span class="delimiter">,</span>&nbsp;<span class="string">\'yes\'</span><span class="delimiter">,</span>&nbsp;false]<span class="delimiter">,</span>&nbsp;<span class="support">Boolean</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}</div><div>];</div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matches`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">some</span>(users<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matchesProperty`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">some</span>(users<span class="delimiter">,</span>&nbsp;[<span class="string">\'active\'</span><span class="delimiter">,</span>&nbsp;false]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">some</span>(users<span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9892">source</a> <a href="https://www.npmjs.com/package/lodash.some">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.some(collection, [predicate=_.identity])',
        methodName: 'some',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if any element passes the predicate check, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6821506448440771',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object|string)</em>: The collection to inspect.</li><li><code>value</code> <em>(*)</em>: The value to search for.</li><li><code>[fromIndex=0]</code> <em>(number)</em>: The index to search from.</li>',
        category: 'Collection Methods',
        description:
            'Checks if <code>value</code> is in <code>collection</code>. If <code>collection</code> is a string, it\'s checked for a substring of <code>value</code>, otherwise <a href="http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero"><code>SameValueZero</code></a> is used for equality comparisons. If <code>fromIndex</code> is negative, it\'s used as the offset from the end of <code>collection</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">includes</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">1</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">includes</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">includes</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;<span class="numeric">1</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">includes</span>(<span class="string">\'abcd\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'bc\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9431">source</a> <a href="https://www.npmjs.com/package/lodash.includes">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.includes(collection, value, [fromIndex=0])',
        methodName: 'includes',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is found, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '693723906177248',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to iterate over.</li><li><code>[iteratees=[_.identity]]</code> <em>(Array[]|Function[]|Object[]|string[])</em>: The iteratees to sort by.</li><li><code>[orders]</code> <em>(string[])</em>: The sort orders of <code>iteratees</code>.</li>',
        category: 'Collection Methods',
        description:
            'This method is like <a href="#sortBy"><code>_.sortBy</code></a> except that it allows specifying the sort orders of the iteratees to sort by. If <code>orders</code> is unspecified, all values are sorted in ascending order. Otherwise, specify an order of "desc" for descending or "asc" for ascending sort order of corresponding values.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">48</span>&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">34</span>&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">40</span>&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">36</span>&nbsp;}</div><div>];</div><div>&nbsp;</div><div><span class="comment">//&nbsp;Sort&nbsp;by&nbsp;`user`&nbsp;in&nbsp;ascending&nbsp;order&nbsp;and&nbsp;by&nbsp;`age`&nbsp;in&nbsp;descending&nbsp;order.</span></div><div>_<span class="delimiter method">.</span><span class="name">orderBy</span>(users<span class="delimiter">,</span>&nbsp;[<span class="string">\'user\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'age\'</span>]<span class="delimiter">,</span>&nbsp;[<span class="string">\'asc\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'desc\'</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;objects&nbsp;for&nbsp;[[\'barney\',&nbsp;36],&nbsp;[\'barney\',&nbsp;34],&nbsp;[\'fred\',&nbsp;48],&nbsp;[\'fred\',&nbsp;40]]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9586">source</a> <a href="https://www.npmjs.com/package/lodash.orderby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.orderBy(collection, [iteratees=[_.identity]], [orders])',
        methodName: 'orderBy',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new sorted array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7109730833341438',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to shuffle.</li>',
        category: 'Collection Methods',
        description:
            'Creates an array of shuffled values, using a version of the <a href="https://en.wikipedia.org/wiki/Fisher-Yates_shuffle">Fisher-Yates shuffle</a>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">shuffle</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[4,&nbsp;1,&nbsp;3,&nbsp;2]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9816">source</a> <a href="https://www.npmjs.com/package/lodash.shuffle">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.shuffle(collection)',
        methodName: 'shuffle',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new shuffled array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '763683923103366',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li><li><code>[depth=1]</code> <em>(number)</em>: The maximum recursion depth.</li>',
        category: 'Collection Methods',
        description:
            'This method is like <a href="#flatMap"><code>_.flatMap</code></a> except that it recursively flattens the mapped results up to <code>depth</code> times.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">duplicate</span>(n)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;[[[n<span class="delimiter">,</span>&nbsp;n]]];</div><div>}</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">flatMapDepth</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]<span class="delimiter">,</span>&nbsp;duplicate<span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[[1,&nbsp;1],&nbsp;[2,&nbsp;2]]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9305">source</a> <a href="https://www.npmjs.com/package/lodash.flatmapdepth">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.flatMapDepth(collection, [iteratee=_.identity], [depth=1])',
        methodName: 'flatMapDepth',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new flattened array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8180300271646654',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Collection Methods',
        description:
            'Creates an array of values by running each element in <code>collection</code> thru <code>iteratee</code>. The iteratee is invoked with three arguments:<br><em>(value, index|key, collection)</em>.<br><br>Many lodash methods are guarded to work as iteratees for methods like <a href="#every"><code>_.every</code></a>, <a href="#filter"><code>_.filter</code></a>, <a href="#map"><code>_.map</code></a>, <a href="#mapValues"><code>_.mapValues</code></a>, <a href="#reject"><code>_.reject</code></a>, and <a href="#some"><code>_.some</code></a>.<br><br>The guarded methods are:<br><code>ary</code>, <code>chunk</code>, <code>curry</code>, <code>curryRight</code>, <code>drop</code>, <code>dropRight</code>, <code>every</code>, <code>fill</code>, <code>invert</code>, <code>parseInt</code>, <code>random</code>, <code>range</code>, <code>rangeRight</code>, <code>repeat</code>, <code>sampleSize</code>, <code>slice</code>, <code>some</code>, <code>sortBy</code>, <code>split</code>, <code>take</code>, <code>takeRight</code>, <code>template</code>, <code>trim</code>, <code>trimEnd</code>, <code>trimStart</code>, and <code>words</code>',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">square</span>(n)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;n&nbsp;*&nbsp;n;</div><div>}</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">map</span>([<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="numeric">8</span>]<span class="delimiter">,</span>&nbsp;square);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[16,&nbsp;64]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">map</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">8</span>&nbsp;}<span class="delimiter">,</span>&nbsp;square);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[16,&nbsp;64]&nbsp;(iteration&nbsp;order&nbsp;is&nbsp;not&nbsp;guaranteed)</span></div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span>&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span>&nbsp;}</div><div>];</div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">map</span>(users<span class="delimiter">,</span>&nbsp;<span class="string">\'user\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'barney\',&nbsp;\'fred\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9552">source</a> <a href="https://www.npmjs.com/package/lodash.map">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.map(collection, [iteratee=_.identity])',
        methodName: 'map',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new mapped array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8211484810928025',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The iteratee to transform keys.</li>',
        category: 'Collection Methods',
        description:
            'Creates an object composed of keys generated from the results of running each element of <code>collection</code> thru <code>iteratee</code>. The corresponding value of each key is the last element responsible for generating the key. The iteratee is invoked with one argument: <em>(value)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'dir\'</span>:&nbsp;<span class="string">\'left\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'code\'</span>:&nbsp;<span class="numeric">97</span>&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'dir\'</span>:&nbsp;<span class="string">\'right\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'code\'</span>:&nbsp;<span class="numeric">100</span>&nbsp;}</div><div>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">keyBy</span>(array<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;<span class="support">String</span><span class="delimiter method">.</span><span class="support">fromCharCode</span>(o<span class="delimiter">.</span><span class="support">code</span>);</div><div>});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;{&nbsp;\'dir\':&nbsp;\'left\',&nbsp;\'code\':&nbsp;97&nbsp;},&nbsp;\'d\':&nbsp;{&nbsp;\'dir\':&nbsp;\'right\',&nbsp;\'code\':&nbsp;100&nbsp;}&nbsp;}</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">keyBy</span>(array<span class="delimiter">,</span>&nbsp;<span class="string">\'dir\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'left\':&nbsp;{&nbsp;\'dir\':&nbsp;\'left\',&nbsp;\'code\':&nbsp;97&nbsp;},&nbsp;\'right\':&nbsp;{&nbsp;\'dir\':&nbsp;\'right\',&nbsp;\'code\':&nbsp;100&nbsp;}&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9506">source</a> <a href="https://www.npmjs.com/package/lodash.keyby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.keyBy(collection, [iteratee=_.identity])',
        methodName: 'keyBy',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the composed aggregate object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8762974129942072',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to sample.</li>',
        category: 'Collection Methods',
        description: 'Gets a random element from <code>collection</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">sample</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;2</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9766">source</a> <a href="https://www.npmjs.com/package/lodash.sample">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.sample(collection)',
        methodName: 'sample',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the random element.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9427240306212645',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments: '<em>_.each</em>',
        category: 'Collection Methods',
        description:
            'Iterates over elements of <code>collection</code> and invokes <code>iteratee</code> for each element. The iteratee is invoked with three arguments: <em>(value, index|key, collection)</em>. Iteratee functions may exit iteration early by explicitly returning <code>false</code>.<br><br><strong>Note:</strong> As with other "Collections" methods, objects with a "length" property are iterated like arrays. To avoid this behavior use <a href="#forIn"><code>_.forIn</code></a> or <a href="#forOwn"><code>_.forOwn</code></a> for object iteration.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">forEach</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(value)&nbsp;{</div><div>&nbsp;&nbsp;<span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(value);</div><div>});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;Logs&nbsp;`1`&nbsp;then&nbsp;`2`.</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">forEach</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(value<span class="delimiter">,</span>&nbsp;key)&nbsp;{</div><div>&nbsp;&nbsp;<span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(key);</div><div>});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;Logs&nbsp;\'a\'&nbsp;then&nbsp;\'b\'&nbsp;(iteration&nbsp;order&nbsp;is&nbsp;not&nbsp;guaranteed).</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9340">source</a> <a href="https://www.npmjs.com/package/lodash.foreach">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.forEach(collection, [iteratee=_.identity])',
        methodName: 'forEach',
        related_methods: [],
        returns: '<em>(*)</em>: Returns <code>collection</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9829567999519933',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>collection</code> <em>(Array|Object)</em>: The collection to iterate over.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Collection Methods',
        description:
            'Checks if <code>predicate</code> returns truthy for <strong>all</strong> elements of <code>collection</code>. Iteration is stopped once <code>predicate</code> returns falsey. The predicate is invoked with three arguments: <em>(value, index|key, collection)</em>.<br><br><strong>Note:</strong> This method returns <code>true</code> for <a href="https://en.wikipedia.org/wiki/Empty_set">empty collections</a> because <a href="https://en.wikipedia.org/wiki/Vacuous_truth">everything is true</a> of elements of empty collections.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">every</span>([true<span class="delimiter">,</span>&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;null<span class="delimiter">,</span>&nbsp;<span class="string">\'yes\'</span>]<span class="delimiter">,</span>&nbsp;<span class="support">Boolean</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">36</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">40</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}</div><div>];</div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matches`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">every</span>(users<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matchesProperty`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">every</span>(users<span class="delimiter">,</span>&nbsp;[<span class="string">\'active\'</span><span class="delimiter">,</span>&nbsp;false]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">every</span>(users<span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9126">source</a> <a href="https://www.npmjs.com/package/lodash.every">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.every(collection, [predicate=_.identity])',
        methodName: 'every',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if all elements pass the predicate check, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '49522095942457584',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments: '<em>(number)</em>: Returns the timestamp.',
        category: 'Date Methods',
        description:
            'Gets the timestamp of the number of milliseconds that have elapsed since the Unix epoch <em>(1 January <code>1970 00</code>:00:00 UTC)</em>.',
        example:
            '<pre><div>_<span class="delimiter">.</span><span class="support">defer</span>(<span class="type">function</span>(stamp)&nbsp;{</div><div>&nbsp;&nbsp;<span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(_<span class="delimiter method">.</span><span class="name">now</span>()&nbsp;-&nbsp;stamp);</div><div>}<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">now</span>());</div><div><span class="comment">//&nbsp;=&gt;&nbsp;Logs&nbsp;the&nbsp;number&nbsp;of&nbsp;milliseconds&nbsp;it&nbsp;took&nbsp;for&nbsp;the&nbsp;deferred&nbsp;invocation.</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9960">source</a> <a href="https://www.npmjs.com/package/lodash.now">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.now()',
        methodName: 'now',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the timestamp.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '04304060566916844',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to partially apply arguments to.</li><li><code>[partials]</code> <em>(...*)</em>: The arguments to be partially applied.</li>',
        category: 'Function Methods',
        description:
            'This method is like <a href="#partial"><code>_.partial</code></a> except that partially applied arguments are appended to the arguments it receives.<br><br>The <code>_.partialRight.placeholder</code> value, which defaults to <code>_</code> in monolithic builds, may be used as a placeholder for partially applied arguments.<br><br><strong>Note:</strong> This method doesn\'t set the "length" property of partially applied functions.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">greet</span>(greeting<span class="delimiter">,</span>&nbsp;name)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;greeting&nbsp;+&nbsp;<span class="string">\'&nbsp;\'</span>&nbsp;+&nbsp;name;</div><div>}</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;greetFred&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">partialRight</span>(greet<span class="delimiter">,</span>&nbsp;<span class="string">\'fred\'</span>);</div><div><span class="name">greetFred</span>(<span class="string">\'hi\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hi&nbsp;fred\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Partially&nbsp;applied&nbsp;with&nbsp;placeholders.</span></div><div><span class="type">var</span>&nbsp;sayHelloTo&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">partialRight</span>(greet<span class="delimiter">,</span>&nbsp;<span class="string">\'hello\'</span><span class="delimiter">,</span>&nbsp;_);</div><div><span class="name">sayHelloTo</span>(<span class="string">\'fred\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hello&nbsp;fred\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10739">source</a> <a href="https://www.npmjs.com/package/lodash.partialright">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.partialRight(func, [partials])',
        methodName: 'partialRight',
        related_methods: [],
        returns:
            '<em>(Function)</em>: Returns the new partially applied function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '04851335999281089',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to rearrange arguments for.</li><li><code>indexes</code> <em>(...(number|number[]))</em>: The arranged argument indexes.</li>',
        category: 'Function Methods',
        description:
            'Creates a function that invokes <code>func</code> with arguments arranged according to the specified <code>indexes</code> where the argument value at the first index is provided as the first argument, the argument value at the second index is provided as the second argument, and so on.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;rearged&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">rearg</span>(<span class="type">function</span>(a<span class="delimiter">,</span>&nbsp;b<span class="delimiter">,</span>&nbsp;c)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;[a<span class="delimiter">,</span>&nbsp;b<span class="delimiter">,</span>&nbsp;c];</div><div>}<span class="delimiter">,</span>&nbsp;[<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">0</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span>]);</div><div>&nbsp;</div><div><span class="name">rearged</span>(<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'a\'</span>)</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'a\',&nbsp;\'b\',&nbsp;\'c\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10766">source</a> <a href="https://www.npmjs.com/package/lodash.rearg">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.rearg(func, indexes)',
        methodName: 'rearg',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '16938866410393785',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>func</code> <em>(Function)</em>: The function to debounce.</li><li><code>[wait=0]</code> <em>(number)</em>: The number of milliseconds to delay.</li><li><code>[options={}]</code> <em>(Object)</em>: The options object.</li><li><code>[options.leading=false]</code> <em>(boolean)</em>: Specify invoking on the leading edge of the timeout.</li><li><code>[options.maxWait]</code> <em>(number)</em>: The maximum time <code>func</code> is allowed to be delayed before it's invoked.</li><li><code>[options.trailing=true]</code> <em>(boolean)</em>: Specify invoking on the trailing edge of the timeout.</li>",
        category: 'Function Methods',
        description:
            'Creates a debounced function that delays invoking <code>func</code> until after <code>wait</code> milliseconds have elapsed since the last time the debounced function was invoked. The debounced function comes with a <code>cancel</code> method to cancel delayed <code>func</code> invocations and a <code>flush</code> method to immediately invoke them. Provide <code>options</code> to indicate whether <code>func</code> should be invoked on the leading and/or trailing edge of the <code>wait</code> timeout. The <code>func</code> is invoked with the last arguments provided to the debounced function. Subsequent calls to the debounced function return the result of the last <code>func</code> invocation.<br><br><strong>Note:</strong> If <code>leading</code> and <code>trailing</code> options are <code>true</code>, <code>func</code> is invoked on the trailing edge of the timeout only if the debounced function is invoked more than once during the <code>wait</code> timeout.<br><br>If <code>wait</code> is <code>0</code> and <code>leading</code> is <code>false</code>, <code>func</code> invocation is deferred until to the next tick, similar to <code>setTimeout</code> with a timeout of <code>0</code>.<br><br>See <a href="https://css-tricks.com/debouncing-throttling-explained-examples/">David Corbacho\'s article</a> for details over the differences between <a href="#debounce"><code>_.debounce</code></a> and <a href="#throttle"><code>_.throttle</code></a>.',
        example:
            '<pre><div><span class="comment">//&nbsp;Avoid&nbsp;costly&nbsp;calculations&nbsp;while&nbsp;the&nbsp;window&nbsp;size&nbsp;is&nbsp;in&nbsp;flux.</span></div><div><span class="name">jQuery</span>(<span class="support">window</span>)<span class="delimiter method">.</span><span class="name">on</span>(<span class="string">\'resize\'</span><span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">debounce</span>(calculateLayout<span class="delimiter">,</span>&nbsp;<span class="numeric">150</span>));</div><div>&nbsp;</div><div><span class="comment">//&nbsp;Invoke&nbsp;`sendMail`&nbsp;when&nbsp;clicked,&nbsp;debouncing&nbsp;subsequent&nbsp;calls.</span></div><div><span class="name">jQuery</span>(element)<span class="delimiter method">.</span><span class="name">on</span>(<span class="string">\'click\'</span><span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">debounce</span>(sendMail<span class="delimiter">,</span>&nbsp;<span class="numeric">300</span><span class="delimiter">,</span>&nbsp;{</div><div>&nbsp;&nbsp;<span class="string">\'leading\'</span>:&nbsp;true<span class="delimiter">,</span></div><div>&nbsp;&nbsp;<span class="string">\'trailing\'</span>:&nbsp;false</div><div>}));</div><div>&nbsp;</div><div><span class="comment">//&nbsp;Ensure&nbsp;`batchLog`&nbsp;is&nbsp;invoked&nbsp;once&nbsp;after&nbsp;1&nbsp;second&nbsp;of&nbsp;debounced&nbsp;calls.</span></div><div><span class="type">var</span>&nbsp;debounced&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">debounce</span>(batchLog<span class="delimiter">,</span>&nbsp;<span class="numeric">250</span><span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'maxWait\'</span>:&nbsp;<span class="numeric">1000</span>&nbsp;});</div><div><span class="type">var</span>&nbsp;source&nbsp;=&nbsp;new&nbsp;<span class="name type">EventSource</span>(<span class="string">\'/stream\'</span>);</div><div><span class="name">jQuery</span>(source)<span class="delimiter method">.</span><span class="name">on</span>(<span class="string">\'message\'</span><span class="delimiter">,</span>&nbsp;debounced);</div><div>&nbsp;</div><div><span class="comment">//&nbsp;Cancel&nbsp;the&nbsp;trailing&nbsp;debounced&nbsp;invocation.</span></div><div><span class="name">jQuery</span>(<span class="support">window</span>)<span class="delimiter method">.</span><span class="name">on</span>(<span class="string">\'popstate\'</span><span class="delimiter">,</span>&nbsp;debounced<span class="delimiter">.</span>cancel);</div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10304">source</a> <a href="https://www.npmjs.com/package/lodash.debounce">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.debounce(func, [wait=0], [options={}])',
        methodName: 'debounce',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new debounced function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '23444400108096503',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to throttle.</li><li><code>[wait=0]</code> <em>(number)</em>: The number of milliseconds to throttle invocations to.</li><li><code>[options={}]</code> <em>(Object)</em>: The options object.</li><li><code>[options.leading=true]</code> <em>(boolean)</em>: Specify invoking on the leading edge of the timeout.</li><li><code>[options.trailing=true]</code> <em>(boolean)</em>: Specify invoking on the trailing edge of the timeout.</li>',
        category: 'Function Methods',
        description:
            'Creates a throttled function that only invokes <code>func</code> at most once per every <code>wait</code> milliseconds. The throttled function comes with a <code>cancel</code> method to cancel delayed <code>func</code> invocations and a <code>flush</code> method to immediately invoke them. Provide <code>options</code> to indicate whether <code>func</code> should be invoked on the leading and/or trailing edge of the <code>wait</code> timeout. The <code>func</code> is invoked with the last arguments provided to the throttled function. Subsequent calls to the throttled function return the result of the last <code>func</code> invocation.<br><br><strong>Note:</strong> If <code>leading</code> and <code>trailing</code> options are <code>true</code>, <code>func</code> is invoked on the trailing edge of the timeout only if the throttled function is invoked more than once during the <code>wait</code> timeout.<br><br>If <code>wait</code> is <code>0</code> and <code>leading</code> is <code>false</code>, <code>func</code> invocation is deferred until to the next tick, similar to <code>setTimeout</code> with a timeout of <code>0</code>.<br><br>See <a href="https://css-tricks.com/debouncing-throttling-explained-examples/">David Corbacho\'s article</a> for details over the differences between <a href="#throttle"><code>_.throttle</code></a> and <a href="#debounce"><code>_.debounce</code></a>.',
        example:
            '<pre><div><span class="comment">//&nbsp;Avoid&nbsp;excessively&nbsp;updating&nbsp;the&nbsp;position&nbsp;while&nbsp;scrolling.</span></div><div><span class="name">jQuery</span>(<span class="support">window</span>)<span class="delimiter method">.</span><span class="name">on</span>(<span class="string">\'scroll\'</span><span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">throttle</span>(updatePosition<span class="delimiter">,</span>&nbsp;<span class="numeric">100</span>));</div><div>&nbsp;</div><div><span class="comment">//&nbsp;Invoke&nbsp;`renewToken`&nbsp;when&nbsp;the&nbsp;click&nbsp;event&nbsp;is&nbsp;fired,&nbsp;but&nbsp;not&nbsp;more&nbsp;than&nbsp;once&nbsp;every&nbsp;5&nbsp;minutes.</span></div><div><span class="type">var</span>&nbsp;throttled&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">throttle</span>(renewToken<span class="delimiter">,</span>&nbsp;<span class="numeric">300000</span><span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'trailing\'</span>:&nbsp;false&nbsp;});</div><div><span class="name">jQuery</span>(element)<span class="delimiter method">.</span><span class="name">on</span>(<span class="string">\'click\'</span><span class="delimiter">,</span>&nbsp;throttled);</div><div>&nbsp;</div><div><span class="comment">//&nbsp;Cancel&nbsp;the&nbsp;trailing&nbsp;throttled&nbsp;invocation.</span></div><div><span class="name">jQuery</span>(<span class="support">window</span>)<span class="delimiter method">.</span><span class="name">on</span>(<span class="string">\'popstate\'</span><span class="delimiter">,</span>&nbsp;throttled<span class="delimiter">.</span>cancel);</div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10897">source</a> <a href="https://www.npmjs.com/package/lodash.throttle">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.throttle(func, [wait=0], [options={}])',
        methodName: 'throttle',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new throttled function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '2652582038753154',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to restrict.</li>',
        category: 'Function Methods',
        description:
            'Creates a function that is restricted to invoking <code>func</code> once. Repeat calls to the function return the value of the first invocation. The <code>func</code> is invoked with the <code>this</code> binding and arguments of the created function.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;initialize&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">once</span>(createApplication);</div><div><span class="name">initialize</span>();</div><div><span class="name">initialize</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;`createApplication`&nbsp;is&nbsp;invoked&nbsp;once</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10617">source</a> <a href="https://www.npmjs.com/package/lodash.once">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.once(func)',
        methodName: 'once',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new restricted function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '3233825671437817',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to cap arguments for.</li><li><code>[n=func.length]</code> <em>(number)</em>: The arity cap.</li>',
        category: 'Function Methods',
        description:
            'Creates a function that invokes <code>func</code>, with up to <code>n</code> arguments, ignoring any additional arguments.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">map</span>([<span class="string">\'6\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'8\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'10\'</span>]<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">ary</span>(parseInt<span class="delimiter">,</span>&nbsp;<span class="numeric">1</span>));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[6,&nbsp;8,&nbsp;10]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10019">source</a> <a href="https://www.npmjs.com/package/lodash.ary">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.ary(func, [n=func.length])',
        methodName: 'ary',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new capped function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '3686048830045214',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to defer.</li><li><code>[args]</code> <em>(...*)</em>: The arguments to invoke <code>func</code> with.</li>',
        category: 'Function Methods',
        description:
            "Defers invoking the <code>func</code> until the current call stack has cleared. Any additional arguments are provided to <code>func</code> when it's invoked.",
        example:
            '<pre><div>_<span class="delimiter">.</span><span class="support">defer</span>(<span class="type">function</span>(text)&nbsp;{</div><div>&nbsp;&nbsp;<span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(text);</div><div>}<span class="delimiter">,</span>&nbsp;<span class="string">\'deferred\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;Logs&nbsp;\'deferred\'&nbsp;after&nbsp;one&nbsp;millisecond.</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10447">source</a> <a href="https://www.npmjs.com/package/lodash.defer">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.defer(func, [args])',
        methodName: 'defer',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the timer id.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '37399876054325293',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to apply a rest parameter to.</li><li><code>[start=func.length-1]</code> <em>(number)</em>: The start position of the rest parameter.</li>',
        category: 'Function Methods',
        description:
            'Creates a function that invokes <code>func</code> with the <code>this</code> binding of the created function and arguments from <code>start</code> and beyond provided as an array.<br><br><strong>Note:</strong> This method is based on the <a href="https://mdn.io/rest_parameters">rest parameter</a>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;say&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">rest</span>(<span class="type">function</span>(what<span class="delimiter">,</span>&nbsp;names)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;what&nbsp;+&nbsp;<span class="string">\'&nbsp;\'</span>&nbsp;+&nbsp;_<span class="delimiter method">.</span><span class="name">initial</span>(names)<span class="delimiter method">.</span><span class="support">join</span>(<span class="string">\',&nbsp;\'</span>)&nbsp;+</div><div>&nbsp;&nbsp;&nbsp;&nbsp;(_<span class="delimiter">.</span><span class="support">size</span>(names)&nbsp;&gt;&nbsp;<span class="numeric">1</span>&nbsp;?&nbsp;<span class="string">\',&nbsp;&amp;&nbsp;\'</span>&nbsp;:&nbsp;<span class="string">\'\'</span>)&nbsp;+&nbsp;_<span class="delimiter method">.</span><span class="name">last</span>(names);</div><div>});</div><div>&nbsp;</div><div><span class="name">say</span>(<span class="string">\'hello\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'pebbles\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hello&nbsp;fred,&nbsp;barney,&nbsp;&amp;&nbsp;pebbles\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10795">source</a> <a href="https://www.npmjs.com/package/lodash.rest">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.rest(func, [start=func.length-1])',
        methodName: 'rest',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '39441567754492807',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>n</code> <em>(number)</em>: The number of calls at which <code>func</code> is no longer invoked.</li><li><code>func</code> <em>(Function)</em>: The function to restrict.</li>',
        category: 'Function Methods',
        description:
            "Creates a function that invokes <code>func</code>, with the <code>this</code> binding and arguments of the created function, while it's called less than <code>n</code> times. Subsequent calls to the created function return the result of the last <code>func</code> invocation.",
        example:
            '<pre><div><span class="name">jQuery</span>(element)<span class="delimiter method">.</span><span class="name">on</span>(<span class="string">\'click\'</span><span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">before</span>(<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;addContactToList));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;Allows&nbsp;adding&nbsp;up&nbsp;to&nbsp;4&nbsp;contacts&nbsp;to&nbsp;the&nbsp;list.</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10042">source</a> <a href="https://www.npmjs.com/package/lodash.before">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.before(n, func)',
        methodName: 'before',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new restricted function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '4171443005835278',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to partially apply arguments to.</li><li><code>[partials]</code> <em>(...*)</em>: The arguments to be partially applied.</li>',
        category: 'Function Methods',
        description:
            'Creates a function that invokes <code>func</code> with <code>partials</code> prepended to the arguments it receives. This method is like <a href="#bind"><code>_.bind</code></a> except it does <strong>not</strong> alter the <code>this</code> binding.<br><br>The <code>_.partial.placeholder</code> value, which defaults to <code>_</code> in monolithic builds, may be used as a placeholder for partially applied arguments.<br><br><strong>Note:</strong> This method doesn\'t set the "length" property of partially applied functions.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">greet</span>(greeting<span class="delimiter">,</span>&nbsp;name)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;greeting&nbsp;+&nbsp;<span class="string">\'&nbsp;\'</span>&nbsp;+&nbsp;name;</div><div>}</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;sayHelloTo&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">partial</span>(greet<span class="delimiter">,</span>&nbsp;<span class="string">\'hello\'</span>);</div><div><span class="name">sayHelloTo</span>(<span class="string">\'fred\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hello&nbsp;fred\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Partially&nbsp;applied&nbsp;with&nbsp;placeholders.</span></div><div><span class="type">var</span>&nbsp;greetFred&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">partial</span>(greet<span class="delimiter">,</span>&nbsp;_<span class="delimiter">,</span>&nbsp;<span class="string">\'fred\'</span>);</div><div><span class="name">greetFred</span>(<span class="string">\'hi\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hi&nbsp;fred\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10702">source</a> <a href="https://www.npmjs.com/package/lodash.partial">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.partial(func, [partials])',
        methodName: 'partial',
        related_methods: [],
        returns:
            '<em>(Function)</em>: Returns the new partially applied function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '4465400400585264',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to cap arguments for.</li>',
        category: 'Function Methods',
        description:
            'Creates a function that accepts up to one argument, ignoring any additional arguments.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">map</span>([<span class="string">\'6\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'8\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'10\'</span>]<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">unary</span>(parseInt));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[6,&nbsp;8,&nbsp;10]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10930">source</a> <a href="https://www.npmjs.com/package/lodash.unary">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.unary(func)',
        methodName: 'unary',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new capped function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6409321765944604',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>predicate</code> <em>(Function)</em>: The predicate to negate.</li>',
        category: 'Function Methods',
        description:
            'Creates a function that negates the result of the predicate <code>func</code>. The <code>func</code> predicate is invoked with the <code>this</code> binding and arguments of the created function.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">isEven</span>(n)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;n&nbsp;%&nbsp;<span class="numeric">2</span>&nbsp;==&nbsp;<span class="numeric">0</span>;</div><div>}</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">filter</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;<span class="numeric">6</span>]<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">negate</span>(isEven));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;3,&nbsp;5]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10583">source</a> <a href="https://www.npmjs.com/package/lodash.negate">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.negate(predicate)',
        methodName: 'negate',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new negated function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6652097898717185',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to wrap.</li><li><code>[wrapper=identity]</code> <em>(Function)</em>: The wrapper function.</li>',
        category: 'Function Methods',
        description:
            'Creates a function that provides <code>value</code> to <code>wrapper</code> as its first argument. Any additional arguments provided to the function are appended to those provided to the <code>wrapper</code>. The wrapper is invoked with the <code>this</code> binding of the created function.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;p&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">wrap</span>(_<span class="delimiter">.</span>escape<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(func<span class="delimiter">,</span>&nbsp;text)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;<span class="string">\'&lt;p&gt;\'</span>&nbsp;+&nbsp;<span class="name">func</span>(text)&nbsp;+&nbsp;<span class="string">\'&lt;/p&gt;\'</span>;</div><div>});</div><div>&nbsp;</div><div><span class="name">p</span>(<span class="string">\'fred,&nbsp;barney,&nbsp;&amp;&nbsp;pebbles\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'&lt;p&gt;fred,&nbsp;barney,&nbsp;&amp;amp;&nbsp;pebbles&lt;/p&gt;\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10956">source</a> <a href="https://www.npmjs.com/package/lodash.wrap">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.wrap(value, [wrapper=identity])',
        methodName: 'wrap',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6818146728389918',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to delay.</li><li><code>wait</code> <em>(number)</em>: The number of milliseconds to delay invocation.</li><li><code>[args]</code> <em>(...*)</em>: The arguments to invoke <code>func</code> with.</li>',
        category: 'Function Methods',
        description:
            "Invokes <code>func</code> after <code>wait</code> milliseconds. Any additional arguments are provided to <code>func</code> when it's invoked.",
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">delay</span>(<span class="type">function</span>(text)&nbsp;{</div><div>&nbsp;&nbsp;<span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(text);</div><div>}<span class="delimiter">,</span>&nbsp;<span class="numeric">1000</span><span class="delimiter">,</span>&nbsp;<span class="string">\'later\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;Logs&nbsp;\'later\'&nbsp;after&nbsp;one&nbsp;second.</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10470">source</a> <a href="https://www.npmjs.com/package/lodash.delay">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.delay(func, wait, [args])',
        methodName: 'delay',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the timer id.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7279131898320996',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>n</code> <em>(number)</em>: The number of calls before <code>func</code> is invoked.</li><li><code>func</code> <em>(Function)</em>: The function to restrict.</li>',
        category: 'Function Methods',
        description:
            'The opposite of <a href="#before"><code>_.before</code></a>; this method creates a function that invokes <code>func</code> once it\'s called <code>n</code> or more times.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;saves&nbsp;=&nbsp;[<span class="string">\'profile\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'settings\'</span>];</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;done&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">after</span>(saves<span class="delimiter">.</span><span class="support">length</span><span class="delimiter">,</span>&nbsp;<span class="type">function</span>()&nbsp;{</div><div>&nbsp;&nbsp;<span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(<span class="string">\'done&nbsp;saving!\'</span>);</div><div>});</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">forEach</span>(saves<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(type)&nbsp;{</div><div>&nbsp;&nbsp;<span class="name">asyncSave</span>({&nbsp;<span class="string">\'type\'</span>:&nbsp;type<span class="delimiter">,</span>&nbsp;<span class="string">\'complete\'</span>:&nbsp;done&nbsp;});</div><div>});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;Logs&nbsp;\'done&nbsp;saving!\'&nbsp;after&nbsp;the&nbsp;two&nbsp;async&nbsp;saves&nbsp;have&nbsp;completed.</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9990">source</a> <a href="https://www.npmjs.com/package/lodash.after">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.after(n, func)',
        methodName: 'after',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new restricted function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7601858378704417',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to curry.</li><li><code>[arity=func.length]</code> <em>(number)</em>: The arity of <code>func</code>.</li>',
        category: 'Function Methods',
        description:
            'This method is like <a href="#curry"><code>_.curry</code></a> except that arguments are applied to <code>func</code> in the manner of <a href="#partialRight"><code>_.partialRight</code></a> instead of <a href="#partial"><code>_.partial</code></a>.<br><br>The <code>_.curryRight.placeholder</code> value, which defaults to <code>_</code> in monolithic builds, may be used as a placeholder for provided arguments.<br><br><strong>Note:</strong> This method doesn\'t set the "length" property of curried functions.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;<span class="name">abc</span>&nbsp;=&nbsp;<span class="type">function</span>(a<span class="delimiter">,</span>&nbsp;b<span class="delimiter">,</span>&nbsp;c)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;[a<span class="delimiter">,</span>&nbsp;b<span class="delimiter">,</span>&nbsp;c];</div><div>};</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;curried&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">curryRight</span>(abc);</div><div>&nbsp;</div><div><span class="name">curried</span>(<span class="numeric">3</span>)(<span class="numeric">2</span>)(<span class="numeric">1</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3]</span></div><div>&nbsp;</div><div><span class="name">curried</span>(<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>)(<span class="numeric">1</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3]</span></div><div>&nbsp;</div><div><span class="name">curried</span>(<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3]</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Curried&nbsp;with&nbsp;placeholders.</span></div><div><span class="name">curried</span>(<span class="numeric">3</span>)(<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;_)(<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10243">source</a> <a href="https://www.npmjs.com/package/lodash.curryright">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.curryRight(func, [arity=func.length])',
        methodName: 'curryRight',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new curried function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7654742728956827',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to invoke the method on.</li><li><code>key</code> <em>(string)</em>: The key of the method.</li><li><code>[partials]</code> <em>(...*)</em>: The arguments to be partially applied.</li>',
        category: 'Function Methods',
        description:
            'Creates a function that invokes the method at <code>object[key]</code> with <code>partials</code> prepended to the arguments it receives.<br><br>This method differs from <a href="#bind"><code>_.bind</code></a> by allowing bound functions to reference methods that may be redefined or don\'t yet exist. See <a href="http://peter.michaux.ca/articles/lazy-function-definition-pattern">Peter Michaux\'s article</a> for more details.<br><br>The <code>_.bindKey.placeholder</code> value, which defaults to <code>_</code> in monolithic builds, may be used as a placeholder for partially applied arguments.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{</div><div>&nbsp;&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span></div><div>&nbsp;&nbsp;<span class="string">\'greet\'</span>:&nbsp;<span class="type">function</span>(greeting<span class="delimiter">,</span>&nbsp;punctuation)&nbsp;{</div><div>&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;greeting&nbsp;+&nbsp;<span class="string">\'&nbsp;\'</span>&nbsp;+&nbsp;this<span class="delimiter">.</span>user&nbsp;+&nbsp;punctuation;</div><div>&nbsp;&nbsp;}</div><div>};</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;bound&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">bindKey</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'greet\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'hi\'</span>);</div><div><span class="name">bound</span>(<span class="string">\'!\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hi&nbsp;fred!\'</span></div><div>&nbsp;</div><div>object<span class="delimiter method">.</span><span class="name">greet</span>&nbsp;=&nbsp;<span class="type">function</span>(greeting<span class="delimiter">,</span>&nbsp;punctuation)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;greeting&nbsp;+&nbsp;<span class="string">\'ya&nbsp;\'</span>&nbsp;+&nbsp;this<span class="delimiter">.</span>user&nbsp;+&nbsp;punctuation;</div><div>};</div><div>&nbsp;</div><div><span class="name">bound</span>(<span class="string">\'!\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hiya&nbsp;fred!\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Bound&nbsp;with&nbsp;placeholders.</span></div><div><span class="type">var</span>&nbsp;bound&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">bindKey</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'greet\'</span><span class="delimiter">,</span>&nbsp;_<span class="delimiter">,</span>&nbsp;<span class="string">\'!\'</span>);</div><div><span class="name">bound</span>(<span class="string">\'hi\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hiya&nbsp;fred!\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10148">source</a> <a href="https://www.npmjs.com/package/lodash.bindkey">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.bindKey(object, key, [partials])',
        methodName: 'bindKey',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new bound function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7787495134278504',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to have its output memoized.</li><li><code>[resolver]</code> <em>(Function)</em>: The function to resolve the cache key.</li>',
        category: 'Function Methods',
        description:
            'Creates a function that memoizes the result of <code>func</code>. If <code>resolver</code> is provided, it determines the cache key for storing the result based on the arguments provided to the memoized function. By default, the first argument provided to the memoized function is used as the map cache key. The <code>func</code> is invoked with the <code>this</code> binding of the memoized function.<br><br><strong>Note:</strong> The cache is exposed as the <code>cache</code> property on the memoized function. Its creation may be customized by replacing the <code>_.memoize.Cache</code> constructor with one whose instances implement the <a href="http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object"><code>Map</code></a> method interface of <code>clear</code>, <code>delete</code>, <code>get</code>, <code>has</code>, and <code>set</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;};</div><div><span class="type">var</span>&nbsp;other&nbsp;=&nbsp;{&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="string">\'d\'</span>:&nbsp;<span class="numeric">4</span>&nbsp;};</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;values&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">memoize</span>(_<span class="delimiter">.</span>values);</div><div><span class="name">values</span>(object);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2]</span></div><div>&nbsp;</div><div><span class="name">values</span>(other);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[3,&nbsp;4]</span></div><div>&nbsp;</div><div>object<span class="delimiter">.</span>a&nbsp;=&nbsp;<span class="numeric">2</span>;</div><div><span class="name">values</span>(object);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2]</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Modify&nbsp;the&nbsp;result&nbsp;cache.</span></div><div>values<span class="delimiter">.</span>cache<span class="delimiter method">.</span><span class="name">set</span>(object<span class="delimiter">,</span>&nbsp;[<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>]);</div><div><span class="name">values</span>(object);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'a\',&nbsp;\'b\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Replace&nbsp;`_.memoize.Cache`.</span></div><div>_<span class="delimiter">.</span>memoize<span class="delimiter">.</span>Cache&nbsp;=&nbsp;<span class="support">WeakMap</span>;</div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10540">source</a> <a href="https://www.npmjs.com/package/lodash.memoize">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.memoize(func, [resolver])',
        methodName: 'memoize',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new memoized function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7951229722693804',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to flip arguments for.</li>',
        category: 'Function Methods',
        description:
            'Creates a function that invokes <code>func</code> with arguments reversed.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;flipped&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">flip</span>(<span class="type">function</span>()&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;_<span class="delimiter method">.</span><span class="name">toArray</span>(arguments);</div><div>});</div><div>&nbsp;</div><div><span class="name">flipped</span>(<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'d\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'d\',&nbsp;\'c\',&nbsp;\'b\',&nbsp;\'a\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10492">source</a> <a href="https://www.npmjs.com/package/lodash.flip">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.flip(func)',
        methodName: 'flip',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new flipped function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '917005698092706',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to curry.</li><li><code>[arity=func.length]</code> <em>(number)</em>: The arity of <code>func</code>.</li>',
        category: 'Function Methods',
        description:
            'Creates a function that accepts arguments of <code>func</code> and either invokes <code>func</code> returning its result, if at least <code>arity</code> number of arguments have been provided, or returns a function that accepts the remaining <code>func</code> arguments, and so on. The arity of <code>func</code> may be specified if <code>func.length</code> is not sufficient.<br><br>The <code>_.curry.placeholder</code> value, which defaults to <code>_</code> in monolithic builds, may be used as a placeholder for provided arguments.<br><br><strong>Note:</strong> This method doesn\'t set the "length" property of curried functions.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;<span class="name">abc</span>&nbsp;=&nbsp;<span class="type">function</span>(a<span class="delimiter">,</span>&nbsp;b<span class="delimiter">,</span>&nbsp;c)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;[a<span class="delimiter">,</span>&nbsp;b<span class="delimiter">,</span>&nbsp;c];</div><div>};</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;curried&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">curry</span>(abc);</div><div>&nbsp;</div><div><span class="name">curried</span>(<span class="numeric">1</span>)(<span class="numeric">2</span>)(<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3]</span></div><div>&nbsp;</div><div><span class="name">curried</span>(<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>)(<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3]</span></div><div>&nbsp;</div><div><span class="name">curried</span>(<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3]</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Curried&nbsp;with&nbsp;placeholders.</span></div><div><span class="name">curried</span>(<span class="numeric">1</span>)(_<span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>)(<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10198">source</a> <a href="https://www.npmjs.com/package/lodash.curry">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.curry(func, [arity=func.length])',
        methodName: 'curry',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new curried function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9654045755544589',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to bind.</li><li><code>thisArg</code> <em>(*)</em>: The <code>this</code> binding of <code>func</code>.</li><li><code>[partials]</code> <em>(...*)</em>: The arguments to be partially applied.</li>',
        category: 'Function Methods',
        description:
            'Creates a function that invokes <code>func</code> with the <code>this</code> binding of <code>thisArg</code> and <code>partials</code> prepended to the arguments it receives.<br><br>The <code>_.bind.placeholder</code> value, which defaults to <code>_</code> in monolithic builds, may be used as a placeholder for partially applied arguments.<br><br><strong>Note:</strong> Unlike native <code>Function#bind</code>, this method doesn\'t set the "length" property of bound functions.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">greet</span>(greeting<span class="delimiter">,</span>&nbsp;punctuation)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;greeting&nbsp;+&nbsp;<span class="string">\'&nbsp;\'</span>&nbsp;+&nbsp;this<span class="delimiter">.</span>user&nbsp;+&nbsp;punctuation;</div><div>}</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span>&nbsp;};</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;bound&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">bind</span>(greet<span class="delimiter">,</span>&nbsp;object<span class="delimiter">,</span>&nbsp;<span class="string">\'hi\'</span>);</div><div><span class="name">bound</span>(<span class="string">\'!\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hi&nbsp;fred!\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Bound&nbsp;with&nbsp;placeholders.</span></div><div><span class="type">var</span>&nbsp;bound&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">bind</span>(greet<span class="delimiter">,</span>&nbsp;object<span class="delimiter">,</span>&nbsp;_<span class="delimiter">,</span>&nbsp;<span class="string">\'!\'</span>);</div><div><span class="name">bound</span>(<span class="string">\'hi\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hi&nbsp;fred!\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10094">source</a> <a href="https://www.npmjs.com/package/lodash.bind">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.bind(func, thisArg, [partials])',
        methodName: 'bind',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new bound function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9731195398345646',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to wrap.</li><li><code>[transforms=[_.identity]]</code> <em>(...(Function|Function[]))</em>: The argument transforms.</li>',
        category: 'Function Methods',
        description:
            'Creates a function that invokes <code>func</code> with its arguments transformed.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">doubled</span>(n)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;n&nbsp;*&nbsp;<span class="numeric">2</span>;</div><div>}</div><div>&nbsp;</div><div><span class="type">function</span>&nbsp;<span class="name">square</span>(n)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;n&nbsp;*&nbsp;n;</div><div>}</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;func&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">overArgs</span>(<span class="type">function</span>(x<span class="delimiter">,</span>&nbsp;y)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;[x<span class="delimiter">,</span>&nbsp;y];</div><div>}<span class="delimiter">,</span>&nbsp;[square<span class="delimiter">,</span>&nbsp;doubled]);</div><div>&nbsp;</div><div><span class="name">func</span>(<span class="numeric">9</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[81,&nbsp;6]</span></div><div>&nbsp;</div><div><span class="name">func</span>(<span class="numeric">10</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[100,&nbsp;10]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10652">source</a> <a href="https://www.npmjs.com/package/lodash.overargs">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.overArgs(func, [transforms=[_.identity]])',
        methodName: 'overArgs',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9846584457392464',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to spread arguments over.</li><li><code>[start=0]</code> <em>(number)</em>: The start position of the spread.</li>',
        category: 'Function Methods',
        description:
            'Creates a function that invokes <code>func</code> with the <code>this</code> binding of the create function and an array of arguments much like <a href="http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply"><code>Function#apply</code></a>.<br><br><strong>Note:</strong> This method is based on the <a href="https://mdn.io/spread_operator">spread operator</a>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;say&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">spread</span>(<span class="type">function</span>(who<span class="delimiter">,</span>&nbsp;what)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;who&nbsp;+&nbsp;<span class="string">\'&nbsp;says&nbsp;\'</span>&nbsp;+&nbsp;what;</div><div>});</div><div>&nbsp;</div><div><span class="name">say</span>([<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'hello\'</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'fred&nbsp;says&nbsp;hello\'</span></div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;numbers&nbsp;=&nbsp;Promise<span class="delimiter">.</span><span class="support">all</span>([</div><div>&nbsp;&nbsp;Promise<span class="delimiter method">.</span><span class="name">resolve</span>(<span class="numeric">40</span>)<span class="delimiter">,</span></div><div>&nbsp;&nbsp;Promise<span class="delimiter method">.</span><span class="name">resolve</span>(<span class="numeric">36</span>)</div><div>]);</div><div>&nbsp;</div><div>numbers<span class="delimiter method">.</span><span class="name">then</span>(_<span class="delimiter method">.</span><span class="name">spread</span>(<span class="type">function</span>(x<span class="delimiter">,</span>&nbsp;y)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;x&nbsp;+&nbsp;y;</div><div>}));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;a&nbsp;Promise&nbsp;of&nbsp;76</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10837">source</a> <a href="https://www.npmjs.com/package/lodash.spread">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.spread(func, [start=0])',
        methodName: 'spread',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '012318927123434298',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is classified as a <code>Map</code> object.',
        example:
            '<pre><div>_<span class="delimiter">.</span><span class="support">isMap</span>(new&nbsp;<span class="name type">Map</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter">.</span><span class="support">isMap</span>(new&nbsp;<span class="name type">WeakMap</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11793">source</a> <a href="https://www.npmjs.com/package/lodash.ismap">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isMap(value)',
        methodName: 'isMap',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a map, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '02241233619576973',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to process.</li>',
        category: 'Lang Methods',
        description: 'Converts <code>value</code> to a number.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">toNumber</span>(<span class="numeric">3<span class="delimiter">.</span>2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3.2</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toNumber</span>(<span class="support">Number</span><span class="delimiter">.</span><span class="support">MIN_VALUE</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;5e-324</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toNumber</span>(Infinity);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;Infinity</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toNumber</span>(<span class="string">\'3.2\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3.2</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12457">source</a> <a href="https://www.npmjs.com/package/lodash.tonumber">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.toNumber(value)',
        methodName: 'toNumber',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the number.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '0237347598863062',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is an integer.<br><br><strong>Note:</strong> This method is based on <a href="https://mdn.io/Number/isInteger"><code>Number.isInteger</code></a>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isInteger</span>(<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isInteger</span>(<span class="support">Number</span><span class="delimiter">.</span><span class="support">MIN_VALUE</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isInteger</span>(Infinity);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isInteger</span>(<span class="string">\'3\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11683">source</a> <a href="https://www.npmjs.com/package/lodash.isinteger">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isInteger(value)',
        methodName: 'isInteger',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is an integer, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '02596307967284065',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is a pristine native function.<br><br><strong>Note:</strong> This method can\'t reliably detect native functions in the presence of the core-js package because core-js circumvents this kind of detection. Despite multiple requests, the core-js maintainer has made it clear: any attempt to fix the detection will be obstructed. As a result, we\'re left with little choice but to throw an error. Unfortunately, this also affects packages, like <a href="https://www.npmjs.com/package/babel-polyfill">babel-polyfill</a>, which rely on core-js.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isNative</span>(<span class="support">Array</span><span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>push);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isNative</span>(_);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11925">source</a> <a href="https://www.npmjs.com/package/lodash.isnative">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isNative(value)',
        methodName: 'isNative',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a native function, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '04487484799108022',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to compare.</li><li><code>other</code> <em>(*)</em>: The other value to compare.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is greater than or equal to <code>other</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">gte</span>(<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">gte</span>(<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">gte</span>(<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11236">source</a> <a href="https://www.npmjs.com/package/lodash.gte">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.gte(value, other)',
        methodName: 'gte',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is greater than or equal to <code>other</code>, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '06757528613801478',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to inspect.</li><li><code>source</code> <em>(Object)</em>: The object of property predicates to conform to.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>object</code> conforms to <code>source</code> by invoking the predicate properties of <code>source</code> with the corresponding property values of <code>object</code>.<br><br><strong>Note:</strong> This method is equivalent to <a href="#conforms"><code>_.conforms</code></a> when <code>source</code> is partially applied.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">conformsTo</span>(object<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="type">function</span>(n)&nbsp;{&nbsp;return&nbsp;n&nbsp;&gt;&nbsp;<span class="numeric">1</span>;&nbsp;}&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">conformsTo</span>(object<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="type">function</span>(n)&nbsp;{&nbsp;return&nbsp;n&nbsp;&gt;&nbsp;<span class="numeric">2</span>;&nbsp;}&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11148">source</a> <a href="https://www.npmjs.com/package/lodash.conformsto">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.conformsTo(object, source)',
        methodName: 'conformsTo',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>object</code> conforms, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '07187474828137197',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to compare.</li><li><code>other</code> <em>(*)</em>: The other value to compare.</li>',
        category: 'Lang Methods',
        description:
            'Performs a <a href="http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero"><code>SameValueZero</code></a> comparison between two values to determine if they are equivalent.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;};</div><div><span class="type">var</span>&nbsp;other&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">eq</span>(object<span class="delimiter">,</span>&nbsp;object);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">eq</span>(object<span class="delimiter">,</span>&nbsp;other);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">eq</span>(<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'a\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">eq</span>(<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="support">Object</span>(<span class="string">\'a\'</span>));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">eq</span>(NaN<span class="delimiter">,</span>&nbsp;NaN);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11184">source</a> <a href="https://www.npmjs.com/package/lodash.eq">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.eq(value, other)',
        methodName: 'eq',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if the values are equivalent, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '09947001605912392',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is a plain object, that is, an object created by the <code>Object</code> constructor or one with a <code>[[Prototype]]</code> of <code>null</code>.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">Foo</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>a&nbsp;=&nbsp;<span class="numeric">1</span>;</div><div>}</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isPlainObject</span>(new&nbsp;<span class="name type">Foo</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isPlainObject</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isPlainObject</span>({&nbsp;<span class="string">\'x\'</span>:&nbsp;<span class="numeric">0</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span>:&nbsp;<span class="numeric">0</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isPlainObject</span>(<span class="support">Object</span><span class="delimiter method">.</span><span class="name">create</span>(null));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12036">source</a> <a href="https://www.npmjs.com/package/lodash.isplainobject">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isPlainObject(value)',
        methodName: 'isPlainObject',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a plain object, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '10735292761073005',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is classified as a <code>Set</code> object.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isSet</span>(new&nbsp;<span class="name type">Set</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isSet</span>(new&nbsp;<span class="name type">WeakSet</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12116">source</a> <a href="https://www.npmjs.com/package/lodash.isset">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isSet(value)',
        methodName: 'isSet',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a set, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '1255741914743639',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to convert.</li>',
        category: 'Lang Methods',
        description:
            'Converts <code>value</code> to a string. An empty string is returned for <code>null</code> and <code>undefined</code> values. The sign of <code>-0</code> is preserved.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="support">toString</span>(null);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="support">toString</span>(-<span class="numeric">0</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'-0\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="support">toString</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'1,2,3\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12557">source</a> <a href="https://www.npmjs.com/package/lodash.tostring">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.toString(value)',
        methodName: 'toString',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the converted string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '14019177729910637',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is a valid array-like length.<br><br><strong>Note:</strong> This method is loosely based on <a href="http://ecma-international.org/ecma-262/7.0/#sec-tolength"><code>ToLength</code></a>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isLength</span>(<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isLength</span>(<span class="support">Number</span><span class="delimiter">.</span><span class="support">MIN_VALUE</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isLength</span>(Infinity);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isLength</span>(<span class="string">\'3\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11713">source</a> <a href="https://www.npmjs.com/package/lodash.islength">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isLength(value)',
        methodName: 'isLength',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a valid length, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '15110197725475646',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is an <code>Error</code>, <code>EvalError</code>, <code>RangeError</code>, <code>ReferenceError</code>, <code>SyntaxError</code>, <code>TypeError</code>, or <code>URIError</code> object.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isError</span>(new&nbsp;<span class="name type">Error</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isError</span>(Error);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11591">source</a> <a href="https://www.npmjs.com/package/lodash.iserror">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isError(value)',
        methodName: 'isError',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is an error object, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '15460756538067147',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is an empty object, collection, map, or set.<br><br>Objects are considered empty if they have no own enumerable string keyed properties.<br><br>Array-like values such as <code>arguments</code> objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they have a <code>length</code> of <code>0</code>. Similarly, maps and sets are considered empty if they have a <code>size</code> of <code>0</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isEmpty</span>(null);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isEmpty</span>(true);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isEmpty</span>(<span class="numeric">1</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isEmpty</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isEmpty</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11479">source</a> <a href="https://www.npmjs.com/package/lodash.isempty">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isEmpty(value)',
        methodName: 'isEmpty',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is empty, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '1898161071973838',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to compare.</li><li><code>other</code> <em>(*)</em>: The other value to compare.</li>',
        category: 'Lang Methods',
        description:
            'Performs a deep comparison between two values to determine if they are equivalent.<br><br><strong>Note:</strong> This method supports comparing arrays, array buffers, booleans, date objects, error objects, maps, numbers, <code>Object</code> objects, regexes, sets, strings, symbols, and typed arrays. <code>Object</code> objects are compared by their own, not inherited, enumerable properties. Functions and DOM nodes are compared by strict equality, i.e. <code>===</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;};</div><div><span class="type">var</span>&nbsp;other&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isEqual</span>(object<span class="delimiter">,</span>&nbsp;other);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>object&nbsp;===&nbsp;other;</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11531">source</a> <a href="https://www.npmjs.com/package/lodash.isequal">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isEqual(value, other)',
        methodName: 'isEqual',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if the values are equivalent, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '19694583571532978',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is <code>NaN</code>.<br><br><strong>Note:</strong> This method is based on <a href="https://mdn.io/Number/isNaN"><code>Number.isNaN</code></a> and is not the same as global <a href="https://mdn.io/isNaN"><code>isNaN</code></a> which returns <code>true</code> for <code>undefined</code> and other non-number values.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isNaN</span>(NaN);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isNaN</span>(new&nbsp;<span class="name type">Number</span>(NaN));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div><span class="support">isNaN</span>(undefined);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isNaN</span>(undefined);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11892">source</a> <a href="https://www.npmjs.com/package/lodash.isnan">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isNaN(value)',
        methodName: 'isNaN',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is <code>NaN</code>, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '2070653222040988',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to clone.</li><li><code>[customizer]</code> <em>(Function)</em>: The function to customize cloning.</li>',
        category: 'Lang Methods',
        description:
            'This method is like <a href="#clone"><code>_.clone</code></a> except that it accepts <code>customizer</code> which is invoked to produce the cloned value. If <code>customizer</code> returns <code>undefined</code>, cloning is handled by the method instead. The <code>customizer</code> is invoked with up to four arguments; <em>(value [, index|key, object, stack])</em>.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">customizer</span>(value)&nbsp;{</div><div>&nbsp;&nbsp;if&nbsp;(_<span class="delimiter method">.</span><span class="name">isElement</span>(value))&nbsp;{</div><div>&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;value<span class="delimiter method">.</span><span class="support">cloneNode</span>(false);</div><div>&nbsp;&nbsp;}</div><div>}</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;el&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">cloneWith</span>(<span class="support">document</span><span class="delimiter">.</span><span class="support">body</span><span class="delimiter">,</span>&nbsp;customizer);</div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(el&nbsp;===&nbsp;<span class="support">document</span><span class="delimiter">.</span><span class="support">body</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(el<span class="delimiter">.</span><span class="support">nodeName</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'BODY\'</span></div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(el<span class="delimiter">.</span><span class="support">childNodes</span><span class="delimiter">.</span><span class="support">length</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;0</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11064">source</a> <a href="https://www.npmjs.com/package/lodash.clonewith">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.cloneWith(value, [customizer])',
        methodName: 'cloneWith',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the cloned value.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '21015161302860888',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is classified as an <code>Array</code> object.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isArray</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isArray</span>(<span class="support">document</span><span class="delimiter">.</span><span class="support">body</span><span class="delimiter">.</span>children);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isArray</span>(<span class="string">\'abc\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isArray</span>(_<span class="delimiter">.</span>noop);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11286">source</a> <a href="https://www.npmjs.com/package/lodash.isarray">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isArray(value)',
        methodName: 'isArray',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is an array, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '22113294765468072',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to compare.</li><li><code>other</code> <em>(*)</em>: The other value to compare.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is less than or equal to <code>other</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">lte</span>(<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">lte</span>(<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">lte</span>(<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12292">source</a> <a href="https://www.npmjs.com/package/lodash.lte">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.lte(value, other)',
        methodName: 'lte',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is less than or equal to <code>other</code>, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '23432809111824118',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is the <a href="http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types">language type</a> of <code>Object</code>. <em>(e.g. arrays, functions, objects, regexes, <code>new Number(0)</code>, and <code>new String(\'\')</code>)</em>',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isObject</span>({});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isObject</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isObject</span>(_<span class="delimiter">.</span>noop);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isObject</span>(null);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11743">source</a> <a href="https://www.npmjs.com/package/lodash.isobject">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isObject(value)',
        methodName: 'isObject',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is an object, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '24236536742091075',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to compare.</li><li><code>other</code> <em>(*)</em>: The other value to compare.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is greater than <code>other</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">gt</span>(<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">gt</span>(<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">gt</span>(<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11211">source</a> <a href="https://www.npmjs.com/package/lodash.gt">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.gt(value, other)',
        methodName: 'gt',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is greater than <code>other</code>, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '2562249110987172',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is classified as an <code>ArrayBuffer</code> object.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isArrayBuffer</span>(new&nbsp;<span class="name type">ArrayBuffer</span>(<span class="numeric">2</span>));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isArrayBuffer</span>(new&nbsp;<span class="name type">Array</span>(<span class="numeric">2</span>));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11305">source</a> <a href="https://www.npmjs.com/package/lodash.isarraybuffer">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isArrayBuffer(value)',
        methodName: 'isArrayBuffer',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is an array buffer, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '27314322765903454',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is classified as a <code>String</code> primitive or object.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isString</span>(<span class="string">\'abc\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isString</span>(<span class="numeric">1</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12135">source</a> <a href="https://www.npmjs.com/package/lodash.isstring">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isString(value)',
        methodName: 'isString',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a string, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '29683183759703125',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is classified as a <code>WeakMap</code> object.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isWeakMap</span>(new&nbsp;<span class="name type">WeakMap</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isWeakMap</span>(new&nbsp;<span class="name type">Map</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12219">source</a> <a href="https://www.npmjs.com/package/lodash.isweakmap">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isWeakMap(value)',
        methodName: 'isWeakMap',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a weak map, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '3174012351234999',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is a finite primitive number.<br><br><strong>Note:</strong> This method is based on <a href="https://mdn.io/Number/isFinite"><code>Number.isFinite</code></a>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isFinite</span>(<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isFinite</span>(<span class="support">Number</span><span class="delimiter">.</span><span class="support">MIN_VALUE</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isFinite</span>(Infinity);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isFinite</span>(<span class="string">\'3\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11626">source</a> <a href="https://www.npmjs.com/package/lodash.isfinite">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isFinite(value)',
        methodName: 'isFinite',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a finite number, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '3418590340591243',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is classified as a boolean primitive or object.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isBoolean</span>(false);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isBoolean</span>(null);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11382">source</a> <a href="https://www.npmjs.com/package/lodash.isboolean">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isBoolean(value)',
        methodName: 'isBoolean',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a boolean, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '346343777816647',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to clone.</li>',
        category: 'Lang Methods',
        description:
            'Creates a shallow clone of <code>value</code>.<br><br><strong>Note:</strong> This method is loosely based on the <a href="https://mdn.io/Structured_clone_algorithm">structured clone algorithm</a> and supports cloning arrays, array buffers, booleans, date objects, maps, numbers, <code>Object</code> objects, regexes, sets, strings, symbols, and typed arrays. The own enumerable properties of <code>arguments</code> objects are cloned as plain objects. An empty object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}];</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;shallow&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">clone</span>(objects);</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(shallow[<span class="numeric">0</span>]&nbsp;===&nbsp;objects[<span class="numeric">0</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11029">source</a> <a href="https://www.npmjs.com/package/lodash.clone">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.clone(value)',
        methodName: 'clone',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the cloned value.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '38606699558794894',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description: 'Checks if <code>value</code> is <code>undefined</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isUndefined</span>(void&nbsp;<span class="numeric">0</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isUndefined</span>(null);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12198">source</a> <a href="https://www.npmjs.com/package/lodash.isundefined">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isUndefined(value)',
        methodName: 'isUndefined',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is <code>undefined</code>, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '387981017610391',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is classified as a <code>Function</code> object.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isFunction</span>(_);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isFunction</span>(<span class="string">/abc/</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11647">source</a> <a href="https://www.npmjs.com/package/lodash.isfunction">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isFunction(value)',
        methodName: 'isFunction',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a function, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '39049745300712596',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to convert.</li>',
        category: 'Lang Methods',
        description: 'Converts <code>value</code> to a finite number.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">toFinite</span>(<span class="numeric">3<span class="delimiter">.</span>2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3.2</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toFinite</span>(<span class="support">Number</span><span class="delimiter">.</span><span class="support">MIN_VALUE</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;5e-324</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toFinite</span>(Infinity);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;1.7976931348623157e+308</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toFinite</span>(<span class="string">\'3.2\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3.2</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12358">source</a> <a href="https://www.npmjs.com/package/lodash.tofinite">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.toFinite(value)',
        methodName: 'toFinite',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the converted number.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '40442882123134116',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to convert.</li>',
        category: 'Lang Methods',
        description:
            'Converts <code>value</code> to a plain object flattening inherited enumerable string keyed properties of <code>value</code> to own properties of the plain object.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">Foo</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>b&nbsp;=&nbsp;<span class="numeric">2</span>;</div><div>}</div><div>&nbsp;</div><div>Foo<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>c&nbsp;=&nbsp;<span class="numeric">3</span>;</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">assign</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;new&nbsp;<span class="name type">Foo</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;1,&nbsp;\'b\':&nbsp;2&nbsp;}</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">assign</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">toPlainObject</span>(new&nbsp;<span class="name type">Foo</span>));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;1,&nbsp;\'b\':&nbsp;2,&nbsp;\'c\':&nbsp;3&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12502">source</a> <a href="https://www.npmjs.com/package/lodash.toplainobject">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.toPlainObject(value)',
        methodName: 'toPlainObject',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the converted plain object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '43199960851985997',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description: 'Checks if <code>value</code> is likely a DOM element.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isElement</span>(<span class="support">document</span><span class="delimiter">.</span><span class="support">body</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isElement</span>(<span class="string">\'&lt;body&gt;\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11442">source</a> <a href="https://www.npmjs.com/package/lodash.iselement">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isElement(value)',
        methodName: 'isElement',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a DOM element, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '44030392128250884',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to convert.</li>',
        category: 'Lang Methods',
        description:
            'Converts <code>value</code> to an integer suitable for use as the length of an array-like object.<br><br><strong>Note:</strong> This method is based on <a href="http://ecma-international.org/ecma-262/7.0/#sec-tolength"><code>ToLength</code></a>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">toLength</span>(<span class="numeric">3<span class="delimiter">.</span>2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toLength</span>(<span class="support">Number</span><span class="delimiter">.</span><span class="support">MIN_VALUE</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;0</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toLength</span>(Infinity);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;4294967295</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toLength</span>(<span class="string">\'3.2\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12430">source</a> <a href="https://www.npmjs.com/package/lodash.tolength">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.toLength(value)',
        methodName: 'toLength',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the converted integer.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '4520658796560039',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is likely an <code>arguments</code> object.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isArguments</span>(<span class="type">function</span>()&nbsp;{&nbsp;return&nbsp;arguments;&nbsp;}());</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isArguments</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11258">source</a> <a href="https://www.npmjs.com/package/lodash.isarguments">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isArguments(value)',
        methodName: 'isArguments',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is an <code>arguments</code> object, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '45461636235780206',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is a safe integer. An integer is safe if it\'s an IEEE-754 double precision number which isn\'t the result of a rounded unsafe integer.<br><br><strong>Note:</strong> This method is based on <a href="https://mdn.io/Number/isSafeInteger"><code>Number.isSafeInteger</code></a>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isSafeInteger</span>(<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isSafeInteger</span>(<span class="support">Number</span><span class="delimiter">.</span><span class="support">MIN_VALUE</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isSafeInteger</span>(Infinity);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isSafeInteger</span>(<span class="string">\'3\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12095">source</a> <a href="https://www.npmjs.com/package/lodash.issafeinteger">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isSafeInteger(value)',
        methodName: 'isSafeInteger',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a safe integer, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '4604870795691315',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to inspect.</li><li><code>source</code> <em>(Object)</em>: The object of property values to match.</li>',
        category: 'Lang Methods',
        description:
            'Performs a partial deep comparison between <code>object</code> and <code>source</code> to determine if <code>object</code> contains equivalent property values.<br><br><strong>Note:</strong> This method is equivalent to <a href="#matches"><code>_.matches</code></a> when <code>source</code> is partially applied.<br><br>Partial comparisons will match empty array and empty object <code>source</code> values against any array or object value, respectively. See <a href="#isEqual"><code>_.isEqual</code></a> for a list of supported value comparisons.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isMatch</span>(object<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isMatch</span>(object<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11823">source</a> <a href="https://www.npmjs.com/package/lodash.ismatch">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isMatch(object, source)',
        methodName: 'isMatch',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>object</code> is a match, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '4692508504882065',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to inspect.</li><li><code>source</code> <em>(Object)</em>: The object of property values to match.</li><li><code>[customizer]</code> <em>(Function)</em>: The function to customize comparisons.</li>',
        category: 'Lang Methods',
        description:
            'This method is like <a href="#isMatch"><code>_.isMatch</code></a> except that it accepts <code>customizer</code> which is invoked to compare values. If <code>customizer</code> returns <code>undefined</code>, comparisons are handled by the method instead. The <code>customizer</code> is invoked with five arguments: <em>(objValue, srcValue, index|key, object, source)</em>.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">isGreeting</span>(value)&nbsp;{</div><div>&nbsp;&nbsp;return<span class="string">&nbsp;/^h(?:i|ello)$/</span><span class="delimiter method">.</span><span class="support">test</span>(value);</div><div>}</div><div>&nbsp;</div><div><span class="type">function</span>&nbsp;<span class="name">customizer</span>(objValue<span class="delimiter">,</span>&nbsp;srcValue)&nbsp;{</div><div>&nbsp;&nbsp;if&nbsp;(<span class="name">isGreeting</span>(objValue)&nbsp;&amp;&amp;&nbsp;<span class="name">isGreeting</span>(srcValue))&nbsp;{</div><div>&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;true;</div><div>&nbsp;&nbsp;}</div><div>}</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'greeting\'</span>:&nbsp;<span class="string">\'hello\'</span>&nbsp;};</div><div><span class="type">var</span>&nbsp;source&nbsp;=&nbsp;{&nbsp;<span class="string">\'greeting\'</span>:&nbsp;<span class="string">\'hi\'</span>&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isMatchWith</span>(object<span class="delimiter">,</span>&nbsp;source<span class="delimiter">,</span>&nbsp;customizer);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11859">source</a> <a href="https://www.npmjs.com/package/lodash.ismatchwith">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isMatchWith(object, source, [customizer])',
        methodName: 'isMatchWith',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>object</code> is a match, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '47410402070855856',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is classified as a <code>WeakSet</code> object.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isWeakSet</span>(new&nbsp;<span class="name type">WeakSet</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isWeakSet</span>(new&nbsp;<span class="name type">Set</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12240">source</a> <a href="https://www.npmjs.com/package/lodash.isweakset">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isWeakSet(value)',
        methodName: 'isWeakSet',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a weak set, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '4885737476083645',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is <code>null</code> or <code>undefined</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isNil</span>(null);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isNil</span>(void&nbsp;<span class="numeric">0</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isNil</span>(NaN);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11973">source</a> <a href="https://www.npmjs.com/package/lodash.isnil">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isNil(value)',
        methodName: 'isNil',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is nullish, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5088883943893864',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is object-like. A value is object-like if it\'s not <code>null</code> and has a <code>typeof</code> result of "object".',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isObjectLike</span>({});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isObjectLike</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isObjectLike</span>(_<span class="delimiter">.</span>noop);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isObjectLike</span>(null);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11772">source</a> <a href="https://www.npmjs.com/package/lodash.isobjectlike">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isObjectLike(value)',
        methodName: 'isObjectLike',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is object-like, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5137518472886285',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is classified as a <code>Number</code> primitive or object.<br><br><strong>Note:</strong> To exclude <code>Infinity</code>, <code>-Infinity</code>, and <code>NaN</code>, which are classified as numbers, use the <a href="#isFinite"><code>_.isFinite</code></a> method.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isNumber</span>(<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isNumber</span>(<span class="support">Number</span><span class="delimiter">.</span><span class="support">MIN_VALUE</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isNumber</span>(Infinity);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isNumber</span>(<span class="string">\'3\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12003">source</a> <a href="https://www.npmjs.com/package/lodash.isnumber">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isNumber(value)',
        methodName: 'isNumber',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a number, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5211782072559998',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to compare.</li><li><code>other</code> <em>(*)</em>: The other value to compare.</li><li><code>[customizer]</code> <em>(Function)</em>: The function to customize comparisons.</li>',
        category: 'Lang Methods',
        description:
            'This method is like <a href="#isEqual"><code>_.isEqual</code></a> except that it accepts <code>customizer</code> which is invoked to compare values. If <code>customizer</code> returns <code>undefined</code>, comparisons are handled by the method instead. The <code>customizer</code> is invoked with up to six arguments: <em>(objValue, othValue [, index|key, object, other, stack])</em>.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">isGreeting</span>(value)&nbsp;{</div><div>&nbsp;&nbsp;return<span class="string">&nbsp;/^h(?:i|ello)$/</span><span class="delimiter method">.</span><span class="support">test</span>(value);</div><div>}</div><div>&nbsp;</div><div><span class="type">function</span>&nbsp;<span class="name">customizer</span>(objValue<span class="delimiter">,</span>&nbsp;othValue)&nbsp;{</div><div>&nbsp;&nbsp;if&nbsp;(<span class="name">isGreeting</span>(objValue)&nbsp;&amp;&amp;&nbsp;<span class="name">isGreeting</span>(othValue))&nbsp;{</div><div>&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;true;</div><div>&nbsp;&nbsp;}</div><div>}</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[<span class="string">\'hello\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'goodbye\'</span>];</div><div><span class="type">var</span>&nbsp;other&nbsp;=&nbsp;[<span class="string">\'hi\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'goodbye\'</span>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isEqualWith</span>(array<span class="delimiter">,</span>&nbsp;other<span class="delimiter">,</span>&nbsp;customizer);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11567">source</a> <a href="https://www.npmjs.com/package/lodash.isequalwith">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isEqualWith(value, other, [customizer])',
        methodName: 'isEqualWith',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if the values are equivalent, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5570661555910266',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to convert.</li>',
        category: 'Lang Methods',
        description: 'Converts <code>value</code> to an array.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">toArray</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toArray</span>(<span class="string">\'abc\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'a\',&nbsp;\'b\',&nbsp;\'c\']</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toArray</span>(<span class="numeric">1</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toArray</span>(null);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12319">source</a> <a href="https://www.npmjs.com/package/lodash.toarray">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.toArray(value)',
        methodName: 'toArray',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the converted array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5832156739079801',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to compare.</li><li><code>other</code> <em>(*)</em>: The other value to compare.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is less than <code>other</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">lt</span>(<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">lt</span>(<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">lt</span>(<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12267">source</a> <a href="https://www.npmjs.com/package/lodash.lt">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.lt(value, other)',
        methodName: 'lt',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is less than <code>other</code>, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5865213196805127',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to recursively clone.</li><li><code>[customizer]</code> <em>(Function)</em>: The function to customize cloning.</li>',
        category: 'Lang Methods',
        description:
            'This method is like <a href="#cloneWith"><code>_.cloneWith</code></a> except that it recursively clones <code>value</code>.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">customizer</span>(value)&nbsp;{</div><div>&nbsp;&nbsp;if&nbsp;(_<span class="delimiter method">.</span><span class="name">isElement</span>(value))&nbsp;{</div><div>&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;value<span class="delimiter method">.</span><span class="support">cloneNode</span>(true);</div><div>&nbsp;&nbsp;}</div><div>}</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;el&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">cloneDeepWith</span>(<span class="support">document</span><span class="delimiter">.</span><span class="support">body</span><span class="delimiter">,</span>&nbsp;customizer);</div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(el&nbsp;===&nbsp;<span class="support">document</span><span class="delimiter">.</span><span class="support">body</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(el<span class="delimiter">.</span><span class="support">nodeName</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'BODY\'</span></div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(el<span class="delimiter">.</span><span class="support">childNodes</span><span class="delimiter">.</span><span class="support">length</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;20</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11119">source</a> <a href="https://www.npmjs.com/package/lodash.clonedeepwith">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.cloneDeepWith(value, [customizer])',
        methodName: 'cloneDeepWith',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the deep cloned value.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6381155399734411',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to inspect.</li>',
        category: 'Lang Methods',
        description: "Casts <code>value</code> as an array if it's not one.",
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">castArray</span>(<span class="numeric">1</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">castArray</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'a\':&nbsp;1&nbsp;}]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">castArray</span>(<span class="string">\'abc\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'abc\']</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">castArray</span>(null);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[null]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">castArray</span>(undefined);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[undefined]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">castArray</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[]</span></div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>];</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(_<span class="delimiter method">.</span><span class="name">castArray</span>(array)&nbsp;===&nbsp;array);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10995">source</a> <a href="https://www.npmjs.com/package/lodash.castarray">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.castArray(value)',
        methodName: 'castArray',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the cast array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6388567110024915',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'This method is like <a href="#isArrayLike"><code>_.isArrayLike</code></a> except that it also checks if <code>value</code> is an object.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isArrayLikeObject</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isArrayLikeObject</span>(<span class="support">document</span><span class="delimiter">.</span><span class="support">body</span><span class="delimiter">.</span>children);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isArrayLikeObject</span>(<span class="string">\'abc\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isArrayLikeObject</span>(_<span class="delimiter">.</span>noop);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11361">source</a> <a href="https://www.npmjs.com/package/lodash.isarraylikeobject">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isArrayLikeObject(value)',
        methodName: 'isArrayLikeObject',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is an array-like object, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6445548426633587',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is classified as a <code>Symbol</code> primitive or object.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isSymbol</span>(<span class="support">Symbol</span><span class="delimiter">.</span>iterator);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isSymbol</span>(<span class="string">\'abc\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12157">source</a> <a href="https://www.npmjs.com/package/lodash.issymbol">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isSymbol(value)',
        methodName: 'isSymbol',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a symbol, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6794203789407217',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to recursively clone.</li>',
        category: 'Lang Methods',
        description:
            'This method is like <a href="#clone"><code>_.clone</code></a> except that it recursively clones <code>value</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}];</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;deep&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">cloneDeep</span>(objects);</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(deep[<span class="numeric">0</span>]&nbsp;===&nbsp;objects[<span class="numeric">0</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11087">source</a> <a href="https://www.npmjs.com/package/lodash.clonedeep">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.cloneDeep(value)',
        methodName: 'cloneDeep',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the deep cloned value.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6821751067065236',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description: 'Checks if <code>value</code> is a buffer.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isBuffer</span>(new&nbsp;<span class="name type">Buffer</span>(<span class="numeric">2</span>));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isBuffer</span>(new&nbsp;<span class="name type">Uint8Array</span>(<span class="numeric">2</span>));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11404">source</a> <a href="https://www.npmjs.com/package/lodash.isbuffer">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isBuffer(value)',
        methodName: 'isBuffer',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a buffer, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7209036330719423',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is classified as a <code>RegExp</code> object.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isRegExp</span>(<span class="string">/abc/</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isRegExp</span>(<span class="string">\'/abc/\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12066">source</a> <a href="https://www.npmjs.com/package/lodash.isregexp">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isRegExp(value)',
        methodName: 'isRegExp',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a regexp, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7603467889791872',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is classified as a <code>Date</code> object.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isDate</span>(new&nbsp;<span class="name type">Date</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isDate</span>(<span class="string">\'Mon&nbsp;April&nbsp;23&nbsp;2012\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11423">source</a> <a href="https://www.npmjs.com/package/lodash.isdate">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isDate(value)',
        methodName: 'isDate',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a date object, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7726678255977933',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to convert.</li>',
        category: 'Lang Methods',
        description:
            'Converts <code>value</code> to an integer.<br><br><strong>Note:</strong> This method is loosely based on <a href="http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger"><code>ToInteger</code></a>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">toInteger</span>(<span class="numeric">3<span class="delimiter">.</span>2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toInteger</span>(<span class="support">Number</span><span class="delimiter">.</span><span class="support">MIN_VALUE</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;0</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toInteger</span>(Infinity);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;1.7976931348623157e+308</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toInteger</span>(<span class="string">\'3.2\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12396">source</a> <a href="https://www.npmjs.com/package/lodash.tointeger">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.toInteger(value)',
        methodName: 'toInteger',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the converted integer.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9078966859749203',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description: 'Checks if <code>value</code> is <code>null</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isNull</span>(null);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isNull</span>(void&nbsp;<span class="numeric">0</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11949">source</a> <a href="https://www.npmjs.com/package/lodash.isnull">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isNull(value)',
        methodName: 'isNull',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is <code>null</code>, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9141220081415536',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to convert.</li>',
        category: 'Lang Methods',
        description:
            'Converts <code>value</code> to a safe integer. A safe integer can be compared and represented correctly.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">toSafeInteger</span>(<span class="numeric">3<span class="delimiter">.</span>2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toSafeInteger</span>(<span class="support">Number</span><span class="delimiter">.</span><span class="support">MIN_VALUE</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;0</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toSafeInteger</span>(Infinity);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;9007199254740991</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toSafeInteger</span>(<span class="string">\'3.2\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12530">source</a> <a href="https://www.npmjs.com/package/lodash.tosafeinteger">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.toSafeInteger(value)',
        methodName: 'toSafeInteger',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the converted integer.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '92471395625315',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            'Checks if <code>value</code> is classified as a typed array.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isTypedArray</span>(new&nbsp;<span class="name type">Uint8Array</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isTypedArray</span>([]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12179">source</a> <a href="https://www.npmjs.com/package/lodash.istypedarray">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isTypedArray(value)',
        methodName: 'isTypedArray',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is a typed array, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9419389545452351',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li>',
        category: 'Lang Methods',
        description:
            "Checks if <code>value</code> is array-like. A value is considered array-like if it's not a function and has a <code>value.length</code> that's an integer greater than or equal to <code>0</code> and less than or equal to <code>Number.MAX_SAFE_INTEGER</code>.",
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">isArrayLike</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isArrayLike</span>(<span class="support">document</span><span class="delimiter">.</span><span class="support">body</span><span class="delimiter">.</span>children);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isArrayLike</span>(<span class="string">\'abc\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isArrayLike</span>(_<span class="delimiter">.</span>noop);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11332">source</a> <a href="https://www.npmjs.com/package/lodash.isarraylike">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.isArrayLike(value)',
        methodName: 'isArrayLike',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>value</code> is array-like, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '07067360843925118',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The iteratee invoked per element.</li>',
        category: 'Math Methods',
        description:
            'This method is like <a href="#max"><code>_.max</code></a> except that it accepts <code>iteratee</code> which is invoked for each element in <code>array</code> to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: <em>(value)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[{&nbsp;<span class="string">\'n\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'n\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">maxBy</span>(objects<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;o<span class="delimiter">.</span>n;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'n\':&nbsp;2&nbsp;}</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">maxBy</span>(objects<span class="delimiter">,</span>&nbsp;<span class="string">\'n\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'n\':&nbsp;2&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16308">source</a> <a href="https://www.npmjs.com/package/lodash.maxby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.maxBy(array, [iteratee=_.identity])',
        methodName: 'maxBy',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the maximum value.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '13104567432795786',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>multiplier</code> <em>(number)</em>: The first number in a multiplication.</li><li><code>multiplicand</code> <em>(number)</em>: The second number in a multiplication.</li>',
        category: 'Math Methods',
        description: 'Multiply two numbers.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">multiply</span>(<span class="numeric">6</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;24</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16427">source</a> <a href="https://www.npmjs.com/package/lodash.multiply">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.multiply(multiplier, multiplicand)',
        methodName: 'multiply',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the product.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '1442307876044787',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>number</code> <em>(number)</em>: The number to round.</li><li><code>[precision=0]</code> <em>(number)</em>: The precision to round to.</li>',
        category: 'Math Methods',
        description:
            'Computes <code>number</code> rounded to <code>precision</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">round</span>(<span class="numeric">4<span class="delimiter">.</span>006</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;4</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">round</span>(<span class="numeric">4<span class="delimiter">.</span>006</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;4.01</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">round</span>(<span class="numeric">4060</span><span class="delimiter">,</span>&nbsp;-<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;4100</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16452">source</a> <a href="https://www.npmjs.com/package/lodash.round">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.round(number, [precision=0])',
        methodName: 'round',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the rounded number.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '15488900554576723',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The iteratee invoked per element.</li>',
        category: 'Math Methods',
        description:
            'This method is like <a href="#mean"><code>_.mean</code></a> except that it accepts <code>iteratee</code> which is invoked for each element in <code>array</code> to generate the value to be averaged. The iteratee is invoked with one argument: <em>(value)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[{&nbsp;<span class="string">\'n\'</span>:&nbsp;<span class="numeric">4</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'n\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'n\'</span>:&nbsp;<span class="numeric">8</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'n\'</span>:&nbsp;<span class="numeric">6</span>&nbsp;}];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">meanBy</span>(objects<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;o<span class="delimiter">.</span>n;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;5</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">meanBy</span>(objects<span class="delimiter">,</span>&nbsp;<span class="string">\'n\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;5</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16355">source</a> <a href="https://www.npmjs.com/package/lodash.meanby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.meanBy(array, [iteratee=_.identity])',
        methodName: 'meanBy',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the mean.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '212756614457992',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The iteratee invoked per element.</li>',
        category: 'Math Methods',
        description:
            'This method is like <a href="#sum"><code>_.sum</code></a> except that it accepts <code>iteratee</code> which is invoked for each element in <code>array</code> to generate the value to be summed. The iteratee is invoked with one argument: <em>(value)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[{&nbsp;<span class="string">\'n\'</span>:&nbsp;<span class="numeric">4</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'n\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'n\'</span>:&nbsp;<span class="numeric">8</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'n\'</span>:&nbsp;<span class="numeric">6</span>&nbsp;}];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">sumBy</span>(objects<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;o<span class="delimiter">.</span>n;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;20</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">sumBy</span>(objects<span class="delimiter">,</span>&nbsp;<span class="string">\'n\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;20</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16516">source</a> <a href="https://www.npmjs.com/package/lodash.sumby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.sumBy(array, [iteratee=_.identity])',
        methodName: 'sumBy',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the sum.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '22187895242746963',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>dividend</code> <em>(number)</em>: The first number in a division.</li><li><code>divisor</code> <em>(number)</em>: The second number in a division.</li>',
        category: 'Math Methods',
        description: 'Divide two numbers.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">divide</span>(<span class="numeric">6</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;1.5</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16234">source</a> <a href="https://www.npmjs.com/package/lodash.divide">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.divide(dividend, divisor)',
        methodName: 'divide',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the quotient.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '24536125994971594',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>number</code> <em>(number)</em>: The number to round down.</li><li><code>[precision=0]</code> <em>(number)</em>: The precision to round down to.</li>',
        category: 'Math Methods',
        description:
            'Computes <code>number</code> rounded down to <code>precision</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">floor</span>(<span class="numeric">4<span class="delimiter">.</span>006</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;4</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">floor</span>(<span class="numeric">0<span class="delimiter">.</span>046</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;0.04</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">floor</span>(<span class="numeric">4060</span><span class="delimiter">,</span>&nbsp;-<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;4000</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16259">source</a> <a href="https://www.npmjs.com/package/lodash.floor">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.floor(number, [precision=0])',
        methodName: 'floor',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the rounded down number.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '33844281384041003',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>number</code> <em>(number)</em>: The number to round up.</li><li><code>[precision=0]</code> <em>(number)</em>: The precision to round up to.</li>',
        category: 'Math Methods',
        description:
            'Computes <code>number</code> rounded up to <code>precision</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">ceil</span>(<span class="numeric">4<span class="delimiter">.</span>006</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;5</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">ceil</span>(<span class="numeric">6<span class="delimiter">.</span>004</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;6.01</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">ceil</span>(<span class="numeric">6040</span><span class="delimiter">,</span>&nbsp;-<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;6100</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16217">source</a> <a href="https://www.npmjs.com/package/lodash.ceil">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.ceil(number, [precision=0])',
        methodName: 'ceil',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the rounded up number.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '3418964778666114',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to iterate over.</li>',
        category: 'Math Methods',
        description:
            'Computes the maximum value of <code>array</code>. If <code>array</code> is empty or falsey, <code>undefined</code> is returned.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">max</span>([<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">8</span><span class="delimiter">,</span>&nbsp;<span class="numeric">6</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;8</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">max</span>([]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;undefined</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16279">source</a> <a href="https://www.npmjs.com/package/lodash.max">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.max(array)',
        methodName: 'max',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the maximum value.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '41501134695864417',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The iteratee invoked per element.</li>',
        category: 'Math Methods',
        description:
            'This method is like <a href="#min"><code>_.min</code></a> except that it accepts <code>iteratee</code> which is invoked for each element in <code>array</code> to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: <em>(value)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[{&nbsp;<span class="string">\'n\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'n\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">minBy</span>(objects<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;o<span class="delimiter">.</span>n;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'n\':&nbsp;1&nbsp;}</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">minBy</span>(objects<span class="delimiter">,</span>&nbsp;<span class="string">\'n\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'n\':&nbsp;1&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16406">source</a> <a href="https://www.npmjs.com/package/lodash.minby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.minBy(array, [iteratee=_.identity])',
        methodName: 'minBy',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the minimum value.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '4190179605989193',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>minuend</code> <em>(number)</em>: The first number in a subtraction.</li><li><code>subtrahend</code> <em>(number)</em>: The second number in a subtraction.</li>',
        category: 'Math Methods',
        description: 'Subtract two numbers.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">subtract</span>(<span class="numeric">6</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;2</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16469">source</a> <a href="https://www.npmjs.com/package/lodash.subtract">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.subtract(minuend, subtrahend)',
        methodName: 'subtract',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the difference.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6699127081609605',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>augend</code> <em>(number)</em>: The first number in an addition.</li><li><code>addend</code> <em>(number)</em>: The second number in an addition.</li>',
        category: 'Math Methods',
        description: 'Adds two numbers.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="support">add</span>(<span class="numeric">6</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;10</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16192">source</a> <a href="https://www.npmjs.com/package/lodash.add">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.add(augend, addend)',
        methodName: 'add',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the total.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7243747620365836',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to iterate over.</li>',
        category: 'Math Methods',
        description: 'Computes the mean of the values in <code>array</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">mean</span>([<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">8</span><span class="delimiter">,</span>&nbsp;<span class="numeric">6</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;5</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16328">source</a> <a href="https://www.npmjs.com/package/lodash.mean">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.mean(array)',
        methodName: 'mean',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the mean.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7669823640019127',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to iterate over.</li>',
        category: 'Math Methods',
        description:
            'Computes the minimum value of <code>array</code>. If <code>array</code> is empty or falsey, <code>undefined</code> is returned.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">min</span>([<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">8</span><span class="delimiter">,</span>&nbsp;<span class="numeric">6</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;2</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">min</span>([]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;undefined</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16377">source</a> <a href="https://www.npmjs.com/package/lodash.min">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.min(array)',
        methodName: 'min',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the minimum value.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9206543020616911',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>array</code> <em>(Array)</em>: The array to iterate over.</li>',
        category: 'Math Methods',
        description: 'Computes the sum of the values in <code>array</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">sum</span>([<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">8</span><span class="delimiter">,</span>&nbsp;<span class="numeric">6</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;20</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16487">source</a> <a href="https://www.npmjs.com/package/lodash.sum">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.sum(array)',
        methodName: 'sum',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the sum.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '04630218848633998',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>number</code> <em>(number)</em>: The number to clamp.</li><li><code>[lower]</code> <em>(number)</em>: The lower bound.</li><li><code>upper</code> <em>(number)</em>: The upper bound.</li>',
        category: 'Number Methods',
        description:
            'Clamps <code>number</code> within the inclusive <code>lower</code> and <code>upper</code> bounds.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">clamp</span>(-<span class="numeric">10</span><span class="delimiter">,</span>&nbsp;-<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;-5</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">clamp</span>(<span class="numeric">10</span><span class="delimiter">,</span>&nbsp;-<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;5</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13981">source</a> <a href="https://www.npmjs.com/package/lodash.clamp">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.clamp(number, [lower], upper)',
        methodName: 'clamp',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the clamped number.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '4092177198673584',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>number</code> <em>(number)</em>: The number to check.</li><li><code>[start=0]</code> <em>(number)</em>: The start of the range.</li><li><code>end</code> <em>(number)</em>: The end of the range.</li>',
        category: 'Number Methods',
        description:
            "Checks if <code>n</code> is between <code>start</code> and up to, but not including, <code>end</code>. If <code>end</code> is not specified, it's set to <code>start</code> with <code>start</code> then set to <code>0</code>. If <code>start</code> is greater than <code>end</code> the params are swapped to support negative ranges.",
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">inRange</span>(<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">inRange</span>(<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="numeric">8</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">inRange</span>(<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">inRange</span>(<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">inRange</span>(<span class="numeric">1<span class="delimiter">.</span>2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">inRange</span>(<span class="numeric">5<span class="delimiter">.</span>2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">inRange</span>(-<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;-<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;-<span class="numeric">6</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14035">source</a> <a href="https://www.npmjs.com/package/lodash.inrange">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.inRange(number, [start=0], end)',
        methodName: 'inRange',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>number</code> is in the range, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8312630614339951',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[lower=0]</code> <em>(number)</em>: The lower bound.</li><li><code>[upper=1]</code> <em>(number)</em>: The upper bound.</li><li><code>[floating]</code> <em>(boolean)</em>: Specify returning a floating-point number.</li>',
        category: 'Number Methods',
        description:
            'Produces a random number between the inclusive <code>lower</code> and <code>upper</code> bounds. If only one argument is provided a number between <code>0</code> and the given number is returned. If <code>floating</code> is <code>true</code>, or either <code>lower</code> or <code>upper</code> are floats, a floating-point number is returned instead of an integer.<br><br><strong>Note:</strong> JavaScript follows the IEEE-754 standard for resolving floating-point values which can produce unexpected results.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">random</span>(<span class="numeric">0</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;an&nbsp;integer&nbsp;between&nbsp;0&nbsp;and&nbsp;5</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">random</span>(<span class="numeric">5</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;also&nbsp;an&nbsp;integer&nbsp;between&nbsp;0&nbsp;and&nbsp;5</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">random</span>(<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;true);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;a&nbsp;floating-point&nbsp;number&nbsp;between&nbsp;0&nbsp;and&nbsp;5</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">random</span>(<span class="numeric">1<span class="delimiter">.</span>2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5<span class="delimiter">.</span>2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;a&nbsp;floating-point&nbsp;number&nbsp;between&nbsp;1.2&nbsp;and&nbsp;5.2</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14078">source</a> <a href="https://www.npmjs.com/package/lodash.random">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.random([lower=0], [upper=1], [floating])',
        methodName: 'random',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the random number.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '009507986072070195',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments: '<em>_.extendWith</em>',
        category: 'Object Methods',
        description:
            'This method is like <a href="#assignIn"><code>_.assignIn</code></a> except that it accepts <code>customizer</code> which is invoked to produce the assigned values. If <code>customizer</code> returns <code>undefined</code>, assignment is handled by the method instead. The <code>customizer</code> is invoked with five arguments: <em>(objValue, srcValue, key, object, source)</em>.<br><br><strong>Note:</strong> This method mutates <code>object</code>.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">customizer</span>(objValue<span class="delimiter">,</span>&nbsp;srcValue)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;_<span class="delimiter method">.</span><span class="name">isUndefined</span>(objValue)&nbsp;?&nbsp;srcValue&nbsp;:&nbsp;objValue;</div><div>}</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;defaults&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">partialRight</span>(_<span class="delimiter">.</span>assignInWith<span class="delimiter">,</span>&nbsp;customizer);</div><div>&nbsp;</div><div><span class="name">defaults</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;1,&nbsp;\'b\':&nbsp;2&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12671">source</a> <a href="https://www.npmjs.com/package/lodash.assigninwith">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.assignInWith(object, sources, [customizer])',
        methodName: 'assignInWith',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns <code>object</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '04620077232320421',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to modify.</li><li><code>path</code> <em>(Array|string)</em>: The path of the property to set.</li><li><code>updater</code> <em>(Function)</em>: The function to produce the updated value.</li>',
        category: 'Object Methods',
        description:
            'This method is like <a href="#set"><code>_.set</code></a> except that accepts <code>updater</code> to produce the value to set. Use <a href="#updateWith"><code>_.updateWith</code></a> to customize <code>path</code> creation. The <code>updater</code> is invoked with one argument: <em>(value)</em>.<br><br><strong>Note:</strong> This method mutates <code>object</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;[{&nbsp;<span class="string">\'b\'</span>:&nbsp;{&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;}&nbsp;}]&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">update</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'a[0].b.c\'</span><span class="delimiter">,</span>&nbsp;<span class="type">function</span>(n)&nbsp;{&nbsp;return&nbsp;n&nbsp;*&nbsp;n;&nbsp;});</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(object<span class="delimiter">.</span>a[<span class="numeric">0</span>]<span class="delimiter">.</span>b<span class="delimiter">.</span>c);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;9</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">update</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'x[0].y.z\'</span><span class="delimiter">,</span>&nbsp;<span class="type">function</span>(n)&nbsp;{&nbsp;return&nbsp;n&nbsp;?&nbsp;n&nbsp;+&nbsp;<span class="numeric">1</span>&nbsp;:&nbsp;<span class="numeric">0</span>;&nbsp;});</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(object<span class="delimiter">.</span><span class="support">x</span>[<span class="numeric">0</span>]<span class="delimiter">.</span><span class="support">y</span><span class="delimiter">.</span><span class="support">z</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;0</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13869">source</a> <a href="https://www.npmjs.com/package/lodash.update">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.update(object, path, updater)',
        methodName: 'update',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns <code>object</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '04875205983740773',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The destination object.</li><li><code>[sources]</code> <em>(...Object)</em>: The source objects.</li>',
        category: 'Object Methods',
        description:
            'Assigns own enumerable string keyed properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.<br><br><strong>Note:</strong> This method mutates <code>object</code> and is loosely based on <a href="https://mdn.io/Object/assign"><code>Object.assign</code></a>.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">Foo</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>a&nbsp;=&nbsp;<span class="numeric">1</span>;</div><div>}</div><div>&nbsp;</div><div><span class="type">function</span>&nbsp;<span class="name">Bar</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>c&nbsp;=&nbsp;<span class="numeric">3</span>;</div><div>}</div><div>&nbsp;</div><div>Foo<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>b&nbsp;=&nbsp;<span class="numeric">2</span>;</div><div>Bar<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>d&nbsp;=&nbsp;<span class="numeric">4</span>;</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">assign</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">0</span>&nbsp;}<span class="delimiter">,</span>&nbsp;new&nbsp;<span class="name type">Foo</span><span class="delimiter">,</span>&nbsp;new&nbsp;<span class="name type">Bar</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;1,&nbsp;\'c\':&nbsp;3&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12595">source</a> <a href="https://www.npmjs.com/package/lodash.assign">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.assign(object, [sources])',
        methodName: 'assign',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns <code>object</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '055937337700647786',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Object Methods',
        description:
            'Iterates over own and inherited enumerable string keyed properties of an object and invokes <code>iteratee</code> for each property. The iteratee is invoked with three arguments: <em>(value, key, object)</em>. Iteratee functions may exit iteration early by explicitly returning <code>false</code>.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">Foo</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>a&nbsp;=&nbsp;<span class="numeric">1</span>;</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>b&nbsp;=&nbsp;<span class="numeric">2</span>;</div><div>}</div><div>&nbsp;</div><div>Foo<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>c&nbsp;=&nbsp;<span class="numeric">3</span>;</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">forIn</span>(new&nbsp;<span class="name type">Foo</span><span class="delimiter">,</span>&nbsp;<span class="type">function</span>(value<span class="delimiter">,</span>&nbsp;key)&nbsp;{</div><div>&nbsp;&nbsp;<span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(key);</div><div>});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;Logs&nbsp;\'a\',&nbsp;\'b\',&nbsp;then&nbsp;\'c\'&nbsp;(iteration&nbsp;order&nbsp;is&nbsp;not&nbsp;guaranteed).</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12947">source</a> <a href="https://www.npmjs.com/package/lodash.forin">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.forIn(object, [iteratee=_.identity])',
        methodName: 'forIn',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns <code>object</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '06359548562546934',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Object Methods',
        description:
            'Iterates over own enumerable string keyed properties of an object and invokes <code>iteratee</code> for each property. The iteratee is invoked with three arguments: <em>(value, key, object)</em>. Iteratee functions may exit iteration early by explicitly returning <code>false</code>.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">Foo</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>a&nbsp;=&nbsp;<span class="numeric">1</span>;</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>b&nbsp;=&nbsp;<span class="numeric">2</span>;</div><div>}</div><div>&nbsp;</div><div>Foo<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>c&nbsp;=&nbsp;<span class="numeric">3</span>;</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">forOwn</span>(new&nbsp;<span class="name type">Foo</span><span class="delimiter">,</span>&nbsp;<span class="type">function</span>(value<span class="delimiter">,</span>&nbsp;key)&nbsp;{</div><div>&nbsp;&nbsp;<span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(key);</div><div>});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;Logs&nbsp;\'a\'&nbsp;then&nbsp;\'b\'&nbsp;(iteration&nbsp;order&nbsp;is&nbsp;not&nbsp;guaranteed).</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13013">source</a> <a href="https://www.npmjs.com/package/lodash.forown">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.forOwn(object, [iteratee=_.identity])',
        methodName: 'forOwn',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns <code>object</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '06565390119431788',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The destination object.</li><li><code>[sources]</code> <em>(...Object)</em>: The source objects.</li>',
        category: 'Object Methods',
        description:
            'This method is like <a href="#assign"><code>_.assign</code></a> except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object. Source properties that resolve to <code>undefined</code> are skipped if a destination value exists. Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.<br><br><strong>Note:</strong> This method mutates <code>object</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{</div><div>&nbsp;&nbsp;<span class="string">\'a\'</span>:&nbsp;[{&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'d\'</span>:&nbsp;<span class="numeric">4</span>&nbsp;}]</div><div>};</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;other&nbsp;=&nbsp;{</div><div>&nbsp;&nbsp;<span class="string">\'a\'</span>:&nbsp;[{&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'e\'</span>:&nbsp;<span class="numeric">5</span>&nbsp;}]</div><div>};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">merge</span>(object<span class="delimiter">,</span>&nbsp;other);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;[{&nbsp;\'b\':&nbsp;2,&nbsp;\'c\':&nbsp;3&nbsp;},&nbsp;{&nbsp;\'d\':&nbsp;4,&nbsp;\'e\':&nbsp;5&nbsp;}]&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13437">source</a> <a href="https://www.npmjs.com/package/lodash.merge">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.merge(object, [sources])',
        methodName: 'merge',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns <code>object</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '07864932596849498',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The source object.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per property.</li>',
        category: 'Object Methods',
        description:
            'The opposite of <a href="#pickBy"><code>_.pickBy</code></a>; this method creates an object composed of the own and inherited enumerable string keyed properties of <code>object</code> that <code>predicate</code> doesn\'t return truthy for. The predicate is invoked with two arguments: <em>(value, key)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="string">\'2\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">omitBy</span>(object<span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>isNumber);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'b\':&nbsp;\'2\'&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13538">source</a> <a href="https://www.npmjs.com/package/lodash.omitby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.omitBy(object, [predicate=_.identity])',
        methodName: 'omitBy',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the new object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '08633669003168229',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to query.</li>',
        category: 'Object Methods',
        description:
            'Creates an array of the own and inherited enumerable string keyed property values of <code>object</code>.<br><br><strong>Note:</strong> Non-object values are coerced to objects.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">Foo</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>a&nbsp;=&nbsp;<span class="numeric">1</span>;</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>b&nbsp;=&nbsp;<span class="numeric">2</span>;</div><div>}</div><div>&nbsp;</div><div>Foo<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>c&nbsp;=&nbsp;<span class="numeric">3</span>;</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">valuesIn</span>(new&nbsp;<span class="name type">Foo</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3]&nbsp;(iteration&nbsp;order&nbsp;is&nbsp;not&nbsp;guaranteed)</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13956">source</a> <a href="https://www.npmjs.com/package/lodash.valuesin">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.valuesIn(object)',
        methodName: 'valuesIn',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the array of property values.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '08679153225108749',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The source object.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per property.</li>',
        category: 'Object Methods',
        description:
            'Creates an object composed of the <code>object</code> properties <code>predicate</code> returns truthy for. The predicate is invoked with two arguments: <em>(value, key)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="string">\'2\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">pickBy</span>(object<span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>isNumber);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;1,&nbsp;\'c\':&nbsp;3&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13581">source</a> <a href="https://www.npmjs.com/package/lodash.pickby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.pickBy(object, [predicate=_.identity])',
        methodName: 'pickBy',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the new object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '11022107100018308',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The destination object.</li><li><code>[sources]</code> <em>(...Object)</em>: The source objects.</li>',
        category: 'Object Methods',
        description:
            'Assigns own and inherited enumerable string keyed properties of source objects to the destination object for all destination properties that resolve to <code>undefined</code>. Source objects are applied from left to right. Once a property is set, additional values of the same property are ignored.<br><br><strong>Note:</strong> This method mutates <code>object</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">defaults</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;1,&nbsp;\'b\':&nbsp;2&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12786">source</a> <a href="https://www.npmjs.com/package/lodash.defaults">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.defaults(object, [sources])',
        methodName: 'defaults',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns <code>object</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '18864258384313684',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to query.</li>',
        category: 'Object Methods',
        description:
            'Creates an array of the own enumerable property names of <code>object</code>.<br><br><strong>Note:</strong> Non-object values are coerced to objects. See the <a href="http://ecma-international.org/ecma-262/7.0/#sec-object.keys">ES spec</a> for more details.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">Foo</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>a&nbsp;=&nbsp;<span class="numeric">1</span>;</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>b&nbsp;=&nbsp;<span class="numeric">2</span>;</div><div>}</div><div>&nbsp;</div><div>Foo<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>c&nbsp;=&nbsp;<span class="numeric">3</span>;</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">keys</span>(new&nbsp;<span class="name type">Foo</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'a\',&nbsp;\'b\']&nbsp;(iteration&nbsp;order&nbsp;is&nbsp;not&nbsp;guaranteed)</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">keys</span>(<span class="string">\'hi\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'0\',&nbsp;\'1\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13306">source</a> <a href="https://www.npmjs.com/package/lodash.keys">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.keys(object)',
        methodName: 'keys',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the array of property names.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '25176840001604145',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Object Methods',
        description:
            'This method is like <a href="#forIn"><code>_.forIn</code></a> except that it iterates over properties of <code>object</code> in the opposite order.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">Foo</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>a&nbsp;=&nbsp;<span class="numeric">1</span>;</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>b&nbsp;=&nbsp;<span class="numeric">2</span>;</div><div>}</div><div>&nbsp;</div><div>Foo<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>c&nbsp;=&nbsp;<span class="numeric">3</span>;</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">forInRight</span>(new&nbsp;<span class="name type">Foo</span><span class="delimiter">,</span>&nbsp;<span class="type">function</span>(value<span class="delimiter">,</span>&nbsp;key)&nbsp;{</div><div>&nbsp;&nbsp;<span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(key);</div><div>});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;Logs&nbsp;\'c\',&nbsp;\'b\',&nbsp;then&nbsp;\'a\'&nbsp;assuming&nbsp;`_.forIn`&nbsp;logs&nbsp;\'a\',&nbsp;\'b\',&nbsp;then&nbsp;\'c\'.</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12979">source</a> <a href="https://www.npmjs.com/package/lodash.forinright">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.forInRight(object, [iteratee=_.identity])',
        methodName: 'forInRight',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns <code>object</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '25845355470296494',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to query.</li><li><code>path</code> <em>(Array|string)</em>: The path of the method to invoke.</li><li><code>[args]</code> <em>(...*)</em>: The arguments to invoke the method with.</li>',
        category: 'Object Methods',
        description:
            'Invokes the method at <code>path</code> of <code>object</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;[{&nbsp;<span class="string">\'b\'</span>:&nbsp;{&nbsp;<span class="string">\'c\'</span>:&nbsp;[<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>]&nbsp;}&nbsp;}]&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">invoke</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'a[0].b.c.slice\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;3]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13276">source</a> <a href="https://www.npmjs.com/package/lodash.invoke">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.invoke(object, path, [args])',
        methodName: 'invoke',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the result of the invoked method.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '28176191619054575',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to modify.</li><li><code>path</code> <em>(Array|string)</em>: The path of the property to set.</li><li><code>updater</code> <em>(Function)</em>: The function to produce the updated value.</li><li><code>[customizer]</code> <em>(Function)</em>: The function to customize assigned values.</li>',
        category: 'Object Methods',
        description:
            'This method is like <a href="#update"><code>_.update</code></a> except that it accepts <code>customizer</code> which is invoked to produce the objects of <code>path</code>. If <code>customizer</code> returns <code>undefined</code> path creation is handled by the method instead. The <code>customizer</code> is invoked with three arguments: <em>(nsValue, key, nsObject)</em>.<br><br><strong>Note:</strong> This method mutates <code>object</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">updateWith</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'[0][1]\'</span><span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">constant</span>(<span class="string">\'a\'</span>)<span class="delimiter">,</span>&nbsp;<span class="support">Object</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'0\':&nbsp;{&nbsp;\'1\':&nbsp;\'a\'&nbsp;}&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13897">source</a> <a href="https://www.npmjs.com/package/lodash.updatewith">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.updateWith(object, path, updater, [customizer])',
        methodName: 'updateWith',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns <code>object</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '30529742891228195',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to modify.</li><li><code>path</code> <em>(Array|string)</em>: The path of the property to unset.</li>',
        category: 'Object Methods',
        description:
            'Removes the property at <code>path</code> of <code>object</code>.<br><br><strong>Note:</strong> This method mutates <code>object</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;[{&nbsp;<span class="string">\'b\'</span>:&nbsp;{&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">7</span>&nbsp;}&nbsp;}]&nbsp;};</div><div>_<span class="delimiter method">.</span><span class="name">unset</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'a[0].b.c\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(object);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;[{&nbsp;\'b\':&nbsp;{}&nbsp;}]&nbsp;};</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">unset</span>(object<span class="delimiter">,</span>&nbsp;[<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'0\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(object);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;[{&nbsp;\'b\':&nbsp;{}&nbsp;}]&nbsp;};</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13838">source</a> <a href="https://www.npmjs.com/package/lodash.unset">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.unset(object, path)',
        methodName: 'unset',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if the property is deleted, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '31059333254020355',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to query.</li>',
        category: 'Object Methods',
        description:
            'Creates an array of the own and inherited enumerable property names of <code>object</code>.<br><br><strong>Note:</strong> Non-object values are coerced to objects.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">Foo</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>a&nbsp;=&nbsp;<span class="numeric">1</span>;</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>b&nbsp;=&nbsp;<span class="numeric">2</span>;</div><div>}</div><div>&nbsp;</div><div>Foo<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>c&nbsp;=&nbsp;<span class="numeric">3</span>;</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">keysIn</span>(new&nbsp;<span class="name type">Foo</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'a\',&nbsp;\'b\',&nbsp;\'c\']&nbsp;(iteration&nbsp;order&nbsp;is&nbsp;not&nbsp;guaranteed)</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13333">source</a> <a href="https://www.npmjs.com/package/lodash.keysin">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.keysIn(object)',
        methodName: 'keysIn',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the array of property names.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '3960941538882246',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to modify.</li><li><code>path</code> <em>(Array|string)</em>: The path of the property to set.</li><li><code>value</code> <em>(*)</em>: The value to set.</li>',
        category: 'Object Methods',
        description:
            'Sets the value at <code>path</code> of <code>object</code>. If a portion of <code>path</code> doesn\'t exist, it\'s created. Arrays are created for missing index properties while objects are created for all other missing properties. Use <a href="#setWith"><code>_.setWith</code></a> to customize <code>path</code> creation.<br><br><strong>Note:</strong> This method mutates <code>object</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;[{&nbsp;<span class="string">\'b\'</span>:&nbsp;{&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;}&nbsp;}]&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">set</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'a[0].b.c\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>);</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(object<span class="delimiter">.</span>a[<span class="numeric">0</span>]<span class="delimiter">.</span>b<span class="delimiter">.</span>c);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;4</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">set</span>(object<span class="delimiter">,</span>&nbsp;[<span class="string">\'x\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'0\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'y\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'z\'</span>]<span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>);</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(object<span class="delimiter">.</span><span class="support">x</span>[<span class="numeric">0</span>]<span class="delimiter">.</span><span class="support">y</span><span class="delimiter">.</span><span class="support">z</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;5</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13673">source</a> <a href="https://www.npmjs.com/package/lodash.set">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.set(object, path, value)',
        methodName: 'set',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns <code>object</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '43757459575240526',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to invert.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The iteratee invoked per element.</li>',
        category: 'Object Methods',
        description:
            'This method is like <a href="#invert"><code>_.invert</code></a> except that the inverted object is generated from the results of running each element of <code>object</code> thru <code>iteratee</code>. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. The iteratee is invoked with one argument: <em>(value)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">invertBy</span>(object);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'1\':&nbsp;[\'a\',&nbsp;\'c\'],&nbsp;\'2\':&nbsp;[\'b\']&nbsp;}</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">invertBy</span>(object<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(value)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;<span class="string">\'group\'</span>&nbsp;+&nbsp;value;</div><div>});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'group1\':&nbsp;[\'a\',&nbsp;\'c\'],&nbsp;\'group2\':&nbsp;[\'b\']&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13245">source</a> <a href="https://www.npmjs.com/package/lodash.invertby">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.invertBy(object, [iteratee=_.identity])',
        methodName: 'invertBy',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the new inverted object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '44754083728139965',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to query.</li><li><code>path</code> <em>(Array|string)</em>: The path to check.</li>',
        category: 'Object Methods',
        description:
            'Checks if <code>path</code> is a direct or inherited property of <code>object</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">create</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;_<span class="delimiter method">.</span><span class="name">create</span>({&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;})&nbsp;});</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">hasIn</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'a\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">hasIn</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'a.b\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">hasIn</span>(object<span class="delimiter">,</span>&nbsp;[<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">hasIn</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13188">source</a> <a href="https://www.npmjs.com/package/lodash.hasin">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.hasIn(object, path)',
        methodName: 'hasIn',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>path</code> exists, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '45289808039661594',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Object Methods',
        description:
            'The opposite of <a href="#mapValues"><code>_.mapValues</code></a>; this method creates an object with the same values as <code>object</code> and keys generated by running each own enumerable string keyed property of <code>object</code> thru <code>iteratee</code>. The iteratee is invoked with three arguments: <em>(value, key, object)</em>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">mapKeys</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(value<span class="delimiter">,</span>&nbsp;key)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;key&nbsp;+&nbsp;value;</div><div>});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a1\':&nbsp;1,&nbsp;\'b2\':&nbsp;2&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13358">source</a> <a href="https://www.npmjs.com/package/lodash.mapkeys">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.mapKeys(object, [iteratee=_.identity])',
        methodName: 'mapKeys',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the new mapped object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '4539489225393595',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The destination object.</li><li><code>sources</code> <em>(...Object)</em>: The source objects.</li><li><code>[customizer]</code> <em>(Function)</em>: The function to customize assigned values.</li>',
        category: 'Object Methods',
        description:
            'This method is like <a href="#assign"><code>_.assign</code></a> except that it accepts <code>customizer</code> which is invoked to produce the assigned values. If <code>customizer</code> returns <code>undefined</code>, assignment is handled by the method instead. The <code>customizer</code> is invoked with five arguments: <em>(objValue, srcValue, key, object, source)</em>.<br><br><strong>Note:</strong> This method mutates <code>object</code>.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">customizer</span>(objValue<span class="delimiter">,</span>&nbsp;srcValue)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;_<span class="delimiter method">.</span><span class="name">isUndefined</span>(objValue)&nbsp;?&nbsp;srcValue&nbsp;:&nbsp;objValue;</div><div>}</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;defaults&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">partialRight</span>(_<span class="delimiter">.</span>assignWith<span class="delimiter">,</span>&nbsp;customizer);</div><div>&nbsp;</div><div><span class="name">defaults</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;1,&nbsp;\'b\':&nbsp;2&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12703">source</a> <a href="https://www.npmjs.com/package/lodash.assignwith">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.assignWith(object, sources, [customizer])',
        methodName: 'assignWith',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns <code>object</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5423469901173292',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to inspect.</li>',
        category: 'Object Methods',
        description:
            'Creates an array of function property names from own enumerable properties of <code>object</code>.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">Foo</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>a&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">constant</span>(<span class="string">\'a\'</span>);</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>b&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">constant</span>(<span class="string">\'b\'</span>);</div><div>}</div><div>&nbsp;</div><div>Foo<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>c&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">constant</span>(<span class="string">\'c\'</span>);</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">functions</span>(new&nbsp;<span class="name type">Foo</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'a\',&nbsp;\'b\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13070">source</a> <a href="https://www.npmjs.com/package/lodash.functions">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.functions(object)',
        methodName: 'functions',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the function names.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5537281903456105',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The source object.</li><li><code>[paths]</code> <em>(...(string|string[]))</em>: The property paths to pick.</li>',
        category: 'Object Methods',
        description:
            'Creates an object composed of the picked <code>object</code> properties.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="string">\'2\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">pick</span>(object<span class="delimiter">,</span>&nbsp;[<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;1,&nbsp;\'c\':&nbsp;3&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13559">source</a> <a href="https://www.npmjs.com/package/lodash.pick">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.pick(object, [paths])',
        methodName: 'pick',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the new object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5659464237362243',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to invert.</li>',
        category: 'Object Methods',
        description:
            'Creates an object composed of the inverted keys and values of <code>object</code>. If <code>object</code> contains duplicate values, subsequent values overwrite property assignments of previous values.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">invert</span>(object);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'1\':&nbsp;\'c\',&nbsp;\'2\':&nbsp;\'b\'&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13210">source</a> <a href="https://www.npmjs.com/package/lodash.invert">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.invert(object)',
        methodName: 'invert',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the new inverted object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5877931233043675',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments: '<em>_.extend</em>',
        category: 'Object Methods',
        description:
            'This method is like <a href="#assign"><code>_.assign</code></a> except that it iterates over own and inherited source properties.<br><br><strong>Note:</strong> This method mutates <code>object</code>.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">Foo</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>a&nbsp;=&nbsp;<span class="numeric">1</span>;</div><div>}</div><div>&nbsp;</div><div><span class="type">function</span>&nbsp;<span class="name">Bar</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>c&nbsp;=&nbsp;<span class="numeric">3</span>;</div><div>}</div><div>&nbsp;</div><div>Foo<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>b&nbsp;=&nbsp;<span class="numeric">2</span>;</div><div>Bar<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>d&nbsp;=&nbsp;<span class="numeric">4</span>;</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">assignIn</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">0</span>&nbsp;}<span class="delimiter">,</span>&nbsp;new&nbsp;<span class="name type">Foo</span><span class="delimiter">,</span>&nbsp;new&nbsp;<span class="name type">Bar</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;1,&nbsp;\'b\':&nbsp;2,&nbsp;\'c\':&nbsp;3,&nbsp;\'d\':&nbsp;4&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12638">source</a> <a href="https://www.npmjs.com/package/lodash.assignin">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.assignIn(object, [sources])',
        methodName: 'assignIn',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns <code>object</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5960887606305483',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Object Methods',
        description:
            'This method is like <a href="#forOwn"><code>_.forOwn</code></a> except that it iterates over properties of <code>object</code> in the opposite order.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">Foo</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>a&nbsp;=&nbsp;<span class="numeric">1</span>;</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>b&nbsp;=&nbsp;<span class="numeric">2</span>;</div><div>}</div><div>&nbsp;</div><div>Foo<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>c&nbsp;=&nbsp;<span class="numeric">3</span>;</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">forOwnRight</span>(new&nbsp;<span class="name type">Foo</span><span class="delimiter">,</span>&nbsp;<span class="type">function</span>(value<span class="delimiter">,</span>&nbsp;key)&nbsp;{</div><div>&nbsp;&nbsp;<span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(key);</div><div>});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;Logs&nbsp;\'b\'&nbsp;then&nbsp;\'a\'&nbsp;assuming&nbsp;`_.forOwn`&nbsp;logs&nbsp;\'a\'&nbsp;then&nbsp;\'b\'.</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13043">source</a> <a href="https://www.npmjs.com/package/lodash.forownright">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.forOwnRight(object, [iteratee=_.identity])',
        methodName: 'forOwnRight',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns <code>object</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6047053662896047',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to inspect.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Object Methods',
        description:
            'This method is like <a href="#findKey"><code>_.findKey</code></a> except that it iterates over elements of a collection in the opposite order.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;{</div><div>&nbsp;&nbsp;<span class="string">\'barney\'</span>:&nbsp;&nbsp;{&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">36</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;<span class="string">\'fred\'</span>:&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">40</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;<span class="string">\'pebbles\'</span>:&nbsp;{&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}</div><div>};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">findLastKey</span>(users<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;o<span class="delimiter">.</span>age&nbsp;&lt;&nbsp;<span class="numeric">40</span>;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;returns&nbsp;\'pebbles\'&nbsp;assuming&nbsp;`_.findKey`&nbsp;returns&nbsp;\'barney\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matches`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">findLastKey</span>(users<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">36</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'barney\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matchesProperty`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">findLastKey</span>(users<span class="delimiter">,</span>&nbsp;[<span class="string">\'active\'</span><span class="delimiter">,</span>&nbsp;false]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'fred\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">findLastKey</span>(users<span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'pebbles\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12915">source</a> <a href="https://www.npmjs.com/package/lodash.findlastkey">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.findLastKey(object, [predicate=_.identity])',
        methodName: 'findLastKey',
        related_methods: [],
        returns:
            '<em>(*)</em>: Returns the key of the matched element, else <code>undefined</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6091540951734266',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to query.</li><li><code>path</code> <em>(Array|string)</em>: The path of the property to get.</li><li><code>[defaultValue]</code> <em>(*)</em>: The value returned for <code>undefined</code> resolved values.</li>',
        category: 'Object Methods',
        description:
            'Gets the value at <code>path</code> of <code>object</code>. If the resolved value is <code>undefined</code>, the <code>defaultValue</code> is returned in its place.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;[{&nbsp;<span class="string">\'b\'</span>:&nbsp;{&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;}&nbsp;}]&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">get</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'a[0].b.c\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">get</span>(object<span class="delimiter">,</span>&nbsp;[<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'0\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">get</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'a.b.c\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'default\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'default\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13126">source</a> <a href="https://www.npmjs.com/package/lodash.get">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.get(object, path, [defaultValue])',
        methodName: 'get',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the resolved value.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6200931615914254',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to inspect.</li>',
        category: 'Object Methods',
        description:
            'Creates an array of function property names from own and inherited enumerable properties of <code>object</code>.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">Foo</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>a&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">constant</span>(<span class="string">\'a\'</span>);</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>b&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">constant</span>(<span class="string">\'b\'</span>);</div><div>}</div><div>&nbsp;</div><div>Foo<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>c&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">constant</span>(<span class="string">\'c\'</span>);</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">functionsIn</span>(new&nbsp;<span class="name type">Foo</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'a\',&nbsp;\'b\',&nbsp;\'c\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13097">source</a> <a href="https://www.npmjs.com/package/lodash.functionsin">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.functionsIn(object)',
        methodName: 'functionsIn',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the function names.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6415492149775539',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>prototype</code> <em>(Object)</em>: The object to inherit from.</li><li><code>[properties]</code> <em>(Object)</em>: The properties to assign to the object.</li>',
        category: 'Object Methods',
        description:
            'Creates an object that inherits from the <code>prototype</code> object. If a <code>properties</code> object is given, its own enumerable string keyed properties are assigned to the created object.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">Shape</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span><span class="support">x</span>&nbsp;=&nbsp;<span class="numeric">0</span>;</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span><span class="support">y</span>&nbsp;=&nbsp;<span class="numeric">0</span>;</div><div>}</div><div>&nbsp;</div><div><span class="type">function</span>&nbsp;<span class="name">Circle</span>()&nbsp;{</div><div>&nbsp;&nbsp;Shape<span class="delimiter method">.</span><span class="support">call</span>(this);</div><div>}</div><div>&nbsp;</div><div>Circle<span class="delimiter">.</span><span class="support">prototype</span>&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">create</span>(Shape<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">,</span>&nbsp;{</div><div>&nbsp;&nbsp;<span class="string">\'constructor\'</span>:&nbsp;Circle</div><div>});</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;circle&nbsp;=&nbsp;new&nbsp;<span class="name type">Circle</span>;</div><div>circle&nbsp;instanceof&nbsp;Circle;</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>circle&nbsp;instanceof&nbsp;Shape;</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12760">source</a> <a href="https://www.npmjs.com/package/lodash.create">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.create(prototype, [properties])',
        methodName: 'create',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the new object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6537991486974852',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li><li><code>[accumulator]</code> <em>(*)</em>: The custom accumulator value.</li>',
        category: 'Object Methods',
        description:
            'An alternative to <a href="#reduce"><code>_.reduce</code></a>; this method transforms <code>object</code> to a new <code>accumulator</code> object which is the result of running each of its own enumerable string keyed properties thru <code>iteratee</code>, with each invocation potentially mutating the <code>accumulator</code> object. If <code>accumulator</code> is not provided, a new object with the same <code>[[Prototype]]</code> will be used. The iteratee is invoked with four arguments: <em>(accumulator, value, key, object)</em>. Iteratee functions may exit iteration early by explicitly returning <code>false</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">transform</span>([<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>]<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(result<span class="delimiter">,</span>&nbsp;n)&nbsp;{</div><div>&nbsp;&nbsp;result<span class="delimiter method">.</span><span class="support">push</span>(n&nbsp;*=&nbsp;n);</div><div>&nbsp;&nbsp;return&nbsp;n&nbsp;%&nbsp;<span class="numeric">2</span>&nbsp;==&nbsp;<span class="numeric">0</span>;</div><div>}<span class="delimiter">,</span>&nbsp;[]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[4,&nbsp;9]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">transform</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(result<span class="delimiter">,</span>&nbsp;value<span class="delimiter">,</span>&nbsp;key)&nbsp;{</div><div>&nbsp;&nbsp;(result[value]&nbsp;||&nbsp;(result[value]&nbsp;=&nbsp;[]))<span class="delimiter method">.</span><span class="support">push</span>(key);</div><div>}<span class="delimiter">,</span>&nbsp;{});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'1\':&nbsp;[\'a\',&nbsp;\'c\'],&nbsp;\'2\':&nbsp;[\'b\']&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13788">source</a> <a href="https://www.npmjs.com/package/lodash.transform">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.transform(object, [iteratee=_.identity], [accumulator])',
        methodName: 'transform',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the accumulated value.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7273668203323878',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to iterate over.</li><li><code>[paths]</code> <em>(...(string|string[]))</em>: The property paths to pick.</li>',
        category: 'Object Methods',
        description:
            'Creates an array of values corresponding to <code>paths</code> of <code>object</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;[{&nbsp;<span class="string">\'b\'</span>:&nbsp;{&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;}&nbsp;}<span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>]&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">at</span>(object<span class="delimiter">,</span>&nbsp;[<span class="string">\'a[0].b.c\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'a[1]\'</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[3,&nbsp;4]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12724">source</a> <a href="https://www.npmjs.com/package/lodash.at">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.at(object, [paths])',
        methodName: 'at',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the picked values.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7585605863354655',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to modify.</li><li><code>path</code> <em>(Array|string)</em>: The path of the property to set.</li><li><code>value</code> <em>(*)</em>: The value to set.</li><li><code>[customizer]</code> <em>(Function)</em>: The function to customize assigned values.</li>',
        category: 'Object Methods',
        description:
            'This method is like <a href="#set"><code>_.set</code></a> except that it accepts <code>customizer</code> which is invoked to produce the objects of <code>path</code>. If <code>customizer</code> returns <code>undefined</code> path creation is handled by the method instead. The <code>customizer</code> is invoked with three arguments: <em>(nsValue, key, nsObject)</em>.<br><br><strong>Note:</strong> This method mutates <code>object</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">setWith</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'[0][1]\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="support">Object</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'0\':&nbsp;{&nbsp;\'1\':&nbsp;\'a\'&nbsp;}&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13701">source</a> <a href="https://www.npmjs.com/package/lodash.setwith">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.setWith(object, path, value, [customizer])',
        methodName: 'setWith',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns <code>object</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7620236255374438',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The destination object.</li><li><code>sources</code> <em>(...Object)</em>: The source objects.</li><li><code>customizer</code> <em>(Function)</em>: The function to customize assigned values.</li>',
        category: 'Object Methods',
        description:
            'This method is like <a href="#merge"><code>_.merge</code></a> except that it accepts <code>customizer</code> which is invoked to produce the merged values of the destination and source properties. If <code>customizer</code> returns <code>undefined</code>, merging is handled by the method instead. The <code>customizer</code> is invoked with six arguments:<br><em>(objValue, srcValue, key, object, source, stack)</em>.<br><br><strong>Note:</strong> This method mutates <code>object</code>.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">customizer</span>(objValue<span class="delimiter">,</span>&nbsp;srcValue)&nbsp;{</div><div>&nbsp;&nbsp;if&nbsp;(_<span class="delimiter method">.</span><span class="name">isArray</span>(objValue))&nbsp;{</div><div>&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;objValue<span class="delimiter method">.</span><span class="support">concat</span>(srcValue);</div><div>&nbsp;&nbsp;}</div><div>}</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;[<span class="numeric">1</span>]<span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;[<span class="numeric">2</span>]&nbsp;};</div><div><span class="type">var</span>&nbsp;other&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;[<span class="numeric">3</span>]<span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;[<span class="numeric">4</span>]&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">mergeWith</span>(object<span class="delimiter">,</span>&nbsp;other<span class="delimiter">,</span>&nbsp;customizer);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;[1,&nbsp;3],&nbsp;\'b\':&nbsp;[2,&nbsp;4]&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13472">source</a> <a href="https://www.npmjs.com/package/lodash.mergewith">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.mergeWith(object, sources, customizer)',
        methodName: 'mergeWith',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns <code>object</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7952858074710549',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to query.</li>',
        category: 'Object Methods',
        description:
            'Creates an array of the own enumerable string keyed property values of <code>object</code>.<br><br><strong>Note:</strong> Non-object values are coerced to objects.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">Foo</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>a&nbsp;=&nbsp;<span class="numeric">1</span>;</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>b&nbsp;=&nbsp;<span class="numeric">2</span>;</div><div>}</div><div>&nbsp;</div><div>Foo<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>c&nbsp;=&nbsp;<span class="numeric">3</span>;</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">values</span>(new&nbsp;<span class="name type">Foo</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2]&nbsp;(iteration&nbsp;order&nbsp;is&nbsp;not&nbsp;guaranteed)</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">values</span>(<span class="string">\'hi\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'h\',&nbsp;\'i\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13928">source</a> <a href="https://www.npmjs.com/package/lodash.values">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.values(object)',
        methodName: 'values',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the array of property values.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8258801618756605',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The source object.</li><li><code>[paths]</code> <em>(...(string|string[]))</em>: The property paths to omit.</li>',
        category: 'Object Methods',
        description:
            'The opposite of <a href="#pick"><code>_.pick</code></a>; this method creates an object composed of the own and inherited enumerable property paths of <code>object</code> that are not omitted.<br><br><strong>Note:</strong> This method is considerably slower than <a href="#pick"><code>_.pick</code></a>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="string">\'2\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">omit</span>(object<span class="delimiter">,</span>&nbsp;[<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'b\':&nbsp;\'2\'&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13496">source</a> <a href="https://www.npmjs.com/package/lodash.omit">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.omit(object, [paths])',
        methodName: 'omit',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the new object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8511091160339613',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The destination object.</li><li><code>[sources]</code> <em>(...Object)</em>: The source objects.</li>',
        category: 'Object Methods',
        description:
            'This method is like <a href="#defaults"><code>_.defaults</code></a> except that it recursively assigns default properties.<br><br><strong>Note:</strong> This method mutates <code>object</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">defaultsDeep</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;{&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;{&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;}&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;{&nbsp;\'b\':&nbsp;2,&nbsp;\'c\':&nbsp;3&nbsp;}&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12836">source</a> <a href="https://www.npmjs.com/package/lodash.defaultsdeep">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.defaultsDeep(object, [sources])',
        methodName: 'defaultsDeep',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns <code>object</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8685062186225408',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments: '<em>_.entriesIn</em>',
        category: 'Object Methods',
        description:
            'Creates an array of own and inherited enumerable string keyed-value pairs for <code>object</code> which can be consumed by <a href="#fromPairs"><code>_.fromPairs</code></a>. If <code>object</code> is a map or set, its entries are returned.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">Foo</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>a&nbsp;=&nbsp;<span class="numeric">1</span>;</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>b&nbsp;=&nbsp;<span class="numeric">2</span>;</div><div>}</div><div>&nbsp;</div><div>Foo<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>c&nbsp;=&nbsp;<span class="numeric">3</span>;</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toPairsIn</span>(new&nbsp;<span class="name type">Foo</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[[\'a\',&nbsp;1],&nbsp;[\'b\',&nbsp;2],&nbsp;[\'c\',&nbsp;3]]&nbsp;(iteration&nbsp;order&nbsp;is&nbsp;not&nbsp;guaranteed)</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13756">source</a> <a href="https://www.npmjs.com/package/lodash.topairsin">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.toPairsIn(object)',
        methodName: 'toPairsIn',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the key-value pairs.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8726356119864968',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to query.</li><li><code>path</code> <em>(Array|string)</em>: The path of the property to resolve.</li><li><code>[defaultValue]</code> <em>(*)</em>: The value returned for <code>undefined</code> resolved values.</li>',
        category: 'Object Methods',
        description:
            'This method is like <a href="#get"><code>_.get</code></a> except that if the resolved value is a function it\'s invoked with the <code>this</code> binding of its parent object and its result is returned.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;[{&nbsp;<span class="string">\'b\'</span>:&nbsp;{&nbsp;<span class="string">\'c1\'</span>:&nbsp;<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c2\'</span>:&nbsp;_<span class="delimiter method">.</span><span class="name">constant</span>(<span class="numeric">4</span>)&nbsp;}&nbsp;}]&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">result</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'a[0].b.c1\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">result</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'a[0].b.c2\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;4</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">result</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'a[0].b.c3\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'default\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'default\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">result</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'a[0].b.c3\'</span><span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">constant</span>(<span class="string">\'default\'</span>));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'default\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13623">source</a> <a href="https://www.npmjs.com/package/lodash.result">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.result(object, path, [defaultValue])',
        methodName: 'result',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the resolved value.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9022553057185319',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments: '<em>_.entries</em>',
        category: 'Object Methods',
        description:
            'Creates an array of own enumerable string keyed-value pairs for <code>object</code> which can be consumed by <a href="#fromPairs"><code>_.fromPairs</code></a>. If <code>object</code> is a map or set, its entries are returned.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">Foo</span>()&nbsp;{</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>a&nbsp;=&nbsp;<span class="numeric">1</span>;</div><div>&nbsp;&nbsp;this<span class="delimiter">.</span>b&nbsp;=&nbsp;<span class="numeric">2</span>;</div><div>}</div><div>&nbsp;</div><div>Foo<span class="delimiter">.</span><span class="support">prototype</span><span class="delimiter">.</span>c&nbsp;=&nbsp;<span class="numeric">3</span>;</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toPairs</span>(new&nbsp;<span class="name type">Foo</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[[\'a\',&nbsp;1],&nbsp;[\'b\',&nbsp;2]]&nbsp;(iteration&nbsp;order&nbsp;is&nbsp;not&nbsp;guaranteed)</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13730">source</a> <a href="https://www.npmjs.com/package/lodash.topairs">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.toPairs(object)',
        methodName: 'toPairs',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the key-value pairs.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9358095760674766',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to inspect.</li><li><code>[predicate=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Object Methods',
        description:
            'This method is like <a href="#find"><code>_.find</code></a> except that it returns the key of the first element <code>predicate</code> returns truthy for instead of the element itself.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;{</div><div>&nbsp;&nbsp;<span class="string">\'barney\'</span>:&nbsp;&nbsp;{&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">36</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;<span class="string">\'fred\'</span>:&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">40</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;<span class="string">\'pebbles\'</span>:&nbsp;{&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}</div><div>};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">findKey</span>(users<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;o<span class="delimiter">.</span>age&nbsp;&lt;&nbsp;<span class="numeric">40</span>;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'barney\'&nbsp;(iteration&nbsp;order&nbsp;is&nbsp;not&nbsp;guaranteed)</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matches`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">findKey</span>(users<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'pebbles\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matchesProperty`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">findKey</span>(users<span class="delimiter">,</span>&nbsp;[<span class="string">\'active\'</span><span class="delimiter">,</span>&nbsp;false]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'fred\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">findKey</span>(users<span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'barney\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L12876">source</a> <a href="https://www.npmjs.com/package/lodash.findkey">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.findKey(object, [predicate=_.identity])',
        methodName: 'findKey',
        related_methods: [],
        returns:
            '<em>(*)</em>: Returns the key of the matched element, else <code>undefined</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9360553244664411',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to query.</li><li><code>path</code> <em>(Array|string)</em>: The path to check.</li>',
        category: 'Object Methods',
        description:
            'Checks if <code>path</code> is a direct property of <code>object</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;{&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}&nbsp;};</div><div><span class="type">var</span>&nbsp;other&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">create</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;_<span class="delimiter method">.</span><span class="name">create</span>({&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;})&nbsp;});</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">has</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'a\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">has</span>(object<span class="delimiter">,</span>&nbsp;<span class="string">\'a.b\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">has</span>(object<span class="delimiter">,</span>&nbsp;[<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">has</span>(other<span class="delimiter">,</span>&nbsp;<span class="string">\'a\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13158">source</a> <a href="https://www.npmjs.com/package/lodash.has">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.has(object, path)',
        methodName: 'has',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>path</code> exists, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9695083285924068',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to iterate over.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Object Methods',
        description:
            'Creates an object with the same keys as <code>object</code> and values generated by running each own enumerable string keyed property of <code>object</code> thru <code>iteratee</code>. The iteratee is invoked with three arguments:<br><em>(value, key, object)</em>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;{</div><div>&nbsp;&nbsp;<span class="string">\'fred\'</span>:&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">40</span>&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;<span class="string">\'pebbles\'</span>:&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'pebbles\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}</div><div>};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">mapValues</span>(users<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(o)&nbsp;{&nbsp;return&nbsp;o<span class="delimiter">.</span>age;&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'fred\':&nbsp;40,&nbsp;\'pebbles\':&nbsp;1&nbsp;}&nbsp;(iteration&nbsp;order&nbsp;is&nbsp;not&nbsp;guaranteed)</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">mapValues</span>(users<span class="delimiter">,</span>&nbsp;<span class="string">\'age\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'fred\':&nbsp;40,&nbsp;\'pebbles\':&nbsp;1&nbsp;}&nbsp;(iteration&nbsp;order&nbsp;is&nbsp;not&nbsp;guaranteed)</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L13396">source</a> <a href="https://www.npmjs.com/package/lodash.mapvalues">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.mapValues(object, [iteratee=_.identity])',
        methodName: 'mapValues',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the new mapped object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '0638585488794461',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments: '<em>(Object)</em>: Returns the wrapper object.',
        category: 'Seq Methods',
        description: 'Enables the wrapper to be iterable.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;wrapped&nbsp;=&nbsp;<span class="name">_</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]);</div><div>&nbsp;</div><div>wrapped[<span class="support">Symbol</span><span class="delimiter">.</span>iterator]()&nbsp;===&nbsp;wrapped;</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div><span class="support">Array</span><span class="delimiter method">.</span><span class="name">from</span>(wrapped);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8949">source</a>',
        lodash_version: '4.17.15',
        method: '_.prototype[Symbol.iterator]()',
        methodName: 'prototype[Symbol.iterator]',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the wrapper object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '08290839357416685',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to wrap.</li>',
        category: 'Seq Methods',
        description:
            'Creates a <code>lodash</code> wrapper instance that wraps <code>value</code> with explicit method chain sequences enabled. The result of such sequences must be unwrapped with <code>_#value</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">36</span>&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">40</span>&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'pebbles\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}</div><div>];</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;youngest&nbsp;=&nbsp;_</div><div>&nbsp;&nbsp;<span class="delimiter method">.</span><span class="name">chain</span>(users)</div><div>&nbsp;&nbsp;<span class="delimiter method">.</span><span class="name">sortBy</span>(<span class="string">\'age\'</span>)</div><div>&nbsp;&nbsp;<span class="delimiter method">.</span><span class="name">map</span>(<span class="type">function</span>(o)&nbsp;{</div><div>&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;o<span class="delimiter">.</span>user&nbsp;+&nbsp;<span class="string">\'&nbsp;is&nbsp;\'</span>&nbsp;+&nbsp;o<span class="delimiter">.</span>age;</div><div>&nbsp;&nbsp;})</div><div>&nbsp;&nbsp;<span class="delimiter method">.</span><span class="name">head</span>()</div><div>&nbsp;&nbsp;<span class="delimiter">.</span><span class="support">value</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'pebbles&nbsp;is&nbsp;1\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8737">source</a>',
        lodash_version: '4.17.15',
        method: '_.chain(value)',
        methodName: 'chain',
        related_methods: [],
        returns:
            '<em>(Object)</em>: Returns the new <code>lodash</code> wrapper instance.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '09961371046936457',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[paths]</code> <em>(...(string|string[]))</em>: The property paths to pick.</li>',
        category: 'Seq Methods',
        description:
            'This method is the wrapper version of <a href="#at"><code>_.at</code></a>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;[{&nbsp;<span class="string">\'b\'</span>:&nbsp;{&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;}&nbsp;}<span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>]&nbsp;};</div><div>&nbsp;</div><div><span class="name">_</span>(object)<span class="delimiter method">.</span><span class="name">at</span>([<span class="string">\'a[0].b.c\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'a[1]\'</span>])<span class="delimiter">.</span><span class="support">value</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[3,&nbsp;4]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8814">source</a>',
        lodash_version: '4.17.15',
        method: '_.prototype.at([paths])',
        methodName: 'prototype.at',
        related_methods: [],
        returns:
            '<em>(Object)</em>: Returns the new <code>lodash</code> wrapper instance.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '14590422883473927',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments: '<em>_.prototype.toJSON, _.prototype.valueOf</em>',
        category: 'Seq Methods',
        description:
            'Executes the chain sequence to resolve the unwrapped value.',
        example:
            '<pre><div><span class="name">_</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>])<span class="delimiter">.</span><span class="support">value</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9049">source</a>',
        lodash_version: '4.17.15',
        method: '_.prototype.value()',
        methodName: 'prototype.value',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the resolved unwrapped value.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '2003402043800048',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to provide to <code>interceptor</code>.</li><li><code>interceptor</code> <em>(Function)</em>: The function to invoke.</li>',
        category: 'Seq Methods',
        description:
            'This method is like <a href="#tap"><code>_.tap</code></a> except that it returns the result of <code>interceptor</code>. The purpose of this method is to "pass thru" values replacing intermediate results in a method chain sequence.',
        example:
            '<pre><div><span class="name">_</span>(<span class="string">\'&nbsp;&nbsp;abc&nbsp;&nbsp;\'</span>)</div><div>&nbsp;<span class="delimiter method">.</span><span class="name">chain</span>()</div><div>&nbsp;<span class="delimiter method">.</span><span class="name">trim</span>()</div><div>&nbsp;<span class="delimiter method">.</span><span class="name">thru</span>(<span class="type">function</span>(value)&nbsp;{</div><div>&nbsp;&nbsp;&nbsp;return&nbsp;[value];</div><div>&nbsp;})</div><div>&nbsp;<span class="delimiter">.</span><span class="support">value</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'abc\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8794">source</a>',
        lodash_version: '4.17.15',
        method: '_.thru(value, interceptor)',
        methodName: 'thru',
        related_methods: [],
        returns:
            '<em>(*)</em>: Returns the result of <code>interceptor</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '2668034688013532',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<em>(Object)</em>: Returns the new <code>lodash</code> wrapper instance.',
        category: 'Seq Methods',
        description:
            'Executes the chain sequence and returns the wrapped result.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>];</div><div><span class="type">var</span>&nbsp;wrapped&nbsp;=&nbsp;<span class="name">_</span>(array)<span class="delimiter method">.</span><span class="support">push</span>(<span class="numeric">3</span>);</div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(array);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2]</span></div><div>&nbsp;</div><div>wrapped&nbsp;=&nbsp;wrapped<span class="delimiter method">.</span><span class="name">commit</span>();</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(array);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3]</span></div><div>&nbsp;</div><div>wrapped<span class="delimiter method">.</span><span class="name">last</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;3</span></div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(array);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8895">source</a>',
        lodash_version: '4.17.15',
        method: '_.prototype.commit()',
        methodName: 'prototype.commit',
        related_methods: [],
        returns:
            '<em>(Object)</em>: Returns the new <code>lodash</code> wrapper instance.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '28552928680157014',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to plant.</li>',
        category: 'Seq Methods',
        description:
            'Creates a clone of the chain sequence planting <code>value</code> as the wrapped value.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">square</span>(n)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;n&nbsp;*&nbsp;n;</div><div>}</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;wrapped&nbsp;=&nbsp;<span class="name">_</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>])<span class="delimiter method">.</span><span class="name">map</span>(square);</div><div><span class="type">var</span>&nbsp;other&nbsp;=&nbsp;wrapped<span class="delimiter method">.</span><span class="name">plant</span>([<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>]);</div><div>&nbsp;</div><div>other<span class="delimiter">.</span><span class="support">value</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[9,&nbsp;16]</span></div><div>&nbsp;</div><div>wrapped<span class="delimiter">.</span><span class="support">value</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;4]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8977">source</a>',
        lodash_version: '4.17.15',
        method: '_.prototype.plant(value)',
        methodName: 'prototype.plant',
        related_methods: [],
        returns:
            '<em>(Object)</em>: Returns the new <code>lodash</code> wrapper instance.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '42065648699200414',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<em>(Object)</em>: Returns the new <code>lodash</code> wrapper instance.',
        category: 'Seq Methods',
        description:
            'This method is the wrapper version of <a href="#reverse"><code>_.reverse</code></a>.<br><br><strong>Note:</strong> This method mutates the wrapped array.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>];</div><div>&nbsp;</div><div><span class="name">_</span>(array)<span class="delimiter method">.</span><span class="support">reverse</span>()<span class="delimiter">.</span><span class="support">value</span>()</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[3,&nbsp;2,&nbsp;1]</span></div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(array);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[3,&nbsp;2,&nbsp;1]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L9017">source</a>',
        lodash_version: '4.17.15',
        method: '_.prototype.reverse()',
        methodName: 'prototype.reverse',
        related_methods: [],
        returns:
            '<em>(Object)</em>: Returns the new <code>lodash</code> wrapper instance.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6121849690770219',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<em>(Object)</em>: Returns the new <code>lodash</code> wrapper instance.',
        category: 'Seq Methods',
        description:
            'Creates a <code>lodash</code> wrapper instance with explicit method chain sequences enabled.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">36</span>&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">40</span>&nbsp;}</div><div>];</div><div>&nbsp;</div><div><span class="comment">//&nbsp;A&nbsp;sequence&nbsp;without&nbsp;explicit&nbsp;chaining.</span></div><div><span class="name">_</span>(users)<span class="delimiter method">.</span><span class="name">head</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'user\':&nbsp;\'barney\',&nbsp;\'age\':&nbsp;36&nbsp;}</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;A&nbsp;sequence&nbsp;with&nbsp;explicit&nbsp;chaining.</span></div><div><span class="name">_</span>(users)</div><div>&nbsp;&nbsp;<span class="delimiter method">.</span><span class="name">chain</span>()</div><div>&nbsp;&nbsp;<span class="delimiter method">.</span><span class="name">head</span>()</div><div>&nbsp;&nbsp;<span class="delimiter method">.</span><span class="name">pick</span>(<span class="string">\'user\'</span>)</div><div>&nbsp;&nbsp;<span class="delimiter">.</span><span class="support">value</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'user\':&nbsp;\'barney\'&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8865">source</a>',
        lodash_version: '4.17.15',
        method: '_.prototype.chain()',
        methodName: 'prototype.chain',
        related_methods: [],
        returns:
            '<em>(Object)</em>: Returns the new <code>lodash</code> wrapper instance.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6123555155256171',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<em>(Object)</em>: Returns the new <code>lodash</code> wrapper instance.',
        category: 'Seq Methods',
        description:
            'Creates a <code>lodash</code> object which wraps <code>value</code> to enable implicit method chain sequences. Methods that operate on and return arrays, collections, and functions can be chained together. Methods that retrieve a single value or may return a primitive value will automatically end the chain sequence and return the unwrapped value. Otherwise, the value must be unwrapped with <code>_#value</code>.<br><br>Explicit chain sequences, which must be unwrapped with <code>_#value</code>, may be enabled using <a href="#chain"><code>_.chain</code></a>.<br><br>The execution of chained methods is lazy, that is, it\'s deferred until <code>_#value</code> is implicitly or explicitly called.<br><br>Lazy evaluation allows several methods to support shortcut fusion. Shortcut fusion is an optimization to merge iteratee calls; this avoids the creation of intermediate arrays and can greatly reduce the number of iteratee executions. Sections of a chain sequence qualify for shortcut fusion if the section is applied to an array and iteratees accept only one argument. The heuristic for whether a section qualifies for shortcut fusion is subject to change.<br><br>Chaining is supported in custom builds as long as the <code>_#value</code> method is directly or indirectly included in the build.<br><br>In addition to lodash methods, wrappers have <code>Array</code> and <code>String</code> methods.<br><br>The wrapper <code>Array</code> methods are:<br><code>concat</code>, <code>join</code>, <code>pop</code>, <code>push</code>, <code>shift</code>, <code>sort</code>, <code>splice</code>, and <code>unshift</code><br><br>The wrapper <code>String</code> methods are:<br><code>replace</code> and <code>split</code><br><br>The wrapper methods that support shortcut fusion are:<br><code>at</code>, <code>compact</code>, <code>drop</code>, <code>dropRight</code>, <code>dropWhile</code>, <code>filter</code>, <code>find</code>, <code>findLast</code>, <code>head</code>, <code>initial</code>, <code>last</code>, <code>map</code>, <code>reject</code>, <code>reverse</code>, <code>slice</code>, <code>tail</code>, <code>take</code>, <code>takeRight</code>, <code>takeRightWhile</code>, <code>takeWhile</code>, and <code>toArray</code><br><br>The chainable wrapper methods are:<br><code>after</code>, <code>ary</code>, <code>assign</code>, <code>assignIn</code>, <code>assignInWith</code>, <code>assignWith</code>, <code>at</code>, <code>before</code>, <code>bind</code>, <code>bindAll</code>, <code>bindKey</code>, <code>castArray</code>, <code>chain</code>, <code>chunk</code>, <code>commit</code>, <code>compact</code>, <code>concat</code>, <code>conforms</code>, <code>constant</code>, <code>countBy</code>, <code>create</code>, <code>curry</code>, <code>debounce</code>, <code>defaults</code>, <code>defaultsDeep</code>, <code>defer</code>, <code>delay</code>, <code>difference</code>, <code>differenceBy</code>, <code>differenceWith</code>, <code>drop</code>, <code>dropRight</code>, <code>dropRightWhile</code>, <code>dropWhile</code>, <code>extend</code>, <code>extendWith</code>, <code>fill</code>, <code>filter</code>, <code>flatMap</code>, <code>flatMapDeep</code>, <code>flatMapDepth</code>, <code>flatten</code>, <code>flattenDeep</code>, <code>flattenDepth</code>, <code>flip</code>, <code>flow</code>, <code>flowRight</code>, <code>fromPairs</code>, <code>functions</code>, <code>functionsIn</code>, <code>groupBy</code>, <code>initial</code>, <code>intersection</code>, <code>intersectionBy</code>, <code>intersectionWith</code>, <code>invert</code>, <code>invertBy</code>, <code>invokeMap</code>, <code>iteratee</code>, <code>keyBy</code>, <code>keys</code>, <code>keysIn</code>, <code>map</code>, <code>mapKeys</code>, <code>mapValues</code>, <code>matches</code>, <code>matchesProperty</code>, <code>memoize</code>, <code>merge</code>, <code>mergeWith</code>, <code>method</code>, <code>methodOf</code>, <code>mixin</code>, <code>negate</code>, <code>nthArg</code>, <code>omit</code>, <code>omitBy</code>, <code>once</code>, <code>orderBy</code>, <code>over</code>, <code>overArgs</code>, <code>overEvery</code>, <code>overSome</code>, <code>partial</code>, <code>partialRight</code>, <code>partition</code>, <code>pick</code>, <code>pickBy</code>, <code>plant</code>, <code>property</code>, <code>propertyOf</code>, <code>pull</code>, <code>pullAll</code>, <code>pullAllBy</code>, <code>pullAllWith</code>, <code>pullAt</code>, <code>push</code>, <code>range</code>, <code>rangeRight</code>, <code>rearg</code>, <code>reject</code>, <code>remove</code>, <code>rest</code>, <code>reverse</code>, <code>sampleSize</code>, <code>set</code>, <code>setWith</code>, <code>shuffle</code>, <code>slice</code>, <code>sort</code>, <code>sortBy</code>, <code>splice</code>, <code>spread</code>, <code>tail</code>, <code>take</code>, <code>takeRight</code>, <code>takeRightWhile</code>, <code>takeWhile</code>, <code>tap</code>, <code>throttle</code>, <code>thru</code>, <code>toArray</code>, <code>toPairs</code>, <code>toPairsIn</code>, <code>toPath</code>, <code>toPlainObject</code>, <code>transform</code>, <code>unary</code>, <code>union</code>, <code>unionBy</code>, <code>unionWith</code>, <code>uniq</code>, <code>uniqBy</code>, <code>uniqWith</code>, <code>unset</code>, <code>unshift</code>, <code>unzip</code>, <code>unzipWith</code>, <code>update</code>, <code>updateWith</code>, <code>values</code>, <code>valuesIn</code>, <code>without</code>, <code>wrap</code>, <code>xor</code>, <code>xorBy</code>, <code>xorWith</code>, <code>zip</code>, <code>zipObject</code>, <code>zipObjectDeep</code>, and <code>zipWith</code><br><br>The wrapper methods that are <strong>not</strong> chainable by default are:<br><code>add</code>, <code>attempt</code>, <code>camelCase</code>, <code>capitalize</code>, <code>ceil</code>, <code>clamp</code>, <code>clone</code>, <code>cloneDeep</code>, <code>cloneDeepWith</code>, <code>cloneWith</code>, <code>conformsTo</code>, <code>deburr</code>, <code>defaultTo</code>, <code>divide</code>, <code>each</code>, <code>eachRight</code>, <code>endsWith</code>, <code>eq</code>, <code>escape</code>, <code>escapeRegExp</code>, <code>every</code>, <code>find</code>, <code>findIndex</code>, <code>findKey</code>, <code>findLast</code>, <code>findLastIndex</code>, <code>findLastKey</code>, <code>first</code>, <code>floor</code>, <code>forEach</code>, <code>forEachRight</code>, <code>forIn</code>, <code>forInRight</code>, <code>forOwn</code>, <code>forOwnRight</code>, <code>get</code>, <code>gt</code>, <code>gte</code>, <code>has</code>, <code>hasIn</code>, <code>head</code>, <code>identity</code>, <code>includes</code>, <code>indexOf</code>, <code>inRange</code>, <code>invoke</code>, <code>isArguments</code>, <code>isArray</code>, <code>isArrayBuffer</code>, <code>isArrayLike</code>, <code>isArrayLikeObject</code>, <code>isBoolean</code>, <code>isBuffer</code>, <code>isDate</code>, <code>isElement</code>, <code>isEmpty</code>, <code>isEqual</code>, <code>isEqualWith</code>, <code>isError</code>, <code>isFinite</code>, <code>isFunction</code>, <code>isInteger</code>, <code>isLength</code>, <code>isMap</code>, <code>isMatch</code>, <code>isMatchWith</code>, <code>isNaN</code>, <code>isNative</code>, <code>isNil</code>, <code>isNull</code>, <code>isNumber</code>, <code>isObject</code>, <code>isObjectLike</code>, <code>isPlainObject</code>, <code>isRegExp</code>, <code>isSafeInteger</code>, <code>isSet</code>, <code>isString</code>, <code>isUndefined</code>, <code>isTypedArray</code>, <code>isWeakMap</code>, <code>isWeakSet</code>, <code>join</code>, <code>kebabCase</code>, <code>last</code>, <code>lastIndexOf</code>, <code>lowerCase</code>, <code>lowerFirst</code>, <code>lt</code>, <code>lte</code>, <code>max</code>, <code>maxBy</code>, <code>mean</code>, <code>meanBy</code>, <code>min</code>, <code>minBy</code>, <code>multiply</code>, <code>noConflict</code>, <code>noop</code>, <code>now</code>, <code>nth</code>, <code>pad</code>, <code>padEnd</code>, <code>padStart</code>, <code>parseInt</code>, <code>pop</code>, <code>random</code>, <code>reduce</code>, <code>reduceRight</code>, <code>repeat</code>, <code>result</code>, <code>round</code>, <code>runInContext</code>, <code>sample</code>, <code>shift</code>, <code>size</code>, <code>snakeCase</code>, <code>some</code>, <code>sortedIndex</code>, <code>sortedIndexBy</code>, <code>sortedLastIndex</code>, <code>sortedLastIndexBy</code>, <code>startCase</code>, <code>startsWith</code>, <code>stubArray</code>, <code>stubFalse</code>, <code>stubObject</code>, <code>stubString</code>, <code>stubTrue</code>, <code>subtract</code>, <code>sum</code>, <code>sumBy</code>, <code>template</code>, <code>times</code>, <code>toFinite</code>, <code>toInteger</code>, <code>toJSON</code>, <code>toLength</code>, <code>toLower</code>, <code>toNumber</code>, <code>toSafeInteger</code>, <code>toString</code>, <code>toUpper</code>, <code>trim</code>, <code>trimEnd</code>, <code>trimStart</code>, <code>truncate</code>, <code>unescape</code>, <code>uniqueId</code>, <code>upperCase</code>, <code>upperFirst</code>, <code>value</code>, and <code>words</code>',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">square</span>(n)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;n&nbsp;*&nbsp;n;</div><div>}</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;wrapped&nbsp;=&nbsp;<span class="name">_</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>]);</div><div>&nbsp;</div><div><span class="comment">//&nbsp;Returns&nbsp;an&nbsp;unwrapped&nbsp;value.</span></div><div>wrapped<span class="delimiter method">.</span><span class="name">reduce</span>(_<span class="delimiter">.</span>add);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;6</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Returns&nbsp;a&nbsp;wrapped&nbsp;value.</span></div><div><span class="type">var</span>&nbsp;squares&nbsp;=&nbsp;wrapped<span class="delimiter method">.</span><span class="name">map</span>(square);</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isArray</span>(squares);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isArray</span>(squares<span class="delimiter">.</span><span class="support">value</span>());</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L1648">source</a>',
        lodash_version: '4.17.15',
        method: '_(value)',
        methodName: '',
        related_methods: [],
        returns:
            '<em>(Object)</em>: Returns the new <code>lodash</code> wrapper instance.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '692969750497634',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to provide to <code>interceptor</code>.</li><li><code>interceptor</code> <em>(Function)</em>: The function to invoke.</li>',
        category: 'Seq Methods',
        description:
            'This method invokes <code>interceptor</code> and returns <code>value</code>. The interceptor is invoked with one argument; <em>(value)</em>. The purpose of this method is to "tap into" a method chain sequence in order to modify intermediate results.',
        example:
            '<pre><div><span class="name">_</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>])</div><div>&nbsp;<span class="delimiter method">.</span><span class="name">tap</span>(<span class="type">function</span>(array)&nbsp;{</div><div><span class="comment"></span><span class="comment">//&nbsp;Mutate&nbsp;input&nbsp;array.</span></div><div>&nbsp;&nbsp;&nbsp;array<span class="delimiter method">.</span><span class="support">pop</span>();</div><div>&nbsp;})</div><div>&nbsp;<span class="delimiter method">.</span><span class="support">reverse</span>()</div><div>&nbsp;<span class="delimiter">.</span><span class="support">value</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;1]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8766">source</a>',
        lodash_version: '4.17.15',
        method: '_.tap(value, interceptor)',
        methodName: 'tap',
        related_methods: [],
        returns: '<em>(*)</em>: Returns <code>value</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7976898325511455',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments: '<em>(Object)</em>: Returns the next iterator value.',
        category: 'Seq Methods',
        description:
            'Gets the next value on a wrapped object following the <a href="https://mdn.io/iteration_protocols#iterator">iterator protocol</a>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;wrapped&nbsp;=&nbsp;<span class="name">_</span>([<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]);</div><div>&nbsp;</div><div>wrapped<span class="delimiter">.</span><span class="support">next</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'done\':&nbsp;false,&nbsp;\'value\':&nbsp;1&nbsp;}</span></div><div>&nbsp;</div><div>wrapped<span class="delimiter">.</span><span class="support">next</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'done\':&nbsp;false,&nbsp;\'value\':&nbsp;2&nbsp;}</span></div><div>&nbsp;</div><div>wrapped<span class="delimiter">.</span><span class="support">next</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'done\':&nbsp;true,&nbsp;\'value\':&nbsp;undefined&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L8921">source</a>',
        lodash_version: '4.17.15',
        method: '_.prototype.next()',
        methodName: 'prototype.next',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the next iterator value.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '065965167787266',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to inspect.</li><li><code>[pattern]</code> <em>(RegExp|string)</em>: The pattern to match words.</li>",
        category: 'String Methods',
        description: 'Splits <code>string</code> into an array of its words.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">words</span>(<span class="string">\'fred,&nbsp;barney,&nbsp;&amp;&nbsp;pebbles\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'fred\',&nbsp;\'barney\',&nbsp;\'pebbles\']</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">words</span>(<span class="string">\'fred,&nbsp;barney,&nbsp;&amp;&nbsp;pebbles\'</span><span class="delimiter">,</span><span class="string">&nbsp;/[^,&nbsp;]+/g</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'fred\',&nbsp;\'barney\',&nbsp;\'&amp;\',&nbsp;\'pebbles\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15218">source</a> <a href="https://www.npmjs.com/package/lodash.words">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.words([string=''], [pattern])",
        methodName: 'words',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the words of <code>string</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '10132049365802023',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to pad.</li><li><code>[length=0]</code> <em>(number)</em>: The padding length.</li><li><code>[chars=' ']</code> <em>(string)</em>: The string used as padding.</li>",
        category: 'String Methods',
        description:
            "Pads <code>string</code> on the left and right sides if it's shorter than <code>length</code>. Padding characters are truncated if they can't be evenly divided by <code>length</code>.",
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">pad</span>(<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">8</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'&nbsp;&nbsp;abc&nbsp;&nbsp;&nbsp;\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">pad</span>(<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">8</span><span class="delimiter">,</span>&nbsp;<span class="string">\'_-\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'_-abc_-_\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">pad</span>(<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'abc\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14371">source</a> <a href="https://www.npmjs.com/package/lodash.pad">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.pad([string=''], [length=0], [chars=' '])",
        methodName: 'pad',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the padded string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '18878918177361367',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to convert.</li>",
        category: 'String Methods',
        description:
            'Converts <code>string</code> to <a href="https://en.wikipedia.org/wiki/Letter_case#Special_case_styles">kebab case</a>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">kebabCase</span>(<span class="string">\'Foo&nbsp;Bar\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'foo-bar\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">kebabCase</span>(<span class="string">\'fooBar\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'foo-bar\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">kebabCase</span>(<span class="string">\'__FOO_BAR__\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'foo-bar\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14301">source</a> <a href="https://www.npmjs.com/package/lodash.kebabcase">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.kebabCase([string=''])",
        methodName: 'kebabCase',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the kebab cased string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '19586299813014815',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to pad.</li><li><code>[length=0]</code> <em>(number)</em>: The padding length.</li><li><code>[chars=' ']</code> <em>(string)</em>: The string used as padding.</li>",
        category: 'String Methods',
        description:
            "Pads <code>string</code> on the right side if it's shorter than <code>length</code>. Padding characters are truncated if they exceed <code>length</code>.",
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">padEnd</span>(<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">6</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'abc&nbsp;&nbsp;&nbsp;\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">padEnd</span>(<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">6</span><span class="delimiter">,</span>&nbsp;<span class="string">\'_-\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'abc_-_\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">padEnd</span>(<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'abc\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14410">source</a> <a href="https://www.npmjs.com/package/lodash.padend">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.padEnd([string=''], [length=0], [chars=' '])",
        methodName: 'padEnd',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the padded string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '319146195900411',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to convert.</li>",
        category: 'String Methods',
        description:
            'Converts <code>string</code> to <a href="https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage">start case</a>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">startCase</span>(<span class="string">\'--foo-bar--\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'Foo&nbsp;Bar\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">startCase</span>(<span class="string">\'fooBar\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'Foo&nbsp;Bar\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">startCase</span>(<span class="string">\'__FOO_BAR__\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'FOO&nbsp;BAR\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14629">source</a> <a href="https://www.npmjs.com/package/lodash.startcase">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.startCase([string=''])",
        methodName: 'startCase',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the start cased string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '3237032305359974',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to trim.</li><li><code>[chars=whitespace]</code> <em>(string)</em>: The characters to trim.</li>",
        category: 'String Methods',
        description:
            'Removes leading whitespace or specified characters from <code>string</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">trimStart</span>(<span class="string">\'&nbsp;&nbsp;abc&nbsp;&nbsp;\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'abc&nbsp;&nbsp;\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">trimStart</span>(<span class="string">\'-_-abc-_-\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'_-\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'abc-_-\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15023">source</a> <a href="https://www.npmjs.com/package/lodash.trimstart">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.trimStart([string=''], [chars=whitespace])",
        methodName: 'trimStart',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the trimmed string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '32846158612174997',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to convert.</li>",
        category: 'String Methods',
        description:
            'Converts <code>string</code> to <a href="https://en.wikipedia.org/wiki/Snake_case">snake case</a>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">snakeCase</span>(<span class="string">\'Foo&nbsp;Bar\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'foo_bar\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">snakeCase</span>(<span class="string">\'fooBar\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'foo_bar\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">snakeCase</span>(<span class="string">\'--FOO-BAR--\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'foo_bar\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14564">source</a> <a href="https://www.npmjs.com/package/lodash.snakecase">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.snakeCase([string=''])",
        methodName: 'snakeCase',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the snake cased string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '36890601902696873',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to convert.</li>",
        category: 'String Methods',
        description:
            'Converts <code>string</code>, as a whole, to lower case just like <a href="https://mdn.io/toLowerCase">String#toLowerCase</a>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">toLower</span>(<span class="string">\'--Foo-Bar--\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'--foo-bar--\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toLower</span>(<span class="string">\'fooBar\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'foobar\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toLower</span>(<span class="string">\'__FOO_BAR__\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'__foo_bar__\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14904">source</a> <a href="https://www.npmjs.com/package/lodash.tolower">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.toLower([string=''])",
        methodName: 'toLower',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the lower cased string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '37313942160786934',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to capitalize.</li>",
        category: 'String Methods',
        description:
            'Converts the first character of <code>string</code> to upper case and the remaining to lower case.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">capitalize</span>(<span class="string">\'FRED\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'Fred\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14159">source</a> <a href="https://www.npmjs.com/package/lodash.capitalize">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.capitalize([string=''])",
        methodName: 'capitalize',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the capitalized string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '40999870547926165',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to trim.</li><li><code>[chars=whitespace]</code> <em>(string)</em>: The characters to trim.</li>",
        category: 'String Methods',
        description:
            'Removes trailing whitespace or specified characters from <code>string</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">trimEnd</span>(<span class="string">\'&nbsp;&nbsp;abc&nbsp;&nbsp;\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'&nbsp;&nbsp;abc\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">trimEnd</span>(<span class="string">\'-_-abc-_-\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'_-\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'-_-abc\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14990">source</a> <a href="https://www.npmjs.com/package/lodash.trimend">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.trimEnd([string=''], [chars=whitespace])",
        methodName: 'trimEnd',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the trimmed string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5126802508043609',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to escape.</li>",
        category: 'String Methods',
        description:
            'Escapes the <code>RegExp</code> special characters "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", and "|" in <code>string</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">escapeRegExp</span>(<span class="string">\'[lodash](https://lodash.com/)\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'\\[lodash\\]\\(https://lodash\\.com/\\)\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14273">source</a> <a href="https://www.npmjs.com/package/lodash.escaperegexp">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.escapeRegExp([string=''])",
        methodName: 'escapeRegExp',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the escaped string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5491359563781771',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to escape.</li>",
        category: 'String Methods',
        description:
            'Converts the characters "&amp;", "&lt;", "&gt;", \'"\', and "\'" in <code>string</code> to their corresponding HTML entities.<br><br><strong>Note:</strong> No other characters are escaped. To escape additional characters use a third-party library like <a href="https://mths.be/he"><em>he</em></a>.<br><br>Though the "&gt;" character is escaped for symmetry, characters like "&gt;" and "/" don\'t need escaping in HTML and have no special meaning unless they\'re part of a tag or unquoted attribute value. See <a href="https://mathiasbynens.be/notes/ambiguous-ampersands">Mathias Bynens\'s article</a> <em>(under "semi-related fun fact")</em> for more details.<br><br>When working with HTML you should always <a href="http://wonko.com/post/html-escaping">quote attribute values</a> to reduce XSS vectors.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">escape</span>(<span class="string">\'fred,&nbsp;barney,&nbsp;&amp;&nbsp;pebbles\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'fred,&nbsp;barney,&nbsp;&amp;amp;&nbsp;pebbles\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14251">source</a> <a href="https://www.npmjs.com/package/lodash.escape">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.escape([string=''])",
        methodName: 'escape',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the escaped string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5693327898094805',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to inspect.</li><li><code>[target]</code> <em>(string)</em>: The string to search for.</li><li><code>[position=0]</code> <em>(number)</em>: The position to search from.</li>",
        category: 'String Methods',
        description:
            'Checks if <code>string</code> starts with the given target string.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">startsWith</span>(<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'a\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">startsWith</span>(<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">startsWith</span>(<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14656">source</a> <a href="https://www.npmjs.com/package/lodash.startswith">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.startsWith([string=''], [target], [position=0])",
        methodName: 'startsWith',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>string</code> starts with <code>target</code>, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6305038371000146',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to convert.</li>",
        category: 'String Methods',
        description:
            'Converts <code>string</code>, as a whole, to upper case just like <a href="https://mdn.io/toUpperCase">String#toUpperCase</a>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">toUpper</span>(<span class="string">\'--foo-bar--\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'--FOO-BAR--\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toUpper</span>(<span class="string">\'fooBar\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'FOOBAR\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">toUpper</span>(<span class="string">\'__foo_bar__\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'__FOO_BAR__\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14929">source</a> <a href="https://www.npmjs.com/package/lodash.toupper">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.toUpper([string=''])",
        methodName: 'toUpper',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the upper cased string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6454219132809063',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to modify.</li><li><code>pattern</code> <em>(RegExp|string)</em>: The pattern to replace.</li><li><code>replacement</code> <em>(Function|string)</em>: The match replacement.</li>",
        category: 'String Methods',
        description:
            'Replaces matches for <code>pattern</code> in <code>string</code> with <code>replacement</code>.<br><br><strong>Note:</strong> This method is based on <a href="https://mdn.io/String/replace"><code>String#replace</code></a>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="support">replace</span>(<span class="string">\'Hi&nbsp;Fred\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'Fred\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'Barney\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'Hi&nbsp;Barney\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14536">source</a> <a href="https://www.npmjs.com/package/lodash.replace">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.replace([string=''], pattern, replacement)",
        methodName: 'replace',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the modified string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6500471676328438',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to split.</li><li><code>separator</code> <em>(RegExp|string)</em>: The separator pattern to split by.</li><li><code>[limit]</code> <em>(number)</em>: The length to truncate results to.</li>",
        category: 'String Methods',
        description:
            'Splits <code>string</code> by <code>separator</code>.<br><br><strong>Note:</strong> This method is based on <a href="https://mdn.io/String/split"><code>String#split</code></a>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="support">split</span>(<span class="string">\'a-b-c\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'-\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'a\',&nbsp;\'b\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14587">source</a> <a href="https://www.npmjs.com/package/lodash.split">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.split([string=''], separator, [limit])",
        methodName: 'split',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the string segments.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6916944842021098',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[string=\'\']</code> <em>(string)</em>: The template string.</li><li><code>[options={}]</code> <em>(Object)</em>: The options object.</li><li><code>[options.escape=_.templateSettings.escape]</code> <em>(RegExp)</em>: The HTML "escape" delimiter.</li><li><code>[options.evaluate=_.templateSettings.evaluate]</code> <em>(RegExp)</em>: The "evaluate" delimiter.</li><li><code>[options.imports=_.templateSettings.imports]</code> <em>(Object)</em>: An object to import into the template as free variables.</li><li><code>[options.interpolate=_.templateSettings.interpolate]</code> <em>(RegExp)</em>: The "interpolate" delimiter.</li><li><code>[options.sourceURL=\'lodash.templateSources[n]\']</code> <em>(string)</em>: The sourceURL of the compiled template.</li><li><code>[options.variable=\'obj\']</code> <em>(string)</em>: The data object variable name.</li>',
        category: 'String Methods',
        description:
            'Creates a compiled template function that can interpolate data properties in "interpolate" delimiters, HTML-escape interpolated data properties in "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data properties may be accessed as free variables in the template. If a setting object is given, it takes precedence over <a href="#templateSettings"><code>_.templateSettings</code></a> values.<br><br><strong>Note:</strong> In the development build <a href="#template"><code>_.template</code></a> utilizes <a href="http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl">sourceURLs</a> for easier debugging.<br><br>For more information on precompiling templates see <a href="https://lodash.com/custom-builds">lodash\'s custom builds documentation</a>.<br><br>For more information on Chrome extension sandboxes see <a href="https://developer.chrome.com/extensions/sandboxingEval">Chrome\'s extensions documentation</a>.',
        example:
            '<pre><div><span class="comment">//&nbsp;Use&nbsp;the&nbsp;"interpolate"&nbsp;delimiter&nbsp;to&nbsp;create&nbsp;a&nbsp;compiled&nbsp;template.</span></div><div><span class="type">var</span>&nbsp;compiled&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">template</span>(<span class="string">\'hello&nbsp;&lt;%=&nbsp;user&nbsp;%&gt;!\'</span>);</div><div><span class="name">compiled</span>({&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hello&nbsp;fred!\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Use&nbsp;the&nbsp;HTML&nbsp;"escape"&nbsp;delimiter&nbsp;to&nbsp;escape&nbsp;data&nbsp;property&nbsp;values.</span></div><div><span class="type">var</span>&nbsp;compiled&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">template</span>(<span class="string">\'&lt;b&gt;&lt;%-&nbsp;value&nbsp;%&gt;&lt;/b&gt;\'</span>);</div><div><span class="name">compiled</span>({&nbsp;<span class="string">\'value\'</span>:&nbsp;<span class="string">\'&lt;script&gt;\'</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'&lt;b&gt;&amp;lt;script&amp;gt;&lt;/b&gt;\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Use&nbsp;the&nbsp;"evaluate"&nbsp;delimiter&nbsp;to&nbsp;execute&nbsp;JavaScript&nbsp;and&nbsp;generate&nbsp;HTML.</span></div><div><span class="type">var</span>&nbsp;compiled&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">template</span>(<span class="string">\'&lt;%&nbsp;_.forEach(users,&nbsp;function(user)&nbsp;{&nbsp;%&gt;&lt;li&gt;&lt;%-&nbsp;user&nbsp;%&gt;&lt;/li&gt;&lt;%&nbsp;});&nbsp;%&gt;\'</span>);</div><div><span class="name">compiled</span>({&nbsp;<span class="string">\'users\'</span>:&nbsp;[<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'barney\'</span>]&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'&lt;li&gt;fred&lt;/li&gt;&lt;li&gt;barney&lt;/li&gt;\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Use&nbsp;the&nbsp;internal&nbsp;`print`&nbsp;function&nbsp;in&nbsp;"evaluate"&nbsp;delimiters.</span></div><div><span class="type">var</span>&nbsp;compiled&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">template</span>(<span class="string">\'&lt;%&nbsp;print("hello&nbsp;"&nbsp;+&nbsp;user);&nbsp;%&gt;!\'</span>);</div><div><span class="name">compiled</span>({&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hello&nbsp;barney!\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Use&nbsp;the&nbsp;ES&nbsp;template&nbsp;literal&nbsp;delimiter&nbsp;as&nbsp;an&nbsp;"interpolate"&nbsp;delimiter.</span></div><div><span class="comment">//&nbsp;Disable&nbsp;support&nbsp;by&nbsp;replacing&nbsp;the&nbsp;"interpolate"&nbsp;delimiter.</span></div><div><span class="type">var</span>&nbsp;compiled&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">template</span>(<span class="string">\'hello&nbsp;${&nbsp;user&nbsp;}!\'</span>);</div><div><span class="name">compiled</span>({&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'pebbles\'</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hello&nbsp;pebbles!\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Use&nbsp;backslashes&nbsp;to&nbsp;treat&nbsp;delimiters&nbsp;as&nbsp;plain&nbsp;text.</span></div><div><span class="type">var</span>&nbsp;compiled&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">template</span>(<span class="string">\'&lt;%=&nbsp;"\\\\&lt;%-&nbsp;value&nbsp;%\\\\&gt;"&nbsp;%&gt;\'</span>);</div><div><span class="name">compiled</span>({&nbsp;<span class="string">\'value\'</span>:&nbsp;<span class="string">\'ignored\'</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'&lt;%-&nbsp;value&nbsp;%&gt;\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Use&nbsp;the&nbsp;`imports`&nbsp;option&nbsp;to&nbsp;import&nbsp;`jQuery`&nbsp;as&nbsp;`jq`.</span></div><div><span class="type">var</span>&nbsp;text&nbsp;=&nbsp;<span class="string">\'&lt;%&nbsp;jq.each(users,&nbsp;function(user)&nbsp;{&nbsp;%&gt;&lt;li&gt;&lt;%-&nbsp;user&nbsp;%&gt;&lt;/li&gt;&lt;%&nbsp;});&nbsp;%&gt;\'</span>;</div><div><span class="type">var</span>&nbsp;compiled&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">template</span>(text<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'imports\'</span>:&nbsp;{&nbsp;<span class="string">\'jq\'</span>:&nbsp;jQuery&nbsp;}&nbsp;});</div><div><span class="name">compiled</span>({&nbsp;<span class="string">\'users\'</span>:&nbsp;[<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'barney\'</span>]&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'&lt;li&gt;fred&lt;/li&gt;&lt;li&gt;barney&lt;/li&gt;\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Use&nbsp;the&nbsp;`sourceURL`&nbsp;option&nbsp;to&nbsp;specify&nbsp;a&nbsp;custom&nbsp;sourceURL&nbsp;for&nbsp;the&nbsp;template.</span></div><div><span class="type">var</span>&nbsp;compiled&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">template</span>(<span class="string">\'hello&nbsp;&lt;%=&nbsp;user&nbsp;%&gt;!\'</span><span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'sourceURL\'</span>:&nbsp;<span class="string">\'/basic/greeting.jst\'</span>&nbsp;});</div><div><span class="name">compiled</span>(data);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;Find&nbsp;the&nbsp;source&nbsp;of&nbsp;"greeting.jst"&nbsp;under&nbsp;the&nbsp;Sources&nbsp;tab&nbsp;or&nbsp;Resources&nbsp;panel&nbsp;of&nbsp;the&nbsp;web&nbsp;inspector.</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Use&nbsp;the&nbsp;`variable`&nbsp;option&nbsp;to&nbsp;ensure&nbsp;a&nbsp;with-statement&nbsp;isn\'t&nbsp;used&nbsp;in&nbsp;the&nbsp;compiled&nbsp;template.</span></div><div><span class="type">var</span>&nbsp;compiled&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">template</span>(<span class="string">\'hi&nbsp;&lt;%=&nbsp;data.user&nbsp;%&gt;!\'</span><span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'variable\'</span>:&nbsp;<span class="string">\'data\'</span>&nbsp;});</div><div>compiled<span class="delimiter">.</span><span class="support">source</span>;</div><div><span class="comment">//&nbsp;=&gt;&nbsp;function(data)&nbsp;{</span></div><div><span class="comment">//&nbsp;&nbsp;&nbsp;var&nbsp;__t,&nbsp;__p&nbsp;=&nbsp;\'\';</span></div><div><span class="comment">//&nbsp;&nbsp;&nbsp;__p&nbsp;+=&nbsp;\'hi&nbsp;\'&nbsp;+&nbsp;((__t&nbsp;=&nbsp;(&nbsp;data.user&nbsp;))&nbsp;==&nbsp;null&nbsp;?&nbsp;\'\'&nbsp;:&nbsp;__t)&nbsp;+&nbsp;\'!\';</span></div><div><span class="comment">//&nbsp;&nbsp;&nbsp;return&nbsp;__p;</span></div><div><span class="comment">//&nbsp;}</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Use&nbsp;custom&nbsp;template&nbsp;delimiters.</span></div><div>_<span class="delimiter">.</span>templateSettings<span class="delimiter">.</span>interpolate&nbsp;=&nbsp;/{{([\\s\\S]+?)}}/g;</div><div><span class="type">var</span>&nbsp;compiled&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">template</span>(<span class="string">\'hello&nbsp;{{&nbsp;user&nbsp;}}!\'</span>);</div><div><span class="name">compiled</span>({&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'mustache\'</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hello&nbsp;mustache!\'</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Use&nbsp;the&nbsp;`source`&nbsp;property&nbsp;to&nbsp;inline&nbsp;compiled&nbsp;templates&nbsp;for&nbsp;meaningful</span></div><div><span class="comment">//&nbsp;line&nbsp;numbers&nbsp;in&nbsp;error&nbsp;messages&nbsp;and&nbsp;stack&nbsp;traces.</span></div><div>fs<span class="delimiter method">.</span><span class="name">writeFileSync</span>(path<span class="delimiter method">.</span><span class="support">join</span>(<span class="support">process</span><span class="delimiter method">.</span><span class="name">cwd</span>()<span class="delimiter">,</span>&nbsp;<span class="string">\'jst.js\'</span>)<span class="delimiter">,</span>&nbsp;<span class="string">\'\\</span></div><div><span class="string">&nbsp;&nbsp;var&nbsp;JST&nbsp;=&nbsp;{\\</span></div><div><span class="string">&nbsp;&nbsp;&nbsp;&nbsp;"main":&nbsp;\'</span>&nbsp;+&nbsp;_<span class="delimiter method">.</span><span class="name">template</span>(mainText)<span class="delimiter">.</span><span class="support">source</span>&nbsp;+&nbsp;<span class="string">\'\\</span></div><div><span class="string">&nbsp;&nbsp;};\\</span></div><div><span class="string">\'</span>);</div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14770">source</a> <a href="https://www.npmjs.com/package/lodash.template">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.template([string=''], [options={}])",
        methodName: 'template',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the compiled template function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '699636846699451',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>string</code> <em>(string)</em>: The string to convert.</li><li><code>[radix=10]</code> <em>(number)</em>: The radix to interpret <code>value</code> by.</li>',
        category: 'String Methods',
        description:
            'Converts <code>string</code> to an integer of the specified radix. If <code>radix</code> is <code>undefined</code> or <code>0</code>, a <code>radix</code> of <code>10</code> is used unless <code>value</code> is a hexadecimal, in which case a <code>radix</code> of <code>16</code> is used.<br><br><strong>Note:</strong> This method aligns with the <a href="https://es5.github.io/#x15.1.2.2">ES5 implementation</a> of <code>parseInt</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">parseInt</span>(<span class="string">\'08\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;8</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">map</span>([<span class="string">\'6\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'08\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'10\'</span>]<span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>parseInt);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[6,&nbsp;8,&nbsp;10]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14477">source</a> <a href="https://www.npmjs.com/package/lodash.parseint">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.parseInt(string, [radix=10])',
        methodName: 'parseInt',
        related_methods: [],
        returns: '<em>(number)</em>: Returns the converted integer.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7040341979860831',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to inspect.</li><li><code>[target]</code> <em>(string)</em>: The string to search for.</li><li><code>[position=string.length]</code> <em>(number)</em>: The position to search up to.</li>",
        category: 'String Methods',
        description:
            'Checks if <code>string</code> ends with the given target string.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">endsWith</span>(<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">endsWith</span>(<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">endsWith</span>(<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14209">source</a> <a href="https://www.npmjs.com/package/lodash.endswith">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.endsWith([string=''], [target], [position=string.length])",
        methodName: 'endsWith',
        related_methods: [],
        returns:
            '<em>(boolean)</em>: Returns <code>true</code> if <code>string</code> ends with <code>target</code>, else <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '757653350800288',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to unescape.</li>",
        category: 'String Methods',
        description:
            'The inverse of <a href="#escape"><code>_.escape</code></a>; this method converts the HTML entities <code>&amp;amp;</code>, <code>&amp;lt;</code>, <code>&amp;gt;</code>, <code>&amp;quot;</code>, and <code>&amp;#39;</code> in <code>string</code> to their corresponding characters.<br><br><strong>Note:</strong> No other HTML entities are unescaped. To unescape additional HTML entities use a third-party library like <a href="https://mths.be/he"><em>he</em></a>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">unescape</span>(<span class="string">\'fred,&nbsp;barney,&nbsp;&amp;amp;&nbsp;pebbles\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'fred,&nbsp;barney,&nbsp;&amp;&nbsp;pebbles\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15149">source</a> <a href="https://www.npmjs.com/package/lodash.unescape">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.unescape([string=''])",
        methodName: 'unescape',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the unescaped string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7608455693511634',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to repeat.</li><li><code>[n=1]</code> <em>(number)</em>: The number of times to repeat the string.</li>",
        category: 'String Methods',
        description: 'Repeats the given string <code>n</code> times.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">repeat</span>(<span class="string">\'*\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'***\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">repeat</span>(<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'abcabc\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">repeat</span>(<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">0</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14508">source</a> <a href="https://www.npmjs.com/package/lodash.repeat">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.repeat([string=''], [n=1])",
        methodName: 'repeat',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the repeated string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7923403614295415',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to trim.</li><li><code>[chars=whitespace]</code> <em>(string)</em>: The characters to trim.</li>",
        category: 'String Methods',
        description:
            'Removes leading and trailing whitespace or specified characters from <code>string</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">trim</span>(<span class="string">\'&nbsp;&nbsp;abc&nbsp;&nbsp;\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'abc\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">trim</span>(<span class="string">\'-_-abc-_-\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'_-\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'abc\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">map</span>([<span class="string">\'&nbsp;&nbsp;foo&nbsp;&nbsp;\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'&nbsp;&nbsp;bar&nbsp;&nbsp;\'</span>]<span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>trim);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'foo\',&nbsp;\'bar\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14955">source</a> <a href="https://www.npmjs.com/package/lodash.trim">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.trim([string=''], [chars=whitespace])",
        methodName: 'trim',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the trimmed string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8065260505539383',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to pad.</li><li><code>[length=0]</code> <em>(number)</em>: The padding length.</li><li><code>[chars=' ']</code> <em>(string)</em>: The string used as padding.</li>",
        category: 'String Methods',
        description:
            "Pads <code>string</code> on the left side if it's shorter than <code>length</code>. Padding characters are truncated if they exceed <code>length</code>.",
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">padStart</span>(<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">6</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'&nbsp;&nbsp;&nbsp;abc\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">padStart</span>(<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">6</span><span class="delimiter">,</span>&nbsp;<span class="string">\'_-\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'_-_abc\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">padStart</span>(<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'abc\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14443">source</a> <a href="https://www.npmjs.com/package/lodash.padstart">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.padStart([string=''], [length=0], [chars=' '])",
        methodName: 'padStart',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the padded string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8145588367423802',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to truncate.</li><li><code>[options={}]</code> <em>(Object)</em>: The options object.</li><li><code>[options.length=30]</code> <em>(number)</em>: The maximum string length.</li><li><code>[options.omission='...']</code> <em>(string)</em>: The string to indicate text is omitted.</li><li><code>[options.separator]</code> <em>(RegExp|string)</em>: The separator pattern to truncate to.</li>",
        category: 'String Methods',
        description:
            'Truncates <code>string</code> if it\'s longer than the given maximum string length. The last characters of the truncated string are replaced with the omission string which defaults to "...".',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">truncate</span>(<span class="string">\'hi-diddly-ho&nbsp;there,&nbsp;neighborino\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hi-diddly-ho&nbsp;there,&nbsp;neighbo...\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">truncate</span>(<span class="string">\'hi-diddly-ho&nbsp;there,&nbsp;neighborino\'</span><span class="delimiter">,</span>&nbsp;{</div><div>&nbsp;&nbsp;<span class="string">\'length\'</span>:&nbsp;<span class="numeric">24</span><span class="delimiter">,</span></div><div>&nbsp;&nbsp;<span class="string">\'separator\'</span>:&nbsp;<span class="string">\'&nbsp;\'</span></div><div>});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hi-diddly-ho&nbsp;there,...\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">truncate</span>(<span class="string">\'hi-diddly-ho&nbsp;there,&nbsp;neighborino\'</span><span class="delimiter">,</span>&nbsp;{</div><div>&nbsp;&nbsp;<span class="string">\'length\'</span>:&nbsp;<span class="numeric">24</span><span class="delimiter">,</span></div><div>&nbsp;&nbsp;<span class="string">\'separator\'</span>:<span class="string">&nbsp;/,?&nbsp;+/</span></div><div>});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hi-diddly-ho&nbsp;there...\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">truncate</span>(<span class="string">\'hi-diddly-ho&nbsp;there,&nbsp;neighborino\'</span><span class="delimiter">,</span>&nbsp;{</div><div>&nbsp;&nbsp;<span class="string">\'omission\'</span>:&nbsp;<span class="string">\'&nbsp;[...]\'</span></div><div>});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'hi-diddly-ho&nbsp;there,&nbsp;neig&nbsp;[...]\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15074">source</a> <a href="https://www.npmjs.com/package/lodash.truncate">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.truncate([string=''], [options={}])",
        methodName: 'truncate',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the truncated string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8386916156060058',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to convert.</li>",
        category: 'String Methods',
        description:
            'Converts the first character of <code>string</code> to upper case.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">upperFirst</span>(<span class="string">\'fred\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'Fred\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">upperFirst</span>(<span class="string">\'FRED\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'FRED\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15197">source</a> <a href="https://www.npmjs.com/package/lodash.upperfirst">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.upperFirst([string=''])",
        methodName: 'upperFirst',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the converted string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8621294731591681',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to convert.</li>",
        category: 'String Methods',
        description:
            'Converts <code>string</code> to <a href="https://en.wikipedia.org/wiki/CamelCase">camel case</a>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">camelCase</span>(<span class="string">\'Foo&nbsp;Bar\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'fooBar\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">camelCase</span>(<span class="string">\'--foo-bar--\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'fooBar\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">camelCase</span>(<span class="string">\'__FOO_BAR__\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'fooBar\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14139">source</a> <a href="https://www.npmjs.com/package/lodash.camelcase">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.camelCase([string=''])",
        methodName: 'camelCase',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the camel cased string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9254977282103641',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to convert.</li>",
        category: 'String Methods',
        description:
            'Converts the first character of <code>string</code> to lower case.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">lowerFirst</span>(<span class="string">\'Fred\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'fred\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">lowerFirst</span>(<span class="string">\'FRED\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'fRED\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14346">source</a> <a href="https://www.npmjs.com/package/lodash.lowerfirst">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.lowerFirst([string=''])",
        methodName: 'lowerFirst',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the converted string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9559950319585848',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to deburr.</li>",
        category: 'String Methods',
        description:
            'Deburrs <code>string</code> by converting <a href="https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table">Latin-1 Supplement</a> and <a href="https://en.wikipedia.org/wiki/Latin_Extended-A">Latin Extended-A</a> letters to basic Latin letters and removing <a href="https://en.wikipedia.org/wiki/Combining_Diacritical_Marks">combining diacritical marks</a>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">deburr</span>(<span class="string">\'d??j??&nbsp;vu\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'deja&nbsp;vu\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14181">source</a> <a href="https://www.npmjs.com/package/lodash.deburr">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.deburr([string=''])",
        methodName: 'deburr',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the deburred string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9773793048878925',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to convert.</li>",
        category: 'String Methods',
        description:
            'Converts <code>string</code>, as space separated words, to lower case.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">lowerCase</span>(<span class="string">\'--Foo-Bar--\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'foo&nbsp;bar\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">lowerCase</span>(<span class="string">\'fooBar\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'foo&nbsp;bar\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">lowerCase</span>(<span class="string">\'__FOO_BAR__\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'foo&nbsp;bar\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L14325">source</a> <a href="https://www.npmjs.com/package/lodash.lowercase">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.lowerCase([string=''])",
        methodName: 'lowerCase',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the lower cased string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9997566981939627',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[string='']</code> <em>(string)</em>: The string to convert.</li>",
        category: 'String Methods',
        description:
            'Converts <code>string</code>, as space separated words, to upper case.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">upperCase</span>(<span class="string">\'--foo-bar\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'FOO&nbsp;BAR\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">upperCase</span>(<span class="string">\'fooBar\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'FOO&nbsp;BAR\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">upperCase</span>(<span class="string">\'__foo_bar__\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'FOO&nbsp;BAR\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15176">source</a> <a href="https://www.npmjs.com/package/lodash.uppercase">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.upperCase([string=''])",
        methodName: 'upperCase',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the upper cased string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '03953910288334895',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments: '<em>(string)</em>: Returns the empty string.',
        category: 'Util Methods',
        description: 'This method returns an empty string.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">times</span>(<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>stubString);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'\',&nbsp;\'\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16071">source</a> <a href="https://www.npmjs.com/package/lodash.stubstring">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.stubString()',
        methodName: 'stubString',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the empty string.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '050330006782021',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments: '<em>(boolean)</em>: Returns <code>false</code>.',
        category: 'Util Methods',
        description: 'This method returns <code>false</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">times</span>(<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>stubFalse);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[false,&nbsp;false]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16032">source</a> <a href="https://www.npmjs.com/package/lodash.stubfalse">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.stubFalse()',
        methodName: 'stubFalse',
        related_methods: [],
        returns: '<em>(boolean)</em>: Returns <code>false</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '0889669913488581',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[n=0]</code> <em>(number)</em>: The index of the argument to return.</li>',
        category: 'Util Methods',
        description:
            'Creates a function that gets the argument at index <code>n</code>. If <code>n</code> is negative, the nth argument from the end is returned.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;func&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">nthArg</span>(<span class="numeric">1</span>);</div><div><span class="name">func</span>(<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'d\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'b\'</span></div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;func&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">nthArg</span>(-<span class="numeric">2</span>);</div><div><span class="name">func</span>(<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'d\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'c\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15784">source</a> <a href="https://www.npmjs.com/package/lodash.ntharg">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.nthArg([n=0])',
        methodName: 'nthArg',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new pass-thru function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '14173153768614263',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[funcs]</code> <em>(...(Function|Function[]))</em>: The functions to invoke.</li>',
        category: 'Util Methods',
        description:
            'This method is like <a href="#flow"><code>_.flow</code></a> except that it creates a function that invokes the given functions from right to left.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">square</span>(n)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;n&nbsp;*&nbsp;n;</div><div>}</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;addSquare&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">flowRight</span>([square<span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>add]);</div><div><span class="name">addSquare</span>(<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;9</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15467">source</a> <a href="https://www.npmjs.com/package/lodash.flowright">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.flowRight([funcs])',
        methodName: 'flowRight',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new composite function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '14927327212434102',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[predicates=[_.identity]]</code> <em>(...(Function|Function[]))</em>: The predicates to check.</li>',
        category: 'Util Methods',
        description:
            'Creates a function that checks if <strong>all</strong> of the <code>predicates</code> return truthy when invoked with the arguments it receives.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;func&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">overEvery</span>([<span class="support">Boolean</span><span class="delimiter">,</span>&nbsp;isFinite]);</div><div>&nbsp;</div><div><span class="name">func</span>(<span class="string">\'1\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div><span class="name">func</span>(null);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div><span class="name">func</span>(NaN);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15835">source</a> <a href="https://www.npmjs.com/package/lodash.overevery">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.overEvery([predicates=[_.identity]])',
        methodName: 'overEvery',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '1697035023269591',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[iteratees=[_.identity]]</code> <em>(...(Function|Function[]))</em>: The iteratees to invoke.</li>',
        category: 'Util Methods',
        description:
            'Creates a function that invokes <code>iteratees</code> with the arguments it receives and returns their results.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;func&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">over</span>([<span class="support">Math</span><span class="delimiter">.</span>max<span class="delimiter">,</span>&nbsp;<span class="support">Math</span><span class="delimiter">.</span>min]);</div><div>&nbsp;</div><div><span class="name">func</span>(<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[4,&nbsp;1]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15809">source</a> <a href="https://www.npmjs.com/package/lodash.over">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.over([iteratees=[_.identity]])',
        methodName: 'over',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '1808833714483843',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">times</span>(<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>noop);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[undefined,&nbsp;undefined]</span></div></pre>',
        category: 'Util Methods',
        description: 'This method returns <code>undefined</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">times</span>(<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>noop);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[undefined,&nbsp;undefined]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15760">source</a> <a href="https://www.npmjs.com/package/lodash.noop">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.noop()',
        methodName: 'noop',
        related_methods: [],
        returns: '2.3.0',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '23579426454374908',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to query.</li><li><code>[args]</code> <em>(...*)</em>: The arguments to invoke the method with.</li>',
        category: 'Util Methods',
        description:
            'The opposite of <a href="#method"><code>_.method</code></a>; this method creates a function that invokes the method at a given path of <code>object</code>. Any additional arguments are provided to the invoked method.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">times</span>(<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>constant)<span class="delimiter">,</span></div><div>&nbsp;&nbsp;&nbsp;&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;array<span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;array<span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>:&nbsp;array&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">map</span>([<span class="string">\'a[2]\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c[0]\'</span>]<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">methodOf</span>(object));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;0]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">map</span>([[<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'2\'</span>]<span class="delimiter">,</span>&nbsp;[<span class="string">\'c\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'0\'</span>]]<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">methodOf</span>(object));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;0]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15650">source</a> <a href="https://www.npmjs.com/package/lodash.methodof">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.methodOf(object, [args])',
        methodName: 'methodOf',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new invoker function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '2588851724310727',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[context=root]</code> <em>(Object)</em>: The context object.</li>',
        category: 'Util Methods',
        description:
            'Create a new pristine <code>lodash</code> function using the <code>context</code> object.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">mixin</span>({&nbsp;<span class="string">\'foo\'</span>:&nbsp;_<span class="delimiter method">.</span><span class="name">constant</span>(<span class="string">\'foo\'</span>)&nbsp;});</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;lodash&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">runInContext</span>();</div><div>lodash<span class="delimiter method">.</span><span class="name">mixin</span>({&nbsp;<span class="string">\'bar\'</span>:&nbsp;lodash<span class="delimiter method">.</span><span class="name">constant</span>(<span class="string">\'bar\'</span>)&nbsp;});</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">isFunction</span>(_<span class="delimiter">.</span>foo);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>_<span class="delimiter method">.</span><span class="name">isFunction</span>(_<span class="delimiter">.</span>bar);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>&nbsp;</div><div>lodash<span class="delimiter method">.</span><span class="name">isFunction</span>(lodash<span class="delimiter">.</span>foo);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div><div>lodash<span class="delimiter method">.</span><span class="name">isFunction</span>(lodash<span class="delimiter">.</span>bar);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Create&nbsp;a&nbsp;suped-up&nbsp;`defer`&nbsp;in&nbsp;Node.js.</span></div><div><span class="type">var</span>&nbsp;defer&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">runInContext</span>({&nbsp;<span class="string">\'setTimeout\'</span>:&nbsp;setImmediate&nbsp;})<span class="delimiter">.</span><span class="support">defer</span>;</div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L1406">source</a> <a href="https://www.npmjs.com/package/lodash.runincontext">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.runInContext([context=root])',
        methodName: 'runInContext',
        related_methods: [],
        returns:
            '<em>(Function)</em>: Returns a new <code>lodash</code> function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '26590304935543274',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>func</code> <em>(Function)</em>: The function to attempt.</li><li><code>[args]</code> <em>(...*)</em>: The arguments to invoke <code>func</code> with.</li>',
        category: 'Util Methods',
        description:
            "Attempts to invoke <code>func</code>, returning either the result or the caught error object. Any additional arguments are provided to <code>func</code> when it's invoked.",
        example:
            '<pre><div><span class="comment">//&nbsp;Avoid&nbsp;throwing&nbsp;errors&nbsp;for&nbsp;invalid&nbsp;selectors.</span></div><div><span class="type">var</span>&nbsp;elements&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">attempt</span>(<span class="type">function</span>(selector)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;<span class="support">document</span><span class="delimiter method">.</span><span class="name">querySelectorAll</span>(selector);</div><div>}<span class="delimiter">,</span>&nbsp;<span class="string">\'&gt;_&gt;\'</span>);</div><div>&nbsp;</div><div>if&nbsp;(_<span class="delimiter method">.</span><span class="name">isError</span>(elements))&nbsp;{</div><div>&nbsp;&nbsp;elements&nbsp;=&nbsp;[];</div><div>}</div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15252">source</a> <a href="https://www.npmjs.com/package/lodash.attempt">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.attempt(func, [args])',
        methodName: 'attempt',
        related_methods: [],
        returns:
            '<em>(*)</em>: Returns the <code>func</code> result or error object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '30919731554464297',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments: '<li><code>value</code> <em>(*)</em>: Any value.</li>',
        category: 'Util Methods',
        description: 'This method returns the first argument it receives.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;};</div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(_<span class="delimiter method">.</span><span class="name">identity</span>(object)&nbsp;===&nbsp;object);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15485">source</a> <a href="https://www.npmjs.com/package/lodash.identity">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.identity(value)',
        methodName: 'identity',
        related_methods: [],
        returns: '<em>(*)</em>: Returns <code>value</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '3738959320118459',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[start=0]</code> <em>(number)</em>: The start of the range.</li><li><code>end</code> <em>(number)</em>: The end of the range.</li><li><code>[step=1]</code> <em>(number)</em>: The value to increment or decrement by.</li>',
        category: 'Util Methods',
        description:
            'This method is like <a href="#range"><code>_.range</code></a> except that it populates values in descending order.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">rangeRight</span>(<span class="numeric">4</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[3,&nbsp;2,&nbsp;1,&nbsp;0]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">rangeRight</span>(-<span class="numeric">4</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[-3,&nbsp;-2,&nbsp;-1,&nbsp;0]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">rangeRight</span>(<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[4,&nbsp;3,&nbsp;2,&nbsp;1]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">rangeRight</span>(<span class="numeric">0</span><span class="delimiter">,</span>&nbsp;<span class="numeric">20</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[15,&nbsp;10,&nbsp;5,&nbsp;0]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">rangeRight</span>(<span class="numeric">0</span><span class="delimiter">,</span>&nbsp;-<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;-<span class="numeric">1</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[-3,&nbsp;-2,&nbsp;-1,&nbsp;0]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">rangeRight</span>(<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="numeric">0</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;1,&nbsp;1]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">rangeRight</span>(<span class="numeric">0</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15995">source</a> <a href="https://www.npmjs.com/package/lodash.rangeright">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.rangeRight([start=0], end, [step=1])',
        methodName: 'rangeRight',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the range of numbers.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '41755966655962',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments: '<em>(boolean)</em>: Returns <code>true</code>.',
        category: 'Util Methods',
        description: 'This method returns <code>true</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">times</span>(<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>stubTrue);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[true,&nbsp;true]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16088">source</a> <a href="https://www.npmjs.com/package/lodash.stubtrue">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.stubTrue()',
        methodName: 'stubTrue',
        related_methods: [],
        returns: '<em>(boolean)</em>: Returns <code>true</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '47359563190101345',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to return from the new function.</li>',
        category: 'Util Methods',
        description: 'Creates a function that returns <code>value</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">times</span>(<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">constant</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}));</div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(objects);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'a\':&nbsp;1&nbsp;},&nbsp;{&nbsp;\'a\':&nbsp;1&nbsp;}]</span></div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(objects[<span class="numeric">0</span>]&nbsp;===&nbsp;objects[<span class="numeric">1</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15392">source</a> <a href="https://www.npmjs.com/package/lodash.constant">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.constant(value)',
        methodName: 'constant',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new constant function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '4873693313979049',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[predicates=[_.identity]]</code> <em>(...(Function|Function[]))</em>: The predicates to check.</li>',
        category: 'Util Methods',
        description:
            'Creates a function that checks if <strong>any</strong> of the <code>predicates</code> return truthy when invoked with the arguments it receives.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;func&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">overSome</span>([<span class="support">Boolean</span><span class="delimiter">,</span>&nbsp;isFinite]);</div><div>&nbsp;</div><div><span class="name">func</span>(<span class="string">\'1\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div><span class="name">func</span>(null);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;true</span></div><div>&nbsp;</div><div><span class="name">func</span>(NaN);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15861">source</a> <a href="https://www.npmjs.com/package/lodash.oversome">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.overSome([predicates=[_.identity]])',
        methodName: 'overSome',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '527177078614851',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>path</code> <em>(Array|string)</em>: The path of the property to get.</li><li><code>srcValue</code> <em>(*)</em>: The value to match.</li>',
        category: 'Util Methods',
        description:
            'Creates a function that performs a partial deep comparison between the value at <code>path</code> of a given object to <code>srcValue</code>, returning <code>true</code> if the object value is equivalent, else <code>false</code>.<br><br><strong>Note:</strong> Partial comparisons will match empty array and empty object <code>srcValue</code> values against any array or object value, respectively. See <a href="#isEqual"><code>_.isEqual</code></a> for a list of supported value comparisons.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">6</span>&nbsp;}</div><div>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="support">find</span>(objects<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">matchesProperty</span>(<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span>));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;{&nbsp;\'a\':&nbsp;4,&nbsp;\'b\':&nbsp;5,&nbsp;\'c\':&nbsp;6&nbsp;}</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15593">source</a> <a href="https://www.npmjs.com/package/lodash.matchesproperty">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.matchesProperty(path, srcValue)',
        methodName: 'matchesProperty',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new spec function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5544673674790291',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            "<li><code>[prefix='']</code> <em>(string)</em>: The value to prefix the ID with.</li>",
        category: 'Util Methods',
        description:
            'Generates a unique ID. If <code>prefix</code> is given, the ID is appended to it.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">uniqueId</span>(<span class="string">\'contact_\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'contact_104\'</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">uniqueId</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'105\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16170">source</a> <a href="https://www.npmjs.com/package/lodash.uniqueid">npm package</a>',
        lodash_version: '4.17.15',
        method: "_.uniqueId([prefix=''])",
        methodName: 'uniqueId',
        related_methods: [],
        returns: '<em>(string)</em>: Returns the unique ID.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5671959092842456',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>n</code> <em>(number)</em>: The number of times to invoke <code>iteratee</code>.</li><li><code>[iteratee=_.identity]</code> <em>(Function)</em>: The function invoked per iteration.</li>',
        category: 'Util Methods',
        description:
            'Invokes the iteratee <code>n</code> times, returning an array of the results of each invocation. The iteratee is invoked with one argument; <em>(index)</em>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">times</span>(<span class="numeric">3</span><span class="delimiter">,</span>&nbsp;<span class="support">String</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'0\',&nbsp;\'1\',&nbsp;\'2\']</span></div><div>&nbsp;</div><div>&nbsp;_<span class="delimiter method">.</span><span class="name">times</span>(<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">constant</span>(<span class="numeric">0</span>));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[0,&nbsp;0,&nbsp;0,&nbsp;0]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16111">source</a> <a href="https://www.npmjs.com/package/lodash.times">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.times(n, [iteratee=_.identity])',
        methodName: 'times',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the array of results.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '5941148835520936',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>pairs</code> <em>(Array)</em>: The predicate-function pairs.</li>',
        category: 'Util Methods',
        description:
            'Creates a function that iterates over <code>pairs</code> and invokes the corresponding function of the first predicate to return truthy. The predicate-function pairs are invoked with the <code>this</code> binding and arguments of the created function.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;func&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">cond</span>([</div><div>&nbsp;&nbsp;[_<span class="delimiter method">.</span><span class="name">matches</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;})<span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_<span class="delimiter method">.</span><span class="name">constant</span>(<span class="string">\'matches&nbsp;A\'</span>)]<span class="delimiter">,</span></div><div>&nbsp;&nbsp;[_<span class="delimiter method">.</span><span class="name">conforms</span>({&nbsp;<span class="string">\'b\'</span>:&nbsp;_<span class="delimiter">.</span>isNumber&nbsp;})<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">constant</span>(<span class="string">\'matches&nbsp;B\'</span>)]<span class="delimiter">,</span></div><div>&nbsp;&nbsp;[_<span class="delimiter">.</span>stubTrue<span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_<span class="delimiter method">.</span><span class="name">constant</span>(<span class="string">\'no&nbsp;match\'</span>)]</div><div>]);</div><div>&nbsp;</div><div><span class="name">func</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'matches&nbsp;A\'</span></div><div>&nbsp;</div><div><span class="name">func</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">0</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'matches&nbsp;B\'</span></div><div>&nbsp;</div><div><span class="name">func</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="string">\'1\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="string">\'2\'</span>&nbsp;});</div><div><span class="comment">//&nbsp;=&gt;&nbsp;\'no&nbsp;match\'</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15323">source</a> <a href="https://www.npmjs.com/package/lodash.cond">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.cond(pairs)',
        methodName: 'cond',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new composite function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6301935561722132',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[funcs]</code> <em>(...(Function|Function[]))</em>: The functions to invoke.</li>',
        category: 'Util Methods',
        description:
            'Creates a function that returns the result of invoking the given functions with the <code>this</code> binding of the created function, where each successive invocation is supplied the return value of the previous.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">square</span>(n)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;n&nbsp;*&nbsp;n;</div><div>}</div><div>&nbsp;</div><div><span class="type">var</span>&nbsp;addSquare&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">flow</span>([_<span class="delimiter">.</span>add<span class="delimiter">,</span>&nbsp;square]);</div><div><span class="name">addSquare</span>(<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;9</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15444">source</a> <a href="https://www.npmjs.com/package/lodash.flow">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.flow([funcs])',
        methodName: 'flow',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new composite function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6687365682942576',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>path</code> <em>(Array|string)</em>: The path of the property to get.</li>',
        category: 'Util Methods',
        description:
            'Creates a function that returns the value at <code>path</code> of a given object.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;{&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;{&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}&nbsp;}</div><div>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">map</span>(objects<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">property</span>(<span class="string">\'a.b\'</span>));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;1]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">map</span>(_<span class="delimiter method">.</span><span class="name">sortBy</span>(objects<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">property</span>([<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>]))<span class="delimiter">,</span>&nbsp;<span class="string">\'a.b\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15885">source</a> <a href="https://www.npmjs.com/package/lodash.property">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.property(path)',
        methodName: 'property',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new accessor function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6835935199385444',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<em>(Function)</em>: Returns the <code>lodash</code> function.',
        category: 'Util Methods',
        description:
            'Reverts the <code>_</code> variable to its previous value and returns a reference to the <code>lodash</code> function.',
        example:
            '<pre><span class="type">var</span>&nbsp;lodash&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">noConflict</span>();</pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15741">source</a> <a href="https://www.npmjs.com/package/lodash.noconflict">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.noConflict()',
        methodName: 'noConflict',
        related_methods: [],
        returns:
            '<em>(Function)</em>: Returns the <code>lodash</code> function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '6922242581966669',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments: '<em>(Array)</em>: Returns the new empty array.',
        category: 'Util Methods',
        description: 'This method returns a new empty array.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;arrays&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">times</span>(<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>stubArray);</div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(arrays);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[[],&nbsp;[]]</span></div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(arrays[<span class="numeric">0</span>]&nbsp;===&nbsp;arrays[<span class="numeric">1</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16015">source</a> <a href="https://www.npmjs.com/package/lodash.stubarray">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.stubArray()',
        methodName: 'stubArray',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new empty array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7001699178238078',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[func=_.identity]</code> <em>(*)</em>: The value to convert to a callback.</li>',
        category: 'Util Methods',
        description:
            'Creates a function that invokes <code>func</code> with the arguments of the created function. If <code>func</code> is a property name, the created function returns the property value for a given element. If <code>func</code> is an array or object, the created function returns <code>true</code> for elements that contain the equivalent source properties, otherwise it returns <code>false</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;users&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">36</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'fred\'</span><span class="delimiter">,</span>&nbsp;&nbsp;&nbsp;<span class="string">\'age\'</span>:&nbsp;<span class="numeric">40</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;false&nbsp;}</div><div>];</div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matches`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">filter</span>(users<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">iteratee</span>({&nbsp;<span class="string">\'user\'</span>:&nbsp;<span class="string">\'barney\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'active\'</span>:&nbsp;true&nbsp;}));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'user\':&nbsp;\'barney\',&nbsp;\'age\':&nbsp;36,&nbsp;\'active\':&nbsp;true&nbsp;}]</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.matchesProperty`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">filter</span>(users<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">iteratee</span>([<span class="string">\'user\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'fred\'</span>]));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'user\':&nbsp;\'fred\',&nbsp;\'age\':&nbsp;40&nbsp;}]</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;The&nbsp;`_.property`&nbsp;iteratee&nbsp;shorthand.</span></div><div>_<span class="delimiter method">.</span><span class="name">map</span>(users<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">iteratee</span>(<span class="string">\'user\'</span>));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'barney\',&nbsp;\'fred\']</span></div><div>&nbsp;</div><div><span class="comment">//&nbsp;Create&nbsp;custom&nbsp;iteratee&nbsp;shorthands.</span></div><div>_<span class="delimiter">.</span>iteratee&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">wrap</span>(_<span class="delimiter">.</span>iteratee<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(iteratee<span class="delimiter">,</span>&nbsp;func)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;!_<span class="delimiter method">.</span><span class="name">isRegExp</span>(func)&nbsp;?&nbsp;<span class="name">iteratee</span>(func)&nbsp;:&nbsp;<span class="type">function</span>(string)&nbsp;{</div><div>&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;func<span class="delimiter method">.</span><span class="support">test</span>(string);</div><div>&nbsp;&nbsp;};</div><div>});</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">filter</span>([<span class="string">\'abc\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'def\'</span>]<span class="delimiter">,</span><span class="string">&nbsp;/ef/</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'def\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15531">source</a> <a href="https://www.npmjs.com/package/lodash.iteratee">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.iteratee([func=_.identity])',
        methodName: 'iteratee',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the callback.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7011422698600649',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>source</code> <em>(Object)</em>: The object of property predicates to conform to.</li>',
        category: 'Util Methods',
        description:
            'Creates a function that invokes the predicate properties of <code>source</code> with the corresponding property values of a given object, returning <code>true</code> if all predicates return truthy, else <code>false</code>.<br><br><strong>Note:</strong> The created function is equivalent to <a href="#conformsTo"><code>_.conformsTo</code></a> with <code>source</code> partially applied.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">1</span>&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span>&nbsp;}</div><div>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">filter</span>(objects<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">conforms</span>({&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="type">function</span>(n)&nbsp;{&nbsp;return&nbsp;n&nbsp;&gt;&nbsp;<span class="numeric">1</span>;&nbsp;}&nbsp;}));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'a\':&nbsp;1,&nbsp;\'b\':&nbsp;2&nbsp;}]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15369">source</a> <a href="https://www.npmjs.com/package/lodash.conforms">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.conforms(source)',
        methodName: 'conforms',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new spec function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '7613073404573341',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>path</code> <em>(Array|string)</em>: The path of the method to invoke.</li><li><code>[args]</code> <em>(...*)</em>: The arguments to invoke the method with.</li>',
        category: 'Util Methods',
        description:
            'Creates a function that invokes the method at <code>path</code> of a given object. Any additional arguments are provided to the invoked method.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;{&nbsp;<span class="string">\'b\'</span>:&nbsp;_<span class="delimiter method">.</span><span class="name">constant</span>(<span class="numeric">2</span>)&nbsp;}&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;{&nbsp;<span class="string">\'b\'</span>:&nbsp;_<span class="delimiter method">.</span><span class="name">constant</span>(<span class="numeric">1</span>)&nbsp;}&nbsp;}</div><div>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">map</span>(objects<span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span><span class="support">method</span>(<span class="string">\'a.b\'</span>));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;1]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">map</span>(objects<span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span><span class="support">method</span>([<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>]));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;1]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15621">source</a> <a href="https://www.npmjs.com/package/lodash.method">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.method(path, [args])',
        methodName: 'method',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new invoker function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '805274207906232',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to query.</li>',
        category: 'Util Methods',
        description:
            'The opposite of <a href="#property"><code>_.property</code></a>; this method creates a function that returns the value at a given path of <code>object</code>.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;array&nbsp;=&nbsp;[<span class="numeric">0</span><span class="delimiter">,</span>&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">2</span>]<span class="delimiter">,</span></div><div>&nbsp;&nbsp;&nbsp;&nbsp;object&nbsp;=&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;array<span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;array<span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>:&nbsp;array&nbsp;};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">map</span>([<span class="string">\'a[2]\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c[0]\'</span>]<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">propertyOf</span>(object));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;0]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">map</span>([[<span class="string">\'a\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'2\'</span>]<span class="delimiter">,</span>&nbsp;[<span class="string">\'c\'</span><span class="delimiter">,</span>&nbsp;<span class="string">\'0\'</span>]]<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">propertyOf</span>(object));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[2,&nbsp;0]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15910">source</a> <a href="https://www.npmjs.com/package/lodash.propertyof">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.propertyOf(object)',
        methodName: 'propertyOf',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new accessor function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8319524134441714',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[start=0]</code> <em>(number)</em>: The start of the range.</li><li><code>end</code> <em>(number)</em>: The end of the range.</li><li><code>[step=1]</code> <em>(number)</em>: The value to increment or decrement by.</li>',
        category: 'Util Methods',
        description:
            "Creates an array of numbers <em>(positive and/or negative)</em> progressing from <code>start</code> up to, but not including, <code>end</code>. A step of <code>-1</code> is used if a negative <code>start</code> is specified without an <code>end</code> or <code>step</code>. If <code>end</code> is not specified, it's set to <code>start</code> with <code>start</code> then set to <code>0</code>.<br><br><strong>Note:</strong> JavaScript follows the IEEE-754 standard for resolving floating-point values which can produce unexpected results.",
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">range</span>(<span class="numeric">4</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[0,&nbsp;1,&nbsp;2,&nbsp;3]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">range</span>(-<span class="numeric">4</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[0,&nbsp;-1,&nbsp;-2,&nbsp;-3]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">range</span>(<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;2,&nbsp;3,&nbsp;4]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">range</span>(<span class="numeric">0</span><span class="delimiter">,</span>&nbsp;<span class="numeric">20</span><span class="delimiter">,</span>&nbsp;<span class="numeric">5</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[0,&nbsp;5,&nbsp;10,&nbsp;15]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">range</span>(<span class="numeric">0</span><span class="delimiter">,</span>&nbsp;-<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;-<span class="numeric">1</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[0,&nbsp;-1,&nbsp;-2,&nbsp;-3]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">range</span>(<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="numeric">0</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[1,&nbsp;1,&nbsp;1]</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">range</span>(<span class="numeric">0</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15957">source</a> <a href="https://www.npmjs.com/package/lodash.range">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.range([start=0], end, [step=1])',
        methodName: 'range',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the range of numbers.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8360537980800129',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>[object=lodash]</code> <em>(Function|Object)</em>: The destination object.</li><li><code>source</code> <em>(Object)</em>: The object of functions to add.</li><li><code>[options={}]</code> <em>(Object)</em>: The options object.</li><li><code>[options.chain=true]</code> <em>(boolean)</em>: Specify whether mixins are chainable.</li>',
        category: 'Util Methods',
        description:
            'Adds all own enumerable string keyed function properties of a source object to the destination object. If <code>object</code> is a function, then methods are added to its prototype as well.<br><br><strong>Note:</strong> Use <a href="#runInContext"><code>_.runInContext</code></a> to create a pristine <code>lodash</code> function to avoid conflicts caused by modifying the original.',
        example:
            '<pre><div><span class="type">function</span>&nbsp;<span class="name">vowels</span>(string)&nbsp;{</div><div>&nbsp;&nbsp;return&nbsp;_<span class="delimiter method">.</span><span class="name">filter</span>(string<span class="delimiter">,</span>&nbsp;<span class="type">function</span>(v)&nbsp;{</div><div>&nbsp;&nbsp;&nbsp;&nbsp;return<span class="string">&nbsp;/[aeiou]/i</span><span class="delimiter method">.</span><span class="support">test</span>(v);</div><div>&nbsp;&nbsp;});</div><div>}</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">mixin</span>({&nbsp;<span class="string">\'vowels\'</span>:&nbsp;vowels&nbsp;});</div><div>_<span class="delimiter method">.</span><span class="name">vowels</span>(<span class="string">\'fred\'</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'e\']</span></div><div>&nbsp;</div><div><span class="name">_</span>(<span class="string">\'fred\'</span>)<span class="delimiter method">.</span><span class="name">vowels</span>()<span class="delimiter">.</span><span class="support">value</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'e\']</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">mixin</span>({&nbsp;<span class="string">\'vowels\'</span>:&nbsp;vowels&nbsp;}<span class="delimiter">,</span>&nbsp;{&nbsp;<span class="string">\'chain\'</span>:&nbsp;false&nbsp;});</div><div><span class="name">_</span>(<span class="string">\'fred\'</span>)<span class="delimiter method">.</span><span class="name">vowels</span>();</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[\'e\']</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15692">source</a> <a href="https://www.npmjs.com/package/lodash.mixin">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.mixin([object=lodash], source, [options={}])',
        methodName: 'mixin',
        related_methods: [],
        returns: '<em>(*)</em>: Returns <code>object</code>.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '8522395691972984',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments: '<em>(Object)</em>: Returns the new empty object.',
        category: 'Util Methods',
        description: 'This method returns a new empty object.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;_<span class="delimiter method">.</span><span class="name">times</span>(<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;_<span class="delimiter">.</span>stubObject);</div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(objects);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{},&nbsp;{}]</span></div><div>&nbsp;</div><div><span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(objects[<span class="numeric">0</span>]&nbsp;===&nbsp;objects[<span class="numeric">1</span>]);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;false</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16054">source</a> <a href="https://www.npmjs.com/package/lodash.stubobject">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.stubObject()',
        methodName: 'stubObject',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns the new empty object.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '887499184096982',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to convert.</li>',
        category: 'Util Methods',
        description: 'Converts <code>value</code> to a property path array.',
        example:
            "<pre><div>_<span class=\"delimiter method\">.</span><span class=\"name\">toPath</span>(<span class=\"string\">'a.b.c'</span>);</div><div><span class=\"comment\">//&nbsp;=&gt;&nbsp;['a',&nbsp;'b',&nbsp;'c']</span></div><div>&nbsp;</div><div>_<span class=\"delimiter method\">.</span><span class=\"name\">toPath</span>(<span class=\"string\">'a[0].b.c'</span>);</div><div><span class=\"comment\">//&nbsp;=&gt;&nbsp;['a',&nbsp;'0',&nbsp;'b',&nbsp;'c']</span></div></pre>",
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L16146">source</a> <a href="https://www.npmjs.com/package/lodash.topath">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.toPath(value)',
        methodName: 'toPath',
        related_methods: [],
        returns: '<em>(Array)</em>: Returns the new property path array.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9115662879611189',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>source</code> <em>(Object)</em>: The object of property values to match.</li>',
        category: 'Util Methods',
        description:
            'Creates a function that performs a partial deep comparison between a given object and <code>source</code>, returning <code>true</code> if the given object has equivalent property values, else <code>false</code>.<br><br><strong>Note:</strong> The created function is equivalent to <a href="#isMatch"><code>_.isMatch</code></a> with <code>source</code> partially applied.<br><br>Partial comparisons will match empty array and empty object <code>source</code> values against any array or object value, respectively. See <a href="#isEqual"><code>_.isEqual</code></a> for a list of supported value comparisons.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;objects&nbsp;=&nbsp;[</div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">2</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">3</span>&nbsp;}<span class="delimiter">,</span></div><div>&nbsp;&nbsp;{&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="string">\'b\'</span>:&nbsp;<span class="numeric">5</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">6</span>&nbsp;}</div><div>];</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">filter</span>(objects<span class="delimiter">,</span>&nbsp;_<span class="delimiter method">.</span><span class="name">matches</span>({&nbsp;<span class="string">\'a\'</span>:&nbsp;<span class="numeric">4</span><span class="delimiter">,</span>&nbsp;<span class="string">\'c\'</span>:&nbsp;<span class="numeric">6</span>&nbsp;}));</div><div><span class="comment">//&nbsp;=&gt;&nbsp;[{&nbsp;\'a\':&nbsp;4,&nbsp;\'b\':&nbsp;5,&nbsp;\'c\':&nbsp;6&nbsp;}]</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15563">source</a> <a href="https://www.npmjs.com/package/lodash.matches">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.matches(source)',
        methodName: 'matches',
        related_methods: [],
        returns: '<em>(Function)</em>: Returns the new spec function.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9212838642223257',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>value</code> <em>(*)</em>: The value to check.</li><li><code>defaultValue</code> <em>(*)</em>: The default value.</li>',
        category: 'Util Methods',
        description:
            'Checks <code>value</code> to determine whether a default value should be returned in its place. The <code>defaultValue</code> is returned if <code>value</code> is <code>NaN</code>, <code>null</code>, or <code>undefined</code>.',
        example:
            '<pre><div>_<span class="delimiter method">.</span><span class="name">defaultTo</span>(<span class="numeric">1</span><span class="delimiter">,</span>&nbsp;<span class="numeric">10</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;1</span></div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">defaultTo</span>(undefined<span class="delimiter">,</span>&nbsp;<span class="numeric">10</span>);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;10</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15418">source</a> <a href="https://www.npmjs.com/package/lodash.defaultto">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.defaultTo(value, defaultValue)',
        methodName: 'defaultTo',
        related_methods: [],
        returns: '<em>(*)</em>: Returns the resolved value.',
        search_helpers: []
    },
    {
        _createdAt: '2021-10-07T16:14:31Z',
        _id: '9688927388567351',
        _rev: 'Sa9dY1lVfAGzoQXRnxrJwJ',
        _type: 'lodash_method',
        _updatedAt: '2021-10-07T16:14:31Z',
        arguments:
            '<li><code>object</code> <em>(Object)</em>: The object to bind and assign the bound methods to.</li><li><code>methodNames</code> <em>(...(string|string[]))</em>: The object method names to bind.</li>',
        category: 'Util Methods',
        description:
            'Binds methods of an object to the object itself, overwriting the existing method.<br><br><strong>Note:</strong> This method doesn\'t set the "length" property of bound functions.',
        example:
            '<pre><div><span class="type">var</span>&nbsp;view&nbsp;=&nbsp;{</div><div>&nbsp;&nbsp;<span class="string">\'label\'</span>:&nbsp;<span class="string">\'docs\'</span><span class="delimiter">,</span></div><div>&nbsp;&nbsp;<span class="string">\'click\'</span>:&nbsp;<span class="type">function</span>()&nbsp;{</div><div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="name type console">console</span><span class="delimiter method">.</span><span class="support console">log</span>(<span class="string">\'clicked&nbsp;\'</span>&nbsp;+&nbsp;this<span class="delimiter">.</span><span class="support">label</span>);</div><div>&nbsp;&nbsp;}</div><div>};</div><div>&nbsp;</div><div>_<span class="delimiter method">.</span><span class="name">bindAll</span>(view<span class="delimiter">,</span>&nbsp;[<span class="string">\'click\'</span>]);</div><div><span class="name">jQuery</span>(element)<span class="delimiter method">.</span><span class="name">on</span>(<span class="string">\'click\'</span><span class="delimiter">,</span>&nbsp;view<span class="delimiter">.</span>click);</div><div><span class="comment">//&nbsp;=&gt;&nbsp;Logs&nbsp;\'clicked&nbsp;docs\'&nbsp;when&nbsp;clicked.</span></div></pre>',
        featured_on: [],
        links: '<a href="https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L15286">source</a> <a href="https://www.npmjs.com/package/lodash.bindall">npm package</a>',
        lodash_version: '4.17.15',
        method: '_.bindAll(object, methodNames)',
        methodName: 'bindAll',
        related_methods: [],
        returns: '<em>(Object)</em>: Returns <code>object</code>.',
        search_helpers: []
    }
]



module.exports = () => {
    return data
}
