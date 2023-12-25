import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTiltHover]',
})
export class TiltHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = event.clientX - (rect.left + window.scrollX);
    const mouseY = event.clientY - (rect.top + window.scrollY);
    const intensity = 50; // Adjust for tilt intensity

    const rotateX = (mouseY - centerY) / (intensity*-1); // Adjust for tilt intensity
    const rotateY = (mouseX - centerX) / intensity; // Adjust for tilt intensity

    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'transform 0.3s'
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'transformStyle',
      'preserve-3d'
    );
    this.renderer.setStyle(this.el.nativeElement, 'perspective', '1000px');
    this.renderer.setStyle(this.el.nativeElement, 'transformOrigin', 'center');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'rotateX(0) rotateY(0)'
    );
  }
}
