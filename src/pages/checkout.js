import Image from 'next/image';
import { useSelector } from 'react-redux';

export default function Checkout() {
    const items = useSelector(state => state.basket.items);
    const empty = items.length === 0;
    console.log(items)
    return (
        <main className="lg:flex max-w-screen-2xl mx-auto bg-gray-100">
            {/* left */}
            <div className="flex-grow m-5 shadow-sm">
                <Image src="https://links.papareact.com/ikj" width={1080} height={250} objectFit="contain" />
                <div className="flex flex-col p-5 space-y-10 bg-white">
                    <h1 className="text-2xl border-b pb-4 capitalize font-semibold">{empty ? `Your cart Is Empty` : `Your Shopping Cart`}</h1>
                    {items?.map(x => <p>{x.name}</p>)}
                </div>
            </div>
        </main>

    )
}