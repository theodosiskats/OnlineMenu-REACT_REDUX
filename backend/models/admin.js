const mongoose = require('mongoose');
      passportLocalMongoose = require('passport-local-mongoose');
      Schema = mongoose.Schema;

const AdminSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name: String,
    role: String
});
AdminSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Admin', AdminSchema, "admins");