import db from "models";
import Backend from "backend"

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            console.log("------------------ 1", req.body.color)
            const product = await db.Product.build({
                locketId: req.body.product.locketId,
                metalId: req.body.product.metalId,
                colorId: req.body.product.colorId,
                amount: req.body.product.amount,
                price: req.body.product.price,
                createdAt: new Date(),
                updatedAt: new Date()
            })
        
            await product.save()
            console.log("------------------ 2")

            const products = await db.Product.findAndCountAll({
                order: [
                  ['id', 'ASC'],
                ],
                include: [{
                  model: db.File
                }]
              });
            res.statusCode = 200;
            res.json({ products, new: product.id })
        } catch (e) {
            res.statusCode = 400;
            res.json({error: 'unable to add this chain'})
        }
        
    } else if (req.method === "PUT") {
        try {
            console.log("update data", req.body)
            const product = await db.Product.findByPk(req.body.product.id)
            product.amount = req.body.product.amount;
            product.price = req.body.product.price;
            await product.save()

            console.log("------------------ 2")
    
            const products = await db.Product.findAndCountAll({
                order: [
                  ['id', 'ASC'],
                ],
                include: [{
                  model: db.File
                }]
              });
            res.statusCode = 200;
            res.json({ products })
            
        } catch (e) {
            res.statusCode = 400;
            res.json({error: 'unable to add this chain'})
        }
    } else if (req.method === "DELETE") {
        try {
            console.log("Delete data", req.body)
            const product = await db.Product.findByPk(req.body.product.id)
            await product.destroy()

            console.log("------------------ 2")
    
            const products = await db.Product.findAndCountAll({
                order: [
                  ['id', 'ASC'],
                ],
                include: [{
                  model: db.File
                }]
              });
            res.statusCode = 200;
            res.json({ products })
            
        } catch (e) {
            res.statusCode = 400;
            res.json({error: 'unable to add this chain'})
        }
    }
    
  }
  