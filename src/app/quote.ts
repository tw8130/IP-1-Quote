
export class Quote {
    public upvotes:number
    public downvotes:number
    public showName:boolean
    constructor(public id:number,  public name:string,public author:string,public quote:string,public passedDate:Date) {
        this.showName=false
        this.upvotes=0
        this.downvotes=0

    }
    

}
