// filepath: c:\Code\PersonaChatBot\my-fullstack-app\frontend\src\app\app.component.ts

import { Component, ViewChild} from '@angular/core';
import { ConversationListingComponent } from './components/conversation-listing/conversation-listing.component';
import { ChatComponent } from './components/chat/chat.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NielsenIQ Chat Application';
  selectedPersona: number = 0;
  selectedConversationListing: any = {};

  @ViewChild(ConversationListingComponent) conversationListingComponent!: ConversationListingComponent;
  @ViewChild(ChatComponent) chatComponent!: ChatComponent;

  addNewConversation() {
    this.conversationListingComponent.addNewConversation();
  }
  selectNewConversation() {
    this.conversationListingComponent.selectNewConversation();
    this.chatComponent.forceNewConversation(this.conversationListingComponent.selectedConversation);
  }
}