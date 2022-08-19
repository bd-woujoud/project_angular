import { Injectable } from '@angular/core';

import { Users } from '../Users';

@Injectable({

  providedIn: 'root'
  
})

export class UsersServiceService {

  USERS_DATA: Users[] = [

    { id: 0, nom: "khawla", prenom: "khawla", adresse: "kairouan", phoneNumber: 12345678 },
    { id: 1, nom: "ahmed", prenom: "ahmed", adresse: "sousse", phoneNumber: 78945612 },
    { id: 2, nom: "slim", prenom: "szlim", adresse: "mahdia", phoneNumber: 78945612 },
    { id: 3, nom: "fatma", prenom: "fatma", adresse: "tunis", phoneNumber: 78945612 },
    { id: 4, nom: "ahlem", prenom: "ahlem", adresse: "jerba", phoneNumber: 78945612 },

  ];

  constructor() { }

  addUser(data) {

    this.USERS_DATA.push(data)

  }

  onDelete(id: Number) {

    // this.table = this.usersService.USERS_DATA.filter((c) => c.id != id);
    this.USERS_DATA.splice(this.USERS_DATA.indexOf(this.USERS_DATA.find((c) => c.id === id)), 1)
    console.log("supp users", this.USERS_DATA);
  }

  updateUser(user) {
    let i = this.USERS_DATA.indexOf(user);
    this.USERS_DATA[i] = user;
  }
  
  getUserById(id) {
    return this.USERS_DATA.find((c) => c.id == id);
  }

}

