import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion-page',
  templateUrl: './conversion-page.page.html',
  styleUrls: ['./conversion-page.page.scss'],
})
export class ConversionPagePage implements OnInit {
private cur1: string;
private cur2: string;
private montant: number;

res;
Api_url = "https://free.currconv.com/api/v7/convert?apiKey=7cdd94e2a13de4cf4aff&compact=ultra&q="
  constructor() { }

  ngOnInit() {

  }
 getCurrency(){
  fetch(`${this.Api_url}${this.cur1}_${this.cur2}`)
  .then((res)=>{
    return res.json();
  })
  .then(displaySum)
  function displaySum(res){
    console.log(res.USD_EUR)
    console.log(res * this.montant)

  }
}
}
