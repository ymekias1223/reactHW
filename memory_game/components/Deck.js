import React from 'react';
import Card from "./Card.js";

class Deck extends Card{
	constructor(number_of_cards){
		this.deckSize = number_of_cards;
		this.deck = [];
		
	}

	create(){
		function swap(a,b){
			let temp = a;
			a=b;
			b=temp;
		}
		for(let i in this.deckSize){
			this.deck.push(new Card);
		}

	}

	

}
