import db from "models";
import Backend from "backend"

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            console.log("------------------ 1", req.body.locket)
            const locket = await db.Locket.build({
                name: req.body.locket.name,
                type: req.body.locket.type,
                createdAt: new Date(),
                updatedAt: new Date()
            })
        
            await locket.save()
            console.log("------------------ 2")

            const lockets = await db.Locket.findAndCountAll();
            res.statusCode = 200;
            res.json({ lockets, new: locket.id })
        } catch (e) {
            res.statusCode = 400;
            res.json({error: 'unable to add this chain'})
        }
        
    } else if (req.method === "PUT") {
        try {
            console.log("update data", req.body)
            const locket = await db.Locket.findByPk(req.body.locket.id)
            locket.name = req.body.locket.name;
            locket.type = req.body.locket.type;
            await locket.save()

            console.log("------------------ 2")
    
            const lockets = await db.Locket.findAndCountAll();
            res.statusCode = 200;
            res.json({ lockets })
            
        } catch (e) {
            res.statusCode = 400;
            res.json({error: 'unable to add this chain'})
        }
    } else if (req.method === "DELETE") {
        try {
            console.log("Delete data", req.body)
            const locket = await db.Locket.findByPk(req.body.locket.id)
            await locket.destroy()

            console.log("------------------ 2")
    
            const lockets = await db.Locket.findAndCountAll();
            res.statusCode = 200;
            res.json({ lockets })
            
        } catch (e) {
            res.statusCode = 400;
            res.json({error: 'unable to add this chain'})
        }
    }
    
  }
  