const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51QcJ7OKPsUTb2ZNV4vsNzG2PfvJCeHsHA4vIN15VSYMdmL3Lz3bHfuPMzSNG4604Wk8FE4XyOw7rxgs2OW2C3Wy400YGtd9NGF")

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;

  const line_items = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
      },
      unit_amount: product.current_price * 100,
    },

    quantity: product.quantity,
  }))




  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: line_items,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  })

  res.json({ id: session.id });

});

app.listen(7000, () => console.log("Server is running on port 7000"));