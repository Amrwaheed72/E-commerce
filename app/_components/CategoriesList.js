import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { AlignJustify } from "lucide-react"
import Link from "next/link"

const CategoriesList = ({ categories }) => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <AlignJustify />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {categories.map((cat) => (
                        <DropdownMenuItem key={cat.slug} >
                            <Link href={`/browseProducts/category/${cat.slug}`}>
                                {cat.name}
                            </Link>
                        </DropdownMenuItem>
                    ))
                    }

                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default CategoriesList