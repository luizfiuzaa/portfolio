import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  projetos: any = {
    nome: "JEV-A",
    desc: "Sistema de agendamento e gerenciamento de horário/clientes para um salão de beleza. Tem integração com o WhatsApp para enviar mensagens aos clientes.",
    techs: {
      angular: true,
      ionic: true,
      chartjs: true,
      
    },
  };


}