import { Component, OnInit, ViewChild, AfterViewInit, Input, ElementRef, AfterViewChecked, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonaButtonsComponent } from '../persona-buttons/persona-buttons.component';
import { ConversationListingComponent } from '../conversation-listing/conversation-listing.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges {
  @Input() selectedPersona: number = 0;
  @Input() selectedConversationListing: any = {};
  @ViewChild('chatContent') private chatContent!: ElementRef;
  @Output() conversationCreated = new EventEmitter();
  @Output() selectNewConversation = new EventEmitter();
  messages: any[] = [];
  userInput = '';
  loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedPersona && changes.selectedPersona.currentValue) {
      this.messages = [];
      if (this.selectedConversationListing.id > 0) {
        this.selectNewConversation.emit();
      } else {
      }
    }
    else if (changes.selectedConversationListing && changes.selectedConversationListing.currentValue
    ) {
      if (changes.selectedConversationListing.currentValue.id > 0) {
        this.loadMessages(changes.selectedConversationListing.currentValue.id);
      }
      else {
        this.messages = []
      }
    }
  }

  forceNewConversation(conversation: any) {
    this.selectedConversationListing = conversation;
  }

  loadMessages(conversationId: number) {
    this.http.get<any[]>(`/api/chat/${conversationId}`).subscribe(data => {
      this.messages = data;
      this.scrollToBottom();
    });
  }

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ message: this.userInput, additionalText: '' });
      this.loading = true;
      this.http.post<any>('/api/chat', {
        message: this.userInput,
        conversationId: this.selectedConversationListing.id,
        personaId: this.selectedPersona
      }).subscribe(response => {
        this.messages.push({ message: response.response, additionalText: '' });
        if (!this.selectedConversationListing.id) {
          this.selectedConversationListing.id = response.conversationId;
          this.selectedConversationListing.name = this.userInput.substring(0, 255);
          this.conversationCreated.emit();
        }
        this.userInput = '';
        this.loading = false;
        this.scrollToBottom();
      }, error => {
        this.loading = false;
      });
    }
  }

  private scrollToBottom(): void {
    try {
      this.chatContent.nativeElement.scrollTop = this.chatContent.nativeElement.scrollHeight;
    } catch(err) { }
  }
}