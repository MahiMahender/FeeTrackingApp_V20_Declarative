import { Component, inject } from '@angular/core';
import { MasterService } from '../../core/services/master/master-service';

@Component({
  selector: 'app-master',
  imports: [],
  templateUrl: './master.html',
  styleUrl: './master.css',
})
export class Master {
  masterService = inject(MasterService);
}
