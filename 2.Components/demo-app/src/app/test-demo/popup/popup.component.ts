import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { beaverImgSrc } from '../../constants';

type HandleClick = () => void;

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit, OnDestroy {
  @Input('isShown') isShown = false
  // @Input('handleProp') hideModal : HandleClick | null = null;
  @Output() onChildEvent = new EventEmitter<boolean>();

  beaverImg = "";
  toggle = false;

  ngOnInit(): void {

    setTimeout(() => {
      this.beaverImg = beaverImgSrc;

      console.log('Data has been fetched on INIT!');
      console.log('Subscribe for EVENTS');
    }, 2000);
  }

  ngOnDestroy(): void {
    console.log('Unsubscribe from all of the EVENTS');
  }

  handleClick() {
    console.log('click');

    this.onChildEvent.emit(!this.toggle);
  }
}
