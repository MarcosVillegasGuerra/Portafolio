import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit, OnChanges{
  @Input() animation: boolean = false;


  constructor() {
    
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    const izq = document.getElementById('izq');
    const der = document.getElementById('der');
    if (this.animation) {
      izq?.classList.add('izqDerIn');
      der?.classList.add('derIzqIn');
      setTimeout(() => {
        if(izq?.classList.contains('izqDerOut')) izq?.classList.remove('izqDerOut');
        if(der?.classList.contains('derIzqOut')) der?.classList.remove('derIzqOut');
      }, 500);
    } else{
      izq?.classList.add('izqDerOut');
      der?.classList.add('derIzqOut');
      setTimeout(() => {
        if(izq?.classList.contains('izqDerIn')) izq?.classList.remove('izqDerIn');
        if(der?.classList.contains('derIzqIn')) der?.classList.remove('derIzqIn');
      }, 500);
 
    }
  }

  changeContent(to: string){
    const izq = document.getElementById('izq') || document.createElement("div");
    const der = document.getElementById('der') || document.createElement("div");
    console.log(izq,der);
    
    if(to == 'toImg'){
      izq.classList.add("d-none");
      der.classList.remove("d-none");
    } else {
      der.classList.add("d-none");
      izq.classList.remove("d-none");
    }
  }
}
