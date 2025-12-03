class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 13;
    }


    sayName(){
        console.log("ninja :" + this.name);
    }

    showState(){
        console.log ("Name : " + this.name + "health : " + this.health + "speed : " + this.speed + "strength : " + this.strength);

    }
    drinkSake(){
        this.health += 10;
    }
    
}
const ninja = new Ninja("Malek", 10);
ninja.sayName();
ninja.showState();
ninja.drinkSake();
ninja.showState()