import { Component } from '@angular/core';
import {FileService} from '../app/services/file.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FP';
  fileToUpload: File = null;
  lu:boolean=false
  constructor(private fs:FileService){

  }
  handleFileInput(files:FileList){
    
    this.fileToUpload = files.item(0);
    
  }
  upload(){
    console.log(this.fileToUpload)
    const formdata=new FormData;
    formdata.append('filekey',this.fileToUpload,"ThIsisme")
    console.log(formdata);
    this.fs.upload(this.fileToUpload)
  }
}
