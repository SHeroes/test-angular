import { Component, OnInit, Input } from '@angular/core';
import { Control } from '../../../parts.model';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  @Input() maxControl: number;
  @Input() inputControlData: Array<Control>;
  @Input() featureType: string;
  toggleClass = 'd-none';
  bigColumn1: Array<Control>;
  bigColumn2: Array<Control>;

  constructor() { }

  ngOnInit(): void {
    if ( this.featureType === 'big' ){
      this.splitColumns();
    }
  }

  splitColumns(){
    const half = Math.round(this.inputControlData.length / 2 );
    this.bigColumn1 = this.inputControlData.slice(0, half);
    this.bigColumn2 = this.inputControlData.slice(half, this.inputControlData.length);
  }

  showMoreClick(){
    if (this.toggleClass === 'd-none'){
      this.toggleClass = '';
    } else {
      this.toggleClass = 'd-none';
    }
  }

}
