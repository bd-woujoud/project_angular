import { Injectable } from '@angular/core';
import { Societe } from '../societe';

@Injectable({

  providedIn: 'root'

})

export class SocietesService {


  SOCIETE_DATA: Societe[] = [
    
    {id:0,nom :"SDI",domaine:"informatique",adresse:"kairouan"},
    {id:1,nom :"okba",domaine:"pharmaceutique",adresse:"sousse"},
    {id:2,nom :"textilos",domaine:"confection",adresse:"mahdia"},
 
 
  ];

  constructor() { }

  onDelete(id:Number){

    // this.table = this.SOCIETEService.SOCIETE_DATA.filter((c) => c.id != id);
    this.SOCIETE_DATA.splice( this.SOCIETE_DATA.indexOf( this.SOCIETE_DATA.find((c) => c.id === id)),1)
    console.log("supp SOCIETE",this.SOCIETE_DATA);
   }
   addUser(data){
   
    this.SOCIETE_DATA.push(data) 
  
   }
   
updateUser(user) {
  let i = this.SOCIETE_DATA.indexOf(user);
  this.SOCIETE_DATA[i] = user;
}
getUserById(id) {
  return this.SOCIETE_DATA.find((c) => c.id == id);
}



}
