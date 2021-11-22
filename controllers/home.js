let mainDisplay = document.getElementById("most-wanted")

function scrollPage() {
    mainDisplay.scrollLeft += 220
}

function homeDisplay (req, res, next){
    res.render('home', { title: 'Home' });
}

console.log("is working")

module.exports = {
    scrollPage,
    homeDisplay
}