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
                city: req.body.billingAddress.city.value,
                apartment: req.body.billingAddress.apartment.value,
                address: req.body.billingAddress.address.value,
                zipcode: req.body.billingAddress.zipcode.value,
                email: req.body.billingAddress.email.value,
                phone: req.body.billingAddress.phone.value,
                firstName: req.body.billingAddress.firstName.value,
                lastName: req.body.billingAddress.lastName.value,
            })
            await billingAddress.save();
            console.log("------------------ billingAddress 2", billingAddress.id)

            const shippingAddress = await db.Address.build({
                country: JSON.stringify(req.body.shippingAddress.country),
                state: JSON.stringify(req.body.shippingAddress.state),
                city: req.body.shippingAddress.city.value,
                apartment: req.body.shippingAddress.apartment.value,
                address: req.body.shippingAddress.address.value,
                zipcode: req.body.shippingAddress.zipcode.value,
                email: req.body.shippingAddress.email.value,
                phone: req.body.shippingAddress.phone.value,
                firstName: req.body.shippingAddress.firstName.value,
                lastName: req.body.shippingAddress.lastName.value,
            })

            await shippingAddress.save();
            const order = await db.Order.build({
                userId: req.body.userId,
                billingAddressId: billingAddress.id,
                shippingAddressId: shippingAddress.id,
                // shoppingAddressId: shippingAddress.id;
                pid: "",
                createdAt: new Date(),
                updatedAt: new Date()
            })
        
            order.status = 0;
            await order.save()

            const products = req.body.myBag

            let totalPrice = 0;
            for(let i = 0 ; i < products.length; i++) {
                const product = await db.Product.findOne({
                    where: {
                        locketId: products[i].locketId,
                        metalId: products[i].metalId,
                        colorId: products[i].colorId,
                    }
                })
                for(let j = 0 ; j< products[i].quantity; j++) {
                    const data = await db.SoldProduct.build({
                        userId: req.body.userId,
                        orderId: order.id,
                        productId: product.id,
                        price: products.price
                    })
                    totalPrice += product.price;
                    data.save();
                }
            }

            order.totalPrice = totalPrice;
            await order.save();
            

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

            const lockets = await db.Locket.findAndCountAll();
            res.statusCode = 200;
            res.json({ lockets })
            
        } catch (e) {
            res.statusCode = 400;
            res.json({error: 'unable to add this chain'})
        }
    }
    
  }
  