//=============================================================================
// FractionsCore.js
//=============================================================================

/*:
 * @plugindesc Specialized functions for the game Fraction Hero.
 * @author Rafael Flores
 *
 */

//=============================================================================

//=============================================================================

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//Randomly orders items in an array
function shuffle(a) {
  var count = a.length, temp, index;

  while (count > 0) {
      i = Math.floor(Math.random() * count);
      count--;
      temp = a[count];
      a[count] = a[i];
      a[i] = temp;
  }
  return a;
}

//=============================================================================
 
function getEasyAS() {
	var nm1, nm2, dn;

	if (getRandomInt(0, 10) < 8) {
		dn = getRandomInt(6, 11);
	}
	else {
		dn = getRandomInt(3,6);
	}

	nm1 = getRandomInt(1, dn);
	if (getRandomInt(0, 10) < 9) {
		do {
			nm2 = getRandomInt(1, dn);
		} while (nm1 == nm2);
	}
	else {
		nm2 = nm1;
	}

	Fraction.REDUCE = false;
	var f1 = new Fraction(nm1, dn);
	var f2 = new Fraction(nm2, dn);
	Fraction.REDUCE = true;

	return shuffle([f1, f2]);
}

function getMediumAS() {
	var nm1, nm2, dn1, dn2;

	dn1 = getRandomInt(2, 7);
	dn2 = dn1 * getRandomInt(2, Math.floor(12 / dn1) + 1);

	nm1 = getRandomInt(1, dn1);
	nm2 = getRandomInt(1, dn2);

	Fraction.REDUCE = false;
	var f1 = new Fraction(nm1, dn1);
	var f2 = new Fraction(nm2, dn2);
	Fraction.REDUCE = true;
	return shuffle([f1, f2]);
}

function getHardAS() {
	var nm1, nm2, dn1, dn2;

	do {
		dn1 = getRandomInt(6, 11); dn2 = getRandomInt(6, 11);
	} while ((dn2 % dn1 == 0) || (dn1 % dn2 == 0));

	nm1 = getRandomInt(1, dn1);
	nm2 = getRandomInt(1, dn2);

	Fraction.REDUCE = false;
	var f1 = new Fraction(nm1, dn1);
	var f2 = new Fraction(nm2, dn2);
	Fraction.REDUCE = true;
	return shuffle([f1, f2]);
}

function getExpertAS() {
	var wh1, wh2, nm1, nm2, dn1, dn2;

	do {
		wh1 = getRandomInt(0, 5); wh2 = getRandomInt(0, 5);
	} while (wh1 == 0 && wh2 == 0);

	do {
		dn1 = getRandomInt(6, 11); dn2 = getRandomInt(6, 11);
	} while ((dn2 % dn1 == 0) || (dn1 % dn2 == 0));

	nm1 = getRandomInt(1, dn1) + (wh1 * dn1);
	nm2 = getRandomInt(1, dn2) + (wh2 * dn2);

	Fraction.REDUCE = false;
	var f1 = new Fraction(nm1, dn1);
	var f2 = new Fraction(nm2, dn2);
	Fraction.REDUCE = true;
	return shuffle([f1, f2]);
}

//=============================================================================

function getEasyMD() {
	var nm1, nm2, dn1, dn2;

	do {
		dn1 = getRandomInt(2, 6); dn2 = getRandomInt(2, 6);
	} while (dn1 == dn2);

	nm1 = getRandomInt(1, dn1);
	nm2 = getRandomInt(1, dn2);

	Fraction.REDUCE = false;
	var f1 = new Fraction(nm1, dn1);
	var f2 = new Fraction(nm2, dn2);
	Fraction.REDUCE = true;

	return shuffle([f1, f2]);
}

function getMediumMD() {
	var nm1, nm2, dn1, dn2;

	do {
		dn1 = getRandomInt(5, 11); dn2 = getRandomInt(5, 11);
	} while (dn1 == dn2);

	nm1 = getRandomInt(3, dn1);
	nm2 = getRandomInt(3, dn2);

	Fraction.REDUCE = false;
	var f1 = new Fraction(nm1, dn1);
	var f2 = new Fraction(nm2, dn2);
	Fraction.REDUCE = true;

	return shuffle([f1, f2]);
}

function getHardMD() {
	var wh, nm1, nm2, dn1, dn2;

	wh = getRandomInt(1, 3);

	do {
		dn1 = getRandomInt(3, 7); dn2 = getRandomInt(3, 7);
	} while ((dn2 % dn1 == 0) || (dn1 % dn2 == 0));

	nm1 = getRandomInt(1, dn1) + (wh * dn1);
	nm2 = getRandomInt(1, dn2);

	Fraction.REDUCE = false;
	var f1 = new Fraction(nm1, dn1);
	var f2 = new Fraction(nm2, dn2);
	Fraction.REDUCE = true;
	return shuffle([f1, f2]);
}

function getExpertMD() {
	var wh1, wh2, nm1, nm2, dn1, dn2;

	do {
		wh1 = getRandomInt(1, 4); wh2 = getRandomInt(1, 4);
	} while (wh1 < 2 && wh2 < 2);

	do {
		dn1 = getRandomInt(3, 7); dn2 = getRandomInt(3, 7);
	} while ((dn2 % dn1 == 0) || (dn1 % dn2 == 0));

	nm1 = getRandomInt(1, dn1) + (wh1 * dn1);
	nm2 = getRandomInt(1, dn2) + (wh2 * dn2);

	Fraction.REDUCE = false;
	var f1 = new Fraction(nm1, dn1);
	var f2 = new Fraction(nm2, dn2);
	Fraction.REDUCE = true;
	return shuffle([f1, f2]);
}

//=============================================================================

function initAddition(fractions) {

	var f1 = fractions[0];
	var f2 = fractions[1];

	var soln = f1.add(f2);

	var choices = [soln];

	if (f1.d == f2.d) {
		choices.push(f1.mul(f2));
		choices.push(new Fraction(f1.n + f2.n, f1.d + f2.d));
		choices.push(new Fraction(f1.n + f2.n + 1, f1.d));
	}
	else if (f1.n > f1.d || f2.n > f2.d) {
		var tw = Math.floor(f1.n / f1.d) + Math.floor(f2.n / f2.d);
		var tn = (f1.n % f1.d) + (f2.n % f2.d);
		var td = f1.d + f2.d;
		choices.push(new Fraction((tw * td) + tn, td));
		choices.push(new Fraction((tw * Math.max(f1.d, f2.d)) + tn, Math.max(f1.d, f2.d)));

		var mn = (f1.n % f1.d) * (f2.n % f2.d);
		var md = f1.d * f2.d;
		choices.push(new Fraction((tw * md) + mn, md));
	}
	else {
		choices.push(f1.mul(f2));
		choices.push(new Fraction(f1.n + f2.n, Math.max(f1.d, f2.d)));
		choices.push(new Fraction(f1.n + f2.n, f1.d + f2.d));
	}

	return [f1, f2, soln, shuffle(choices)];
}

function initSubtraction(fractions) {

	var f1 = fractions[0];
	var f2 = fractions[1];

	if (f1.compare(f2) == 0) {
		if (f1.n < (f1.d - 1)) {
			f1.n += getRandomInt(1, f1.d - f1.n);
		}
		else {
			f2.n -= getRandomInt(0, f2.n);
		}
	}

	var soln = f1.sub(f2);

	var choices = [soln];

	if (f1.d == f2.d) {
		choices.push(f1.div(f2));
		choices.push(new Fraction(f1.n - f2.n, f1.d + f2.d));
		choices.push(new Fraction(soln.n + 1, soln.d));
	}
	else if (f1.n > f1.d || f2.n > f2.d) {
		var tw = Math.floor(f1.n / f1.d) - Math.floor(f2.n / f2.d);
		var tn = (f1.n % f1.d) + (f2.n % f2.d);
		var td = f1.d + f2.d;
		choices.push(new Fraction((tw * td) - tn, td).abs());
		choices.push(new Fraction((tw * Math.max(f1.d, f2.d)) - tn, Math.max(f1.d, f2.d)));
		choices.push(new Fraction(soln.n + 1, soln.d));
	}
	else {
		choices.push(f1.div(f2));
		choices.push(new Fraction(f1.n - f2.n, Math.max(f1.d, f2.d)));
		choices.push(new Fraction(soln.n + 1, soln.d));
	}

	return [f1, f2, soln, shuffle(choices)];
}

function initMultiplication(fractions) {

	var f1 = fractions[0];
	var f2 = fractions[1];

	if (f1.compare(f2) == 0) {
		if ((f1.n % f1.d) < (f1.d - 1)) {
			f1.n += getRandomInt(1, f1.d - f1.n);
		}
		else {
			f2.n -= getRandomInt(0, f2.n);
		}
	}

	var soln = f1.mul(f2);

	var choices = [soln,
		new Fraction(soln.d, soln.n),
		new Fraction(f1.div(f2)),
		new Fraction(f2.div(f1))
	];

	return [f1, f2, soln, shuffle(choices)];
}

function initDivision(fractions) {

	var f1 = fractions[0];
	var f2 = fractions[1];

	if (f1.compare(f2) == 0) {
		if ((f1.n % f1.d) < (f1.d - 1)) {
			f1.n += getRandomInt(1, f1.d - f1.n);
		}
		else {
			f2.n -= getRandomInt(0, f2.n);
		}
	}

	var soln = f1.div(f2);

	var choices = [soln,
		new Fraction(soln.d + 1, soln.n),
		new Fraction(f1.mul(f2)),
		new Fraction(f2.div(f1))
	];

	return [f1, f2, soln, shuffle(choices)];
}

//=============================================================================

function getProblemVariables(operation, difficulty) {
	var pvars;

	if (operation == "Random") {
		var rngop = ["Addition", "Subtraction", "Multiplication", "Division"];
		operation = rngop[getRandomInt(0,4)];
	}

	if (operation == "Addition") {
		pvars = eval("init" + operation + "(get" + difficulty + "AS())");
		$gameVariables.setValue(35, "+");
	}
	else if (operation == "Subtraction") {
		pvars = eval("init" + operation + "(get" + difficulty + "AS())");
		$gameVariables.setValue(35, "-");
	}
	else if (operation == "Multiplication") {
		pvars = eval("init" + operation + "(get" + difficulty + "MD())");
		$gameVariables.setValue(35, "x");
	}
	else if (operation == "Division") {
		pvars = eval("init" + operation + "(get" + difficulty + "MD())");
		$gameVariables.setValue(35, "/");
	}
	else {
		pvars = eval("initAddition(get" + difficulty + "AS())");
		$gameVariables.setValue(35, "+");
	}

	var m;
	if (difficulty == "Easy" || difficulty == "Medium") {
		m = false;
	}
	else {
		m = true;
	}

	$gameVariables.setValue(23, pvars[0].toFraction(m));
	$gameVariables.setValue(24, pvars[1].toFraction(m));

	for (var i=0; i<4; i++) {
		$gameVariables.setValue(25+i, pvars[3][i].toFraction(m));
	}

	$gameVariables.setValue(29, pvars[2].toFraction(m));
}