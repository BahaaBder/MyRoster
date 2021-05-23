const renderTeam = new Render()

const search = function() {
    let input = $("#teamNameInput").val()
    $.get(`teams/${input}`, function(players) {
        renderTeam.renderData(players)
    })
}