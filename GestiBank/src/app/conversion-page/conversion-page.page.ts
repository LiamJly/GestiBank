import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion-page',
  templateUrl: './conversion-page.page.html',
  styleUrls: ['./conversion-page.page.scss'],
})
export class ConversionPagePage implements OnInit {
  private cur1: string;
  private cur2: string;
  private montant: string;
  private somme: string;

  res;
  resultat;
  Api_url =
    'https://free.currconv.com/api/v7/convert?apiKey=fe8b2d36718aba5971ed&compact=ultra&q=';
  constructor() {}

  ngOnInit() {}
  async getCurrency() {
    let res = await fetch(`${this.Api_url}${this.cur1}_${this.cur2}`);
    let response = await res.text();
    response = response.slice(11, 17);

    let num = +this.montant * +response;
    let sum = num.toString();
    sum = sum.slice(0, -1);
    this.somme = sum;
  }
}
