import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  /*items = ["Wanvisa",
        "Chaiyawut",
        "Suparak",
        "Apichai",
        "Danchai"];*/
    
    items = [
      { name: "Wanvisa", tel : "0838984809", avatar : "stitch1.png" },
      { name: "Chaiyawut", tel : "0812345678", avatar : "stitch2.jpg" },
      { name: "Suparak", tel : "0821234567", avatar : "stitch3.jpg" },
      { name: "Apichai", tel : "0831234567", avatar : "stitch4.png" },
      { name: "Danchai", tel : "0831234568", avatar : "stitch5.jpg" }
    ];

  itemSelected(item : string){
    console.log("Seleted Item", item);
  }
  
  constructor(public navCtrl: NavController) {

  }

}
