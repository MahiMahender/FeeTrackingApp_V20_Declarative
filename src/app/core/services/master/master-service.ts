import { inject, Injectable } from '@angular/core';
import { API_Constant } from '../../constant/Constant';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { IMaster } from '../../modal/interfaces/IMaster';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  private http = inject(HttpClient);

  getAllMasterData() {
    return this.http.get(environment.API_URL + API_Constant.MASTER.GET_ALL_MASTERS);
  }
  saveMasterData(master: IMaster) {
    return this.http.post(`${environment.API_URL}${API_Constant.MASTER.CREATE_MASTER}`, master);
  }
  editMasterData(master: IMaster) {
    return this.http.put(
      environment.API_URL + API_Constant.MASTER.UPDATE_MASTER + master.masterId,
      master,
    );
  }
  deleteMasterData(masterId: number) {
    return this.http.delete(environment.API_URL + API_Constant.MASTER.DELETE_MASTER + masterId);
  }
}
