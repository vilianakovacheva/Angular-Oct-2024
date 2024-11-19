import { Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from "@angular/core";

type myVoid = () => void;

@Directive({
    selector: '[appHighlight]',
    standalone: true,
})
export class HighlightDirective implements OnInit, OnDestroy {
    // @HostListener('mouseenter', ['$event']) mouseEnterHandler(e: MouseEvent) {
    //     console.log('mouseEnter', e);
    // }

    // @HostListener('mouseleave', ['$event']) mouseLeaveHandler(e: MouseEvent) {
    //     console.log('mouseLeave', e);
    // }

    // @HostListener('mousedown', ['$event']) mouseDownHandler(e: MouseEvent) {
    //     console.log('mouseDown Activated', e);
    // }

    unsubEventArray: myVoid[]  = [];

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        // console.log('Directive is loaded!');
        // console.log(this.elRef.nativeElement);

        // !Important: Bad Practice
        // this.elRef.nativeElement.style.background = 'orange'

        //Good practice
        // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'pink');

        const mouseEnterEvent = this.renderer.listen(this.elRef.nativeElement, 'mouseenter', this.mouseEnterHandler.bind(this));

        const mouseLeaveEvent = this.renderer.listen(this.elRef.nativeElement, 'mouseleave', this.mouseLeaveHandler.bind(this));

        this.unsubEventArray.push(mouseEnterEvent);
        this.unsubEventArray.push(mouseLeaveEvent);
    }

    mouseEnterHandler(e: MouseEvent) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'orange');
        this.renderer.addClass(this.elRef.nativeElement, 'highlight');
    }

    mouseLeaveHandler(e: MouseEvent) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'initial');
        this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
    }

    ngOnDestroy(): void {
        console.log('on destroy invoked');

        this.unsubEventArray.forEach((eventFn) => eventFn());
    }

}