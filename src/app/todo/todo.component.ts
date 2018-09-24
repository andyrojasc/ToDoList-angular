import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public actividades:{estado:boolean, tarea:string, numero:string}[]=[];
  public data:any;
  constructor() { }

  ngOnInit() {
  }

  agregarContenido(tarea){

  	this.actividades.push({'estado':true, 'tarea':''+tarea, "numero":''+this.actividades.length});
  	console.log(this.actividades[0]); 
  }

  eliminar(num){
  	for (var i = 0; i<= this.actividades.length; i++) {
  		this.data=this.actividades[i].numero;
  		if(this.data == num)
  		{
  			this.actividades.splice(i, 1);
  		}
  	}
  }

}
