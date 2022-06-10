class Person{
    constructor(age,gender,category){
        this._age = age;
        this._gender = gender;
        this._category = category;
    }

    get category(){
        return this._category;
    }

    set category(value){
        this._category = value;
    }
}

class General extends Person{
    constructor(age,gender){
        super(age,gender,"general");
    }
}

// let g1 = new General("65","male");
// console.log(g1);

class Vips extends Person{
    constructor(age,gender){
        super(age,gender,"VIPs");
    }
}

// let v1 = new Vips("45","male");
// console.log(v1);

class Vvips extends Person{
    constructor(age,gender){
        super(age,gender,"VVIPs");
    }
}

// let vv1 = new Vvips("26","Female");
// console.log(vv1);

class Seat{
    constructor(type,number){
        this.type = type;
        this.number = number;
        this._isBooked = false;
    }

    get isBooked(){
        return this._isBooked;
    }

    set isBooked(value){
        this._isBooked = value;
    }
}

class Floor{
    constructor(floornumber,maxspots){
        this.floornumber = floornumber;
        this._sittingspots = [];

        for(let i=0;i<maxspots;i++){
            if(i>0 && i<=3){
                this._sittingspots.push(new Seat("general",i));
            }else if(i>3 && i<=6){
                this._sittingspots.push(new Seat("VIPs",i));
            }else{
                this._sittingspots.push(new Seat("VVIPs",i));
            }
        }
    }

    get sittingspots(){
        return this._sittingspots;
    }
}

class Stadium{
    constructor(number){
        this._floors = [];
        this._numberOfFloors = number;

        for(let i=0;i<number;i++){
            this._floors.push(new Floor(i,9));
        }
    }

    get numberOfFloors(){
        return this._numberOfFloors;
    }

    get floors(){
        return this._floors;
    }

    findseat(type){
        for(let i=0;i<this._numberOfFloors;i++){
            for(let seat of this._floors[i]._sittingspots){
                if(seat.type === type && !seat.isBooked){
                    return { floornumber: i, seat: seat };
                }
            }
        }
        return false;
    }

    bookSeat(seat){
        seat.seat.isBooked = true;
        console.log("Seat is Booked");
        return true;
    }

    seatTakken(Person){
        let seat = this.findseat(Person.type);

        if(seat){
            this.bookSeat(seat);
            let ticket = new Ticket(seat.floornumber,seat.seat.number);
            console.log("Ticket :",ticket);
        }else{
            console.log("No Seat")
        }
    }
}

class Ticket{
    constructor(floornumber,seatnumber){
        this.floornumber = floornumber;
        this.seatnumber = seatnumber;
        this.issuedAt = new Date();
    }
}

let v1 = new Vips("45","Female");

let st1 = new Stadium(3);

st1.seatTakken(v1);