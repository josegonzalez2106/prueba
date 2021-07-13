import { Injectable } from '@angular/core';
import { ListaUsuariosI } from '../../modelos/Usuarios.interface';
import { usuarioI } from '../../modelos/modeloUsuario.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:any = "http://tacto-back.herokuapp.com/";

  constructor( private http:HttpClient) { }


  getAllUsers(page:any):Observable<ListaUsuariosI[]>{
    let direccion = this.url + "apilabs/users";
    return this.http.get<ListaUsuariosI[]>(direccion);
  }

  getSingleUser(id:any):Observable<usuarioI>{
    let direccion= this.url + "apilabs/users" + "userId" ;
    return this.http.get<usuarioI>(direccion);
  }

}
