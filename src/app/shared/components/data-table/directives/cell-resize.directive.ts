import { Directive, OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { tap, takeUntil, map } from 'rxjs/operators';

@Directive({
  selector: '[resizable]'
})
export class CellResizeDirective implements OnInit, OnDestroy {

  mouseDownListener;
  mouseupListener;
  resizers = [];
  mouseMoveStop = new Subject();
  subscriptions: Subscription[] = []

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

    let resizeName = this.el.nativeElement.hasAttribute('mat-header-row') ? 'th' : 'td';

    let start: number;

    const cellElements = this.el.nativeElement.children;
    for (let cell of cellElements) {
      let next = this.renderer.nextSibling(cell);
      if (next) {
        const parent = next.parentNode;
        const elResize = this.renderer.createElement(resizeName);
        this.renderer.addClass(elResize, 'resize');

        let mouseMoveSubject = new Subject();

        // MouseDown
        this.subscriptions.push(fromEvent(elResize, 'mousedown')
          .pipe(
            tap((event: MouseEvent) => {
              // console.log('mousedown', event);
              mouseMoveSubject.next({
                clientX: event.clientX,
                startWidth: cell.clientWidth
              });
            })
          )
          .subscribe()
        );

        // MouseMove
        mouseMoveSubject
          .subscribe(
            (data: { clientX: number, startWidth: number }) => {
              fromEvent(this.el.nativeElement, 'mousemove')
                .pipe(
                  takeUntil(this.mouseMoveStop),
                  map((event: MouseEvent) => event.clientX),
                )
                .subscribe((clientX: number) => {
                  // console.log('mousemove', clientX);
                  const startclientX = data.clientX;
                  const diffX = startclientX - clientX;
                  const width = data.startWidth + diffX;
                  this.renderer.setStyle(cell, 'width', width + 'px');
                })
            })

        //MouseUp
        this.subscriptions.push(fromEvent(this.el.nativeElement, 'mouseup')
          .pipe(
            tap((event: MouseEvent) => {
              // console.log('mouseup', event);
              this.mouseMoveStop.next();
            })
          )
          .subscribe()
        );

        this.resizers.push({
          parent,
          elResize,
          next,
          cell,
        });
      }
    }

    this.resizers.forEach(item => {
      this.renderer.insertBefore(item.parent, item.elResize, item.next);
    })

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(us => us.unsubscribe());
  }
}
