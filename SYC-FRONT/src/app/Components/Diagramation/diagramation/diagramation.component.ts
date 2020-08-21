import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diagramation',
  templateUrl: './diagramation.component.html',
  styleUrls: ['./diagramation.component.css']
})
export class DiagramationComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {

  }


   images=[
    '../../../../assets/wallpaper-hd-1920x1080-4k.jpg',
    '../../../../assets/55592hd.jpg',
    '../../../../assets/Evening_Forests_Mountains_Firewatch_Campo_Santo_549147_1920x1080.jpg',
    '../../../../assets/55592hd.jpg',
    '../../../../assets/170948.jpg',
    '../../../../assets/273139.jpg',
    '../../../../assets/564870.jpg',
    '../../../../assets/154112.jpg'
  ];

  @Input() _img;

  getImage(img){

    this._img= img;
    console.log(img);

  }

}
