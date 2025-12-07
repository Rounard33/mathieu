import {CommonModule} from '@angular/common';
import {Component, signal} from '@angular/core';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  iconType: 'exchange' | 'quote' | 'develop' | 'launch';
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
      iconType: 'exchange'
    },
    {
      id: 2,
      title: 'Personnalisation',
      description: 'Je vous propose un devis détaillé et transparent, adapté à votre budget et à vos attentes.',
      iconType: 'quote'
    },
    {
      id: 3,
      title: 'Design & Développement',
      description: 'Je crée votre site avec soin, vous tenant informé à chaque étape. Vous validez avant la mise en ligne.',
      iconType: 'develop'
    },
    {
      id: 4,
      title: 'Livraison & Support',
      description: 'Votre site est mis en ligne. Je vous forme à son utilisation et reste disponible pour toute question.',
      iconType: 'launch'
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

