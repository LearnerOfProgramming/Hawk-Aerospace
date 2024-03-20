"use client";
import React from 'react';
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


export function NewsletterDialog() {
  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>){
    if (event.key === 'Enter') {
      // Perform your desired action here
        console.log('Enter key pressed');

    }
}
    return (
      <AlertDialog>
          <div className=" pr-12    flex items-center lg:w-2/3  ">
            <Label htmlFor="terms" className=" text-center pr-2"  >Subscribe to our Newsletter  </Label> <p className="pr-4">:</p>
            <Input className="rounded-full flex justify-end" id="terms" type="email" placeholder="Email" onKeyDown={handleKeyPress}/>
        <AlertDialogTrigger>
                      Submit
        </AlertDialogTrigger>
          </div>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
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
  