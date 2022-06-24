interface shape{
    area(): number;
}
interface Keliling extends shape{
    rumus(): number;
}

class circle implements shape{
    radius: number;
    constructor (radius: number){
     this.radius = radius
    }
    area(): number {
        return (Number) (Math.PI * Math.pow(this.radius, 2)) 
    }   
}

class square implements Keliling{
    _lenght: number;
    constructor (_lenght:number){
        this._lenght = _lenght
    }
    area(): number{
        return (Number) (this._lenght * this._lenght)
    }
    rumus(): number{
        return (Number) (4 * this._lenght)
    }
}

