"use client";
import React, { useState } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaArrowRight } from "react-icons/fa6";


export function NewsletterDialog() {

  const [inputs, setInputs] = useState({
    email: "",  
  })
  const [empty,setEmpty] = useState(true)
  


  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>){
    if (event.key === 'Enter') {
      // Perform your desired action here
        console.log('Enter key pressed');

    }

  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    e.target.value ? setEmpty(false) : setEmpty(true);
  };
    return (
      <AlertDialog >
          <div className=" pr-12    flex items-center lg:w-5/6  ">
            <Label htmlFor="terms" className=" text-center pr-2"  >Subscribe to our Newsletter  </Label> <p className="pr-4">:</p>
            <Input className="rounded-full flex justify-end mr-2" name="email" value={inputs.email || ''} id="email" type="email" placeholder="Email" onKeyDown={handleKeyPress} onChange={(e) => handleChange(e)}/>
          
            { empty?
              <AlertDialogTrigger className=' '>
                <FaArrowRight className=' text-slate-400 ' />
                </AlertDialogTrigger>
              :
              <AlertDialogTrigger className=''>
              <FaArrowRight className=' text-white' />
              </AlertDialogTrigger>
            }
      
        </div>
        {
          empty?<></>:<AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Subscribe to our Newsletter?</AlertDialogTitle>
            <AlertDialogDescription>
                You will now receive updates at <b>
                {inputs.email}
                </b>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className='bg-secondary'>Subscribe</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
   }     
   </AlertDialog>
  

    )
}
  
 function Newsletter() {
   
    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>){
        if (event.key === 'Enter') {
          // Perform your desired action here
            console.log('Enter key pressed');
  
        }
    }
    
    
    return (<>
    <div className=" pr-12    flex items-center lg:w-2/3  ">
            <Label htmlFor="terms" className=" text-center pr-2"  >Subscribe to our Newsletter  </Label> <p className="pr-4">:</p>
                        <Input className="rounded-full" id="terms" type="email" placeholder="Email" onKeyDown={handleKeyPress} />
                    </div>
    </>)
}
  