'use client'
import Link from "next/link"
import Logo from "./Logo"
import { usePathname } from "next/navigation"
import NavList from "./NavList"
import { ModeToggle } from "./ModeToggle"
import LangToggle from "./LangToggle"
import { useTranslation } from "react-i18next"
import ProfileIcon from "./ProfileIcon"
import { Headset, House, ShieldQuestionMark, ShoppingCart } from "lucide-react"

const HomeNavbar = () => {
    const { t } = useTranslation('navbar')
    const pathname = usePathname()
    const links = [
        {
            link: '/home',
            label: "home_page",
            icon: <House className="w-4 h-4 lg:w-5 lg:h-5" />
        },
        {
            link: '/browseProducts',
            label: "browse_products",
            icon: <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
        },
        {
            link: '/about',
            label: "about_us",
            icon: <ShieldQuestionMark className="w-4 h-4 lg:w-5 lg:h-5" />
        },
        {
            link: '/contact',
            label: "contact_us",
            icon: <Headset className="w-4 h-4 lg:w-5 lg:h-5" />
        },
    ]
    return (
        <div className="w-full px-6 py-4 flex items-center justify-between border-b">
            <div className="flex items-center gap-4">
                <Logo />
            </div>

            <div className="flex justify-between items-center gap-2 md:gap-4 lg:gap-12">
                <div className=" gap-6 text-xs md:text-sm lg:text-xl font-semibold hidden md:flex">
                    {links.map((link, i) => (
                        <Link
                            href={link.link}
                            key={i}
                            className={`relative group transition-colors text-xs lg:text-sm ${pathname === link.link
                                ? "text-black dark:text-white"
                                : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                                }`}
                        >
                            <span className="flex items-center justify-center gap-2">
                                {t(link.label)}
                                {link.icon}
                            </span>
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-black dark:bg-white transition-all duration-300 ${pathname === link.link ? "w-full" : "w-0 group-hover:w-full"
                                    }`}
                            />
                        </Link>
                    ))}
                </div>
                <div className="block md:hidden md:order-1 order-2">
                    <NavList />
                </div>
                <div className="flex items-center gap-3 md:order-2 order-1">
                    <ModeToggle />
                    <LangToggle />
                    <ProfileIcon />
                </div>
            </div>

            {/* <div className="">
                <SearchContainer />
            </div> */}

            {/* <div className="hidden xl:flex items-center gap-3">
                <WishList />
                <CartIcon />
                <ModeToggle />
                <LangToggle />
                <ProfileIcon />
            </div> */}
        </div>

    )
}

export default HomeNavbar