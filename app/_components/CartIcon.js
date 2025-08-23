'use client'
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import useStore from "../store"

const CartIcon = () => {
    const cart = useStore((state) => state.cart)
    return (
        <Link href='/cart' className="relative">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant='outline' size='icon'>
                        <ShoppingCart size={18} />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>Cart</TooltipContent>
            </Tooltip>
            <div className="absolute text-xs right-1 bottom-0 border-1 rounded-full font-semibold ">{cart}</div>
        </Link>
    )
}

export default CartIcon