import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy,
  AfterViewChecked
{
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onchange');
    console.log(changes);
  }

  ngOnInit() {
  }

  ngDoCheck() {

  }

  ngAfterContentInit() {
    console.log('afi');
  }

  ngAfterContentChecked() {
    console.log('acc')
  }

  ngAfterViewInit() {
    console.log('avi')
  }

  ngAfterViewChecked() {
    console.log('avc')
  }

  ngOnDestroy() {
    console.log('destroy')
  }

}
