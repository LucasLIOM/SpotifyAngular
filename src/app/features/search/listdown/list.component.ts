import { Component, Input, OnInit } from '@angular/core';
import { ListService } from 'src/app/core/services/list/list.service';
import { SearchService } from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  headers: string[] = ['Id', 'Title', 'Title_short', 'Link', 'Duration', 'Rank', 'Explicty_lycris'];

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  deletePerson(event: DeleteEvent): void {
    this.listService.delete(event.id).subscribe(() => {
      this.listService.all().subscribe(event.callback);
    });
  }
}
