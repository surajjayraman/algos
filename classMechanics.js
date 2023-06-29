class CoolGuy {
	specialTrick = 'nothing';

	constructor( trick ) {
		this.specialTrick = trick;
	}

	showOff() {
		console.log( "Here's my trick: ", this.specialTrick )
	}
}

let Joe = new CoolGuy( "jumping rope" );

Joe.showOff() // Here's my trick: jumping rope