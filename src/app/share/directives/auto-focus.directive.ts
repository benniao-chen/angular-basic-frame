import { Directive, ElementRef, OnInit, OnChanges, SimpleChanges, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[benniaoAutoFocus]'
})
export class AutoFocusDirective implements OnInit{

  element: HTMLElement;

  // @Input() 
  // set benniaoAutoFocus(isFocus: boolean) {
  //   if(isFocus) {
  //     this.element.focus();
  //   }
  // }
  @Input() benniaoAutoFocus: boolean;

  constructor(
    private elementRef: ElementRef,
  ) {
    this.element = this.elementRef.nativeElement;
  }

  ngOnInit() {
    // this.element.focus();
  }

  ngOnChanges(change: SimpleChanges) {
    if(change.benniaoAutoFocus && change.benniaoAutoFocus.currentValue) {
      this.element.focus();
    }
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
