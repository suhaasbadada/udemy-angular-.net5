import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function firstLetterUppercase(): ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null=>{
        const value=<string>control.value;
        if(!value) return null;
        if(value.length===0) return null;

        const firstLetter=value[0];
        const firstLetterUpper=firstLetter.toUpperCase();
        if(firstLetter!==firstLetterUpper){
            return {
                firstLetterUppercase:{
                    message:'The first letter must be uppercase',
                }
            }
        }
        return null;
    }
}