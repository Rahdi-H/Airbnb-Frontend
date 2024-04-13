"use client"
import { useRouter } from "next/navigation"
import Modal from "./Modal"
import useSignupDisplay from "@/app/hooks/useSignupDisplay"
import { useState } from "react"
import apiServices from "@/app/services/apiServices"
import { handlelogin } from "@/app/lib/actions"

const SignupModal = () => {
    const signUpModal = useSignupDisplay()
    const router = useRouter();
    const store = useSignupDisplay();
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState<string[]>([]);

    const submitSignUp = async () => {
        const formData = {
            name: 'rahdinz',
            email : email,
            password1: password1,
            password2: password2,
        }
        console.log(formData);
        
        const response = await apiServices.postWithOutToken('/api/auth/register/', JSON.stringify(formData))
        console.log(response);
        
        if (response.access){
            console.log("res", response);
            handlelogin(response.user.pk, response.access, response.refresh)
            signUpModal.close()
            // router.push('/')
        } else {
            console.log("ero");
            
            const tmpErrors: string[] = Object.values(response).map((error: any)=> {
                return error
            })
            setError(tmpErrors)
        }
    }

    const content = (
        <>
            <form className="flex flex-col space-y-2">
                <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter your email" className="p-4 rounded-full focus:outline-airbnb border" />
                <input onChange={(e)=> setPassword1(e.target.value)} type="password" placeholder="Enter your password" className="p-4 rounded-full focus:outline-airbnb border" />
                <input onChange={(e)=> setPassword2(e.target.value)} type="password" placeholder="Re-type password" className="p-4 rounded-full focus:outline-airbnb border" />
                {error.map((error, index) => {
                    return (
                        <div key={index} className="p-3 rounded-full bg-airbnb hover:bg-airbnb-dark text-white">
                            {error}
                        </div>
                    )
                })}
                <button type="button" onClick={()=> submitSignUp()} className="p-3 rounded-full bg-airbnb hover:bg-airbnb-dark text-white">Sign Up</button>
            </form>
        </>
    )
    return (
        <Modal title="Sign Up" content={content} close={store.close} isOpen={store.isOpen}/>
    )
}

export default SignupModal;