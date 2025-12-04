import {CommonModule} from '@angular/common';
import {Component, signal} from '@angular/core';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  
  services: Service[] = [
    {
      id: 'website',
      title: 'Site Vitrine',
      description: 'Un site web professionnel pour présenter votre activité et attirer de nouveaux clients.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8"/>
        <path d="M12 17v4"/>
        <path d="M2 9h20"/>
      </svg>`,
      features: [
        'Design moderne et responsive',
        'Optimisé pour le référencement (SEO)',
        'Formulaire de contact intégré',
        'Compatible tous appareils',
        'Formation à la gestion du site'
      ],
      featured: true
    },
    {
      id: 'webapp',
      title: 'Application Web',
      description: 'Des applications sur-mesure pour digitaliser et automatiser vos processus métier.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>`,
      features: [
        'Développement sur-mesure',
        'Interface intuitive',
        'Gestion des utilisateurs',
        'Base de données sécurisée',
        'Évolutif selon vos besoins'
      ]
    },
    {
      id: 'redesign',
      title: 'Refonte de Site',
      description: 'Modernisez votre site existant avec un nouveau design et de meilleures performances.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>`,
      features: [
        'Analyse de l\'existant',
        'Nouveau design moderne',
        'Migration des contenus',
        'Amélioration des performances',
        'Optimisation SEO'
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      description: 'Un accompagnement continu pour garder votre site performant et sécurisé.',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>`,
      features: [
        'Mises à jour régulières',
        'Sauvegardes automatiques',
        'Surveillance sécurité',
        'Support technique réactif',
        'Modifications mineures incluses'
      ]
    }
  ];

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
