"use client";
import Label from "@/components/Front/UI/Label";
import Input from "@/components/Front/UI/Input";
import TableCheckbox from "@/components/Front/Company/TableCheckbox"
import Link from "next/link";
import { useEffect,useState } from 'react'
import Button from "@/components/Front/UI/Button";
import { useAuth } from "@/context/UserContext";
import Select from 'react-select';
import AddressAutocomplete from "./AddressAutocomplete";
import { useSearchParams } from "next/navigation";




export const SignupForm = () => {
    const [registerData, setRegisterData] = useState([]);
    const [address, setAddress] = useState('');
    const serchParam = useSearchParams();
    // console.log(serchParam.get('guest'));
    const [userTypes, setUserTypes] = useState([
        {
            value:0,
            label:'Vendor'
        },
        {
            value:1,
            label:'Manager'
        },
        {
            value:2,
            label:'Company'
        }
    ]);
	

useEffect(() => {
   //setIsGuest([userTypes[0]]);
  }, []);
	
	
	
	

    const [userLevels, setUserLevels] = useState([
        {
            value:1,
            label:'Elite'
        },
        {
            value:2,
            label:'Pro'
        },
        {
            value:3,
            label:'Business'
        }
    ]);
	
	const [managerLevels, setManagerLevels] = useState([
        {
            value:0,
            label:'Regional'
        },
        {
            value:1,
            label:'Property'
        },
        {
            value:2,
            label:'Leasing / Assistant Manager'
        }
		,
        {
            value:3,
            label:'Property Management Company'
        }
    ]);
	
	

    const [isGuest, setIsGuest] = useState(serchParam.get('guest')==1&&userTypes[0]);
    
    const [isLevel, setIsLevel] = useState(serchParam.get('guest')==1&&userLevels[0]);
    const [isManagerLevel, setIsManagerLevel] = useState(serchParam.get('guest')==1&&managerLevels[0]);
    const [showManager, setshowManager] = useState(false);
    const [showLevel, setshowLevel] = useState(false);


    const {register,isLoding} = useAuth();
    
    const makeRequest = (e) => {
        e.preventDefault();
        var formData = new FormData(e.target);
        register(formData)
    };
    
    const userTypeHandle = (e) => {
         setIsGuest(e.target);
		 
		 const evalue=parseInt(e.value);
		 console.log(evalue);
		 
		     if(evalue==0)
			 {
				setshowLevel(true); 
				setshowManager(false); 
			 }
			 else if(evalue==1)
			 {
				setshowManager(true); 
			    setshowLevel(false); 

			 }
			 else{
				setshowLevel(false); 
				setshowManager(false); 
				
				 
			 }
		 
        
           //setshowManager(true);
		   //setshowManager(true);

       
		
		
		
    };


      const userLevelHandle = (e) => {
        setIsLevel(e.target);
		
    };
	const managerLevelHandle = (e) => {
        setIsManagerLevel(e.target);
		
    };
	

    return (

        <form action="#" method="POST" className="mx-auto mt-6" id="register_form" onSubmit={makeRequest}>
            <div className="">

            <div className="grid grid-cols-2 gap-x-4 pb-2">
                <div className="col-span-2 my-2" >
                    <Label label="User Type" required="required" />
                    <div className="mt-2.5">
                    <Select id="usertype"
                        name="type"
                        value={isGuest}
                        options={userTypes}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={userTypeHandle}
                    />
                    </div>
                </div>
            </div>


 <div className="grid grid-cols-2 gap-x-4 pb-2" id="userlevel" style={{display: showLevel?"block":"none" }} >
                <div className="col-span-2 my-2" >
                    <Label label="User Level" required="required" />
                    <div className="mt-2.5">
                    <Select
                        name="level"
                        value={isLevel}
                        options={userLevels}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={userLevelHandle}
                    />
                    </div>
                </div>
            </div>
			
			
			<div className="grid grid-cols-2 gap-x-4 pb-2 hideusertypelevel" id="managerlevel"
			style={{display: showManager?"block":"none" }}>
                <div className="col-span-2 my-2" >
                    <Label label="Type Manager" required="required" />
                    <div className="mt-2.5">
                    <Select
                        name="managertype"
                        value={isManagerLevel}
                        options={managerLevels}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={managerLevelHandle}
                    />
                    </div>
                </div>
            </div>


			
			
			
            <div className="w-full my-2 pb-3" >
                <Label label="Name" required="required" />

                <div className="mt-2.5">
                <Input name="name" id="name" value={registerData.name} onChange={(e) => {
                        var value = e.target.value; 
                        setRegisterData({...registerData, name: value}); 
                    } 
                } />
                </div>
                {/* {renderFieldError('name')} */}
            </div>
			
			<div className="w-full my-2 pb-3" >
                <Label label="Company Name"  />

                <div className="mt-2.5">
                <Input name="company_name" id="company_name" value={registerData.company_name} onChange={(e) => {
                        var value = e.target.value; 
                        setRegisterData({...registerData, company_name: value}); 
                    } 
                } />
                </div>
                {/* {renderFieldError('name')} */}
            </div>
			
			
			
			
			
           
		   <div className="w-full my-2 pb-3" >
                <Label label="Email" required="required" />

                <div className="mt-2.5">
                <Input name="email" id="email" value={registerData.email} onChange={(e) => {
                        var value = e.target.value; 
                        setRegisterData({...registerData, email: value}); 
                    } 
                } />
                </div>
                {/* {renderFieldError('email')} */}
            </div>
			<div className="w-full my-2 pb-3" >
                <Label label="Mobile" required="required" />

                <div className="mt-2.5">
                <Input name="mobile" id="mobile" value={registerData.mobile} onChange={(e) => {
                        var value = e.target.value; 
                        setRegisterData({...registerData, mobile: value}); 
                    } 
                } />
                </div>
                {/* {renderFieldError('mobile')} */}
            </div>
			
            <div className="w-full my-2 pb-3">
                <Label label="Password" required="required" />
                <div className="mt-2.5">
                <Input type="password" name="password" id="password" value={registerData.password} 
                onChange={(e) => {
                        var value = e.target.value; 
                        setRegisterData({...registerData, password: value}); 
                    } 
                }
                />
                </div>
                {/* {renderFieldError('password')} */}
            </div>
			
            <div className="w-full my-2 pb-3">
                <Label label="Confirm Password" required="required" />
                <div className="mt-2.5">
                <Input type="password" name="password_confirmation" id="password_confirmation" value={registerData.passwordConfirmation} onChange={(e) => {
                        var value = e.target.value; 
                        setRegisterData({...registerData, password_confirmation: value}); 
                    } 
                } />
                </div>
                {/* {renderFieldError('password_confirmation')} */}
            </div>
			
			
						<AddressAutocomplete />

			
            <div className="flex gap-2 pt-3 pb-3">
                <TableCheckbox />  <p className=" text-lg font-semibold"> Remember Me</p>
            </div>

            <div className="my-4 submit_button">
                <Button type="Submit" className="block sm:w-auto w-full rounded-md bg-[#c13e27] px-10 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" is_loding={isLoding} disabled={isLoding}  />
            </div>

            <div>
                <Link href="/login" className="text-[#c13e27] text-lg font-semibold">Login</Link>
            </div>
            <div>
            </div>
            </div>
        </form>
    );
};