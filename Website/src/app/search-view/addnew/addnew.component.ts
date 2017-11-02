import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  showForm: Boolean = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  categories: String[] = ['Show all', 'Ferskvarer', 'Kjølevarer', 'Godteri', 'Glutenfritt'];
  producers: String[] = ['Show all', 'Tine', 'Freia', 'Bakeren', 'Toro']
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

  states: any[] = [
      {
        name: 'Arkansas',
        population: '2.978M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
      },
      {
        name: 'California',
        population: '39.14M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
      },
      {
        name: 'Florida',
        population: '20.27M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
      },
      {
        name: 'Texas',
        population: '27.47M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
      }
    ];

  constructor(private _formBuilder: FormBuilder) {
      this.stateCtrl = new FormControl();
      this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(state => state ? this.filterStates(state) : this.states.slice());
  }

  ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
          nameCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
          categoryCtrl: ['', Validators.required],
          producerCtrl: ['', Validators.required],
          originCtrl: ['', Validators.required]
        });
        this.thirdFormGroup = this._formBuilder.group({
          priceCtrl: ['', Validators.required],
          weightCtrl: ['', Validators.required]
        });
        this.fourthFormGroup = this._formBuilder.group({
          descriptionCtrl: ['', Validators.required]
        });
      }

      filterStates(name: string) {
        return this.states.filter(state =>
          state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
      }

      print() {
          console.log(this.secondFormGroup);
      }
 }
