import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AlignJustify } from "lucide-react"
import Link from "next/link"

const links = [
    {
        link: '/',
        label: 'Home'
    },
    {
        link: '/browseProducts',
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

const NavList = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <AlignJustify />
                    <span className="sr-only">Toggle navigation links</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {links.map((link, i) => (
                    <Link key={i} href={link.link}>
                        <DropdownMenuItem>
                            {link.label}
                        </DropdownMenuItem>
                    </Link>
                ))}

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default NavList