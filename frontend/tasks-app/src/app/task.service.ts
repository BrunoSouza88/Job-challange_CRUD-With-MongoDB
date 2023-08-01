import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private APIurl = 'http://localhost:3000/tasks';  

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<any[]> {
    console.log('APIurl', this.APIurl);
    return this.http.get<any[]>(this.APIurl);
  }
}
