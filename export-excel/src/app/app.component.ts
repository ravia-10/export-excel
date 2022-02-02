import { Component, OnInit } from '@angular/core';
import { ExportService } from './_services/export.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-exportexcel';

  customers: any = [];
  constructor(private exportService: ExportService) { }

  ngOnInit() {
    // for (let i = 0; i <= 25; i++) {
    this.customers.push({
      firstName: `Ravi`, lastName: `A`, email: `ravi@gmail.com`, address: 'Banglore', role: `Full stack developer`
    },
      {
        firstName: `Vinay`, lastName: `Kumar`,
        email: `vinaykumar@gmail.com`, address: 'Bellary', role: `Full stack developer`
      },
      {
        firstName: `Supreetha`, lastName: `G C`,
        email: `supreetha@gmail.com`, address: 'mysore', role: `Full stack developer`
      },
      {
        firstName: `chethan`, lastName: `K T`,
        email: `chethankt@gmail.com`, address: 'shivamoga', role: `Full stack developer`
      },
      {
        firstName: `Nisha`, lastName: `A P`,
        email: `nishaap@gmail.com`, address: 'gubbi', role: `Assossciate software Engineering`
      }
    );
  }
  //}

  export() {
    this.exportService.exportExcel(this.customers, 'customers');
  }
}
