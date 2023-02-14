const head = require ("../components/head")
const footer = require ("../components/footer")

const juno = `
<link href="/main-css.css" rel="stylesheet">
<div class = 'head'>
${head}
</div>
<body>
    <h1>Juno</h1>
    <div class = 'about-juno'>
    <ul>
        <li>Age = 19</li>
        <li>Magic skills = true</li>
        <li>Sword skills = true</li>
    </ul>
    </div>
    <div class = 'footer'>
    ${footer}
    </div>
</body>
</html>
`
module.exports = juno;