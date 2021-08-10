import { AbstractControl, ValidationErrors } from "@angular/forms";

export function PasswordCheck(cpass: AbstractControl): ValidationErrors|null
{
    let cpassword: string=cpass.value;
    let password: string= cpass.root.get("Password")?.value;
    if (!(cpassword==password))
    {
        return {"error":true};
        
    }
    return null;
}