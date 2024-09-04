import { useState } from "react"
import Check from './assets/images/icon-checkbox-check.svg'
import Done from './assets/images/icon-success-check.svg'
function Contact() {
    const [success , setSuccess] = useState(false)
    const [errors , setErrors] = useState({})
    const [formData,setFormData] = useState({
        fname:'',
        lname:'',
        mail:'',
        type:'',
        message:'',
        check:false
    })
    const validate =()=>{
    const formErrors = {}
        if (!formData.fname)
            formErrors.fname = 'This field is required'
        if (!formData.lname)
            formErrors.lname = 'This field is required'
        if(!formData.mail)
            formErrors.mail = 'Please enter a valid email address'
        if(!formData.type)
            formErrors.type = 'Please select a query type'
        if(!formData.message)
            formErrors.message = 'This field is required'
        if(!formData.check) 
            formErrors.check = 'To submit this form, please consent to being contacted'
        return formErrors
    }

    const handleCHange = (e) => {
        const {name , value ,check} = e.target ;
        setFormData({...formData , [name]: value}) ;
        }
        const handleRadioChange = (value) => {
            setFormData({
                ...formData,
                type: value,
            });
        };
        const hSubmit = (e) => {
            e.preventDefault();
            const formErrors = validate();
            setErrors(formErrors);
    
            if (Object.keys(formErrors).length === 0) {
                setSuccess(true);
                setFormData({
                    fname:'',
                    lname:'',
                    mail:'',
                    type:'',
                    message:'',
                    check: false
                });
    
                // Hide success message after 3 seconds
                setTimeout(() => {
                    setSuccess(false);
                }, 3000);
            }
        };
    return (
        <div className="grid place-items-center">
                        {/* ------------------------------------------*/}

            <div className={`${success?'block' : 'hidden'} grid gap-1 rounded-md bg-[var(--Grey-900-darker)] p-4`}>
                <div className="flex gap-2 items-center">
                    <img src= {Done} className="w-3 h-3"/>
                    <p className="text-white text-xs">Message Sent</p>
                </div>
                <p className="tb text-[var(--Grey-500-medium)]">Thanks For completing the form, we'll be in touch soon</p>
            </div> 

                        {/* ------------------------------------------*/}


        <form onSubmit={hSubmit} className="grid gap-4 sm:grid-cols-2 bg-[var(--White)] p-8 rounded-xl w-max">
            <label className="sm:col-span-2 mb-4 text-2xl font-bold w-80">Contact Us</label>
            <label className="grid gap-1 font-normal">
                Firest Name *
                <input onChange={handleCHange} type="text" value={formData.fname} name="fname" className="border border-[var(--Grey-500-medium)] rounded-md h-9 p-4" />
               <span>{errors.fname}</span>
            </label>

            <label className="grid gap-1 font-normal">
                last Name *
                <input onChange={handleCHange} type="text" value={formData.lname} name="lname" className="border border-[var(--Grey-500-medium)] rounded-md h-9 p-4" />
                <span>{errors.lname}</span>
            </label>

            <label className="grid gap-1 font-normal sm:col-span-2">
                Email Address *
                <input onChange={handleCHange} type="text"value={formData.mail}  name="mail" className="border border-[var(--Grey-500-medium)] rounded-md h-9 p-4" />
                <span>{errors.mail}</span>
            </label>


            <div className="gap-5 font-normal grid lg:grid-cols-2 sm:col-span-2">
                <p className="col-span-2">Query Type *</p>
                <div
                    onClick={() => handleRadioChange("general")}
                    className={`flex items-center gap-1 sm:col-span-1 col-span-2 p-2 border border-[var(--Grey-500-medium)] hover:border-[var(--Green)] focus:border-[var(--Green)] rounded-md cursor-pointer ${formData.type === "general" ? "border-2 border-[var(--Green)] bg-[var(--Green-200)]" : ""}`}
                >
                    <div div className={`${formData.type === "general" ? "border-2 border-[var(--Green)]" : ""} w-4 ml-2 h-4 rounded-full border flex items-center justify-center`}><div className={`w-2 h-2 rounded-full ${formData.type === "general" ? "bg-[var(--Green)]" : "border-[var(--Grey-500-medium)]"}`}></div></div>
                    General Enquiry
                </div>

                <div
                    onClick={() => handleRadioChange("support")}
                    className={`flex items-center gap-1 sm:col-span-1 col-span-2 p-2 border border-[var(--Grey-500-medium)] hover:border-[var(--Green)] focus:border-[var(--Green)] rounded-md cursor-pointer ${formData.type === "support" ? "border-2 border-[var(--Green)] bg-[var(--Green-200)]" : ""}`}
                >
                    <div className={`${formData.type === "support" ? "border-2 border-[var(--Green)]" : ""} w-4 ml-2 h-4 rounded-full border flex items-center justify-center`}><div className={`w-2 h-2 rounded-full ${formData.type === "support" ? "bg-[var(--Green)]" : "border-[var(--Grey-500-medium)]"}`}></div></div>
                    Support request
                </div>
                
                <span>{errors.type}</span>
            </div>




           <label className="grid sm:col-span-2 gap-1 " >
                Message *   
                <textarea onChange={handleCHange} value={formData.message} name="message" className="h-24 border focus-visible:border-[var(--Green)] outline-none p-2 border-[var(--Grey-500-medium)] rounded-md resize-none"></textarea>
                <span>{errors.message}</span>
           </label>
           <label className="grid items-center gap-1 sm:col-span-2 " >
            <div className=" flex gap-4 items-center" onClick={() => {!formData.check ? setFormData({...formData ,check:true}):setFormData({...formData ,check:false}) }}>
                <div className="w-4 ml-2 h-4 rounded-sm border border-[var(--Grey-500-medium)] flex items-center justify-center"><img src={Check} className={`${formData.check ?'block' : 'hidden'}`} /></div>
                <p>I consent being contacted by the team * </p>
            </div>
            <span>{errors.check}</span>
           </label>
           <button type="submit" className="sm:col-span-2 bg-[var(--Green)] hover:bg-[var(--Grey-900-darker)] p-2 text-white rounded-md">Submit</button>
        </form>
        </div>
            )
}
export default Contact