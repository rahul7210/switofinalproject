import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-noti',
  templateUrl: './noti.component.html',
  styleUrls: ['./noti.component.css']
})
export class NotiComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    var notificationBox= document.getElementById('notification-box');
var closeIcon= document.getElementById('close-icon');
var resetButton= document.getElementById('reset-button');


function toggleNotification(){
  notificationBox.classList.toggle('closed');
}

closeIcon.addEventListener('click', toggleNotification);

resetButton.addEventListener('click', toggleNotification);

                   
  }

}
