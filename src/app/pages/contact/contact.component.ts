import{DOCUMENT} from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name=undefined;
  address=undefined;
  lastname=undefined;
  num=undefined;
document:any;
  
  constructor(@Inject (DOCUMENT) document:Document,private router:Router) {
    this.document=document;
    
    }
  

  ngOnInit(): void {
  
}

Signup(event:any){
  if(this.document.getElementById('name').value && this.document.getElementById('lastname').value &&this.document.getElementById('num').value && this.document.getElementById('address').value){
    alert('login sucess');
    this.router.navigate([''])
  }else{
    alert('login failed');
  }
}
}
