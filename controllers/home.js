function homeDisplay (req, res, next){
    res.render('home', { title: 'Home' });
}

module.exports = {
    homeDisplay
}