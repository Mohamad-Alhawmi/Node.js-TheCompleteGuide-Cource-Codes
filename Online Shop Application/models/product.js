const fs = require('fs') ;
const path = require('path') ;

const filePath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
) ;

const getProductsFromFile = (callBack) =>
{
    fs.readFile(filePath, (err, fileContent) =>
    {
        if(err)
        {
            callBack([]) ;
        }
        else
        {
            callBack(JSON.parse(fileContent)) ;
        }
    }) ;
}

module.exports = class Product{
    constructor(title, imageUrl, description, price)
    {
        this.title = title ;
        this.imageUrl = imageUrl ;
        this.description = description ;
        this.price = price ;
    }

    save()
    {
        getProductsFromFile((products) =>
        {
            products.push(this) ;
            fs.writeFile(filePath, JSON.stringify(products), (err) =>
            {
                console.log(err) ;
            }) ;
        }) ;
    } 

    static fetchAll(callBack)
    {
        getProductsFromFile(callBack) ;
    }
} ;