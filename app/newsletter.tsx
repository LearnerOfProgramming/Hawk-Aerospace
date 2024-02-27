

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Newsletter() {
   
    
    return (<>
    <div className="self-end pr-12    flex items-center w-1/4">
            <Label htmlFor="terms" className=" text-center pr-2"  >Subscirbe to our Newsletter  </Label> <p className="pr-4">:</p>
                        <Input id="terms" type="email" placeholder="Email" />
                    </div>
    </>)
}