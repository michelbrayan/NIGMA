import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { trigger, transition, style, state, animate } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ transform: 'translateX(-25%)'})),
      transition('void <=> *', [
        animate(100),
      ])
    ])
  ]
})
export class MainComponent implements OnInit {
  show: any;
  enigmas : any;
  enigma : any;
  constructor(private db: AngularFireDatabase){}
  ngOnInit(){
    this.db.list('nigma').valueChanges().subscribe(data => this.enigmas = data);
    this.show = [false, false , true, false];
  }
  showText(){
    this.show = [true, true , false, false];
  }
  showImage(){
    this.show = [true, false , true, false];
  }
  enigmaClick(e){
    if(this.enigmas[e] == this.enigma){
      this.show = [false, false , true, false];
      this.enigma = null;
    }
    else{
      this.show = [true, false , true, false];
      this.enigma = this.enigmas[e];
    }
  }
  enigmaCreate(){
    this.show = [true, false , false, true];
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
