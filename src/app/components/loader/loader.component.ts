import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {
  isVisible = signal(true);

  ngOnInit(): void {
    // Masquer le loader après un délai minimum (pour une meilleure UX)
    const minDisplayTime = 2000; // 2 secondes minimum
    const startTime = Date.now();

    // Fonction pour masquer le loader
    const hideLoader = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDisplayTime - elapsed);

      setTimeout(() => {
        this.isVisible.set(false);
        // Retirer le loader du DOM après l'animation de sortie
        setTimeout(() => {
          const loader = document.querySelector('app-loader');
          if (loader) {
            loader.remove();
          }
        }, 500); // Durée de l'animation de sortie
      }, remaining);
    };

    // Attendre que le DOM soit prêt
    if (document.readyState === 'complete') {
      // Si le document est déjà chargé, attendre un peu puis masquer
      setTimeout(hideLoader, 100);
    } else {
      // Attendre que la page soit complètement chargée
      window.addEventListener('load', () => {
        hideLoader();
      }, { once: true });

      // Fallback : masquer après 3 secondes maximum
      setTimeout(() => {
        hideLoader();
      }, 3000);
    }
  }
}

