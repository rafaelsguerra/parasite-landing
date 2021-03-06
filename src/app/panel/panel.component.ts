import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  listBreakpoint: any;
  tileBreakpoint: any;
  panelHeightBreakpoint: any;

  @Input() scrollElement: any;

  constructor() { }

  onResize(event) {
    this.listBreakpoint = (window.innerWidth <= 1024) ? 1 : 4;
    this.tileBreakpoint = (window.innerWidth <= 1024) ? 1 : 3;
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  ngOnInit() {
    this.listBreakpoint = (window.innerWidth <= 1024) ? 1 : 4;
    this.tileBreakpoint = (window.innerWidth <= 1024) ? 1 : 3;
  }
}
