'use client'
import { ModeToggle } from "./ModeToggle"
import LangToggle from "./LangToggle"
import ProfileIcon from "./ProfileIcon"
import SearchContainer from "./SearchContainer"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "./Logo"

const links = [
    {
        link: '/home',
        label: 'Home'
    },
    {
        link: '/products',
        label: 'Browse Products'
    },
    {
        link: '/about',
        label: 'About Us'
    },
    {
        link: '/contact',
        label: 'Contact Us'
    },
]
const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className="p-4 flex justify-between items-center gap-40 border-b-1">
            <Logo />
            <div className="flex gap-8 text-xl font-semibold">
                {links.map((link, i) => (
                    <Link
                        href={link.link}
                        key={i}
                        className={`relative group transition-colors ${pathname === link.link
                            ? "text-black dark:text-white"
                            : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                            }`}
                    >
                        {link.label}
                        <span
                            className={`absolute left-0 -bottom-6 h-[2px] bg-black dark:bg-white transition-all duration-300 ${pathname === link.link ? "w-full" : "w-0 group-hover:w-full"
                                }`}
                        />
                    </Link>
                ))}
            </div>
            <div>
                <SearchContainer />
            </div>
            <div className="flex justify-end items-center gap-2">
                <ModeToggle />
                <LangToggle />
                <ProfileIcon />
            </div>
        </div>
    )
}

export default Navbar