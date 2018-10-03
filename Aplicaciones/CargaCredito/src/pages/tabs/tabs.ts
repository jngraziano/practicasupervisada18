import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1Root} from '../';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;


  tab1Title = "#QR#";
 

  constructor(public navCtrl: NavController) {
  
      this.tab1Title = this.tab1Title;
     
  
  }
}
