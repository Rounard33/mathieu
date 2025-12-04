import {CommonModule} from '@angular/common';
import {Component, signal} from '@angular/core';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {
  
  steps = signal<ProcessStep[]>([
    {
      id: 1,
      title: 'Échange & Analyse',
      description: 'Nous discutons ensemble de votre projet, vos objectifs et vos besoins. Je vous conseille sur les meilleures solutions.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`
    },
    {
      id: 2,
      title: 'Devis Personnalisé',
      description: 'Je vous propose un devis détaillé et transparent, adapté à votre budget et à vos attentes.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10,9 9,9 8,9"/>
      </svg>`
    },
    {
      id: 3,
      title: 'Design & Développement',
      description: 'Je crée votre site avec soin, vous tenant informé à chaque étape. Vous validez avant la mise en ligne.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <polyline points="16,18 22,12 16,6"/>
        <polyline points="8,6 2,12 8,18"/>
        <line x1="14" y1="4" x2="10" y2="20"/>
      </svg>`
    },
    {
      id: 4,
      title: 'Livraison & Support',
      description: 'Votre site est mis en ligne. Je vous forme à son utilisation et reste disponible pour toute question.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22,4 12,14.01 9,11.01"/>
      </svg>`
    }
  ]);

  scrollToContact(event: Event): void {
    event.preventDefault();
    const element = document.getElementById('contact');
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

