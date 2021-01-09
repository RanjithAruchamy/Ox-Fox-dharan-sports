import { Component, OnInit } from '@angular/core';
import { faSignOutAlt,faHome,faAddressBook,faInfoCircle,faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;
  faHome = faHome;
  faInfoCircle = faInfoCircle;
  faUser = faUser;
  faAddressBook = faAddressBook;
  constructor() { }

  ngOnInit(): void {
  }

}
