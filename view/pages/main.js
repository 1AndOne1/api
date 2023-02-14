const head = require ("../components/head")
const footer = require ("../components/footer")
const main_page = `
<link href="/main-css.css" rel="stylesheet">
<div class = 'head'>
${head}
</div>
    <main>
    <div class = 'header'>
    <h2>Characters</h2>
    </div>
    <div class = 'pers'>
    <ul>
        <li><a href ='../home/asta'>Asta</a></li>
        <li><a href ='../home/noel'>Noel Silver</a></li>
        <li><a href ='../home/juno'>Juno</a></li>
    </ul>
    </div>
    </main>
    <div class = 'footer'>
    ${footer}
    </div>
</body>
</html>
</div>
`
module.exports = main_page;