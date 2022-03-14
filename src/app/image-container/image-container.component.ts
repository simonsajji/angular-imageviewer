import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent implements OnInit {

  @Input() url!:any;

  constructor() { }

  ngOnInit(): void {
  }

}
