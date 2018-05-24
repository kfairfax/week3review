module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');

        db.get_all()
            .then(products => res.status(200).send(products))
            .catch(() => res.status(500).send())
    },
    addProduct: (req,res) =>{
        const db = req.app.get('db');
        const {itemInput, priceInput, quantityInput}=req.body
        db.add_product([itemInput,priceInput,quantityInput])
            .then(products => res.status(200).send(products))
            .catch(() => res.status(500).send())
    }
}