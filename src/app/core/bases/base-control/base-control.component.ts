import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { AppInjector } from '../../app-injector';

@Component({
  selector: 'app-base-control',
  template: ``,
  styleUrls: ['./base-control.component.css']
})
export class BaseControlComponent implements OnInit {

  @Input() title:string;
  @Output() Blur = new EventEmitter<any>();
  dictionary:DictionaryService;
  
  constructor() {
    try {
      const injector = AppInjector.getInjector();

      // injector is undefined at this point
      this.dictionary = injector.get(DictionaryService);
      //this.labels = injector.get(LabelsService);
    } catch (e) {
      console.log('Failed initializing dependencies', e)
    }
   }

  ngOnInit(): void {
  }

  onBlur(){
    //console.log("Se perdió el foco");
    this.Blur.emit("Se perdió el foco desde el hijo");
  } 

}
