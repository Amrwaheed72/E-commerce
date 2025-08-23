import HomeNavbar from "../_components/HomeNavbar";

export default function HomeLayout({ children }) {
    return (
        <>
            <HomeNavbar />
            <main>{children}</main>
        </>
    );
}
