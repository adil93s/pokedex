import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navbarVisible = true;
  previousScrollPosition = window.pageYOffset;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos >= 1) {
      this.navbarVisible = false;
    } else {
      this.navbarVisible = true;
    }
    if (currentScrollPos < this.previousScrollPosition) {
      this.navbarVisible = true;
    }
    this.previousScrollPosition = currentScrollPos;
  }
}
