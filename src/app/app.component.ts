import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private gistAPIUrl = 'https://api.github.com/users/digital-promise-test/gists?access_token=9ddf59fd1fed2663e29b7cdb8595c8c7c9d3e23e';
  gistData: any = [];
  privateGist: any = [];
  footer = 'created by: maiar khattab';

  constructor(private http: Http) {}

  ngOnInit() {
    this.getData();
    this.getGists();
  }

  private getData() {
    return this.http.get(this.gistAPIUrl)
                    .map((res: Response) => res.json())
  }

  private getGists() {
    this.getData().subscribe(data => {
      this.gistData = data;
    })
  }

  private getPrivate() {
    console.log(this.gistData[0].public);
    for (let i = 0; i < this.gistData.length; i++) {
      if (this.gistData[i].public === false) {
        this.privateGist.push(this.gistData[i]);
      }
    }
}
  private getPublic() {
    for (let i = 0; i < this.gistData.length; i++) {
      if (this.gistData[i].public === true) {
        this.privateGist.push(this.gistData[i]);
      }
    }

}

}
