import CartIcon from "./CartIcon"
import ProfileIcon from "./ProfileIcon"
import WishList from "./WishList"
import CategoriesList from "./CategoriesList"
import { Suspense } from "react"
import { LoaderCircle } from "lucide-react"

const MobileNavbar = async ({ categories }) => {

    return (
        <div className="block md:hidden border-t-2 w-full fixed bottom-0 p-4">
            <div className="flex justify-between items-center">
                <ProfileIcon />
                <CartIcon />
                <WishList />
                <Suspense fallback={<LoaderCircle />}>
                    <CategoriesList categories={categories} />
                </Suspense>
            </div>
        </div>
    )
}

export default MobileNavbar