export class Pokemon {
    name: string;
    imageUrl: string;
    description: string;

    constructor(name: string, imagUrl: string, description: string) {
        this.name = name;
        this.imageUrl = imagUrl;
        this.description = description
    }
}
