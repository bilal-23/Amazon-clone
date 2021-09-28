import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import NumberFormat from "react-number-format";
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../slices/basketSlice';

export default function CheckoutProduct({ item }) {
    const { id, name, price, rating, description, hasPrime, category, image, company, quantity } = item;
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(removeFromBasket(id));
    }

    return (
        <div className="flex flex-col md:grid md:grid-cols-5 grid-cols-2 items-center my-4 ">
            <Image
                src={image}
                width={300}
                height={200}
                objectFit='cover'
                className="rounded-lg"
            />
            {/* Middle */}
            <div className="md:col-span-3 mx-5 p-3">
                <p className="capitalize font-bold mb-1 text-sm md:text-md">{name}</p>
                <p className="capitalize mb-2 right-2 text-xs  text-gray-500">{company}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => <StarIcon key={i} className="h-5 text-yellow-400" />)}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <div className="mb-5 font-semibold">
                    <NumberFormat
                        thousandsGroupStyle="lakh"
                        value={price}
                        prefix="₹"
                        decimalSeparator="."
                        displayType="text"
                        type="text"
                        thousandSeparator={true}
                        allowNegative={true}
                        decimalScale={2}
                        allowLeadingZeros={false} />
                </div>
                {hasPrime && <div className="flex items-center space-x-2 mt-5">
                    <img src="https://links.papareact.com/fdw" alt="prime" className="w-12" />
                    <p className="text-xs">FREE Next-day Delivery</p>
                </div>}
            </div>
            <button onClick={removeFromCart} className="button text-sm mt-auto md:col-span-1 col-span-2 md:px-6 rounded-sm mx-auto ">Remove From Basket</button>
        </div>
    )
}