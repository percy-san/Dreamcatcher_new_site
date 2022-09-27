import { writable } from 'svelte/store';

const AlbumList = writable([
	{ id:1, name:'The Beginning of the End', date:'September 11, 2019', cover:"Beginning_of_the_end.jpg"},
  	{ id:2, name:'Dystopia: The Tree of Language',date:'February 18, 2020',cover:"Tree_of_language.jpg"},
  	{ id:3, name:'Apocalypse: Save us', date:'April 12, 2022', cover:"Apocalypse_Save_us.jpg"},
  	{id:4, name:'Prequel', date:'July 27, 2017', cover:"Prequel.jpg" },
  	{id:5, name:'Nightmare - Escape the ERA', date:'May 10, 2018', cover:"Escape_The_Era.png" },
  	{id:6, name:'Alone in the city', date:'September 20, 2018 ', cover:"Alone_In_The_City.jpg" },
  	{id:7, name:'The End of Nightmare', date:'February 13, 2019',cover:"The_End_Of_Nightmare.jpg" },
  	{id:8, name:'Raid of Dream', date:'September 18, 2019',cover:"Raid_of_Dream.png" },
  	{id:9, name:'Dystopia: Lose Myself', date:'Aug 17, 2020',cover:"Dystopia_Lose_Myself.jpg" },
  	{id:10, name:'Dystopia : Road to Utopia', date:'January 26, 2021',cover:"Dystopia_Road_to_Utopia.jpg" },
  	{id:11, name:'Summer Holiday', date:'July 30, 2021 ',cover:"Summer_Holiday.jpg" },
  	{ id:12, name:'Nightmare', date:'January 13, 2017', cover:"Nightmare.png"},
  	{ id:13, name:'Fall Asleep in the Mirror',date:'April 5, 2017',cover:"https://i.scdn.co/image/ab67616d0000b273c887fc8de566bcd2c76e9e9e"},
  	{ id:14, name:'What (Japanese Ver.)', date:'November 21, 2018', cover:"What_Japanese.png" },
  	{ id:15, name:'Piri ~ Fue wo Fuke ~', date:'March 13, 2019', cover:"PIRI_Japanese.jpg" },
  	{ id:16, name:'Endless Night', date:' March 11, 2020', cover:"Endless_Night.jpg" },
  	{ id:17, name:'Eclipse', date:' March 24, 2021.', cover:"Eclipse.png" },
	
 	
]);

export AlbumList;



