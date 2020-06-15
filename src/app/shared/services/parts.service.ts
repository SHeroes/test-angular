import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  parts: any[] = [
    {
      name: 'Part Engine-NUM1',
      features: [
      {
        name: 'Axion A',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 0, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion B',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'danger' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion C',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 1.1, quality: 'warning' },
            { name: 'y' , dev: 1.2, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Feature Rotor xyz',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'WD40' , dev: 0.1, quality: 'danger' },
            { name: 'chalot' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'WD40' , dev: 10.1, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion Part2',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' }
        ]
      },
      {
        name: 'Tube',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' },
            { name: 'y2' , dev: 0.2, quality: 'success' },
            { name: 'z2' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam2' , dev: 0.3, quality: 'warning' },
            { name: 'axion1' , dev: 1.2, quality: 'success' },
            { name: 'seccion2' , dev: 0.3, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
        ]
      }
      ]
    },
    {
      name: 'Part Engine-NUM2',
      features: [
      {
        name: 'Axion A',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 0, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion B',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'danger' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion C',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 1.1, quality: 'warning' },
            { name: 'y' , dev: 1.2, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Feature Rotor xyz',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'WD40' , dev: 0.1, quality: 'danger' },
            { name: 'chalot' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'WD40' , dev: 10.1, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion Part2',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' }
        ]
      },
      {
        name: 'Tube',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' },
            { name: 'y2' , dev: 0.2, quality: 'success' },
            { name: 'z2' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam2' , dev: 0.3, quality: 'warning' },
            { name: 'axion1' , dev: 1.2, quality: 'success' },
            { name: 'seccion2' , dev: 0.3, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
        ]
      },
      ]
    },
    {
      name: 'Part Engine-NUM3',
      features: [
      {
        name: 'Axion A',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 0, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion B',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'danger' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion C',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 1.1, quality: 'warning' },
            { name: 'y' , dev: 1.2, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Feature Rotor xyz',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'WD40' , dev: 0.1, quality: 'danger' },
            { name: 'chalot' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'WD40' , dev: 10.1, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion Part2',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' }
        ]
      },
      {
        name: 'Tube',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' },
            { name: 'y2' , dev: 0.2, quality: 'success' },
            { name: 'z2' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam2' , dev: 0.3, quality: 'warning' },
            { name: 'axion1' , dev: 1.2, quality: 'success' },
            { name: 'seccion2' , dev: 0.3, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
        ]
      },
      ]
    },
    {
      name: 'Part Engine-NUM4',
      features: [
      {
        name: 'Axion A',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 0, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion B',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'danger' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion C',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 1.1, quality: 'warning' },
            { name: 'y' , dev: 1.2, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Feature Rotor xyz',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'WD40' , dev: 0.1, quality: 'danger' },
            { name: 'chalot' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'WD40' , dev: 10.1, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion Part2',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' }
        ]
      },
      {
        name: 'Tube',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' },
            { name: 'y2' , dev: 0.2, quality: 'success' },
            { name: 'z2' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam2' , dev: 0.3, quality: 'warning' },
            { name: 'axion1' , dev: 1.2, quality: 'success' },
            { name: 'seccion2' , dev: 0.3, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
        ]
      },
      ]
    },
    {
      name: 'Part Engine-NUM5',
      features: [
      {
        name: 'Axion A',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 0, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion B',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'danger' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion C',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 1.1, quality: 'warning' },
            { name: 'y' , dev: 1.2, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Feature Rotor xyz',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'WD40' , dev: 0.1, quality: 'danger' },
            { name: 'chalot' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'WD40' , dev: 10.1, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion Part2',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' }
        ]
      },
      {
        name: 'Tube',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' },
            { name: 'y2' , dev: 0.2, quality: 'success' },
            { name: 'z2' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam2' , dev: 0.3, quality: 'warning' },
            { name: 'axion1' , dev: 1.2, quality: 'success' },
            { name: 'seccion2' , dev: 0.3, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
        ]
      },
      ]
    },
    {
      name: 'Part Engine-NUM6',
      features: [
      {
        name: 'Axion A',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 0, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion B',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'danger' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion C',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 1.1, quality: 'warning' },
            { name: 'y' , dev: 1.2, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Feature Rotor xyz',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'WD40' , dev: 0.1, quality: 'danger' },
            { name: 'chalot' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'WD40' , dev: 10.1, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion Part2',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' }
        ]
      },
      {
        name: 'Tube',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' },
            { name: 'y2' , dev: 0.2, quality: 'success' },
            { name: 'z2' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam2' , dev: 0.3, quality: 'warning' },
            { name: 'axion1' , dev: 1.2, quality: 'success' },
            { name: 'seccion2' , dev: 0.3, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
        ]
      },
      ]
    },
    {
      name: 'Part Engine-NUM7',
      features: [
      {
        name: 'Axion A',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 0, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion B',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'danger' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion C',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 1.1, quality: 'warning' },
            { name: 'y' , dev: 1.2, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Feature Rotor xyz',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'WD40' , dev: 0.1, quality: 'danger' },
            { name: 'chalot' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'WD40' , dev: 10.1, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion Part2',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' }
        ]
      },
      {
        name: 'Tube',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' },
            { name: 'y2' , dev: 0.2, quality: 'success' },
            { name: 'z2' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam2' , dev: 0.3, quality: 'warning' },
            { name: 'axion1' , dev: 1.2, quality: 'success' },
            { name: 'seccion2' , dev: 0.3, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
        ]
      },
      ]
    },
    {
      name: 'Part Engine-NUM8',
      features: [
      {
        name: 'Axion A',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 0, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion B',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'danger' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion C',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 1.1, quality: 'warning' },
            { name: 'y' , dev: 1.2, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Feature Rotor xyz',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'WD40' , dev: 0.1, quality: 'danger' },
            { name: 'chalot' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'WD40' , dev: 10.1, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion Part2',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' }
        ]
      },
      {
        name: 'Tube',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' },
            { name: 'y2' , dev: 0.2, quality: 'success' },
            { name: 'z2' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam2' , dev: 0.3, quality: 'warning' },
            { name: 'axion1' , dev: 1.2, quality: 'success' },
            { name: 'seccion2' , dev: 0.3, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
        ]
      },
      ]
    },
    {
      name: 'Part Engine-NUM9',
      features: [
      {
        name: 'Axion A',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 0, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion B',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'danger' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion C',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 1.1, quality: 'warning' },
            { name: 'y' , dev: 1.2, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Feature Rotor xyz',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'WD40' , dev: 0.1, quality: 'danger' },
            { name: 'chalot' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'WD40' , dev: 10.1, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion Part2',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' }
        ]
      },
      {
        name: 'Tube',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' },
            { name: 'y2' , dev: 0.2, quality: 'success' },
            { name: 'z2' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam2' , dev: 0.3, quality: 'warning' },
            { name: 'axion1' , dev: 1.2, quality: 'success' },
            { name: 'seccion2' , dev: 0.3, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
        ]
      },
      ]
    },
    {
      name: 'Part Engine-NUM10',
      features: [
      {
        name: 'Axion A',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 0, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion B',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'danger' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion C',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 1.1, quality: 'warning' },
            { name: 'y' , dev: 1.2, quality: 'danger' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Feature Rotor xyz',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion Part2',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' }
        ]
      },
      {
        name: 'Tube',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' },
            { name: 'y2' , dev: 0.2, quality: 'success' },
            { name: 'z2' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam2' , dev: 0.3, quality: 'warning' },
            { name: 'axion1' , dev: 1.2, quality: 'success' },
            { name: 'seccion2' , dev: 0.3, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
        ]
      }
      ]
    }
  ];

  partsMixed: any[] = [
    {
      name: 'Part 1',
      features: [
      {
        name: 'Axion Part1Q',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'success' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion Part1W',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'danger' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'danger' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion Part1',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion Part1',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Feature Lco t1',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion Part2',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' }
        ]
      },
      {
        name: 'Axion Part3',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' },
            { name: 'y2' , dev: 0.2, quality: 'success' },
            { name: 'z2' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam2' , dev: 0.3, quality: 'warning' },
            { name: 'axion1' , dev: 1.2, quality: 'success' },
            { name: 'seccion2' , dev: 0.3, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
        ]
      },
      {
        name: 'Mark2',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      ]
    },
    {
      name: 'Part 1b',
      features: [
      {
        name: 'Axion Part1',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Feature Lco t1',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion Part2',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' }
        ]
      },
      {
        name: 'Axion Part3',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' },
            { name: 'y2' , dev: 0.2, quality: 'success' },
            { name: 'z2' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam2' , dev: 0.3, quality: 'warning' },
            { name: 'axion1' , dev: 1.2, quality: 'success' },
            { name: 'seccion2' , dev: 0.3, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
        ]
      },
      {
        name: 'Mark2',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      ]
    },
    {
      name: 'Part 1c',
      features: [
      {
        name: 'Axion Part1',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion Part1',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Feature Lco t1',
        quality: 'warning',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' }
        ]
      },
      {
        name: 'Axion Part2',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' }
        ]
      },
      {
        name: 'Axion Part3',
        quality: 'danger',
        controls: [
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam' , dev: 0.3, quality: 'warning' },
            { name: 'axion' , dev: 1.2, quality: 'success' },
            { name: 'seccion' , dev: 0.3, quality: 'warning' },
            { name: 'y2' , dev: 0.2, quality: 'success' },
            { name: 'z2' , dev: 0, quality: 'warning' },
            { name: 'xz' , dev: 2, quality: 'success' },
            { name: 'diam2' , dev: 0.3, quality: 'warning' },
            { name: 'axion1' , dev: 1.2, quality: 'success' },
            { name: 'seccion2' , dev: 0.3, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
            { name: 'x' , dev: 0.1, quality: 'warning' },
            { name: 'y' , dev: 0.2, quality: 'success' },
            { name: 'z' , dev: 0, quality: 'warning' },
        ]
      },
      {
        name: 'Mark2',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      ]
    },
    {
      name: 'Part B',
      features: [
      {
        name: 'Axion PartB',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'xz' , dev: 22, quality: 'success' },
            { name: 'diam' , dev: 3, quality: 'warning' },
            { name: 'axion' , dev: 22, quality: 'success' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      {
        name: 'Axion PartB',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'xz' , dev: 22, quality: 'success' },
            { name: 'diam' , dev: 3, quality: 'warning' },
            { name: 'axion' , dev: 22, quality: 'success' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      {
        name: 'Mark3',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      ]
    },
    {
      name: 'Part B',
      features: [
      {
        name: 'Axion PartB',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'xz' , dev: 22, quality: 'success' },
            { name: 'diam' , dev: 3, quality: 'warning' },
            { name: 'axion' , dev: 22, quality: 'success' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      {
        name: 'Axion PartB',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'xz' , dev: 22, quality: 'success' },
            { name: 'diam' , dev: 3, quality: 'warning' },
            { name: 'axion' , dev: 22, quality: 'success' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      {
        name: 'Mark3',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      ]
    },
    {
      name: 'Part B',
      features: [
      {
        name: 'Axion PartB',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'xz' , dev: 22, quality: 'success' },
            { name: 'diam' , dev: 3, quality: 'warning' },
            { name: 'axion' , dev: 22, quality: 'success' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      {
        name: 'Axion PartB',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'xz' , dev: 22, quality: 'success' },
            { name: 'diam' , dev: 3, quality: 'warning' },
            { name: 'axion' , dev: 22, quality: 'success' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      {
        name: 'Mark3',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      ]
    },
    {
      name: 'Part B',
      features: [
      {
        name: 'Axion PartB',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'xz' , dev: 22, quality: 'success' },
            { name: 'diam' , dev: 3, quality: 'warning' },
            { name: 'axion' , dev: 22, quality: 'success' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      {
        name: 'Axion PartB',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'xz' , dev: 22, quality: 'success' },
            { name: 'diam' , dev: 3, quality: 'warning' },
            { name: 'axion' , dev: 22, quality: 'success' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      {
        name: 'Mark3',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      ]
    },
    {
      name: 'Part B',
      features: [
      {
        name: 'Axion PartB',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'xz' , dev: 22, quality: 'success' },
            { name: 'diam' , dev: 3, quality: 'warning' },
            { name: 'axion' , dev: 22, quality: 'success' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      {
        name: 'Axion PartB',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'xz' , dev: 22, quality: 'success' },
            { name: 'diam' , dev: 3, quality: 'warning' },
            { name: 'axion' , dev: 22, quality: 'success' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      {
        name: 'Mark3',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      ]
    },
    {
      name: 'Part B',
      features: [
      {
        name: 'Axion PartB',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'xz' , dev: 22, quality: 'success' },
            { name: 'diam' , dev: 3, quality: 'warning' },
            { name: 'axion' , dev: 22, quality: 'success' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      {
        name: 'Axion PartB',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'xz' , dev: 22, quality: 'success' },
            { name: 'diam' , dev: 3, quality: 'warning' },
            { name: 'axion' , dev: 22, quality: 'success' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      {
        name: 'Mark3',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      ]
    },
    {
      name: 'Part B',
      features: [
      {
        name: 'Axion PartB',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'xz' , dev: 22, quality: 'success' },
            { name: 'diam' , dev: 3, quality: 'warning' },
            { name: 'axion' , dev: 22, quality: 'success' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      {
        name: 'Axion PartB',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'xz' , dev: 22, quality: 'success' },
            { name: 'diam' , dev: 3, quality: 'warning' },
            { name: 'axion' , dev: 22, quality: 'success' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      {
        name: 'Mark3',
        quality: 'success',
        controls: [
            { name: 'x' , dev: 3, quality: 'warning' },
            { name: 'y' , dev: 22, quality: 'success' },
            { name: 'z' , dev: 3, quality: 'warning' },
            { name: 'seccion' , dev: 3, quality: 'warning' }
        ]
      },
      ]
    }
  ];


  constructor() {
    console.log('Servicio funcionando');

  }

  getPart(position: any){
    return this.parts[position];
  }

}
