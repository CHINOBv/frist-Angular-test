import { Component, OnInit } from '@angular/core';

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

}
