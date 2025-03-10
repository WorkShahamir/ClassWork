export interface IDishShort {
    name: string;
    description: string;
}

export interface IDish extends IDishShort {
    id: string;
}

export interface IDishesList {
    [id: string]: IDishShort;
}
