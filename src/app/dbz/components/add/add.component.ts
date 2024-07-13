import { Component, EventEmitter,  Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'dbz-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {

    if (this.character.name.length === 0 ) return;
    console.log(this.character)

    this.onNewCharacter.emit({...this.character});

    this.character.name='';
    this.character.power=0;
  }

}
