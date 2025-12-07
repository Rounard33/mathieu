import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: '<p>Redirection...</p>'
})
export class ContactComponent implements OnInit {
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Redirect to home page contact section
    this.router.navigate(['/home'], { fragment: 'contact' });
  }
}
