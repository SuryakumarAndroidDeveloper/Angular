import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appApphighlighter]'
})
export class ApphighlighterDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('mouseenter')
  mouseenter(){
    this.highlighter("red");

  }
  @HostListener('mouseleave')
  mouseleave(){
    this.highlighter("");

  }
  highlighter(color:any){
    this.elementRef.nativeElement.style.backgroundColor=color;
  }
}
