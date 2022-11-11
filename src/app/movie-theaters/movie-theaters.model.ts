export interface movieTheatersCreationDTO{
    name:string;
    latitude:number;
    longitude:number;
}

export interface movieTheatersDTO{
    map(arg0: (movieTheater: any) => import("../utils/multiple-selector/multiple-selector.module").multipleSelectorModel): import("../utils/multiple-selector/multiple-selector.module").multipleSelectorModel[];
    id:number;
    name:string;
    latitude:number;
    longitude:number;
}