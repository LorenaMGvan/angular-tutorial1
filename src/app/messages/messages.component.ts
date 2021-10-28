import { Component, OnInit } from '@angular/core';
import { MessageService  } from '../message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})

export class MessagesComponent implements OnInit {

  // la propiedad messageService debe ser publica porque la vinculara en la plantilla
  // angular solo se une a las propiedades publicas del componente
  constructor( public messageService: MessageService) { }

  ngOnInit(): void {
  }

  // se deben mostrar todos los mensajes,
  // también el mensaje enviado por HeroService cuando se busca héroes

}
