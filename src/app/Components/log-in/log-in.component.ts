import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

 
  ngOnInit(): void {
    
  }

  CardRegister() {
     let card = document.querySelector('.card')
    card.classList.toggle('is-flipped')
    document.getElementById("login").style.display="none";
     }
     CardLogin() {
       let card = document.querySelector('.card')
         card.classList.remove('is-flipped')
         document.getElementById("login").style.display="";
       }
}

