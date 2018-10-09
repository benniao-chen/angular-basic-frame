import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[benniaoAutoFocus]'
})
export class AutoFocusDirective implements OnInit{

  element: HTMLElement;

  constructor(
    private elementRef: ElementRef,
  ) {

  }

  ngOnInit() {
    this.element = this.elementRef.nativeElement;
    this.element.focus();
  }

  @HostListener('click', ['$event.target'])
  onclick(element) {
    console.log('click', element);
  }

  @HostListener('keypress', ['$event'])
  onkeypress(event) {
    let _key = parseInt(event.key);
    let element = event.target;
    if(isNaN(_key)) {
      element.value = element.value;
      return false;
    }
  }

}
