import { Component, OnInit } from '@angular/core';
import { query, animateChild, style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  enigma : any;
  constructor(){}
  ngOnInit(){}
  enigmaClick(e){
    this.enigma = {key : e, name : 'michel', title : 'PRIMEIRO ENIGMA', text : 'ESSE TEXTO É DO PRIMEIRO ENIGMA É UM TEXTO DE EXEMPLO E NÃO DEVE SER CONSIDERADO COMO UM ENIGMA MAS SIM COMO UM TESTE', pass : 'senha'};
    console.log(this.enigma);
  }
  enigmaSolve(){
    var inputValue = (<HTMLInputElement>document.getElementById('solve')).value;
    if( inputValue == this.enigma.pass){
      console.log("teste");
    }else{
      console.log("error");
    }
  }
}
