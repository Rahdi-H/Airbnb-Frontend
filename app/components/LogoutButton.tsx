"use client"

import { useRouter } from "next/navigation"
import { resetAuthCookies } from "../lib/actions"

const LogoutButton: React.FC = () => {
    const router = useRouter()
    const submitLogout = async () => {
        resetAuthCookies()
        router.push('/')
    }
    return (
        <div onClick={submitLogout} className='py-3 px-4 hover:bg-slate-100 cursor-pointer w-full'>Logout</div>
    )
}

export default LogoutButton;