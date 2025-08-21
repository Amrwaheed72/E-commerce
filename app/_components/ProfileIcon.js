import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const { default: Link } = require("next/link")

const ProfileIcon = () => {
    return (
        <Link href='/profile'>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </Link>
    )
}

export default ProfileIcon