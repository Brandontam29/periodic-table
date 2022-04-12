type ObjectType = object;

export interface Element extends ObjectType {
    atomicNumber: number | string;
    symbol: number | string;
    name: string;
    atomicMass: number[] | string;
    electronicConfiguration: number | string;
    electronegativity: number | string;
    atomicRadius: number | string;
    ionRadius: number | string;
    vanDerWaalsRadius: number | string;
    ionizationEnergy: number | string;
    electronAffinity: number | string;
    oxidationStates: number | string;
    standardState: number | string;
    bondingType: number | string;
    meltingPoint: number | string;
    boilingPoint: number | string;
    density: number | string;
    groupBlock: number | string;
    yearDiscovered: number | string;
    block: number | string;
    cpkHexColor: string;
    period: number | string;
    group: number | string;
}
