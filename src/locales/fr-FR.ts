import { LocaleConfig, LocaleInterface } from '../types';

export default class Locale implements LocaleInterface {
  public config: LocaleConfig = {
    currency: {
      name: 'Euro',
      plural: 'Euros',
      symbol: '€',
      fractionalUnit: {
        name: 'Centime',
        plural: 'Centimes',
        symbol: 'Cts',
      },
    },
    texts: {
      and: 'Et',
      minus: 'Moins',
      only: '',
      point: 'Virgule',
    },
    numberWordsMapping: [
      { number: 1000000000000000, value: 'Billiard' },
      { number: 1000000000000, value: 'Billion' },
      { number: 1000000000, value: 'Milliard' },
      { number: 1000000, value: 'Million' },
      { number: 1000, value: 'Mille' },
      { number: 100, value: 'Cent' },
      { number: 99, value: 'Quatre-Vingt-Dix-Neuf' },
      { number: 98, value: 'Quatre-Vingt-Dix-Huit' },
      { number: 97, value: 'Quatre-Vingt-Dix-Sept' },
      { number: 96, value: 'Quatre-Vingt-Seize' },
      { number: 95, value: 'Quatre-Vingt-Quinze' },
      { number: 94, value: 'Quatre-Vingt-Quatorze' },
      { number: 93, value: 'Quatre-Vingt-Treize' },
      { number: 92, value: 'Quatre-Vingt-Douze' },
      { number: 91, value: 'Quatre-Vingt-Onze' },
      { number: 90, value: 'Quatre-Vingt-Dix' },
      { number: 89, value: 'Quatre-Vingt-Neuf' },
      { number: 88, value: 'Quatre-Vingt-Huit' },
      { number: 87, value: 'Quatre-Vingt-Sept' },
      { number: 86, value: 'Quatre-Vingt-Six' },
      { number: 85, value: 'Quatre-Vingt-Cinq' },
      { number: 84, value: 'Quatre-Vingt-Quatre' },
      { number: 83, value: 'Quatre-Vingt-Trois' },
      { number: 82, value: 'Quatre-Vingt-Deux' },
      { number: 81, value: 'Quatre-Vingt-Un' },
      { number: 80, value: 'Quatre-Vingt' },
      { number: 79, value: 'Soixante-Dix-Neuf' },
      { number: 78, value: 'Soixante-Dix-Huit' },
      { number: 77, value: 'Soixante-Dix-Sept' },
      { number: 76, value: 'Soixante-Seize' },
      { number: 75, value: 'Soixante-Quinze' },
      { number: 74, value: 'Soixante-Quatorze' },
      { number: 73, value: 'Soixante-Treize' },
      { number: 72, value: 'Soixante-Douze' },
      { number: 71, value: 'Soixante Et Onze' },
      { number: 70, value: 'Soixante-dix' },
      { number: 69, value: 'Soixante-Neuf' },
      { number: 68, value: 'Soixante-Huit' },
      { number: 67, value: 'Soixante-Sept' },
      { number: 66, value: 'Soixante-Six' },
      { number: 65, value: 'Soixante-Cinq' },
      { number: 64, value: 'Soixante-Quatre' },
      { number: 63, value: 'Soixante-Trois' },
      { number: 62, value: 'Soixante-Deux' },
      { number: 61, value: 'Soixante Et Un' },
      { number: 60, value: 'Soixante' },
      { number: 59, value: 'Cinquante-Neuf' },
      { number: 58, value: 'Cinquante-Huit' },
      { number: 57, value: 'Cinquante-Sept' },
      { number: 56, value: 'Cinquante-Six' },
      { number: 55, value: 'Cinquante-Cinq' },
      { number: 54, value: 'Cinquante-Quatre' },
      { number: 53, value: 'Cinquante-Trois' },
      { number: 52, value: 'Cinquante-Deux' },
      { number: 51, value: 'Cinquante Et Un' },
      { number: 50, value: 'Cinquante' },
      { number: 49, value: 'Quarante-Neuf' },
      { number: 48, value: 'Quarante-Huit' },
      { number: 47, value: 'Quarante-Sept' },
      { number: 46, value: 'Quarante-Six' },
      { number: 45, value: 'Quarante-Cinq' },
      { number: 44, value: 'Quarante-Quatre' },
      { number: 43, value: 'Quarante-Trois' },
      { number: 42, value: 'Quarante-Deux' },
      { number: 41, value: 'Quarante Et Un' },
      { number: 40, value: 'Quarante' },
      { number: 39, value: 'Trente-Neuf' },
      { number: 38, value: 'Trente-Huit' },
      { number: 37, value: 'Trente-Sept' },
      { number: 36, value: 'Trente-Six' },
      { number: 35, value: 'Trente-Cinq' },
      { number: 34, value: 'Trente-Quatre' },
      { number: 33, value: 'Trente-Trois' },
      { number: 32, value: 'Trente-Deux' },
      { number: 31, value: 'Trente Et Un' },
      { number: 30, value: 'Trente' },
      { number: 29, value: 'Vingt-Neuf' },
      { number: 28, value: 'Vingt-Huit' },
      { number: 27, value: 'Vingt-Sept' },
      { number: 26, value: 'Vingt-Six' },
      { number: 25, value: 'Vingt-Cinq' },
      { number: 24, value: 'Vingt-Quatre' },
      { number: 23, value: 'Vingt-Trois' },
      { number: 22, value: 'Vingt-Deux' },
      { number: 21, value: 'Vingt Et Un' },
      { number: 20, value: 'Vingt' },
      { number: 19, value: 'Dix-Neuf' },
      { number: 18, value: 'Dix-Huit' },
      { number: 17, value: 'Dix-Sept' },
      { number: 16, value: 'Seize' },
      { number: 15, value: 'Quinze' },
      { number: 14, value: 'Quatorze' },
      { number: 13, value: 'Treize' },
      { number: 12, value: 'Douze' },
      { number: 11, value: 'Onze' },
      { number: 10, value: 'Dix' },
      { number: 9, value: 'Neuf' },
      { number: 8, value: 'Huit' },
      { number: 7, value: 'Sept' },
      { number: 6, value: 'Six' },
      { number: 5, value: 'Cinq' },
      { number: 4, value: 'Quatre' },
      { number: 3, value: 'Trois' },
      { number: 2, value: 'Deux' },
      { number: 1, value: 'Un' },
      { number: 0, value: 'Zéro' },
    ],
    ignoreOneForWords: ['Cent', 'Mille'],
    pluralMark: 's',
    pluralWords: ['Billiard', 'Billion', 'Milliard', 'Million'],
  };
}
