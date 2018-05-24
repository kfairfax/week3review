module.exports = {
    getAll: (req, res) => {
        console.log('fired')
        const db = req.app.get('db');

        db.get_all()
            .then(products => res.status(200).send(products))
            .catch(() => res.status(500).send())
    }
}