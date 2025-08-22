import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { HeartPlus } from "lucide-react"
import Link from "next/link"

const WishList = () => {
    return (
        <Link href='/wishlist'>
            <Tooltip>
                <TooltipTrigger>
                    <Button variant='outline' size='icon'>
                        <HeartPlus />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    Wishlist
                </TooltipContent>
            </Tooltip>
        </Link>
    )
}

export default WishList