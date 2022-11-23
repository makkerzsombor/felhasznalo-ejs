export class User{
    name: string
    ferfi: boolean
    szulIdo: string
    egyenleg: number
    active: boolean

    constructor(name: string, ferfi: boolean, szulIdo: string, egyenleg: number, active: boolean){
        this.name = name;
        this.ferfi = ferfi;
        this.szulIdo = szulIdo;
        this.egyenleg = egyenleg;
        this.active = active;
    }
    public get getName() : string {
        return this.name;
    }
    public get getFerfi() : boolean {
        return this.ferfi; 
    }
    public get getSzulIdo() : string {
        return this.szulIdo; 
    }
    public get getEgyenleg() : number {
        return this.egyenleg; 
    }
    public get getActive() : boolean {
        return this.active; 
    }
}