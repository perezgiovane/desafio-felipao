let winningBalance = winBlc(402,298)
function winBlc(win, lose){
	return win - lose;
}


switch (true) {
    case winningBalance <= 10:
    console.log ("The hero has a win balance of  "  +winningBalance+ " and is at Iron level")
    break;
    case winningBalance <= 20:
        console.log ("The hero has a win balance of  "  +winningBalance+ " and is at Bronze level")
     break;
     case winningBalance <= 50:
     console.log ("The hero has a win balance of  "  +winningBalance+ " and is at Silver level")
     break;
     case winningBalance <= 80:
        console.log ("The hero has a win balance of  "  +winningBalance+ " and is at Gold level")
    break;
     case winningBalance <= 90:
    console.log ("The hero has a win balance of  "  +winningBalance+ " and is at Diamond level")
    break;
    case winningBalance <= 100:
    console.log ("The hero has a win balance of  "  +winningBalance+ " and is at Legendary level")
    break;
    case winningBalance >= 101:
    console.log ("The hero has a win balance of  "  +winningBalance+ " and is at Immortal level")
    break;
}