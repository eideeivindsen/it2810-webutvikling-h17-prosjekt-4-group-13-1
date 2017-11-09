import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import { AbstractControl } from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { SearchService } from '../../_services/search.service';
import { countries, producers, categories } from '../../../assets/variables';
import { Product } from '../../product';



@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  showForm: Boolean = false;
  successful: Boolean = false;
  formGroup: FormGroup;
  formArray: FormArray;
  categories: String[] = categories;
  producers: String[] = producers;
  origins: String[] = countries;



  constructor(private _formBuilder: FormBuilder, private searchService: SearchService) {

  }

  ngOnInit() {
      this.formArray = this._formBuilder.array([
          this._formBuilder.group({
              name: ['', [Validators.required, Validators.minLength(3)]],
          }),
          this._formBuilder.group({
              category: ['', Validators.required],
              producer: ['', Validators.required],
              origin: ['', Validators.required]
          }),
          this._formBuilder.group({
              price: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
              weight: ['', [Validators.required, Validators.pattern("^[0-9]+$")]]
          }),
          this._formBuilder.group({
              description: ['', [Validators.required, Validators.minLength(10)]]
          }),
      ])
      this.formGroup = this._formBuilder.group({
          formArray: this.formArray,
        });
    }

  onSubmit() {
      this.successful = true;
      var product: Product = {
          'name': this.formGroup.value.formArray[0].name,
          'category': this.formGroup.value.formArray[1].category,
          'producer': this.formGroup.value.formArray[1].producer,
          'origin': this.formGroup.value.formArray[1].origin,
          'price': parseInt(this.formGroup.value.formArray[2].price),
          'weight': parseInt(this.formGroup.value.formArray[2].weight),
          'description': this.formGroup.value.formArray[3].description,
          'quantity': 0,
          'in_stock': false,
          'kilo_price': this.formGroup.value.formArray[2].price / (this.formGroup.value.formArray[2].weight / 1000)  //Weight is in gram

      };
      this.searchService.addProduct(product);
  }


  resetForm() {
      this.formGroup.reset()
      this.successful = false;
    }
 }
