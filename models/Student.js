/**
 * Created by irkalla on 13.04.16.
 */

var mongoose = require('mongoose');
Schema   = mongoose.Schema;



var studentSchema = new Schema({

    name: {type: String},
    address: {type: String},
    phones: [{
        name: String,
        number: String
    }],
},{

    versionKey:false


});

module.exports = mongoose.model('Student', studentSchema);

