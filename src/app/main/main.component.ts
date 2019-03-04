import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  enigmas : any;
  enigma : any;
  constructor(private db: AngularFireDatabase){}
  ngOnInit(){
    this.db.list('nigma').valueChanges().subscribe(data =>{this.enigmas = data; console.log(this.enigmas)} );
  }
  enigmaClick(e){
    this.enigma = this.enigmas[e];
  }
  enigmaSearch(){
    var inputValue = (<HTMLInputElement>document.getElementById('search')).value;
  }
  enigmaSolve(){
    var inputValue = (<HTMLInputElement>document.getElementById('solve')).value;
    if( inputValue == this.enigma.pass){
      alert("VOCÊ ACERTOU A SENHA!!!!");
    }else{
      alert("VOCÊ ERROU!!!!");
    }
  }
}
