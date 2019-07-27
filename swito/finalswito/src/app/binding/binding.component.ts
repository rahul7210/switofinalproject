import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent  {

 employee: any[]=[{
   "fname":"fohny",
   "lname":"sins",
   "age":28},
   {
    "fname":"kia",
    "lname":"malifa",
    "age":26},
    {
      "fname":"funny",
      "lname":"neone",
      "age":32}]
}
