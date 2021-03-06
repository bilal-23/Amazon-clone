import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Header() {
    const [session] = useSession();
    const itemsQuantity = useSelector(state => state.basket.quantity);

    return (
        <header className="sticky top-0 z-40">
            {/* top nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="m-0 flex items-center flex-grow sm:flex-grow-0 relative top-2 ">
                    <Link href="/"><a><Image src="/amazon.png" width={150} height={40} objectFit="contain" className="cursor-pointer md:w-40 w-52" /></a></Link>
                </div>

                {/* Search  */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
                    <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none " />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* Right */}
                <div className="text-white flex text-md items-center space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="cursor-pointer hover:underline">
                        <p>{session ? `Hello, ${session.user.name}` : `Sign In`}</p>
                        <p className="font-extrabold md:text-base">Accounts &amp; Lists</p>
                    </div>
                    <div className="cursor-pointer hover:underline">
                        <p>Returns</p>
                        <Link href="/orders">
                            <a>
                                <p className="font-extrabold md:text-base">&amp; Orders</p>
                            </a>
                        </Link>
                    </div>
                    <Link href="/checkout"><a> <div className="relative flex items-center cursor-pointer hover:underline">
                        <span className="absolute font-extrabold right-0 top-0 md:right-6 h-4 w-4 bg-yellow-400 text-center rounded-full text-black text-xs ">{itemsQuantity}</span>

                        <>
                            <ShoppingCartIcon className="h-10" />
                            <p className="font-extrabold hidden md:inline md:text-base mt-2">Cart</p>
                        </>

                    </div>
                    </a></Link>
                </div>
            </div>
            {/* Bottom Nav  */}
            <div className="flex space-x-3 p-2 pl-6 bg-amazon_blue-light text-white md:text-sm text-xs">
                <p className="bottom-nav-item">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="bottom-nav-item">Prime Video</p>
                <p className="bottom-nav-item">Amazon Business</p>
                <p className="bottom-nav-item">Today's Deal</p>
                <p className="bottom-nav-item hidden lg:inline-flex">Electronics</p>
                <p className="bottom-nav-item hidden lg:inline-flex">Food &amp; Grocery</p>
                <p className="bottom-nav-item hidden lg:inline-flex">Prime</p>
                <p className="bottom-nav-item hidden lg:inline-flex">Buy Again</p>
                <p className="bottom-nav-item hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="bottom-nav-item hidden lg:inline-flex">Health &amp; Personal Care</p>
            </div>
        </header>
    )
}
//sm means min-width, greater than

