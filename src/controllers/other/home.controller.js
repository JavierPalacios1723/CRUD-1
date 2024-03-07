const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { readData } = require("../../data");




module.exports = (req, res) => {
    const products = readData()
    const productsInSale = products.filter(p => category === 'in-sale') 
    const productsVisited = products.filter(p => category === 'visited') 
    res.render('other/home',{
        productsInSale, productsVisited
    })
    };