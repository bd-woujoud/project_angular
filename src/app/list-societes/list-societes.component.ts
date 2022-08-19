import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { SocietesService } from '../services/societes.service';

@Component({

  selector: 'app-list-societes',
  templateUrl: './list-societes.component.html',
  styleUrls: ['./list-societes.component.css']

})

export class ListSocietesComponent implements OnInit {
  tableHeaderSociete=['#','Nom','Domaine','Adresse','actions']
  tableColumnSociete=['id','nom','domaine','adresse'] //parent lel fils shared transfert
  listSociete=[]
 

  constructor(private societeService:SocietesService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getSociete()
  }

  getSociete(){

    this.listSociete = this.societeService.SOCIETE_DATA ;
    console.log("all SOCIETE",this.listSociete);
    
  }

  onDelete(id:Number){
   this.societeService.onDelete(id) ;
   
     console.log("supp users");
    }
    
    updateSociete(id:number){
      console.log('here update');
      
    }

  getActionOutput(data:{action:string,id:number}){  
    if(data.action==='delete') this.onDelete(data.id)
    else this.updateSociete(data.id)
}

openDialog(): void {
  let dialogRef = this.dialog.open(AddModalComponent, {
    width: '600px',
    data: 'Add Post'
  });
}
}
