const express = require("express");
const router = express.Router();
const AnnouncementsMd = require('../models/announcements')

// Routes Ανακοινώσεων

router.get("/", async(req,res)=>{
    const announcements = await AnnouncementsMd.find({});
    res.render("dashboard/announcements", {announcements});
});

router.post('/', async (req,res) => {
    const announcement = new AnnouncementsMd(req.body.announcement);
    console.log(announcement);
    await announcement.save();
    req.flash('success', 'Η ανακοίνωση προστέθηκε επιτυχώς!');
    res.redirect('/announcements')
});

router.delete('/delete/:id', async(req,res) =>{
    const {id} = req.params;
    await AnnouncementsMd.findByIdAndDelete(id);
    req.flash('error', 'Η ανακοίνωση διαγράφθηκε επιτυχώς!');
    res.redirect('/announcements');
});

module.exports = router;