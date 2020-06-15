import { Component, OnInit } from '@angular/core';

import { Part, Feature } from '../../../parts.model';
import { PartsService } from '../../../shared/services/parts.service';


@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})

export class PartsComponent implements OnInit {

  part: Part ;
  previusPart: Part;
  maxElemBig = 24;
  maxElemLarge = 12;
  maxElemSmall = 4;
  count = 0 ;
  random = 0;     // Math.floor(Math.random() * 10);
  featuresBig: Array<Feature> = [];
  featuresSmall: Array<Feature> =  [];
  featuresLarge: Array<Feature> = [];

  constructor(private servicePart: PartsService) { }

  ngOnInit(): void {
    this.part = this.servicePart.getPart(this.count);
    this.incialazeDevTot();
    this.previusPart = this.part;
    this.locateFeatures();
  }

  locateFeatures(){
    this.featuresBig = [];
    this.featuresLarge = [];
    this.featuresSmall = [];

    this.part.features.forEach((feature, index ) => {
      if (feature.controls.length >= this.maxElemBig) {
        this.sumTotDev(feature, this.previusPart.features);
        this.featuresBig.push(feature);
      }else if (feature.controls.length >= this.maxElemLarge ) {
        this.sumTotDev(feature, this.previusPart.features);
        this.featuresLarge.push(feature);
      }else{
        this.sumTotDev(feature, this.previusPart.features);
        this.featuresSmall.push(feature);
      }
    });
  }

  sumTotDev(feature: Feature, oldArray: Array<Feature>){
    let oldFeature: Feature;
    oldFeature = oldArray.find(element => element.name === feature.name );

    if (oldFeature === undefined){
      return feature;
    }
    feature.controls.forEach((elem, index, controlArray ) => {
      if (oldFeature.controls[index] !== undefined){
        elem.devTot = parseFloat((oldFeature.controls[index].devTot + oldFeature.controls[index].dev).toFixed(4));
      }
    });

    return feature;
  }

  readNextPart(){
    this.previusPart = this.part;
    this.random = Math.floor(Math.random() * 10);
    this.part = this.servicePart.getPart(this.random);
    this.locateFeatures();

  }

  startReadingParts(){
    setInterval(() => {
      this.readNextPart();
      }, 3000);
  }

  incialazeDevTot(){
    this.part.features.forEach( ( feature ) => {
      feature.controls.forEach( (control) => {
        control.devTot = 0;
      });
    });
  }

}
