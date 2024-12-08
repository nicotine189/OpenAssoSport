import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { MatIconModule } from '@angular/material/icon';
import { provideRouter } from '@angular/router';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatIconModule, // Import des icônes Material
      ],
      declarations: [FooterComponent],
      providers: [
        provideRouter([]), // Nouvelle méthode pour configurer le routing dans les tests
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait créer le composant footer', () => {
    expect(component).toBeTruthy();
  });

  it('devrait afficher le nom de l\'association', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.footer-header h2')?.textContent).toContain('OpenAssoSport');
    expect(compiled.querySelector('.footer-header p')?.textContent).toContain('Association Sportive de Natation');
  });

  it('devrait contenir les liens de navigation principaux', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.footer-links a');
    const expectedLinks = [
      'Inscriptions 2025 - 2026',
      'Qui sommes-nous ?',
      'Nous contacter',
      'Aide / FAQ'
    ];
    expect(links.length).toBe(expectedLinks.length);
    links.forEach((link, index) => {
      expect(link.textContent).toContain(expectedLinks[index]);
    });
  });

  it('devrait contenir les icônes des réseaux sociaux', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const socialLinks = compiled.querySelectorAll('.social-links a');
    expect(socialLinks.length).toBe(4); // 4 réseaux sociaux
    expect(socialLinks[0].getAttribute('aria-label')).toBe('Facebook');
    expect(socialLinks[1].getAttribute('aria-label')).toBe('Twitter');
    expect(socialLinks[2].getAttribute('aria-label')).toBe('YouTube');
    expect(socialLinks[3].getAttribute('aria-label')).toBe('Instagram');
  });

  it('devrait contenir les liens de bas de page', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const bottomLinks = compiled.querySelectorAll('.footer-bottom nav ul li a');
    const expectedLinks = ['Plan du site', 'Mentions légales', 'Cookies'];
    expect(bottomLinks.length).toBe(expectedLinks.length);
    bottomLinks.forEach((link, index) => {
      expect(link.textContent).toContain(expectedLinks[index]);
    });
  });

  it('devrait contenir une ligne de séparation entre les blocs', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const dividers = compiled.querySelectorAll('.footer-divider');
    expect(dividers.length).toBe(2); // 2 lignes de séparation entre les blocs
  });
});
