import { Component, OnInit, Input } from '@angular/core';
import { Feature } from '../../../parts.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  feature: Feature;
  @Input() inputFeatureData = new Feature();
  @Input() maxShowControl: number;
  @Input() featureType: string;


  constructor() {
      this.maxShowControl = 0;
      this.featureType = '';
   }

  ngOnInit(): void {
  }

}
