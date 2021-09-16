export class Recipe{
    public name:string;
    public discription:string;
    public imgpath: string;

    constructor(name: string , desc:string , imgpath: string){
        this.name=name ;
        this.discription=desc;
        this.imgpath=imgpath; 

    }
    
}