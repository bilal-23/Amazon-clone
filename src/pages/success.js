import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/solid'

function Success() {
    return (
        <div className="bg-gray-100 h-screen">
            <main className="max-w-screen-lg mx-auto">
                <div className="flex flex-col p-10 bg-white gap-3">
                    <div className="flex items-center space-x-2 mb-3">
                        <CheckCircleIcon className="text-green-500 h-14" />
                        <h1 className="text-3xl">Thank you, your order has been confirmed!</h1>
                    </div>
                    <p>
                        Thank you for shopping with us. We'll send a confirmation once your item is shipped. If you would like to check the status of the order&#40;s&#41; please press the link below.
                    </p>
                    <Link href="/orders">
                        <a>
                            <button className="button w-full">Go to my orders</button>
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    )
}
export default Success;