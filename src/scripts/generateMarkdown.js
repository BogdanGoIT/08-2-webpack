import { refs } from './refs';

export const createLi = text => `<li data-id='${text}'>${text}</li>`;

export const addLiToList = mardown => refs.list.insertAdjacentHTML('beforeend', mardown);