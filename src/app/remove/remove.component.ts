import { Component, OnInit } from '@angular/core';
import { PostService } from '../Post.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css'],
})
export class EliminarComponent {
  public id: number;

  constructor(private _service: PostService) {}

  delete() {
    this._service.eliminarPost(this.id).subscribe((res) => {
      console.log(res);
      alert('Datos eliminados.');
    });
  }
}
