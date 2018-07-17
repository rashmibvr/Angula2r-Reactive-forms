import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector : "signup-form",
    templateUrl : "./signup.component.html"
})

export class SignupForm{
form = new FormGroup({
    username : new FormControl(' ', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("Rashmi")
    ]),
    password : new FormControl(' ',  [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("rash")
    ]),
    email : new FormControl(' ',  [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("rashmi@gmail.com")
    ])
})
get username(){
    return this.form.get("username");
}
get password(){
    return this.form.get("password");
}
get email(){
    return this.form.get("email");
}
}