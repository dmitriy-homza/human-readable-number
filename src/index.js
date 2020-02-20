module.exports = function toReadable (number) {
  if (Math.trunc(number/100) == 1) {
      first = 'one hundred';
  }
  else if (Math.trunc(number/100) == 2) {
      first = 'two hundred';
  }
  else if  (Math.trunc(number/100)== 2) {
      first = 'two hundred';
  }
  else if (Math.trunc(number/100) == 3) {
      first = 'three hundred';
  }
  else if  (Math.trunc(number/100)== 4) {
      first = 'four hundred';
  }
  else if (Math.trunc(number/100)== 5) {
      first = 'five hundred';
  }
  else if  (Math.trunc(number/100) == 6) {
      first = 'six hundred';
  }
  else if (Math.trunc(number/100)== 7) {
      first = 'seven hundred';
  }
  else if (Math.trunc(number/100) == 8) {
      first = 'eight hundred';
  }
  else if (Math.trunc(number/100) == 9) {
      first = 'nine hundred'; }
     else if (Math.trunc(number/100) == 0) {
          first = '';
  }


  if  (Math.trunc(number/10) % 10 == 2) {
      two = ' twenty';
  }
  else if  (Math.trunc(number/10) % 10 == 3) {
      two = ' thirty';
  }
  else if  (Math.trunc(number/10) % 10 == 4) {
      two = ' forty';
  }
  else if  (Math.trunc(number/10) % 10 == 5) {
      two = ' fifty';
  }
  else if (Math.trunc(number/10) % 10 == 6) {
      two = ' sixty';
  }
  else if (Math.trunc(number/10) % 10 == 7) {
      two = ' seventy';
  }
  else if (Math.trunc(number/10) % 10 == 8) {
      two = ' eighty';
  }
  else if (Math.trunc(number/10) % 10 == 9) {
      two = ' ninety';
  }
  else if (Math.trunc(number/10) % 10 == 0) {
      two = '';
  }

  if  (Math.trunc(number/10) % 10 == 2 & number<100) {
      two = 'twenty';
  }
  else if  (Math.trunc(number/10) % 10 == 3 & number<100) {
      two = 'thirty';
  }
  else if  (Math.trunc(number/10) % 10 == 4 & number<100) {
      two = 'forty';
  }
  else if  (Math.trunc(number/10) % 10 == 5 & number<100) {
      two = 'fifty';
  }
  else if (Math.trunc(number/10) % 10 == 6 & number<100) {
      two = 'sixty';
  }
  else if (Math.trunc(number/10) % 10 == 7 & number<100) {
      two = 'seventy';
  }
  else if (Math.trunc(number/10) % 10 == 8 & number<100) {
      two = 'eighty';
  }
  else if (Math.trunc(number/10) % 10 == 9 & number<100) {
      two = 'ninety';
  }
  else if (Math.trunc(number/10) % 10 == 0) {
      two = '';
  }


if  (number % 10 == 1) {
    three = ' one';
}
else if  (number % 10 == 2) {
    three = ' two';
}
else if  (number % 10 == 3) {
    three = ' three';
}
else if (number % 10 == 4) {
    three = ' four';
}
else if  (number % 10 == 5) {
    three = ' five';
}
else if  (number % 10 == 6) {
    three = ' six';
}
else if  (number % 10 == 7) {
    three = ' seven';
}
else if  (number % 10 == 8) {
    three = ' eight';
}
else if  (number % 10 == 9) {
    three = ' nine';}
else if  (number % 10 == 0) {
        three = '';
}







if (number<100 & number>20) {
    answer = (two+three);
}
if (number>=100) {
answer = (first+two+three);
}

if  (number % 100 == 11) {
    answer = first+' eleven';
}
else if  (number % 100 == 10) {
    answer = first+' ten';
}

else if  (number% 100 == 12) {
    answer = first+' twelve';
}
else if (number% 100== 13) {
    answer = first+' thirteen';
}
else if  (number% 100== 14) {
    answer = first+' fourteen';
}
else if  (number% 100== 15) {
    answer = first+' fifteen';
}
else if  (number% 100== 16) {
    answer = first+' sixteen';
}
else if  (number% 100== 17) {
    answer = first+' seventeen';
}
else if  (number% 100== 18) {
    answer = first+' eighteen';}
    else if  (number% 100== 19) {
        answer = first+' nineteen';}

if (number==20) {
    answer="twenty";
}
if (number<20) {
    if  (number == 1) {
        answer = 'one';
    }
    else if  (number== 0) {
        answer = 'zero';
    }
    else if  (number== 2) {
        answer = 'two';
    }
    else if  (number == 3) {
        answer = 'three';
    }
    else if (number== 4) {
        answer = 'four';
    }
    else if  (number== 5) {
        answer = 'five';
    }
    else if  (number== 6) {
        answer = 'six';
    }
    else if  (number== 7) {
        answer = 'seven';
    }
    else if  (number== 8) {
        answer = 'eight';
    }
    else if  (number== 9) {
        answer = 'nine';}
        else if  (number== 10) {
            answer = 'ten';
        }
        else if  (number== 11) {
            answer = 'eleven';
        }
        else if  (number == 12) {
            answer = 'twelve';
        }
        else if (number== 13) {
            answer = 'thirteen';
        }
        else if  (number== 14) {
            answer = 'fourteen';
        }
        else if  (number== 15) {
            answer = 'fifteen';
        }
        else if  (number== 16) {
            answer = 'sixteen';
        }
        else if  (number== 17) {
            answer = 'seventeen';
        }
        else if  (number== 18) {
            answer = 'eighteen';}
            else if  (number== 19) {
                answer = 'nineteen';}
}

return(answer);
}
