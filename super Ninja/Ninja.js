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
        console.log ("Name : " + this.name +  "| health : " + this.health + "| speed : " + this.speed + " |strength : " + this.strength);

    }
    drinkSake(){
        this.health += 10;
    }
}




class superSensei extends Ninja{
    constructor(name){
        super(name,200)
        this.wisdom = 10;
        this.speed = 10;
        this.strength = 10;
    }

    speekWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }

}
const ninja = new superSensei("master");
ninja.speekWisdom();
ninja.showState()