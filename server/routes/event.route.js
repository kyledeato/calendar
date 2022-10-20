const Event = require("../controllers/event.controller")

module.exports = function (app) {
    app.post("/api/event/create", Event.createEvent)
    app.get("/api/event/", Event.getAllEvents)
    app.get("/api/event/:id", Event.getEvent)
}