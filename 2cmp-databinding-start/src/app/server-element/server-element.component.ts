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
  ContentChild
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
  AfterViewChecked,
  OnDestroy
   {
    @Input ('srvElement') element: {type: string, name: string, content: string};
    @Input () name: string;
    @ViewChild('heading') header: ElementRef;
    @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('OnChanges called', change);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('text content', this.header.nativeElement.textContent);
    console.log('text content from paragraph', this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('DoCheck called');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit called');
    console.log('text content from paragraph', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit called');
    console.log('text content', this.header.nativeElement.textContent);

  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('onDestroy called')
  }

}
