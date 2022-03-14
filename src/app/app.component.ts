import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-viewer';
  file!:File;
  imgList:any=[];
  imgSrc:any;
  url: any; //Angular 11, for stricter type
	msg = "";

  

  onChange(event:any) {

    let arr:any=event.target.files;
    // this.imgSrc = URL.createObjectURL(item);
    // console.log(this.imgSrc)
    for(let item of arr){

      console.log(item);

      if(!item || item.length == 0) {
        this.msg = 'You must select an image';
        return;
      }
      
      var mimeType = item.type;
      
      if (mimeType.match(/image\/*/) == null) {
        this.msg = "Only images are supported";
        return;
      }
      
      var reader = new FileReader();
      reader.readAsDataURL(item);
      
      reader.onload = (_event) => {
        this.msg = "";
        this.url = reader.result; 
        this.imgList.push(this.url);
      }
    }
   

    // console.log(this.imgList)
}

}
