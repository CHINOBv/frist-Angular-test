import { Component, OnInit } from '@angular/core';

interface Producto{
  name: String,
  price: Number,
  stock: Number
}
@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})


export class DirectivaComponent implements OnInit {

  loading:Boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.loading = false;
    },5000)
  }

  showLoading(){
    this.loading = !this.loading;
  }

  productos:Array<Producto> = [
    {
      name: "Coca",
      price: 28,
      stock: 20
    },
    {
      name:"Vodka",
      price: 98,
      stock: 25
    },
    {
      name: "Sprite",
      price: 29,
      stock: 30
    }
  ];

}
