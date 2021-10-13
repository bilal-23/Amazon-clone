const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    const { items, email } = req.body

    const transformedItems = items.map(item => {
        return {
            description: item.description,
            quantity: 1,
            price_data: {
                currency: 'inr',
                unit_amount: item.price * 100,
                product_data: {
                    name: item.name,
                    images: [item.image]
                },
            },

        }
    })

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: {
            allowed_countries: ['IN', 'AE', 'GB', 'US', 'CA']
        },
        line_items: transformedItems,
        mode: 'payment',
        // success_url: `${process.env.HOST}/success`,
        success_url: 'https://amazon-clone-six-ruby.vercel.app/success',
        cancel_url: 'https://amazon-clone-six-ruby.vercel.app/error',
        metadata: {
            email: email,
            images: JSON.stringify(items.map(item => item.image))
        }
    })

    res.status(200).json({ id: session.id })
}