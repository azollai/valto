import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

/**
 * @title Chips Autocomplete
 */
@Component({
  selector: 'app-chips-select',
  templateUrl: 'chips-select.component.html',
  styleUrls: ['chips-select.component.scss'],
})
export class ChipsSelectComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  @Input() chipControl = new FormControl('', Validators.required);
  filteredChips: Observable<string[]>;
  @Input() chips: string[] = [];
  @Input() allChips: string[] = ['Tag 1', 'Tag 2,', 'Other'];
  @Input() submitted = false;
  @Input() validationOn = true;

  @ViewChild('chipInput') chipInput: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.filteredChips = this.chipControl.valueChanges.pipe(
      startWith(null),
      map((chip: string | null) => chip ? this._filter(chip) : this.allChips.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      if (this.allChips.filter(v => v === value).length !== 0 &&
        this.chips.filter(v => v === value).length === 0
      ) {
        this.chips.push(value.trim());
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.chipControl.setValue(null);
  }

  remove(chip: string): void {
    const index = this.chips.indexOf(chip);
    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.allChips.filter(v => v === event.option.viewValue).length !== 0 &&
      this.chips.filter(v => v === event.option.viewValue).length === 0
    ) {
      this.chips.push(event.option.viewValue);
      this.chipInput.nativeElement.value = '';
      this.chipControl.setValue(null);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allChips.filter(chip => chip.toLowerCase().indexOf(filterValue) === 0);
  }
}
