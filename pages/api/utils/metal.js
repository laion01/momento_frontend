import db from "models";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            console.log("------------------ 1", req.body)
            const metal = await db.Metal.build({
                name: req.body.name,
                createdAt: new Date(),
                updatedAt: new Date()
            })
        
            await metal.save()
            console.log("------------------ 2")

            const metals = await db.Metal.findAndCountAll({
                order: [
                  ['id', 'ASC'],
                ],
              });
            res.statusCode = 200;
            res.json({ metals, new: metal.id })
        } catch (e) {
            res.statusCode = 400;
            res.json({error: 'unable to add this chain'})
        }
        
    } else if (req.method === "PUT") {
        try {
            console.log("update data", req.body)
            const metal = await db.Metal.findByPk(req.body.metal.id)
            metal.name = req.body.metal.name;
            await metal.save()

            console.log("------------------ 2")
    
            const metals = await db.Metal.findAndCountAll({
                order: [
                  ['id', 'ASC'],
                ],
              });
            res.statusCode = 200;
            res.json({ metals })
            
        } catch (e) {
            res.statusCode = 400;
            res.json({error: 'unable to add this chain'})
        }
    } else if (req.method === "DELETE") {
        try {
            console.log("Delete data", req.body)
            const metal = await db.Metal.findByPk(req.body.metal.id)
            await metal.destroy()

            console.log("------------------ 2")
    
            const metals = await db.Metal.findAndCountAll({
                order: [
                  ['id', 'ASC'],
                ],
              });
            res.statusCode = 200;
            res.json({ metals })
            
        } catch (e) {
            res.statusCode = 400;
            res.json({error: 'unable to add this chain'})
        }
    }
    
  }
  