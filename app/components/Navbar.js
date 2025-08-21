import { ModeToggle } from "./ModeToggle"
import LangToggle from "./LangToggle"
import ProfileIcon from "./ProfileIcon"
import SearchContainer from "./SearchContainer"

const Navbar = () => {
    return (
        <div className="p-4 flex justify-end items-center gap-40">
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