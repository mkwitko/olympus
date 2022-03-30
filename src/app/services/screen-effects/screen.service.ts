import { Injectable } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { TranslateMessageService } from '../variables-management/translate-message.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  public loading;

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private translate: TranslateMessageService,
    private modalController: ModalController,
    private toastr: ToastrService
  ) { }

  public async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Aguarde'
    });
    await this.loading.present();
  }

  public async presentToast(message: string, title: string, type: string) {
    if(type === 'sucess'){
      this.toastr.success(message, title, {closeButton: true, extendedTimeOut: 2000, progressBar: true});
    } else if (type === 'error'){
      this.toastr.error(message, title, {closeButton: true, extendedTimeOut: 2000, progressBar: true});
    } else if (type === 'warning'){
      this.toastr.warning(message, title, {closeButton: true, extendedTimeOut: 2000, progressBar: true});
    } else if (type === 'info'){
      this.toastr.info(message, title, {closeButton: true, extendedTimeOut: 2000, progressBar: true});
    }

  }

  public async presentErrorToast(error: string, durationNew?: number) {
    let durationFinal = 5000;
    if(durationNew){
      durationFinal = durationNew;
    }
    const message = this.translate.callVerifyErrors(error);
    const toast = await this.toastController.create({
      message,
      duration: durationFinal
    });
    toast.present();
  }

  async presentModal(component: any, myClass: string) {
    const modal = await this.modalController.create({
      component,
      cssClass: myClass
    });
    return await modal.present();
  }
}
