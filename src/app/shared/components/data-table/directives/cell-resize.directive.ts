import { Directive, OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Directive({
  selector: '[resizable]'
})
export class CellResizeDirective implements OnInit, OnDestroy {

  mouseDownListener;
  mouseupListener;
  resizers = [];

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

        let mouseDownSubscription = fromEvent(elResize, 'mousedown')
          .pipe(
            tap(event => {
              console.log('mousedown', event);
              mouseMoveSubject.next();
            })
          )
          .subscribe();

        mouseMoveSubject
          .subscribe(() => {
            fromEvent(elResize, 'mousemove')
              .subscribe(event => {
                console.log('mousemove', event);
              })
          })

        let mouseUpSubscription = fromEvent(elResize, 'mouseup')
          .pipe(
            tap(event => {
              console.log('mouseup', event);
              mouseMoveSubject.complete();
            })
          )
          .subscribe();

        const resizer = {
          parent,
          elResize,
          next,
          cell,
          // onMouseDown: ((index) => {
          //   return this.renderer.listen(elResize, 'mousedown', (target) => {
          //     start = cell.clientWidth;
          //     const startClientX = target.clientX;
          //   });
          // })(),
          // onMouseMove: () => {
          //   this.renderer.listen('window', 'mousemove', (target) => {
          //     // let diff = startX - target.clientX;
          //     // let newWidth = start + diff;
          //     // this.renderer.setStyle(cell, 'width', newWidth + 'px');
          //     console.log(target);
          //   })
          // },
          // onMouseUp: (() => {
          //   return this.renderer.listen(elResize, 'mouseup', (target) => {
          //   })
          // })()
        }

        this.resizers.push(resizer);
      }
    }

    this.resizers.forEach(item => {
      this.renderer.insertBefore(item.parent, item.elResize, item.next);
    })

  }

  ngOnDestroy(): void {
  }
}
