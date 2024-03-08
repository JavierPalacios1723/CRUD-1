const { readData, saveData } = require("../../data")

module.exports = (req, res) => {
    const { id } = req.params
    const products = readData()
    const productFilter = products.filter(p => p.id !== +id)
    
    saveData(productFilter)
    res.redirect('/')
}