import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bmodal',
  templateUrl: './bmodal.component.html',
  styleUrls: ['./bmodal.component.css']
})
export class BmodalComponent {
  constructor( private elementRef: ElementRef){}

  
  /* myFunc(){
    console.log("function called");
  } */

  esso() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#d1ef23';
        
}

}
