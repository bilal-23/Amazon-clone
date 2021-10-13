import { getSession, useSession } from 'next-auth/client';
import { useEffect } from 'react';
import moment from 'moment';
import db from '../../firebase';
import OrderItem from '../components/OrderItem';

export default function Orders({ orders }) {
    const [session] = useSession();
    // console.log(session?.user?.email)
    // useEffect(() => {
    //     async function get() {
    //         db.collection('users').doc(session?.user?.email).collection('orders').get().then((querySnapshot) => {
    //             querySnapshot.forEach((doc) => {
    //                 console.log(doc.id, doc.data())
    //             })
    //         })
    //     }
    //     get();
    // }, [session?.user?.email])

    return (
        <main className="max-w-screen-lg mx-auto p-4 pt-10 sm:p-10">
            <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400 font-semibold">Your Orders</h1>

            {
                session ? (
                    <h2>{orders?.length} Orders</h2>
                ) : (
                    <h2>Please sign in to see your orders</h2>
                )
            }

            <div className="mt-5 space-y-4">
                {orders?.map((order) => {
                    return <OrderItem order={order} key={order.id} />
                })}
            </div>
        </main>
    )
}

export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    //Get user logged in credentials
    const session = await getSession(context);

    if (!session) {
        return {
            props: {}
        }
    }

    const stripeOrders = await db.collection('users').doc(session.user.email).collection('orders').orderBy('timestamp', 'desc').get()

    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100,
                })
            ).data,
        }))
    )
    return {
        props: {
            orders,
        }
    }
}