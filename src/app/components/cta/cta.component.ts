import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent {
  private http = inject(HttpClient);
  
  // Formspree endpoint
  private readonly FORMSPREE_URL = 'https://formspree.io/f/mvgebplv';
  
  isSubmitting = false;
  submitSuccess = signal(false);
  submitError = signal(false);
  errorMessage = signal('');
  
  // Honeypot anti-spam (doit rester vide)
  honeypot = '';
  
  formData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  };

  async onSubmit(): Promise<void> {
    if (this.isSubmitting) return;
    
    // Anti-spam : si le honeypot est rempli, c'est un bot
    if (this.honeypot) {
      console.log('Bot détecté via honeypot');
      // On simule un succès pour ne pas alerter le bot
      this.submitSuccess.set(true);
      setTimeout(() => this.submitSuccess.set(false), 8000);
      return;
    }
    
    this.isSubmitting = true;
    this.submitError.set(false);
    this.submitSuccess.set(false);
    
    try {
      await this.sendToFormspree();
      
      this.submitSuccess.set(true);
      this.resetForm();
      
      // Reset success message after 8 seconds
      setTimeout(() => {
        this.submitSuccess.set(false);
      }, 8000);
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      this.submitError.set(true);
      this.errorMessage.set('Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.');
      
      // Reset error message after 8 seconds
      setTimeout(() => {
        this.submitError.set(false);
      }, 8000);
    } finally {
      this.isSubmitting = false;
    }
  }

  private sendToFormspree(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Préparer les données pour Formspree
      const formData = {
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone || 'Non renseigné',
        projectType: this.formData.projectType,
        budget: this.formData.budget || 'À définir',
        message: this.formData.message,
        // Champ spécial pour Formspree - sujet de l'email
        _subject: `Nouveau contact Pixel - ${this.formData.projectType}`,
      };

      this.http.post(this.FORMSPREE_URL, formData, {
        headers: {
          'Accept': 'application/json'
        }
      }).subscribe({
        next: () => resolve(),
        error: (err) => reject(err)
      });
    });
  }

  private resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: ''
    };
  }
}
