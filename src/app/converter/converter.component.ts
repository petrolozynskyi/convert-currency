import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Импортируем FormsModule

@Component({
  selector: 'app-currency-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
  standalone: true,
  imports: [HttpClientModule, FormsModule], // Добавляем FormsModule сюда
})
export class CurrencyConverterComponent {
  currencies = ['UAH', 'USD', 'EUR'];
  amount1 = 0;
  amount2 = 0;
  selectedCurrency1 = 'UAH';
  selectedCurrency2 = 'USD';

  // Определяем тип для курса валют, где ключ - строка (любой валютный код), а значение - число
  rates: { [key: string]: number } = {};

  constructor(private currencyService: CurrencyService) {
    this.currencyService.getRates().subscribe((rates) => {
      this.rates = rates;
      this.convert();
    });
  }

  convert() {
    if (this.selectedCurrency1 === this.selectedCurrency2) {
      this.amount2 = this.amount1;
    } else {
      const rate1 = this.rates[this.selectedCurrency1];
      const rate2 = this.rates[this.selectedCurrency2];
      this.amount2 = (this.amount1 / rate1) * rate2;
    }
  }

  onAmount1Change() {
    this.convert();
  }

  onCurrency1Change() {
    this.convert();
  }

  onAmount2Change() {
    this.convert();
  }

  onCurrency2Change() {
    this.convert();
  }
}
