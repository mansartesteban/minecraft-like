const MathUtils = {
    random(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randomGaussian(min: number, max: number, skew: number = 1): number {
        let u = 0, v = 0;
        while(u === 0) u = Math.random() //Converting [0,1) to (0,1)
        while(v === 0) v = Math.random()
        let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )

        num = num / 10.0 + 0.5 // Translate to 0 -> 1
        if (num > 1 || num < 0)
            num = this.randomGaussian(min, max, skew) // resample between 0 and 1 if out of range

        else{
            num = Math.pow(num, skew) // Skew
            num *= max - min // Stretch to fill range
            num += min // offset to min
        }
        return num
    },
    pickRandom(array: any[]): any {
        return array[this.random(0, array.length - 1)]
    },
    pickRandomGaussian(array: any[], skew = 1): [] {
        let r = this.randomGaussian(0, array.length - 1, skew)
        r = Math.round(r)
        return array[r]
    }


}

export default MathUtils