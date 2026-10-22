function bingo(ticket, win) {
  var miniWins = 0;
  for (var i = 0; i < ticket.length; i++) {
    var word = ticket[i][0];
    var number = ticket[i][1];
    var hasMatch = false;

    for (var j = 0; j < word.length; j++) {
      if (word.charCodeAt(j) === number) {
        hasMatch = true;
        break;
      }
    }
    if (hasMatch === true) {
      miniWins = miniWins + 1;
    }
  }
  if (miniWins >= win) {
    return "Winner!";
  } else {
    return "Loser!";
  }
}