// import {Big} from 'big.js';
// import { findUsers } from './lodashSupport';

enum Transmission {
  Manual,
  Automatic
}

interface Vehicle {
  type: string;
  color: string;
  //topSpeed: Big;
  park(): void;
}

export class Car implements Vehicle {
  color: string;
  //topSpeed: Big;

  constructor(
    public type: string,
    color: string,
    //topSpeed: Big,
    public transmission: string
  ) {
    this.color = color;
    //this.topSpeed = topSpeed;
  }

  drive(): boolean {
    console.log(`${this.type} goes zoom zoom on ${Car.Wheels} wheels at  MPH!`);
    return true;
  }

  park(): void {
    console.log(`${this.type} is done!`);
  }

  static Wheels: number = 4;
}

class SixWheeler extends Car {
  park(): void {
    console.log(`${this.type} is big time done!`);
  }
}
class Client {
  tillCashManagement: any;
  constructor(public environment: string) {

  }
}

async function iReturnPromise(value: string): Promise<string> {
  return value + ' back'
}

const iAlsoReturnPromise = (value: string): Promise<any> => {
  return new Promise((res: any) => {
    res(parseFloat(value))
  })
}

let c = new Car("BWM", "black", 'auto');

console.log(`Car is a ${c.color} ${c.transmission} ${c.type}`);
c.drive();
c.park();
//let s = new SixWheeler("LR", "Green", new Big('55.5'), Transmission.Manual);
let s = new SixWheeler("LR", "Green", 'manual');
s.drive();
s.park();
//console.log(findUsers());
iReturnPromise('Hi There').then((i) => console.log(i));
iAlsoReturnPromise('1').then((R: string) => console.log(R));

export default Car;
