import { Component, Input, OnChanges, SimpleChanges, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnChanges, AfterViewChecked {
  @Input() selectedPersona: any;
  @Input() selectedConversationListing: any;
  @ViewChild('chatContainer') private chatContainer: ElementRef;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedConversationListing) {
      this.scrollToBottom();
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }
}
