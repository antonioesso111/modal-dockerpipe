import { Component, Input, OnInit, Output } from '@angular/core';
import { FormsModule,FormGroup, FormControl, FormArray } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Person } from '../person.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})







export class ModalComponent implements OnInit{ 

  
  checkboxOptions = [
    { value: '1H', label: '1H' },
    { value: '4H', label: '4H' },
    { value: '1D', label: 'DAY' },
  ];

  selectedOptions: { [key: string]: boolean } = {};


  checkboxOptions2 = [
    { value: 'OO', label: 'Only Once' },
    { value: 'UED', label: 'Until Expiration date' },
    
  ];
  selectedOptions2: { [key: string]: boolean } = {};








  @Input() optionInput : number = 1; 
  @Input() modaltitle: string = '';
  @Input() modalbody: string = '';
  // @Input() person = new Person() ;

  



 

 


  
sentiment: string = '';
  alertname: string = '';
  
  
// modal object

        
 firstModal : boolean = false ;
 secondModal : boolean = false;
 thirdModal : boolean = false;


 
  constructor(
    private modalService: NgbModal
  ){
     
  }
  ngOnInit() {

   
    
    if(this.optionInput === 1) {
      this.firstModal = true
      }else 
      if(this.optionInput === 2){
        this.secondModal = true;

      }else if
      (this.optionInput === 3){
        this.thirdModal = true;}    
  }

 onSubmit(){
  console.log('Alert name:',this.alertname);
  console.log('Sentiment:',this.sentiment);
  console.log('Unite time:', this.selectedOptions);
   console.log('Triggar:', this.selectedOptions2);


 }
  
 close(){
  this.modalService.dismissAll();
 }
}
