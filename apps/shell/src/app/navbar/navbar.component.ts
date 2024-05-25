import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @ViewChild('navbarButton') navbarButton!: ElementRef;
  open = false;

  collapseNavbar() {
    if (this.open) {
      this.navbarButton.nativeElement.click();
    }
  }

  navbarButtonClicked() {
    this.open = !this.open;
  }

}
