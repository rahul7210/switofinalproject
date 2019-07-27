import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const $qrCodePane = document.querySelector('.qr-code');
const $traditionalPane = document.querySelector('.traditional');
const $form = document.querySelector('.traditional form');

function togglePane() {
  [$qrCodePane, $traditionalPane].forEach(function(pane) {
    pane.classList.toggle('active');
  });
}

[$qrCodePane, $traditionalPane].forEach(function(pane) {
  pane.addEventListener('click', togglePane, false);
  pane.addEventListener('touchstart', togglePane, false);
});

$form.addEventListener('submit', function(e) {
  e.preventDefault();
}, false);

// notification bar js starts from here
// $('.close').on('click', function() {
//   $(this).parent('.alert').hide();
// });

// $('.reset').on('click', function() {
//   $('.alert').show();
// });


    
  }

}
