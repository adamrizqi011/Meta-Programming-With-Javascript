class ReadComic {
    constructor(type, country){
        this.type = type;
        this.country = country;
    }
}

class Manhua {
    constructor(type, title, eps){
        this.type = type;
        this.title = title;
        this.eps = eps;
    }
}

class Reading {
    constructor(readInWeb, searchTitle, country, readEps){
        this.readInWeb = readInWeb;
        this.searchTitle = new Manhua(searchTitle, 'Perfect World', readEps, 1);
        this.country = new ReadComic(country, "China");
        
    }
}

var comicData = new Reading("komiku.co", "Manhua", "Manhua", 1)

console.log(comicData.readInWeb);
console.log(comicData.searchTitle);
console.log(comicData.country);
