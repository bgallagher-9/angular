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
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
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
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onchange');
    console.log(changes);
  }

  ngOnInit() {
    console.log(this.header.nativeElement.textContent);
  }

  ngDoCheck() {

  }

  ngAfterContentInit() {
    console.log('afi');
  }

  ngAfterContentChecked() {
    console.log('acc ' + this.paragraph.nativeElement.textContent);

  }

  ngAfterViewInit() {
    console.log('avi');
    console.log('AVI ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('avc')
  }

  ngOnDestroy() {
    console.log('destroy')
  }
}
