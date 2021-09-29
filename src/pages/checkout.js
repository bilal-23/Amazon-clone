import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/client';
import CheckoutProduct from '../components/CheckoutProduct';
import NumberFormat from "react-number-format";
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(process.env.stripe_public_key);

export default function Checkout() {
    const items = useSelector(state => state.basket.items);
    const total = items?.reduce((total, item) => {
        return total + item.price;
    }, 0)
    const [session] = useSession();
    const empty = items.length === 0;

    async function createCheckoutSession() {
        const stripe = await stripePromise;

        //call the backend to create checkout session
        const checkoutSession = await axios.post('/api/create-checkout-session', {
            items: items,
            email: session?.user?.email
        });

        //Redirect user to stripe checkout
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        });

        if (result.error) {
            alert(result?.error?.message)
        }

    }

    return (
        <main className="md:grid md:grid-cols-4 max-w-screen-2xl mx-auto bg-gray-100" >
            {/* left */}
            <div className="m-5 shadow-sm col-span-3">
                < Image src="https://links.papareact.com/ikj" width={1080} height={250} objectFit="contain" />
                <div className="flex flex-col p-5 space-y-10 bg-white">
                    <h1 className="text-2xl border-b pb-4 capitalize font-semibold">{empty ? `Your cart Is Empty` : `Your Shopping Cart`}</h1>
                    {items?.map((item, i) => <CheckoutProduct key={item.id} item={item} />)}
                </div>
            </div >
            {/* right */}
            <div className="flex flex-col bg-white p-10 md:pt-16 md:col-span-1 w-full" >
                {!empty && (
                    <>
                        <h2>Subtotal &#40;{items.length}&#41; :
                            <span> <NumberFormat
                                thousandsGroupStyle="lakh"
                                value={total}
                                prefix="₹"
                                decimalSeparator="."
                                displayType="text"
                                type="text"
                                thousandSeparator={true}
                                allowNegative={true}
                                decimalScale={2}
                                allowLeadingZeros={false} className="font-bold" /></span>
                        </h2>
                        <button onClick={createCheckoutSession} role="link" className={`button mt-2 text-sm rounded-sm ${!session && 'from-gray-300 to-gray-500 border-gray cursor-not-allowed'}`}
                            disabled={!session && true}
                        >
                            {!session ? 'Sign In To Checkout' : 'Proceed to Checkout'}
                        </button>
                    </>
                )
                }
            </div >

        </main >
    )
}