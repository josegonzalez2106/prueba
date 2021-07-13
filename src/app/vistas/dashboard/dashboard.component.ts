import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import {Router } from '@angular/router';

import { ListaUsuariosI } from '../../modelos/Usuarios.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

usuarios:any;

  constructor(private api: ApiService, private router:Router) { }

  
  ngOnInit(): void {
    this.api.getAllUsers(1).subscribe(data =>{
       this.usuarios=data;
    });

    

  }
  editarfor(editarfor: any) {
    console.log(this.editarfor);
  }




  nuevoUsuario(){
    this.router.navigate(['nuevo']);
  }

}
