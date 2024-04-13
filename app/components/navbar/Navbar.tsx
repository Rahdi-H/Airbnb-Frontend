import Image from "next/image";
import Link from "next/link";
import SearchFilter from "./SearchFilter";
import UserNav from "./UserNav";
import AddProperty from "./AddProperty";
import { getUserID } from "@/app/lib/actions";

const Navbar = async () => {
    const userID = await getUserID()
    return (
        <nav className="w-full fixed py-6 top-0 left-0 border-b bg-white z-10">
            <div className="max-w-[1500px] mx-auto px-6 ">
                <div className="flex justify-between items-center">
                    <Link href={'/'}>
                        <Image 
                            src='/airbnb.svg'
                            width={120}
                            height={25}
                            className="h-auto w-auto"
                            alt="Airbnb Logo"
                        />
                    </Link>
                    <div className="flex space-x-6">
                        <SearchFilter/>
                    </div>
                    <div className="flex space-x-6">
                        <AddProperty userID={userID} />
                        <UserNav userID={userID} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;