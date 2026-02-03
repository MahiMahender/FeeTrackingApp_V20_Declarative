import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../core/services/master/master-service';
import { IMaster } from '../../core/modal/interfaces/IMaster';

@Component({
  selector: 'app-master',
  imports: [],
  templateUrl: './master.html',
  styleUrl: './master.css',
})
export class Master implements OnInit {
  masterService = inject(MasterService);

  masterDataList: IMaster[] = [];
  filteredMasterData: IMaster[] = [];

  icons!: Map<string, string>;

  constructor() {
    this.getIcons();
  }

  ngOnInit(): void {
    this.getAllMasterDataList();
  }
  getAllMasterDataList() {
    const loadMasterSub$ = this.masterService.getAllMasterData().subscribe({
      next: (res: any) => {
        this.getAllMasterDataWithIcons(res.data);
      },
    });
    /* this.subscriptionList.push(loadMasterSub$); */
  }
  getAllMasterDataWithIcons(res: IMaster[]) {
    this.masterDataList = res.filter((master: IMaster) =>
      this.icons.has(master.masterValue.toUpperCase()),
    );
    console.log('Data :' + this.masterDataList);

    this.filteredMasterData = [...this.masterDataList];
  }
  getIcons() {
    this.icons = new Map<string, string>([
      ['CASH', 'bi-cash-coin'],
      ['CARD', 'bi-credit-card'],
      ['UPI', 'bi-phone'],
      ['INVOICE', 'bi-receipt'],
      ['RECEIPT', 'bi-file-earmark-check'],
      ['VOUCHER', 'bi-ticket'],
      ['NET BANKING', 'bi-bank'],
      ['CHEQUE', 'bi-file-earmark'],
    ]);
  }
}
