const { request, response } = require("express")
const {Event} = require("../models/events.model")

module.exports = {
    //create
    createEvent: (request, response) => {
        console.log(request.body)
        Event.create(request.body)
        .then(event=>response.json(event))
        .catch(err=>response.json(err))
    },

    //get one 
    getEvent: (request, response) => {
        Event.findOne({_id:request.params.id})
            .then(event => response.json(event))
            .catch(err => response.json(err))
    },

    getAllEvents: (request, response) => {
        Event.find({})
            .then(event => response.json(event))
            .catch(err => response.json(err))
    }
}


