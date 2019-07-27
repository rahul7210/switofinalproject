import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {


  onSubmit(value:any){
    console.log(value);
  }
  constructor() {

/*
 *  Validation form with jQuery and animation.css
 *  
 *  Check for every input on onBlur event
 *  
 *  1. Check if input is empty
 *  2. Check if e-mail is invalid
 *  3. Check match of passwords
 *  
 *  Feel free to suggest improvements! _o/
 */

$(document).ready(function(){ // <-- is this necessary in codepen?
  $('form').on('blur', 'input', checkForValidations);
  $('form').on('focus', 'input', removeValidationClass);
});

function checkForValidations(evt) {
  var $obj = $(this);
  if ($obj.hasClass('required')){
      if (emptyField($obj)){
          shake($obj);
      } else {
          $obj.removeClass().addClass('success');
      }
  }
  if ($obj.hasClass('email')){
      if (!emptyField($obj)){
          validaEmail($obj);
      }
  }
  if ($obj.hasClass('confirmation')){
      if (!emptyField($obj)){
          matchFields($obj);
      }
  }
}

function removeValidationClass(evt) {
  $(this).removeClass('error animated shake');
}

function emptyField($objeto){
  return (($objeto.val() == '') ? true : false);
}

function shake($objeto){
  /*$objeto.effect('shake', { // needs jQuery UI
      distance: 10,
      times: 2
  });*/
  $objeto.removeClass('success').addClass('error animated shake');
}

function validaEmail($objeto){
  var er = RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
  if(er.test($objeto.val()) == false){
      shake($objeto);
  }
}

function matchFields($objeto){
  var parentID = '#' + $objeto.attr('ID').replace('2', '');
  if ($(parentID).val() != $objeto.val()){
      shake($objeto);
  }
}


/*
Animate.css - https://daneden.me/animate
LICENSED UNDER THE  MIT LICENSE (MIT)

Copyright (c) 2012 Dan Eden

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/











   }

  ngOnInit() {
  














   
  }

}
