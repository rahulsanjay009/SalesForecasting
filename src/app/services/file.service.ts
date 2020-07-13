import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileService {
  testObject:any={}
  constructor(private httpClient:HttpClient) { }
  upload(Obj):Observable<any>{
    console.log("file service  upload..." )  
    return this.httpClient.post('/upload',Obj);
      
  }
  test(Obj){
      console.log("test called")
      return this.httpClient.post('/api/test',Obj).subscribe(()=>{},()=>{  console.log("error raised")  })
  }
  run(){
      return this.httpClient.get('/runMain',{responseType:'text'});
  }
}
