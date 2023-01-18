import { Injectable } from "@angular/core";
import { User } from "./user";

@Injectable({
    providedIn:'root'
})
export class AuthService{


    currentUser:User = {
        username: "",
        password: "",
        isAdmin: false
    } ;
    redirectToUrl!:string;

    constructor(){}

    isLoggedIn():boolean{
        return this.currentUser.username ? true : false ;
    }

    users:string[]=['Dikshant','Gaurav','ayush']

    login(username:string,password:string):void{

    if(this.users.includes(username)){
     this.currentUser={
        username,
        password,
        isAdmin:true
     };
    } else {
        this.currentUser={
            username,
            password,
            isAdmin:false 
    };

    console.log(this.currentUser.username);
}

    }

    logOut():void{
        this.currentUser= {username: "", password: "", isAdmin: false};
    }
}