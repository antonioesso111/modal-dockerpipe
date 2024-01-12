import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  constructor(private ngbMODAL : NgbModal){}

  open(){
    
   const modalRef= this.ngbMODAL.open(ModalComponent)
   modalRef.componentInstance.optionInput=1
   modalRef.componentInstance.modaltitle=`M 1 T`
   modalRef.componentInstance.modalbody=`M 1 B`

  }

  nochoice(){
    
   const modalRef= this.ngbMODAL.open(ModalComponent)
   modalRef.componentInstance.optionInput=2
   modalRef.componentInstance.modaltitle=`M 2 T`
   modalRef.componentInstance.modalbody=`M 2 B`
  }

  fm(){
    
   const modalRef= this.ngbMODAL.open(ModalComponent)
   modalRef.componentInstance.optionInput=3
   
  }

  
  
}
