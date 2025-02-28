class FindDistance {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
    }
}

let p1 = new FindDistance(5, 5);
let p2 = new FindDistance(9, 8);
console.log(FindDistance.distance(p1, p2));
