const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [1, 'Title must at least be 1 character long'],
    },
    description: {
        type: String
    },
    // label are colors red , blue, green, grey, purple, yellow
    label: {
        type: String
    },
    date: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        
    }
}, {timeseries: true})

module.exports.Event = mongoose.model('Event', EventSchema);