import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  
  clients = [
    {
      serial: 1,
      name: 'Yasin Chowdhury',
      invoiceDate: '01/05/2022',
    },
    {
      serial: 2,
      name: 'Yasin Chowdhury',
      invoiceDate: '01/05/2022',
    },
    {
      serial: 3,
      name: 'Yasin Chowdhury',
      invoiceDate: '01/05/2022',
    },
    {
      serial: 4,
      name: 'Yasin Chowdhury',
      invoiceDate: '01/05/2022',
    },
    {
      serial: 5,
      name: 'Yasin Chowdhury',
      invoiceDate: '01/05/2022',
    },
    {
      serial: 6,
      name: 'Yasin Chowdhury',
      invoiceDate: '01/05/2022',
    },
    {
      serial: 7,
      name: 'Yasin Chowdhury',
      invoiceDate: '01/05/2022',
    },
    {
      serial: 8,
      name: 'Yasin Chowdhury',
      invoiceDate: '01/05/2022',
    },
    {
      serial: 9,
      name: 'Yasin Chowdhury',
      invoiceDate: '01/05/2022',
    },
    {
      serial: 10,
      name: 'Yasin Chowdhury',
      invoiceDate: '01/05/2022',
    },
  ];
}
