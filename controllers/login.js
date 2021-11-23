function displayLoginPage (req, res, next) {
    res.render('login', { title: 'Express' });
}

module.exports = {
    displayLoginPage
}

