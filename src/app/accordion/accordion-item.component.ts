import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.scss'
})
export class AccordionItemComponent implements OnInit {

  @Input()
  showBody = false;
  constructor() {}

  ngOnInit(): void {
  }

  toogle() {
    this.showBody = !this.showBody;
  }
}
