import React from 'react'; 
import signupimg from '../assets/images/signup.gif';
import avatar from '../assets/images/doctor-img01.png'
import {useState} from 'react';
import {Link} from 'react-router-dom';
const Signup = () => {

    const [selectedfile,setselectedfile] = useState(null)
    const [previewURL,setpreviewURL] = useState('')

    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        photo:'',
        gender:'',
        role:'patient'
    })

    const handleInputChange = e=>{
        setFormData({... formData,[e.target.name]:e.target.value})
    }

    const handleFileInputchange = async(event)=>{
        const file = event.target.files[0]

        console.log(file)
    }

    const submitHandler = async event =>{
        event.preventDefault()
    }
    return(
        <section className='px-5 xl:px-0'>
            <div className='max-w-[1170px] mx-auto'>
                <div className='grid grid-cols-2 lg:grid-cols-2'>
                    <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
                        <figure className='rounded-l-lg'>
                            <img src={signupimg} alt="" className='w-full rounded-l-lg' />
                        </figure>
                    </div>

                    <div className='rounded-l-lg lg:pl-16 py-10'>
                        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
                            Create an <span className='text-primaryColor'>account</span></h3>

                            <form onSubmit={submitHandler}>
                    <div className='mb-5'>
                        <input type="text" placeholder='Full Name' name='fname'
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61]
                        focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                        placeholder:text-textColor rounded-md cursor-pointer" required/>
                    </div>
                    <div className='mb-5'>
                        <input type="email" placeholder='Email' name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61]
                        focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                        placeholder:text-textColor rounded-md cursor-pointer" required/>
                    </div>
                    <div className='mb-5'>
                        <input type="password" placeholder='Password' name='password'
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61]
                        focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                        placeholder:text-textColor rounded-md cursor-pointer" required/>
                    </div>


                    <div className='mb-5 flex items-center justify-between'>
                        <label className='text-headingColor font-bold text-[16px] leading-7'>Are you a:
                        <select name="role" value={formData.role} onChange={handleInputChange}
                        className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none" id="">
                            <option value="patient">Patient</option>
                            <option value="doctor">Doctor</option>
                        </select>
                        </label>

                        <label className='text-headingColor font-bold text-[16px] leading-7'>Gender:
                        <select name="role" value={formData.gender} onChange={handleInputChange}
                        className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none" id="">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        </label>
                    </div>

                    <div className='mb-5 flex items-center gap-3'>
                        <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                            <img src={avatar} alt="" className='w-full rounded-full' />
                        </figure>

                        <div className='relative w-[130px] h-[50px]'>
                            <input type="file" name="photo" id="customfile" accept='.jpg, .png'
                            className='absolute top-0 left-0 w-full opacity-0 cursor-pointer'/>
                            <label htmlFor="customfile" onChange={handleFileInputchange}
                            className='absolute top-0 left-0 w-full flex items-center px-[0.75rem] py-[0.75rem]
                            text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor 
                            font-semibold rounded-lg truncate cursor-pointer'>Upload Photo</label>
                        </div>
                    </div>
                    <div className="mt-7">
                        <button className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3" type="submit">Sign Up</button>
                    </div>


                    <p className="mt-5 text-textColor text-center">Already have an account?
                    <Link to='/login' className="text-primaryColor font-medium">Login</Link></p>
                            </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup