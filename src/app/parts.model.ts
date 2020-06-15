
export class Part {
    name: string;
    features: Array<Feature>;
}

export class Feature {
    name: string;
    quality: string;
    controls: Array<Control>;
}

export class Control {
    name: string;
    dev: number;
    quality: string;
    devTot: number;
}