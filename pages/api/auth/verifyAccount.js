import db from "models"
import Backend from "backend"

export default async function handler(req, res) {
    if (req.method === "POST") {
        let user = await Backend.getAuthenticatedUser({ req, res });
        const token = req.body.token;
        const email = req.body.email;

        const f = Backend.verifyAccount({ req, res }, token)
        console.log(f)
        res.statusCode = 200
        res.json({
            success: f,
        })
    } else {
        res.json({ error: "method_not_allowed" })
    }
}
