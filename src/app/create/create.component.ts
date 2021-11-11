import { Component, OnInit } from '@angular/core';
import { PostService } from '../Post.service';

@Component({
  selector: 'app-crear',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CrearComponent {
  public titulo = '';
  public cuerpo = '';

  constructor(private _service: PostService) {}

  save() {
    this._service.postData(this.titulo, this.cuerpo).subscribe((res) => {
      console.log(res);
      alert('Inserción Satisfactoria!');
    });
  }
}
