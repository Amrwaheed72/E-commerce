'use client'
import { ModeToggle } from "./ModeToggle"
import LangToggle from "./LangToggle"
import ProfileIcon from "./ProfileIcon"
import SearchContainer from "./SearchContainer"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "./Logo"
import CartIcon from "./CartIcon"
import WishList from "./WishList"
import { useTranslation } from "react-i18next"
const Navbar = () => {
    const pathname = usePathname()
    const { t } = useTranslation('navbar')

    const links = [
        {
            link: '/',
            label: "home_page"
        },
        {
            link: '/browseProducts',
            label: "browse_products"
        },
        {
            link: '/about',
            label: "about_us"
        },
        {
            link: '/contact',
            label: "contact_us"
        },
    ]
    return (
        <div className="w-full px-6 py-4 flex items-center justify-between border-b">
            <div className="flex items-center gap-4">
                <Logo />
            </div>

            <div className=" gap-6 text-xs md:text-sm lg:text-xl font-semibold hidden xl:flex">
                {links.map((link, i) => (
                    <Link
                        href={link.link}
                        key={i}
                        className={`relative group transition-colors ${pathname === link.link
                            ? "text-black dark:text-white"
                            : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                            }`}
                    >
                        {t(link.label)}
                        <span
                            className={`absolute left-0 -bottom-1 h-[2px] bg-black dark:bg-white transition-all duration-300 ${pathname === link.link ? "w-full" : "w-0 group-hover:w-full"
                                }`}
                        />
                    </Link>
                ))}
            </div>

            <div className="">
                <SearchContainer />
            </div>

            <div className="hidden xl:flex items-center gap-3">
                <WishList />
                <CartIcon />
                <ModeToggle />
                <LangToggle />
                <ProfileIcon />
            </div>
        </div>

    )
}

export default Navbar