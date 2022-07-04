import { OccupationRating } from "./occupation-rating";

export class Occupation {

    constructor(_name: String, _occupation: OccupationRating) {
        this.name = _name;
        this.occupation = _occupation;
    }
    name: String;
    occupation: OccupationRating;
}
