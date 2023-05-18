// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const UPS = require('ups-shipping-api');
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === "POST") {
    let totalPrice = 0;
    const line_items = [];
    req.body.items.map((item) => {
      line_items.push({
        price_data: {
          currency: "USD",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })
      totalPrice += item.price * 100 * item.quantity

    })

    // //   const paymentIntent = await stripe.paymentIntents.create({
    // //     amount: totalPrice,
    // //     currency: "USD"
    // //   })
    // const shipmentData = {
    //   "RateRequest": {
    //     "Shipment": {
    //       "Description": "The Wheelership UPS shipment",
    //       "Shipper": {
    //         "company_name": "Galatea jewelry Corp",
    //         "Name": "Buyer",
    //         "AttentionName": "Shipping Dept",
    //         "Phone": {
    //           "Number": "8777888283"
    //         },
    //         "Address": {
    //           "AddressLine": "San Dimas, 91773 USA",
    //           "City": "San Dimns",
    //           "StateProvinceCode": "CA",
    //           "PostalCode": "91773",
    //           "CountryCode": "US"
    //         }
    //       },
    //       "ShipTo": {
    //         "Name": "Customer",
    //         "AttentionName": "Customer",
    //         "Phone": {
    //           "Number": "1234567890",
    //         },
    //         "Address": {
    //           "AddressLine": "351 Markham street",
    //           "City": "Toronto",
    //           "StateProvinceCode": "ON",
    //           "PostalCode": "M6G 2K8",
    //           "CountryCode": "CA",
    //         }
    //       },
    //       "ShipFrom": {
    //         "company_name": "Galatea jewelry Corp",
    //         "Name": "Chi Huynh",
    //         "AttentionName": "Shipping Dept",
    //         "Phone": {
    //           "Number": " 909-592-0877"
    //         },
    //         "Address": {
    //           "AddressLine": "San Dinas, 91773 USA",
    //           "City": "San Dimns",
    //           "StateProvinceCode": "CA",
    //           "PostalCode": "91773",
    //           "CountryCode": "US"
    //         }
    //       },
    //       "Package": [
    //         {
    //           "Description": "Locket - Item",
    //           "Packaging": {
    //             "Code": "02"
    //           },
    //           "PackageWeight": {
    //             "UnitOfMeasurement": {
    //               "Code": "LBS"
    //             },
    //             "Weight": 1,
    //           },
    //           "PackageServiceOptions": ""
    //         },
    //       ],
    //     },
    //   }
    // }
    // // const temp = JSON.stringify(shipmentData)

    // //   const rates = await axios.post('https://wwwcie.ups.com/ship/v1/rates', {}, {
    // //     headers: {
    // //       // AccessLicenseNumber: process.env.UPS_ACCESS_KEY,
    // //       // Username: process.env.UPS_USERNAME,
    // //       // Password: process.env.UPS_PASSWORD
    // //     }
    // //   })

    // const query = new URLSearchParams({
    //   additionalinfo: 'rates'
    // }).toString();

    // const version = 'v1';
    // const requestoption = '1';
    // const resp = await fetch(
    //   `https://wwwcie.ups.com/api/rating/${version}/${requestoption}?${query}`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       transId: 'string',
    //       transactionSrc: 'testing',
    //       Authorization: process.env.UPS_ACCESS_KEY
    //     },
    //     body: JSON.stringify(shipmentData)
    //   }
    // );

    // const rates = await resp.json();
    // console.log(rates);

    const rates = await getShippingRates();
    console.log(rates);

    res.statusCode = 200
    res.json({
      subTotal: totalPrice, shippingRate: rates,
    })
  } else {
    res.json({ error: "method_not_allowed" })
  }
}


async function getShippingRates() {
  try {
    const apiUrl = 'https://wwwcie.ups.com/ship/v1/rating/rate';
    const username = process.env.UPS_USERNAME;
    const password = process.env.UPS_PASSWORD;
    const accessKey = process.env.UPS_ACCESS_KEY;

    console.log({username, password, accessKey});

    const requestBody = {
      "RatingServiceSelectionRequest": {
        "Request": {
          "RequestOption": "Rate",
          "TransactionReference": {
            "CustomerContext": "Get shipping rates"
          }
        },
        "Shipment": {
          "Shipper": {
            "Name": "John Doe",
            "Address": {
              "AddressLine": "123 Main St",
              "City": "Anytown",
              "StateProvinceCode": "NY",
              "PostalCode": "12345",
              "CountryCode": "US"
            }
          },
          "ShipTo": {
            "Name": "Jane Smith",
            "Address": {
              "AddressLine": "456 Elm St",
              "City": "Othertown",
              "StateProvinceCode": "CA",
              "PostalCode": "54321",
              "CountryCode": "US"
            }
          },
          "Service": {
            "Code": "03",
            "Description": "UPS Ground"
          },
          "Package": {
            "PackagingType": {
              "Code": "02",
              "Description": "Package"
            },
            "PackageWeight": {
              "UnitOfMeasurement": {
                "Code": "LBS",
                "Description": "Pounds"
              },
              "Weight": "10"
            }
          }
        }
      }
    };

    const config = {
      auth: {
        username,
        password,
        apiKey: accessKey
      },
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await axios.post(apiUrl, requestBody, config);
    console.log(response);
  } catch (error) {
    // console.error(error);
  }
}