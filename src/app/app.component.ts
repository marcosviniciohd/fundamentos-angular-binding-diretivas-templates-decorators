import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'binding-diretivas-templates-e-decorators';
  inputText = 'Texto Inicial';
  inputType = 'text';
  isDisabled = false;
}
