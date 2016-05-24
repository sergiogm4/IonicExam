/**
 * Created by irkalla on 15.04.16.
 */
/**
 * Created by irkalla on 13.04.16.
 */

var mongoose = require('mongoose');
Schema   = mongoose.Schema;

var Student = mongoose.model('Student');

var subjectSchema = new Schema({

    name: {type : String},
    students:  [{
        type: Schema.ObjectId, ref: "Student"
    }],

},{
    versionKey:false

});

module.exports = mongoose.model('Subject', subjectSchema);
