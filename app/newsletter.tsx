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

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Newsletter() {
   
    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>){
        if (event.key === 'Enter') {
          // Perform your desired action here
            console.log('Enter key pressed');
  
        }
    }
    
    
    return (<>
    <div className=" pr-12    flex items-center lg:w-2/3  ">
            <Label htmlFor="terms" className=" text-center pr-2"  >Subscribe to our Newletter  </Label> <p className="pr-4">:</p>
        <Input className="rounded-full" id="terms" type="email" placeholder="Email" onKeyDown={handleKeyPress} />
        
                    </div>
    </>)
}