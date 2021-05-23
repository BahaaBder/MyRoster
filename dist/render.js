class Render {
    constructor() {

    }
    renderData = function(players) {
        const source = $("#players-template").html()
        const template = Handlebars.compile(source)
        $(".results").empty()
        let playerSheet = template({ players })
        $(".results").append(playerSheet)
    }
}