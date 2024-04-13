"use client"
import useLoginDisplay from "@/app/hooks/useLoginDisplay"
import Modal from "./Modal"
import { useRouter } from "next/navigation"
import { useState } from "react"
import apiServices from "@/app/services/apiServices"
import { handlelogin } from "@/app/lib/actions"

const LoginModal = () => {
    const store = useLoginDisplay()
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const submitlogin = async () => {
        const formData = {
            email: email,
            password: password
        }
        const response = await apiServices.postWithOutToken('/api/auth/login/', JSON.stringify(formData))
        if (response.access) {
            handlelogin(response.user.pk, response.access, response.refresh)
            store.close()
            router.push('/')
        } else {
            setErrors(response.non_field_errors)
        }
    }
    const content = (
        <>
            <form action={submitlogin} className="flex flex-col space-y-2">
                <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter your email" className="p-4 rounded-full border focus:outline-airbnb" />
                <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter your password" className="p-4 rounded-full border focus:outline-airbnb" />
                {errors.map((error, index) => {
                    return (
                        <div key={index} className="p-3 rounded-full bg-airbnb hover:bg-airbnb-dark text-white">
                            {error}
                        </div>
                    )
                })}
                <button onClick={submitlogin} className="p-3 rounded-full bg-airbnb hover:bg-airbnb-dark text-white">Login</button>
            </form>
        </>
    )
    return (
        <Modal title="Log In" content={content} close={store.close} isOpen={store.isOpen} />
    )
}

export default LoginModal;