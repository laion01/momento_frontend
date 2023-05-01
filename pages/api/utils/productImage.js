import db from "models";
import Backend from "backend"

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const file = await db.File.build({
                productId: req.body.file.productId,
                pathname: req.body.file.filename,
                createdAt: new Date(),
                updatedAt: new Date()
            })
        
            await file.save()

            const products = await db.Product.findAndCountAll({
                order: [
                  ['id', 'ASC'],
                ],
                include: [{
                  model: db.File
                }]
              });
            res.statusCode = 200;
            res.json({ products, fileId: file.id })
        } catch (e) {
            res.statusCode = 400;
            res.json({error: 'unable to add this chain'})
        }
        
    } else if (req.method === "DELETE") {
        try {
            console.log("Delete data", req.body)
            const file = await db.File.findByPk(req.body.file.id)
            await file.destroy()
    
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
  