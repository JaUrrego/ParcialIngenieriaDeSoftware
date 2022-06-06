import { Component } from '@angular/core';
import { Receta } from './clases/receta';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parcial03';
  recetaArray: Receta[] =[
    {nombre:"Sandwich", id:1, autor:"Camila Soto",descripcion:""}
  ];
  nuevaReceta: Receta = new Receta();
  addoredit(){
    this.nuevaReceta.id = this.recetaArray.length +1;
    
    this.recetaArray.push(this.nuevaReceta);

    this.nuevaReceta = new Receta();
  }
  editar(receta: Receta){
    this.nuevaReceta=receta;
    

  }
  borrar(){
    if(confirm("Esta seguro de querer eliminar esta receta?")){
      this.recetaArray = this.recetaArray.filter(x => x != this.nuevaReceta)
      this.nuevaReceta=new Receta();
    }
  }
  
}
