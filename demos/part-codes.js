"use strict";

const code1 = "ACME:123";
const code2 = "Di:12345-M";
const code3 = "ACE:1-12";
const colom = ":";
const hyphen = "-";

function getSupplier(code){
    let positionOfColon = code.indexOf(":")
    let supplier = code.substring(0,positionOfColon)
    return supplier;
}













// ACME:123-L the large (L) part 123 is supplied by ACME
// DI:12345-M the medium (M) part 12345 is supplied by DI
// ACE:1-12 the size 12 part 1 is supplied by ACE
