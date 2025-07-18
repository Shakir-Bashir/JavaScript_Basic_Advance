"use strict";
// it helps us to developers  to avoid accidental errors.
/* 1) it forbids us to do certain things and second, it will actually create visible errors for us in certain situations in which without strict mode JS will simply fail silentlt */

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
/*it gives  RefrenceError: hasDriveLicense is not defined[when strict mode is on] (Now if we commit out the use strict it will not show us any error and it will not simply run)*/
if (hasDriversLicense) console.log("I can drive");

const interface = "Audio";
// SyntaxError: Unexpected strict mode reserved word
