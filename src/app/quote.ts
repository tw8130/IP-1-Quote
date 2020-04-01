
export class Quote {
    public upvotes:number
    public downvotes:number
    public passedDate:Date
    constructor(public id:number,  public name:string,public author:string,public quote:string) {
        this.upvotes=0
        this.downvotes=0
        this.passedDate= new Date;

    }
    

}
