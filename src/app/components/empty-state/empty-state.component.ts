import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
  standalone: true,
})
export class EmptyStateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
