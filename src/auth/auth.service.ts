import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { read } from 'fs';


@Injectable()
export class AuthService {
 constructor(
     private usersService: UsersService,
     private jwtService: JwtService

     ) {}


 async validateUser (username:string ,password: string) :Promise<any> {

    const user = await this.usersService.findByName(username)
    if(user && user.password === password) {
        const {password,...result}=user
        console.log('hello welcome user ');
        
        return result

    }
    return null
 }
 
 async login(user:any) {
     const payload = {username :user.username,sub:user.userId}
     return {
         access_token :this.jwtService.sign(payload)
     }
 }


}
