import db from "models";
import Backend from "backend"

export default async function handler(req, res) {
    let u = await Backend.getAuthenticatedUser({req, res});
    if(!u) {
        res.statusCode = 401
        return res.json({ error: "Unauthorized User" })
    }

    if (req.method === "GET") {
        const id = req.query.id;

        const order = await db.Order.findOne({
            where: {
                id,
            },
            include: [
                { 
                    model: db.SoldProduct, 
                    include: [
                        { model: db.Product, include: [
                            db.Locket, db.Metal, db.Color, db.File
                        ]},
                    ] 
                },
                { model: db.Address, as: 'billingAddress' },
                { model: db.Address, as: 'shippingAddress' },
                db.User
            ]
        })

        res.statusCode = 200;
        res.json({ order })
    } else if (req.method === "POST") {
        

        if(u.id != req.body.userId) {
            res.statusCode = 401
            return res.json({ error: "Unauthorized User" })
        }

        const user = await db.User.findByPk(u.id)
        

        try {
            const billingAddress = await db.Address.build({
                country: JSON.stringify(req.body.billingAddress.country),
                state: JSON.stringify(req.body.billingAddress.state),
                city: req.body.billingAddress.city,
                apartment: req.body.billingAddress.apartment,
                address: req.body.billingAddress.address,
                zipcode: req.body.billingAddress.zipcode,
                email: req.body.billingAddress.email,
                phone: req.body.billingAddress.phone,
                firstName: req.body.billingAddress.firstName,
                lastName: req.body.billingAddress.lastName,
            })
            await billingAddress.save();
            console.log("------------------ billingAddress 2", billingAddress.id)

            const shippingAddress = await db.Address.build({
                country: JSON.stringify(req.body.shippingAddress.country),
                state: JSON.stringify(req.body.shippingAddress.state),
                city: req.body.shippingAddress.city,
                apartment: req.body.shippingAddress.apartment,
                address: req.body.shippingAddress.address,
                zipcode: req.body.shippingAddress.zipcode,
                email: req.body.shippingAddress.email,
                phone: req.body.shippingAddress.phone,
                firstName: req.body.shippingAddress.firstName,
                lastName: req.body.shippingAddress.lastName,
            })

            await shippingAddress.save();
            console.log("------------------ shippingAddress 2", shippingAddress.id)

            console.log("------------------ 3", shippingAddress.id)
            const order = await db.Order.build({
                userId: req.body.userId,
                billingAddressId: billingAddress.id,
                shippingAddressId: shippingAddress.id,
                // shoppingAddressId: shippingAddress.id;
                createdAt: new Date(),
                updatedAt: new Date()
            })
        
            order.status = 1;
            await order.save()

            const products = req.body.myBag
            console.log("------------------ 444", products.length)

            let totalPrice = 0;
            for(let i = 0 ; i < products.length; i++) {
                const product = await db.Product.findOne({
                    where: {
                        locketId: products[i].locketId,
                        metalId: products[i].metalId,
                        colorId: products[i].colorId,
                    }
                })
                console.log("================ productId ", product.id)
                for(let j = 0 ; j< products[i].quantity; j++) {
                    const data = await db.SoldProduct.build({
                        userId: req.body.userId,
                        orderId: order.id,
                        productId: product.id,
                        price: products.price
                    })
                    totalPrice += product.price;
                    console.log("================ productId ", data)
                    data.save();
                }
            }

            order.totalPrice = totalPrice;
            await order.save();
            
            console.log("------------------ 5", order)

            res.json({ order })
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
  