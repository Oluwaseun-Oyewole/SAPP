import React, {useState} from "react"
import { CustomButton } from '../../components/Input/Button'
import { InputField } from '../../components/Input/Input'
import emailIcon from "../../assets/icons/email.svg"
import { login } from '../../api/ApiRequests'
import openEye from "../../assets/icons/open-eye.svg"


export const Login = () => {


 

    const initialValue = { email: "", password: "" };
    const [formState, setFormaState] = useState(initialValue);
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [show,setShowPassword ] = useState(false)
  
    const clearForm = () => {
      setFormaState(initialValue);
    };
  
    const togglePassword = () => {
        setShowPassword(!show)
    }
  
    const handleChange = (e) => {
        setError(false)
        setSuccess(false)
      const { name, value } = e.target;
      const newState = { ...formState };
      newState[name] = value;
      setFormaState(newState);
    };
 
  
    const submit = async(e) => {
      e.preventDefault();
      setLoading(true)
      console.log("submitting form -===", formState);
     

      try {
          const res = await login(formState)
          setLoading(false)
      setSuccess(true)
      clearForm();
      } catch (error) {
        setError(true)
        setLoading(false)
        setErrorMessage( error.response.data.message)
      }

  
    
    };
    return (
        <div className='flex flex-col h-full justify-center lg:px-16 px-6'>


            <h1 className="text-2xl text-left my-5">Sign In</h1>
            {success && (
    <div className="bg-green-100 rounded p-5 text-green-900 my-4">
               <div className="font-bold">Success</div>
               <div className="font-thin">Login successful</div>
            </div>
)}
            

{error && (
 <div className="bg-red-100 rounded p-5 text-red-900 my-4">
 <div className="font-bold">Error</div>
 <div className="font-thin">{errorMessage}</div>
</div>
)}
            <form onSubmit={submit}>
                <div className="mb">
                <label htmlFor=""> Email</label>
                <InputField placeholder="johndoe@gmail.com" name="email"  type="email" required={true} onChange={handleChange}  icon={emailIcon}  value={formState.email}/>
                </div>
                <div className="mb-3">
                <label htmlFor=""> Password</label>
                <InputField placeholder="**********" type={show ? "text":"password"} name="password" onChange={handleChange} required={true} icon={openEye} onToggle={togglePassword} value={formState.password}/>
                </div>


<CustomButton type="submit" buttonText="Sign In" className="w-full" isLoading={loading} disabled={loading}  />
            </form>

         <div className='my-4 text-center'>Don’t have an account?  <a href="/sign-up">Sign Up</a> </div>

            </div>
    )
}