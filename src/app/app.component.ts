import { Component } from '@angular/core';
import {FileService} from '../app/services/file.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FP';
  ran:boolean=false;
  retrievedData:any[]=[]
  fileToUpload: File = null;
  lu:boolean=false
  dataUrl:string | ArrayBuffer=""
  Obj:any=[];
  
  load:boolean=false;

  file: File;
  fileName:string;
  imageUrl: string | ArrayBuffer;

  constructor(private fs:FileService){

  }
  

  onChange(file:File){
    console.log("called")
    const reader = new FileReader();
    this.fileToUpload = file;
    reader.onload = () => {
      let text:any = reader.result;      
      var lines = text.split("\n");

    var result = [];

    var headers:string[]= lines[0].split(",");
      
    for (var i = 1; i < lines.length-1; i++) {

        var obj:any = {};
        var currentline = lines[i].split(",");
        var  j;
        for (j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
       
        result.push(obj);

    }
    this.Obj=result;
    console.log(this.Obj)
      //var json = this.csvJSON(text);
    };
    reader.readAsText(this.fileToUpload)
    
  }   


  upload(){
      this.fs.upload(this.Obj).subscribe((result)=>{
            console.log("Uploaded")
      },(err)=>{ console.log("error in uploading")  })
      document.forms[0].reset()
  } 

run(){
  this.load=true
    this.fs.run().subscribe((res)=>{
        console.log(res," Runn success ")
        this.load=false
        this.ran=true
    })
}

getResults(){
      
}


}
