import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.page.html',
  styleUrls: ['./connexion-page.page.scss'],
})
export class ConnexionPagePage implements OnInit {
  private email: string;
  private motpass: number;
  myLogger ;

  constructor(private user: UserService) { 

  }

  ngOnInit() {
    //this.myLogger = this.user.getUser(this.email);
  }

  seConnecter(){
    console.log("oui")
    console.log(this.email);
    this.user.getUser(this.email).subscribe((response) => {
      this.myLogger = response;
      console.log(this.myLogger);
    });
  }

  authent(){
    
  }

}
