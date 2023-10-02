// classses in js are a way to create objects, 
//blue prints for objects. Note: always Capital

class Player {
    constructor(username, age) {
        this.username = username;
        this.weapons = [];
        this.abilities = [];
        this.health = 100;
        this.age = age
    }
addWeapon(...weapon){
    //add weapons to the weapons array
    this.weapons.push(weapon)
    //the "this keyword" is the one that refers to the object
    }
addAbility(abilities){
    this.abilities.push(abilities)
    }
}

//inheritance!
//SuperHero Inherits all of the roperties and methods from the player class
class SuperHero extends Player {
    constructor(name, age, color, superHeroName) {
//call the parent class constructor(Player)
        super(name, age);
        this.capeColor = color
        this.superHeroName = superHeroName
    }
    fly(){
        //console.log('up up and away')
    }
}

const superMan = new SuperHero ('clark', 32,'red', 'SuperMan')

// instatiating a class (means creating and object fromt he class)
const playerOne = new Player('Jim', 30);
playerOne.addAbility('flying')
//console.log(playerOne)

const playerTwo = new Player ('Gusta', 32);
playerTwo.addAbility('mind reading')
playerTwo.addAbility('strength')
//console.log(playerTwo)



playerOne.addWeapon({weapon: 'machine gun', damage: 10, secondarWeapon: 'dagger'})
playerTwo.addWeapon('knife', 'gun')

//PART 2 OPTIONS HOMEWORK
class BankAccount {
    constructor(name, balance, acctNum) {
        this.ownerName = name
        this.balance = balance
        this.acctNum = acctNum
    }
    deposit(depositFunds){
        //add weapons to the weapons array
        this.balance += depositFunds
        //the "this keyword" is the one that refers to the object
        }
    withdrawl(withdrawlFunds){
        this.balance -= withdrawlFunds
        }


}

let myBankAccount = new BankAccount('Augusta', -20, 9867)
myBankAccount.deposit(87)
myBankAccount.withdrawl(90)
//console.log(myBankAccount)


class CheckingAccount extends BankAccount {
    constructor (name, balance, acctNum, overdraftEnabled){
        super(name, balance, acctNum)
        this.overdraftEnabled = overdraftEnabled
    }
    withdrawl(amount){
       let currentBal = this.balance - amount;
       if (this.overdraftEnabled === true){  
           return `overdraft is true and your new balance is ${currentBal}`
        }
        else { 
            if (currentBal > 0){
             return `overdraft is false and your new balance is ${currentBal}` 
            } else {
                currentBal = this.balance
                return `overdraft is false and not enough money. ${amount} is too much. Balance: ${currentBal}`
            }
        }   
    } 


}
let myCheckingAccount = new CheckingAccount("Augusta", 60, 9786, false)

console.log(myCheckingAccount.withdrawl(10))
