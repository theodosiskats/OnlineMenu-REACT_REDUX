const mongoose = require('mongoose');
      Schema = mongoose.Schema;

const AnnouncementsSchema = new Schema({
    title: String,
    content: String,
});

module.exports = mongoose.model('Announcements', AnnouncementsSchema, "announcements");