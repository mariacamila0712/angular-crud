import { Component, OnInit } from '@angular/core';
import { PostService } from '../Post.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css'],
})
export class ActualizarComponent {
  public titulo = '';
  public cuerpo = '';
  public id: number;

  constructor(private _service: PostService) {}

  update() {
    this._service
      .editarPost(this.titulo, this.cuerpo, +this.id)
      .subscribe((res) => {
        console.log(res);
        alert('Edición Satisfactoria!');
      });
  }
}