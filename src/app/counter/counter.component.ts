import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  private _counter: number = 0;

  public get GetCounter() {
    return this._counter;
  }

  public Increment(){
    this._counter++;
    localStorage.setItem("counter", this._counter.toString());
    console.log(this._counter);
  }

  constructor() { 
    this._counter = localStorage.getItem("counter") === "" ? 0 : Number(localStorage.getItem("counter"));
  }

  ngOnInit(): void {
  }

}
