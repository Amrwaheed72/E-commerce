import CartIcon from "./CartIcon"
import ProfileIcon from "./ProfileIcon"
import WishList from "./WishList"

const MobileNavbar = () => {
    return (
        <div className="border-t-2 w-full fixed bottom-0 p-4">
            <div className="flex justify-between items-center">
                <CartIcon />
                <WishList />
                <ProfileIcon />
            </div>
        </div>
    )
}

export default MobileNavbar