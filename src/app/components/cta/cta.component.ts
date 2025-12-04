import {CommonModule} from '@angular/common';
import {Component, signal} from '@angular/core';
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
  isSubmitting = false;
  submitSuccess = signal(false);
  submitError = signal(false);
  
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
    
    this.isSubmitting = true;
    this.submitError.set(false);
    
    try {
      // Simuler l'envoi (à remplacer par votre API)
      await this.sendEmail();
      
      this.submitSuccess.set(true);
      this.resetForm();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess.set(false);
      }, 5000);
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      this.submitError.set(true);
    } finally {
      this.isSubmitting = false;
    }
  }

  private async sendEmail(): Promise<void> {
    // TODO: Intégrer avec votre API d'envoi d'email
    // Pour l'instant, on simule un délai
    return new Promise((resolve) => {
      setTimeout(resolve, 1500);
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
