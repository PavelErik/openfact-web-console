import { Component, OnInit } from '@angular/core';
import { ModuleFacturaComponent } from './module-factura';
//import { ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-documentos-electronicos',
  templateUrl: 'documentos-electronicos.component.html',
  styleUrls: ['documentos-electronicos.component.css'],
  directives: [ModuleFacturaComponent]
})
export class DocumentosElectronicosComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
