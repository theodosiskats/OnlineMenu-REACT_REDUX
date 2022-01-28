module.exports.isLoggedin = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.flash('error', 'Πρέπει να συνδεθείτε για να αποκτήσετε πρόσβαση στη σελίδα');
        return res.redirect('/userlogin');
    };
    next();
}

module.exports.isAdmin = (req, res, next) => {
    //const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const currentUser = req.user;
    if(currentUser.role != "Admin"){
        req.flash('error', 'Δεν έχετε δικαίωμα πρόσβασης σε αυτή τη καρτέλα');
        return res.render('dashboard/401error'); // add access denied view
    };
    next();
}