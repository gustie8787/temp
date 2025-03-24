import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-conversation-listing',
  templateUrl: './conversation-listing.component.html',
  styleUrls: ['./conversation-listing.component.scss']
})
export class ConversationListingComponent implements OnInit {
  @Output() conversationSelected = new EventEmitter<any>();
  conversations: any[] = [];
  selectedConversation: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadConversations();
  }

  addNewConversation() {
    this.addNewConversationWithData(this.conversations);
  }

  addNewConversationWithData(data: any) {
    this.conversations = [{ name: 'New Conversation', id: 0 }, ...data];
  }

  loadConversations() {
    this.http.get<any[]>('/api/conversation').subscribe(data => {
      this.addNewConversationWithData(data);
      this.selectedConversation = this.conversations[0];
      this.conversationSelected.emit(this.selectedConversation);
    });
  }

  selectConversation(conversation: any) {
    this.selectedConversation = conversation;
    this.conversationSelected.emit(this.selectedConversation);
  }
  selectNewConversation() {
    this.selectedConversation = this.conversations[0];
    this.conversationSelected.emit(this.selectedConversation);
  }
}