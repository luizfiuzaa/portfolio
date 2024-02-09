import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  themeToggle:any = false;

  selectSegment:any = 'about';

  ngOnInit() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.initializeDarkTheme(prefersDark.matches);
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkTheme(mediaQuery.matches));
  }

  initializeDarkTheme(isDark:any) {
    this.themeToggle = isDark;
    this.toggleDarkTheme(isDark);
  }

  toggleChange(event:any) {
    this.toggleDarkTheme(event.detail.checked);
  }

  toggleDarkTheme(shouldAdd:any) {
    document.body.classList.toggle('dark', shouldAdd);
  }



}