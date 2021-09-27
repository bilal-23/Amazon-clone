import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import NumberFormat from "react-number-format";
import Fade from 'react-reveal/Fade';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

export default function Product({ id, name, price, description, category, image, company }) {
    const MAX_RATING = 5
    const MIN_RATING = 1
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )
    const [hasPrime] = useState(Math.random() < 0.5);
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id, name, price, description, category, image, company, quantity: 1
        }
        dispatch(addToBasket(product));
    }

    return (
        <Fade bottom>
            <div className="capitalize relative flex flex-col m-5 bg-white p-10 rounded-2xl">
                <Image src={image} alt={name} objectFit="cover" width={800} height={500} objectFit="cover" className="rounded-md" quality={75} loading="lazy" />
                <h4 className="my-3 font-bold">{name}</h4>

                <p className="capitalize top-2 right-2 text-xs  text-gray-500">{company}</p>
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
                <button onClick={addItemToBasket} className="mt-auto  button">Add to Cart</button>
            </div>
        </Fade>
    )
}