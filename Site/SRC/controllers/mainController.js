const mainController = {
    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {
        res.render('register')
    },
    home: (req, res) => {
        res.render('home')
    }
}

module.exports = mainController;