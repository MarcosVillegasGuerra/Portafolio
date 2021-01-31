import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnChanges{
  @Input() animation: boolean = true;

  constructor() { }
  
  ngOnInit(): void {
  }
  
  ngOnChanges(): void {
    const myInfoContainer = document.getElementById('myInfoContainer');
    if (this.animation) {
      myInfoContainer?.classList.add('fadeIn');
      setTimeout(() => {
        if (myInfoContainer?.classList.contains('fadeOut')) myInfoContainer.classList.remove('fadeOut');
      }, 500);
    } else{
      myInfoContainer?.classList.add('fadeOut');
      setTimeout(() => {
        if (myInfoContainer?.classList.contains('fadeIn')) myInfoContainer.classList.remove('fadeIn');
      }, 500);
    }
  }
}
