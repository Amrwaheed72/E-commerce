'use client'
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ShoppingBasket } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
const Logo = () => {
    const { t } = useTranslation('navbar')
    // const
    return (
        <Tooltip>
            <TooltipTrigger>
                <Link href="/" className="flex items-center gap-4 z-10">
                    <div className=" text-2xl lg:text-4xl font-semibold flex justify-center items-center gap-2">
                        <ShoppingBasket size={40} />
                        <p>{t("logo")}</p>
                    </div>
                </Link>
            </TooltipTrigger>
            <TooltipContent>Go To Home Page</TooltipContent>
        </Tooltip>
    )
}

export default Logo