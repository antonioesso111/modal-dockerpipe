export class Person {
    // Properties
    simbol?:string;
    unitetime?:number;
    trigger?: number;
    status?: number;

    selectedSkills = {
      JavaScript: false,
      Angular: false
    };


    // Constructor
    constructor() {
     
    }
  
    updatePersonDetails(simbol: string, unitetime: number, tr: number, status:number): void {
        this.simbol = simbol;
        this.unitetime = unitetime;
        this.trigger = this.trigger;
        this.status = status;
      }
    }
  
