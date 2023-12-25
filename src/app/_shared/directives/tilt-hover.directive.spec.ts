import { ElementRef, Renderer2 } from '@angular/core';
import { TiltHoverDirective } from './tilt-hover.directive';

describe('TiltHoverDirective', () => {
  it('should create an instance', () => {
    const el = {} as ElementRef;
    const renderer = {} as Renderer2;
    const directive = new TiltHoverDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
