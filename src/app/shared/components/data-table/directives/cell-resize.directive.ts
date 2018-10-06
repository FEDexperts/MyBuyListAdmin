import { Directive, OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { tap, takeUntil, map } from 'rxjs/operators';

@Directive({
  selector: '[mat-cell-resize]'
})
export class MatCellResizeDirective implements OnInit, OnDestroy {

  mouseDownListener;
  mouseupListener;
  resizers = [];
  mouseMoveStop = new Subject();
  mouseDownStop = new Subject();
  mouseUpStop = new Subject();

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

    let resizeName = this.el.nativeElement.hasAttribute('mat-header-row') ? 'th' : 'td';

    const cells = this.el.nativeElement.children;
    for (let cell of cells) {
      let nextCell = this.renderer.nextSibling(cell);
      if (nextCell) {
        const cellContainer = nextCell.parentNode;
        const resizeElement = this.renderer.createElement(resizeName);
        this.renderer.addClass(resizeElement, 'resize');

        let mouseMoveSubject = new Subject();

        // MouseDown
        fromEvent(resizeElement, 'mousedown')
          .pipe(
            takeUntil(this.mouseDownStop),
            tap((event: MouseEvent) => {
              // console.log('mousedown', event);
              mouseMoveSubject.next({
                clientX: event.clientX,
                startWidth: cell.clientWidth
              });
            })
          )
          .subscribe();

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
        fromEvent(this.el.nativeElement, 'mouseup')
          .pipe(
            takeUntil(this.mouseUpStop),
            tap((event: MouseEvent) => {
              // console.log('mouseup', event);
              this.mouseMoveStop.next();
            })
          )
          .subscribe();

        this.resizers.push({
          cellContainer,
          resizeElement,
          nextCell,
          cell,
        });
      }
    }

    this.resizers.forEach(item => {
      this.renderer.insertBefore(item.cellContainer, item.resizeElement, item.nextCell);
    })

  }

  ngOnDestroy(): void {
    this.mouseDownStop.next();
    this.mouseUpStop.next();
  }
}
