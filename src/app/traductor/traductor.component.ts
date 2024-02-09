import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-traductor',
  standalone: true,
  imports: [FormsModule,MatInputModule,MatFormFieldModule,MatButtonModule],
  templateUrl: './traductor.component.html',
  styleUrl: './traductor.component.css'
})
export class TraductorComponent {
  inputText= "";
  brailleOutput='';
  brailleMap: any;

 onKeypressEvent(event: any){
    const textArea = document.getElementById("textInput") as HTMLTextAreaElement; // Obtener el elemento TextArea
    this.inputText = textArea.value;
    const brailleOutputElement: HTMLElement | null = document.getElementById("brailleOutput");
    this.brailleOutput = this.textToBraille(this.inputText);
    
    if (brailleOutputElement) {
        brailleOutputElement.innerHTML = this.brailleOutput;
    }

  };

  textToBraille(texto: string): string {
    const brailleMap: { [key: string]: string } = {
        'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑',
        'f': '⠋', 'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚',
        'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕',
        'p': '⠏', 'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞',
        'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭', 'y': '⠽',
        'z': '⠵', 'á': '⠷', 'é': '⠮', 'í': '⠾', 'ó': '⠬',
        'ú': '⠳', 'ü': '⠿', 'ñ': '⠻', '0': '⠼⠚', '1': '⠼⠁', '2': '⠼⠃', '3': '⠼⠉',
        '4': '⠼⠙', '5': '⠼⠑', '6': '⠼⠋', '7': '⠼⠛',
        '8': '⠼⠓', '9': '⠼⠊'
    };

    return texto.toLowerCase().split('').map(function(caracter) {
        return brailleMap[caracter] || caracter;
    }).join('');
};

}
