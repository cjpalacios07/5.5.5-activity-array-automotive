import Vehicle from "./vehicleBaseClass"

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage")
console.log(v.make)


class Car extends Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passenger = 0
        this.numberofWheels = 4
        this.maxSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }
    start() {
        if (this.fuel > 0){
            console.log("Engine started.")
            this.started = true
        } else {
            return this.started = false
            console.log("Out of Fuel.")
        }
    }
    
   loadPassenger(num) {
       if(this.passenger < this.maximumPassengers) {
           if((num + this.passenger) <= this.maximumPassengers){
               this.passenger = num
               return this.passenger
           }
           else {
               console.log(this.model + " " + this.make + "Out of space to take more passengers.")
           }
        }
   }    
    scheduleService(mileage) {
        if (this.mileage > 30000){
            this.scheduleService == true
            return this.scheduleService
            //console.log("Require Maintanance")
        }
    }
        
    
   
}







