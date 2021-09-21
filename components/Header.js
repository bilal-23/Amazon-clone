import Image from 'next/image';
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import classes from './Header.module.css';
export default function Header() {
    return (
        <header>
            {/* Top Nav  */}
            <div className={classes.header_top}>
                <div className={classes.header_top_image}>
                    <Image src='https://links.papareact.com/f90' width={150} height={40} objectFit="contain" />
                </div>
                {/* Search */}
                <div className={classes.header_search}>
                    <input type="text" />
                    <SearchIcon className={classes.searchIcon} />
                </div>
            </div>

            {/* Bottom Nav */}
            <div></div>
        </header>
    )
}
