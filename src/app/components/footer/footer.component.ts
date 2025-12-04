import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(private router: Router) {}

  scrollToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    // Check if we're on the home page
    const currentUrl = this.router.url;
    
    if (currentUrl === '/home' || currentUrl === '/') {
      this.scrollToElement(sectionId);
    } else {
      // Navigate to home first, then scroll
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => {
          this.scrollToElement(sectionId);
        }, 100);
      });
    }
  }

  private scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
