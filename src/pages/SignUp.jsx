// ** Components
import { Link } from "react-router-dom";
import { Breadcrump } from "../components";

// ** styles
import '../style/regester.css'
// ** bootstrap Icons
import { Eye, EyeSlash } from "react-bootstrap-icons";

// ** react imports
import {useState } from "react";
import PhoneNumberInput from "../components/apps/CustomPhoneInput";

const initialData = {
    name:"",
    email:"",
    username:"",
    password:"",
    confirmpassword:"",
    country:"",
    city:"",
    phone:""
}

const SignUp = () => {

    

    // states
    const [viewPs,setViewPs] = useState(false)
    const [viewCps,setViewCps] = useState(false)

    const [formData,setFormData] = useState(initialData)

    const onChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    // ** functions
    const togglePassword = (type)=>{
        if(type==='ps') {
            setViewPs(!viewPs)
        }else {
            setViewCps(!viewCps)
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
    }

  return (
    <div>
      <Breadcrump slug="User Regester" />
      <div className="signup-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h3 className="h3 mb-5">Sign Up</h3>
              <form className="form-controle" onSubmit={handleSubmit}>
                <label htmlFor="name">
                  Name <span>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Type Your Full Name"
                  className="form-input"
                  name="name"
                  onChange={onChange}
                  value={formData.name}
                />

                <label htmlFor="username">
                  Username <span>*</span>
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Type Your Username"
                  className="form-input"
                  name="username"
                  value={formData.username}
                  onChange={onChange}
                />

                <label htmlFor="email">
                  Email Adress <span>*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Type Your Email Adress"
                  className="form-input"
                  name="email"
                  onChange={onChange}
                  value={formData.email}
                />

                <label htmlFor="phone">
                  Phone Number <span>*</span>
                </label>
                <PhoneNumberInput/>

                <label htmlFor="country">
                  Country <span>*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="Select Country"
                  className="form-input"
                  name="country"
                  onChange={onChange}
                  value={formData.country}
                />

                <label htmlFor="city">
                  City <span>*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Type Your City"
                  className="form-input"
                  name="city"
                  onChange={onChange}
                  value={formData.city}
                />

                <div className="row">
                  <div className="col-12 col-lg-6 position-relative">
                    <label htmlFor="city">
                      Password
                      <span>*</span>
                    </label>
                    <input
                      type={`${viewPs?'text':'password'}`}
                      id="password"
                      placeholder="Password"
                      className="form-input"
                      name="password"
                      value={formData.password}
                      onChange={onChange}
                    />
                    <div className="eye" onClick={()=>togglePassword('ps')}>{viewPs?<Eye/>:<EyeSlash/>}</div>
                  </div>
                  <div className="col-12 col-lg-6 position-relative">
                    <label htmlFor="confirmpassword">
                      Confirm Password
                      <span>*</span>
                    </label>
                    <input
                      type={viewCps?'text':'password'}
                      id="confirmpassword"
                      placeholder="Confirm Password"
                      className="form-input"
                      name="confirmpassword"
                      value={formData.confirmpassword}
                      onChange={onChange}
                    />
                    <div className="eye" onClick={()=>togglePassword('cps')}>{viewCps?<Eye/>:<EyeSlash/>}</div>
                  </div>
                </div>

                <button className="filledBtn" type="submit">Sign Up</button>
              </form>

              <p className="mt-3">Already have an Account? <Link to='signin'><b>Sign In</b></Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp
