import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-persona-buttons',
  templateUrl: './persona-buttons.component.html',
  styleUrls: ['./persona-buttons.component.scss']
})
export class PersonaButtonsComponent implements OnInit {
  @Output() personaSelected = new EventEmitter<number>();
  personas: any[] = [];
  selectedPersona: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/api/persona').subscribe(data => {
      this.personas = data;
      this.selectedPersona = this.personas[0];
      this.personaSelected.emit(this.selectedPersona.id);
    });
  }

  selectPersona(persona: any) {
    this.selectedPersona = persona;
    this.personaSelected.emit(this.selectedPersona.id);
  }
}