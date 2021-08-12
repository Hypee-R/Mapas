import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  constructor(
    public _fb: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = _fb.group({
      titulo: data.titulo,
      desc: data.desc
    });
  }

  ngOnInit(): void {
  }

  guardarCambios(){
    this.dialogRef.close( this.form.value );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
