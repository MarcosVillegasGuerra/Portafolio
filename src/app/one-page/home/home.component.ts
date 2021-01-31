import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  animationProfile = true;
  animationAboutMe = false;

  constructor() {
    
  }


  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const profile = document.getElementById('profile');
      const posProfile = profile?.getBoundingClientRect().top || 0;
      this.animationProfile = (posProfile == 0)?  true : false;

      const aboutMe = document.getElementById('aboutMe');
      const posAboutMe = aboutMe?.getBoundingClientRect().top || 0;
      this.animationAboutMe = (Math.abs(posAboutMe) < 500)?  true : false;
    }, true);
  }

  ngAfterViewInit(){
  }


}
