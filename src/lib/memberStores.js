import { writable } from 'svelte/store';

const members = writable([
  {id: 1, name:'Jiu',image:'jiu.jpg',position:"Leader, Lead Vocalist, Lead Dancer, Visual",Bitrhday:'May 17, 1994'},
  {id: 2, name:'Sua',image:'sua.jpg',position:"Main Dancer, Sub Vocalist, Lead Rapper",Bitrhday:'August 10, 1994'},
  {id: 3, name:'Siyeon',image:'siyeon.jpg',position:"Main Vocalist", Bitrhday:'October 1, 1995'},
  {id: 4, name:'Handong',image:'handong.jpg',position:"Sub Vocalist",Bitrhday:'March 26, 1996'},
  {id: 5, name:'Yoohyeon',image:'yoohyeon.jpg',position:" Lead Vocalist",Bitrhday:' January 7, 1997'},
  {id: 6, name:'Dami',image:'dami.jpg',position:"Main Rapper, Lead Dancer, Sub Vocalist",Bitrhday:'March 7, 1997'},
  {id: 7, name:'Gahyeon',image:'gahyeon.jpg',position:"Lead Rapper, Sub Vocalist, Maknae",Bitrhday:'February 3, 1999'},
]);

export default members;