import { Component, OnInit } from '@angular/core';

import { ProjectHeaderComponent } from '../../../util/project-header';
import { ProjectPageComponent } from '../../../util/project-page';

@Component({
  moduleId: module.id,
  selector: 'app-overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.css'],
  directives: [ProjectHeaderComponent, ProjectPageComponent]
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
