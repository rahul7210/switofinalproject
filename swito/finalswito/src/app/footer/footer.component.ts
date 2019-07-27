import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  name:string="";
  email:string="";
  subject:string="";
  message:string="";
  myform: FormGroup;
    submitted = false;
  constructor(private us: MessageService,private formBuilder: FormBuilder) { }
 
  ngOnInit() {


    this.myform = this.formBuilder.group({
      name: ['', Validators.required,Validators.maxLength(20),Validators.minLength(3)],
      
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(6)]]
  });


  }
  addData( ) {
if(this.subject.length<5||this.subject.length==0)
{
  alert('your subject is too short');
}

if(this.name.length<3||this.name.length==0)
{
  alert('your name is too short');
}


 else    if(this.message.length<10||this.message.length==0){
      alert('your message is too short');
    }
    else
    {   this.us.addData(this.name,this.email,this.subject,this.message);
      // this.us.register(this.name,this.address,this.city,this.password,this.email);
      alert('your message has been submitted');
    }
 
    // console.log(this.name)
}
PostData(registerForm:NgForm)
{
  console.log(registerForm.controls);
}

}