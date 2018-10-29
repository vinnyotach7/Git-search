import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = '4b6ecb47fb6f16f11dcd';
  private clientsecret = 'a6fcab6757e7bcb1ea486b7ab460c1cd19c2137f';
  constructor(private http: Http) {
    console.log('service is now ready');
    this.username = 'vinnyotach7';
   }

   getProfileInfo() {
     return this.http.get('https://api.github.com/users/' + this.username + '?this.client_id=' + this.clientid + '&client_secret=' + this.clientsecret);
    //  .map(res => res.json());
   }
   getProfileRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?this.client_id=' + this.clientid + '&client_secret=' + this.clientsecret);
    //  .map(res => res.json());
   }
}
