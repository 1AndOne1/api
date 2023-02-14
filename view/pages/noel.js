const head = require ("../components/head")
const footer = require ("../components/footer")

const noel = `
<link href="/main-css.css" rel="stylesheet">
<div class = 'head'>
${head}
</div>
<body>
    <h1>Noel</h1>
    <div class = 'about-noel'>
    <ul>
        <li>Age = 18</li>
        <li>Magic skills = true</li>
        <li>Sword skills = false</li>
    </ul>
    </div>
    <div class = 'footer'>
    ${footer}
    </div>
</body>
</html>
`
module.exports = noel;