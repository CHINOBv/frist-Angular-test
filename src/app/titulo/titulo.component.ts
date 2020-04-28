import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss'],
})
export class TituloComponent implements OnInit {
  user: String = '';
  pass: String = '';

  users= {name:"H",p:"B",c:"C"};

  constructor() {}

  ngOnInit(): void {}

  ingresar() {
    alert('Init' + this.user);
  }

  valid(){
    console.log(this.user);
  }

  typing(e){
    console.log(e.target.value)
  }

  background(e){
    e.srcElement.style.background = "red"
  }

}
