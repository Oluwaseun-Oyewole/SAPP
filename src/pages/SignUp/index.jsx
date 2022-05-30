import React, {useState} from "react"
import { register } from '../../api/ApiRequests';
import { CustomButton } from '../../components/Input/Button'
import { InputField } from '../../components/Input/Input'
import emailIcon from "../../assets/icons/email.svg"
import userIcon from "../../assets/icons/user.svg"
import openEye from "../../assets/icons/open-eye.svg"





export const SignUp = () => {
    const initialValue = { email: "", password: "", first_name:"", last_name:"" };
    const [formState, setFormState] = useState(initialValue);
    const [show,setShowPassword ] = useState(false)
    const [show2,setShowPassword2 ] = useState(false)
  
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")


    const clearForm = () => {
        setFormState(initialValue);
    };
  

    const togglePassword = () => {
        setShowPassword(!show)
    }
    const togglePassword2 = () => {
        setShowPassword2(!show2)
    }
  
    const handleChange = (e) => {
        setError(false)
        setSuccess(false)
      const { name, value } = e.target;
      const newState = { ...formState };
      newState[name] = value;
      setFormState(newState);
    };
  
  
    const submit = async(e) => {
      e.preventDefault();
      setLoading(true)
     
  try {
      const res = await register(formState)
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

            <h1 className="text-2xl text-left my-5">Create Account</h1>

{success && (
    <div className="bg-green-100 rounded p-5 text-green-900 my-4">
               <div className="font-bold">Success</div>
               <div className="font-thin">Account created successfully</div>
            </div>
)}
            

{error && (
 <div className="bg-red-100 rounded p-5 text-red-900 my-4">
 <div className="font-bold">Error</div>
 <div className="font-thin">{errorMessage}</div>
</div>
)}
           

            <form onSubmit={submit} >

                <div className="lg:flex">
                    <div className="lg:w-1/2 w-full mr-3">
                    <label htmlFor="">First Name</label>
                <InputField placeholder="john" name="first_name"  type="text" required={true} onChange={handleChange} icon={userIcon}  />
                    </div>

                    <div className="lg:w-1/2 w-full mr-3">
                    <label htmlFor="">Last Name</label>
                <InputField placeholder="doe"  type="text" name="last_name" required={true}  onChange={handleChange}  icon={userIcon}/>
                    </div>
                </div>
                <div className="mb">
                <label htmlFor=""> Email</label>
                <InputField placeholder="johndoe@gmail.com" name="email"  type="email" required={true} onChange={handleChange} icon={emailIcon}  />
                </div>
                <div className="mb-3">
                 </div>
                <div className="lg:flex mb-3">
                <div className="lg:w-1/2 w-full mr-3">
                    <label htmlFor=""> Password</label>
                <InputField placeholder="**********" type={show ? "text":"password"} name="password" required={true} onChange={handleChange} icon={openEye} onToggle={togglePassword}  />
                </div>

                <div className="lg:w-1/2 w-full mr-3">
                    <label htmlFor=""> Confirm Password</label>
                <InputField placeholder="**********" type={show2 ? "text":"password"} name="confirm_password" required={true} onChange={handleChange} icon={openEye} onToggle={togglePassword2} />
               </div>
                </div>


<CustomButton type="submit" buttonText="Sign In" className="w-full" isLoading={loading} disabled={loading}  />
            </form>



            <div className='my-4 text-center'>Already have an account?  <a href="/" className='text-blue-700'>Log in</a> </div>

            </div>
    )
}