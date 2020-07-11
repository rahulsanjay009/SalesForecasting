import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FileService {
  testObject={
      name:'string',
      place:'string',
      wtf:'what the fcuk'
  }
  constructor(private httpClient:HttpClient) { }
  upload(file:File){
    const endpoint = 'http://localhost:3000/api/uploads';
    const formData: FormData = new FormData();
    formData.append('fileKey', file, file.name);
    console.log(" Upload from ts ");
    return this.httpClient
      .post(endpoint, file).subscribe(()=>{},()=>{  console.log("error raised")  })
  }

  test(){
      console.log("test called")
      return this.httpClient.post('http://localhost:3000/api/uploads',this.testObject).subscribe(()=>{},()=>{  console.log("error raised")  })
  }
}
