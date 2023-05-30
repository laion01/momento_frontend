// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Backend from "backend"

export default async function handler(req, res) {
  // await Backend.sendEmailVerificatioinSMTP();
  // await Backend.sendPurchaseSMTP();
  // await Backend.sendShipmentSMTP();

  const res1 = await Backend.sendShipping();

  res.status(200).json({ data: res1})
}
