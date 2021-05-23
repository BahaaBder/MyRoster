const express = require('express')
const path = require('path')
const app = express()
    /*https://www.geeksforgeeks.org/how-to-use-jquery-with-node-js/*/
const jsdom = require('jsdom')
const dom = new jsdom.JSDOM("")
const jquery = require('jquery')(dom.window)
    //////////////////////////////////////////////////////
const urllib = require('urllib')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))




// Team Object
const teamToIDs = {
        "lakers": "1610612747",
        "warriors": "1610612744",
        "heat": "1610612748",
        "suns": "1610612756"
    }
    /// +++++




urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function(err, res) {
    app.get('/teams/:teamName', function(request, response) {
        let id = teamToIDs[request.params.teamName]
        let players = []
        let par = JSON.parse(res)
        players.push(par.league.standard.filter(i => i.teamId == id).filter(i => i.isActive == true))
        response.send(players[0])
    })
})






const port = 3000
app.listen(port, function() {
    console.log(`Running server on port ${port}`)
})