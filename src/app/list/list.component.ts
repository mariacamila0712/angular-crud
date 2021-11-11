import { Component, OnInit } from '@angular/core';
import { PostService } from '../Post.service';

@Component({
  selector: 'app-listar',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListarComponent implements OnInit {
  public lista: any;
  constructor(private _service: PostService) {}

  list() {
    this._service.listarPosts().subscribe((post) => {
      this.lista = post;
    });
  }

  ngOnInit() {}
}
