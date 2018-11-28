import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  listBreakpoint: number;
  tileBreakpoint: number;

  @Input() scrollElement: any; 

  constructor() { }

  onResize(event) {
    this.listBreakpoint = (window.innerWidth <= 1080) ? 1 : 4;
    this.tileBreakpoint = (window.innerWidth <= 1080) ? 1 : 3;
  }

  scrollToElement(id): void {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  ngOnInit() {
  	this.listBreakpoint = (window.innerWidth <= 1080) ? 1 : 4;
  	this.tileBreakpoint = (window.innerWidth <= 1080) ? 1 : 3;
  }
 
}
