import {HostBinding, HostListener, Renderer, ElementRef, EventEmitter, Directive, Output, OnInit} from '@angular/core';

/**
 * Author : Lalit Umbarkar
 * Project : ngx-scroll-to-top
 **/
@Directive({
  selector: '[scroll-to-top]'
})
export class ScrollToTopDirective implements OnInit {

  @HostBinding("style.position") private positionStyle :string = 'static';
  @HostBinding("style.top.px") private topStyle:number;
  @Output() toTop: EventEmitter<boolean> = new EventEmitter();

  private isSticky: boolean = false;
  private lastScroll: number = 0;
  private offsetTop: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
  }

  ngOnInit(){
    this.offsetTop = this.elementRef.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    const scroll = window.pageYOffset;
    if (scroll > this.lastScroll && !this.isSticky && scroll >= this.offsetTop) {
        this.isSticky = true;
        this.positionStyle = 'fixed';
        this.topStyle = 0;
        this.toTop.emit(true);
    } else if (scroll < this.lastScroll && this.isSticky && scroll <= this.offsetTop) {
        this.isSticky = false;
        this.positionStyle = 'static';
        this.toTop.emit(false);
    }
    this.lastScroll = scroll;
  }
}

