import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ShoppingBasket } from "lucide-react"
import Link from "next/link"
const Logo = () => {
    return (
        <Tooltip>
            <TooltipTrigger>
                <Link href="/" className="flex items-center gap-4 z-10">
                    <div className="text-4xl font-semibold flex justify-center items-center gap-2">
                        <ShoppingBasket size={40} />
                        <p>NeXus</p>
                    </div>
                </Link>
            </TooltipTrigger>
            <TooltipContent>Go To Home Page</TooltipContent>
        </Tooltip>
    )
}

export default Logo