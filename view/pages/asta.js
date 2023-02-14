const head = require ("../components/head")
const footer = require ("../components/footer")

const asta = `
<link href="/main-css.css" rel="stylesheet">
<div class = 'head'>
${head}
</div>
<body>
    <h1>Asta</h1>
    <div class = 'about-asta'>
    <ul>
        <li>Age = 18</li>
        <li>Magic skills = false</li>
        <li>Sword skills = true</li>
    </ul>
    </div>
    <div class = 'footer'>
    ${footer}
    </div>
</body>
</html>
`
module.exports = asta;