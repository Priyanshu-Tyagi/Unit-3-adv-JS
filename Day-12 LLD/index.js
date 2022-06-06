class Vehicle{
    constructor(type,color,regNumber){
        this._type = type;
        this._color = color;
        this._regNumber = regNumber;
    }

    get type(){
        return this._type;
    }

    set type(value){
        this._type = value;
    }
}

//car 
class Car extends Vehicle{
    constructor(regNumber,color){
        super("car",regNumber,color);
    }
}

// let c1 = new Car("Dl-1234","Red");
// console.log(c1);

//bike

class Bike extends Vehicle{
    constructor(regNumber,color){
        super("bike",regNumber,color);
    }
}

// let b1 = new Bike("DL-4321","Black");
// console.log(b1);

class Truck extends Vehicle{
    constructor(regNumber,color){
        super("truck",regNumber,color);
    }
}

// let t1 = new Truck("DL-9876","Orange");
// console.log(t1);


//parking spots

class Slot{
    constructor(type,number){
        this.number = number;
        this.type = type;
        this._isBooked = false;
    }

    get isBooked(){
        return this._isBooked;
    }

    set isBooked(value){
        this._isBooked = value;
    }
}

//parking floors

class ParkingFloor{
    constructor(floorNumber,maxSpots){
        this.floorNumber = floorNumber;
        this._parkingSpots = [];

        for(let i=0;i<maxSpots;i++){
            if(i===0){
                this._parkingSpots.push(new Slot("car",i));
            }else if(i===1){
                this._parkingSpots.push(new Slot("bike",i));
            }else{
                this._parkingSpots.push(new Slot("truck",i));
            }
        }
    }

    get parkingSpots(){
        return this._parkingSpots;
    }
}


// Parking lot or the building


class ParkingLot{
    constructor(number){
        this._floors = [];
        this._numberOfFloors = number;

        for(let i=0;i<number;i++){
            this._floors.push(new ParkingFloor(i,3))
        }
    }

    get numberOfFloors(){
        return this._numberOfFloors;
    }

    get floors(){
        return this._floors;
    }

    findSlot(type){
        for(let i=0;i<this._numberOfFloors;i++){
            for(let slot of this._floors[i]._parkingSpots){
                if(slot.type === type && !slot.isBooked){
                    return { floorNumber: i, slot: slot };
                }
            }
        }
        return false;
    }

    bookSlot(slot){
        slot.slot.isBooked = true;
        console.log("Slot is Booked");
        return true;
    }

    parkVehicle(Vehicle){
        let slot = this.findSlot(Vehicle.type);

        if(slot){
            this.bookSlot(slot);
            let ticket = new Ticket(slot.floorNumber,slot.slot.number);
            console.log("Ticket : ",ticket);
        }else{
            console.log("No Slot")
        }
    }
}


class Ticket{
    constructor(floorNumber,slotNumber){
        this.floorNumber = floorNumber;
        this.slotNumber = slotNumber;
        this.issuedAt = new Date();
    }
}

let b1 = new Bike("DL-1234","Red");

let pl1 = new ParkingLot(3);

pl1.parkVehicle(b1);