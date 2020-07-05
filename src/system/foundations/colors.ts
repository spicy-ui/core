import { ColorHues } from '../types';

const transparent = 'transparent';
const current = 'currentColor';

const black = '#000';
const white = '#fff';

const whiteAlpha: ColorHues = {
  50: 'rgba(255, 255, 255, 0.04)',
  100: 'rgba(255, 255, 255, 0.06)',
  200: 'rgba(255, 255, 255, 0.08)',
  300: 'rgba(255, 255, 255, 0.16)',
  400: 'rgba(255, 255, 255, 0.24)',
  500: 'rgba(255, 255, 255, 0.36)',
  600: 'rgba(255, 255, 255, 0.48)',
  700: 'rgba(255, 255, 255, 0.64)',
  800: 'rgba(255, 255, 255, 0.80)',
  900: 'rgba(255, 255, 255, 0.92)',
};

const blackAlpha: ColorHues = {
  50: 'rgba(0, 0, 0, 0.04)',
  100: 'rgba(0, 0, 0, 0.06)',
  200: 'rgba(0, 0, 0, 0.08)',
  300: 'rgba(0, 0, 0, 0.16)',
  400: 'rgba(0, 0, 0, 0.24)',
  500: 'rgba(0, 0, 0, 0.36)',
  600: 'rgba(0, 0, 0, 0.48)',
  700: 'rgba(0, 0, 0, 0.64)',
  800: 'rgba(0, 0, 0, 0.80)',
  900: 'rgba(0, 0, 0, 0.92)',
};

const gray: ColorHues = {
  50: '#f5f5f5',
  100: '#d9dada',
  200: '#bfbfc1',
  300: '#a5a5a7',
  400: '#8c8c8f',
  500: '#737477',
  600: '#5c5d60',
  700: '#45464a',
  800: '#303135',
  900: '#1c1d21',
};

const red: ColorHues = {
  50: '#ffeceb',
  100: '#ffd8d7',
  200: '#ffb1ae',
  300: '#ff8a86',
  400: '#ff635d',
  500: '#ff3c35',
  600: '#d23631',
  700: '#a4302d',
  800: '#772929',
  900: '#492325',
};

const orange: ColorHues = {
  50: '#fff6e7',
  100: '#ffeccf',
  200: '#ffd99f',
  300: '#fec66e',
  400: '#feb33e',
  500: '#fea00e',
  600: '#d18612',
  700: '#a46c16',
  800: '#765119',
  900: '#49371d',
};

const yellow: ColorHues = {
  50: '#fffdee',
  100: '#fefbdc',
  200: '#fcf8b8',
  300: '#fbf495',
  400: '#f9f171',
  500: '#f8ed4e',
  600: '#ccc345',
  700: '#a09a3c',
  800: '#747033',
  900: '#48472a',
};

const green: ColorHues = {
  50: '#e6f8ec',
  100: '#ccf0d9',
  200: '#99e0b2',
  300: '#67d18c',
  400: '#34c165',
  500: '#01b23f',
  600: '#069439',
  700: '#0c7633',
  800: '#11592d',
  900: '#173b27',
};

const teal: ColorHues = {
  50: '#e7fff4',
  100: '#cce4e2',
  200: '#99c9c5',
  300: '#67afa9',
  400: '#34948c',
  500: '#01796f',
  600: '#06675f',
  700: '#0c5450',
  800: '#114240',
  900: '#172f31',
};

const blue: ColorHues = {
  50: '#ecf4ff',
  100: '#d0e5f5',
  200: '#a2caeb',
  300: '#73b0e0',
  400: '#4595d6',
  500: '#167bcc',
  600: '#1768aa',
  700: '#185588',
  800: '#1a4365',
  900: '#1b3043',
};

const cyan: ColorHues = {
  50: '#e9fdfb',
  100: '#d2faf6',
  200: '#a4f5ee',
  300: '#77efe5',
  400: '#49eadd',
  500: '#1ce5d4',
  600: '#1cbdb0',
  700: '#1c958c',
  800: '#1c6d69',
  900: '#1c4545',
};

const purple: ColorHues = {
  50: '#f4e9ff',
  100: '#e9d2ff',
  200: '#d3a4ff',
  300: '#be77ff',
  400: '#a849ff',
  500: '#921cff',
  600: '#7a1cd3',
  700: '#631ca6',
  800: '#4b1d7a',
  900: '#341d4d',
};

const pink: ColorHues = {
  50: '#ffeafd',
  100: '#ffd4fa',
  200: '#ffa9f5',
  300: '#ff7ff1',
  400: '#ff54ec',
  500: '#ff29e7',
  600: '#d227bf',
  700: '#a42498',
  800: '#772270',
  900: '#491f49',
};

export const colors = {
  transparent,
  current,
  black,
  white,
  whiteAlpha,
  blackAlpha,
  gray,
  red,
  orange,
  yellow,
  green,
  teal,
  blue,
  cyan,
  purple,
  pink,
};
