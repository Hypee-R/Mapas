import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marcador } from '../../classes/marcador.class';
import {MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapaEditarComponent } from '../mapa-editar/mapa-editar.component';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];
  lat = 51.678418;
  lng = 7.809007;
  constructor(
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    if(localStorage.getItem('marcadores')){
      let mkr: any = localStorage.getItem('marcadores');
      this.marcadores = JSON.parse(mkr);
    }
  }

  ngOnInit(): void {
  }

  agregarMarcador(event: any){
    const coords: {lat: number, lng: number } = event.coords;
    const newMarker = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(newMarker);

    this.guardarStorage();
    this._snackBar.open('Marcador creado!!', 'Cerrar', {
      duration: 3000
    });
  }

  borrarMarcador(index: number){
    console.log("borrar ", index);

    this.marcadores.splice(index, 1);
    this.guardarStorage();
    this._snackBar.open('Marcador borrado!!', 'Cerrar', {
      duration: 3000
    });
  }

  editarMarcador(marcador: Marcador){
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, desc: marcador.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(!result) return;

      marcador.titulo = result.titulo;
      marcador.desc = result.desc;

      this.guardarStorage();
      this._snackBar.open('Marcador actualizado!!', 'Cerrar', {
        duration: 3000
      });

    });
  }

  guardarStorage(){

    localStorage.setItem('marcadores', JSON.stringify(this.marcadores) );

  }

}
