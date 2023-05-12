import db from "models";
import Backend from "backend"

export default async function handler(req, res) {
    if (req.method === "GET") {
      const { locketId, colorId, metalId } = req.query;
      console.log({locketId, colorId, metalId});

      
      const product = await db.Product.findOne({
        where: {
          locketId, colorId, metalId
        },
        order: [
          ['id', 'ASC'],
        ],
        include: [{
          model: db.File
        }, db.Color, db.Metal, db.Locket]})
      res.status(200).json({ product });
    } else if (req.method === "POST") {
        try {
            const p = await db.Product.findAndCountAll({
              where: {
                  locketId: req.body.product.locketId,
                  metalId: req.body.product.metalId,
                  colorId: req.body.product.colorId
              },
            });

            if(p.count > 0) {
              res.statusCode = 409;
              res.json({ error: 'Product already exists' })
              return ;
            }
            
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
            const products = await db.Product.findAndCountAll({
                order: [
                  ['id', 'ASC'],
                ],
                
                order: [
                  ['id', 'ASC'],
                ],
                include: [{
                  model: db.File
                }, db.Color, db.Metal, db.Locket]
              });
            res.statusCode = 200;
            res.json({ products, new: product.id })
        } catch (e) {
          console.log(e);
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
                }, db.Color, db.Metal, db.Locket]
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
                }, db.Color, db.Metal, db.Locket]
              });
            res.statusCode = 200;
            res.json({ products })
            
        } catch (e) {
            res.statusCode = 400;
            res.json({error: 'unable to add this chain'})
        }
    }
    
  }
  