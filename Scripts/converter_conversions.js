
// regex to format numbers by adding commas
function formatNum(num) {
    return num.toString().replace(/^[+-]?\d+/, function (int) {
        return int.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    });
}


// beginning of bit conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function bitToNibble(x) {
    var conversion = x / 4;
    return conversion;
}

function bitToByte(x) {
    var conversion = x / 8;
    return conversion;
}

function bitToWord(x) {
    var conversion = x / 32;
    return conversion;
}

function bitToKilobyte(x) {

    var conversion = (x / 8) / Math.pow(2, 10);

    return conversion;
}

function bitToMegabyte(x) {

    var conversion = (x / 8) / Math.pow(2, 20);
    return conversion;
}

function bitToGigabyte(x) {

    var conversion = (x / 8) / Math.pow(2, 30);
    return conversion;
}

function bitToTerrabyte(x) {

    var conversion = (x / 8) / Math.pow(2, 40);
    return conversion;
}

function bitToPetabyte(x) {

    var conversion = (x / 8) / Math.pow(2, 50);
    return conversion;
}

function bitToExabyte(x) {

    var conversion = (x / 8) / Math.pow(2, 60);
    return conversion;
}

function bitToZettabyte(x) {

    var conversion = (x / 8) / Math.pow(2, 70);
    return conversion;
}

function bitToYottabyte(x) {

    var conversion = (x / 8) / Math.pow(2, 80);
    return conversion;
}

// beginning of nibble conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function nibbleToBit(x) {
    var conversion = x * 4;
    return conversion;
}

function nibbleToByte(x) {
    var conversion = x / 2;
    return conversion;
}

function nibbleToWord(x) {
    var conversion = x / 8;
    return conversion;
}

function nibbleToKilobyte(x) {

    var conversion = (x / 4) / Math.pow(2, 10);

    return conversion;
}

function nibbleToMegabyte(x) {

    var conversion = (x / 4) / Math.pow(2, 20);
    return conversion;
}

function nibbleToGigabyte(x) {

    var conversion = (x / 4) / Math.pow(2, 30);
    return conversion;
}

function nibbleToTerrabyte(x) {

    var conversion = (x / 4) / Math.pow(2, 40);
    return conversion;
}

function nibbleToPetabyte(x) {

    var conversion = (x / 4) / Math.pow(2, 50);
    return conversion;
}

function nibbleToExabyte(x) {

    var conversion = (x / 4) / Math.pow(2, 60);
    return conversion;
}

function nibbleToZettabyte(x) {

    var conversion = (x / 4) / Math.pow(2, 70);
    return conversion;
}

function nibbleToYottabyte(x) {

    var conversion = (x / 4) / Math.pow(2, 80);
    return conversion;
}


// beginning of byte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function byteToBit(x) {
    var conversion = x * 8;
    return conversion;
}

function byteToNibble(x) {
    var conversion = x * 2;
    return conversion;
}

function byteToWord(x) {
    var conversion = x / 4;
    return conversion;
}

function byteToKilobyte(x) {

    var conversion = x / Math.pow(2, 10);
    return conversion;
}

function byteToMegabyte(x) {

    var conversion = x / Math.pow(2, 20);
    return conversion;
}

function byteToGigabyte(x) {

    var conversion = x / Math.pow(2, 30);
    return conversion;
}

function byteToTerrabyte(x) {

    var conversion = x / Math.pow(2, 40);
    return conversion;
}

function byteToPetabyte(x) {

    var conversion = x / Math.pow(2, 50);
    return conversion;
}

function byteToExabyte(x) {

    var conversion = x / Math.pow(2, 60);
    return conversion;
}

function byteToZettabyte(x) {

    var conversion = x / Math.pow(2, 70);
    return conversion;
}

function byteToYottabyte(x) {

    var conversion = x / Math.pow(2, 80);
    return conversion;
}

// beginning of word conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function wordToBit(x) {
    var conversion = x * 32;
    return conversion;
}

function wordToNibble(x) {
    var conversion = x * 8;
    return conversion;
}

function wordToByte(x) {
    var conversion = x * 4;
    return conversion;
}

function wordToKilobyte(x) {

    var conversion = (x / 4) / Math.pow(2, 10);
    return conversion;
}

function wordToMegabyte(x) {

    var conversion = (x / 4) / Math.pow(2, 20);
    return conversion;
}

function wordToGigabyte(x) {

    var conversion = (x / 4) / Math.pow(2, 30);
    return conversion;
}

function wordToTerrabyte(x) {

    var conversion = (x / 4) / Math.pow(2, 40);
    return conversion;
}

function wordToPetabyte(x) {

    var conversion = (x / 4) / Math.pow(2, 50);
    return conversion;
}

function wordToExabyte(x) {

    var conversion = (x / 4) / Math.pow(2, 60);
    return conversion;
}

function wordToZettabyte(x) {

    var conversion = (x / 4) / Math.pow(2, 70);
    return conversion;
}

function wordToYottabyte(x) {

    var conversion = (x / 4) / Math.pow(2, 80);
    return conversion;
}

// beginning of kilobyte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function kilobyteToBit(x) {
    var conversion = x * Math.pow(2, 10) * 8;
    return conversion;
}

function kilobyteToNibble(x) {
    var conversion = x * Math.pow(2, 10) * 2;
    return conversion;
}

function kilobyteToByte(x) {

    var conversion = x * Math.pow(2, 10);
    return conversion;
}

function kilobyteToWord(x) {
    var conversion = x * Math.pow(2, 10) / 4;
    return conversion;
}

function kilobyteToMegabyte(x) {

    var conversion = x / Math.pow(2, 10);
    return conversion;
}

function kilobyteToGigabyte(x) {

    var conversion = x / Math.pow(2, 20);
    return conversion;
}

function kilobyteToTerrabyte(x) {

    var conversion = x / Math.pow(2, 30);
    return conversion;
}

function kilobyteToPetabyte(x) {

    var conversion = x / Math.pow(2, 40);
    return conversion;
}

function kilobyteToExabyte(x) {

    var conversion = x / Math.pow(2, 50);
    return conversion;
}

function kilobyteToZettabyte(x) {

    var conversion = x / Math.pow(2, 60);
    return conversion;
}

function kilobyteToYottabyte(x) {

    var conversion = x / Math.pow(2, 70);
    return conversion;
}

// beginning of megabyte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function megabyteToBit(x) {
    var conversion = x * Math.pow(2, 20) * 8;
    return conversion;
}

function megabyteToNibble(x) {
    var conversion = x * Math.pow(2, 20) * 2;
    return conversion;
}

function megabyteToByte(x) {

    var conversion = x * Math.pow(2, 20);
    return conversion;
}

function megabyteToWord(x) {
    var conversion = x * Math.pow(2, 20) / 4;
    return conversion;
}

function megabyteToKilobyte(x) {

    var conversion = x * Math.pow(2, 10);
    return conversion;
}

function megabyteToGigabyte(x) {

    var conversion = x / Math.pow(2, 10);
    return conversion;
}

function megabyteToTerrabyte(x) {

    var conversion = x / Math.pow(2, 20);
    return conversion;
}

function megabyteToPetabyte(x) {

    var conversion = x / Math.pow(2, 30);
    return conversion;
}

function megabyteToExabyte(x) {

    var conversion = x / Math.pow(2, 40);
    return conversion;
}

function megabyteToZettabyte(x) {

    var conversion = x / Math.pow(2, 50);
    return conversion;
}

function megabyteToYottabyte(x) {

    var conversion = x / Math.pow(2, 60);
    return conversion;
}

// beginning of gigabyte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function gigabyteToBit(x) {
    var conversion = x * Math.pow(2, 30) * 8;
    return conversion;
}

function gigabyteToNibble(x) {
    var conversion = x * Math.pow(2, 30) * 2;
    return conversion;
}

function gigabyteToByte(x) {

    var conversion = x * Math.pow(2, 30);
    return conversion;
}

function gigabyteToWord(x) {
    var conversion = x * Math.pow(2, 30) / 4;
    return conversion;
}

function gigabyteToKilobyte(x) {

    var conversion = x * Math.pow(2, 20);
    return conversion;
}

function gigabyteToMegabyte(x) {

    var conversion = x * Math.pow(2, 10);
    return conversion;
}

function gigabyteToTerrabyte(x) {

    var conversion = x / Math.pow(2, 10);
    return conversion;
}

function gigabyteToPetabyte(x) {

    var conversion = x / Math.pow(2, 20);
    return conversion;
}

function gigabyteToExabyte(x) {

    var conversion = x / Math.pow(2, 30);
    return conversion;
}

function gigabyteToZettabyte(x) {

    var conversion = x / Math.pow(2, 40);
    return conversion;
}

function gigabyteToYottabyte(x) {

    var conversion = x / Math.pow(2, 50);
    return conversion;
}

// beginning of terrabyte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function terrabyteToBit(x) {
    var conversion = x * Math.pow(2, 40) * 8;
    return conversion;
}

function terrabyteToNibble(x) {
    var conversion = x * Math.pow(2, 40) * 2;
    return conversion;
}

function terrabyteToByte(x) {

    var conversion = x * Math.pow(2, 40);
    return conversion;
}

function terrabyteToWord(x) {
    var conversion = x * Math.pow(2, 40) / 4;
    return conversion;
}

function terrabyteToKilobyte(x) {

    var conversion = x * Math.pow(2, 30);
    return conversion;
}

function terrabyteToMegabyte(x) {

    var conversion = x * Math.pow(2, 20);
    return conversion;
}

function terrabyteToGigabyte(x) {

    var conversion = x * Math.pow(2, 10);
    return conversion;
}

function terrabyteToPetabyte(x) {

    var conversion = x / Math.pow(2, 10);
    return conversion;
}

function terrabyteToExabyte(x) {

    var conversion = x / Math.pow(2, 20);
    return conversion;
}

function terrabyteToZettabyte(x) {

    var conversion = x / Math.pow(2, 30);
    return conversion;
}

function terrabyteToYottabyte(x) {

    var conversion = x / Math.pow(2, 40);
    return conversion;
}

// beginning of petabyte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function petabyteToBit(x) {
    var conversion = x * Math.pow(2, 50) * 8;
    return conversion;
}

function petabyteToNibble(x) {
    var conversion = x * Math.pow(2, 50) * 2;
    return conversion;
}

function petabyteToByte(x) {

    var conversion = x * Math.pow(2, 50);
    return conversion;
}

function petabyteToWord(x) {
    var conversion = x * Math.pow(2, 50) / 4;
    return conversion;
}

function petabyteToKilobyte(x) {

    var conversion = x * Math.pow(2, 40);
    return conversion;
}

function petabyteToMegabyte(x) {

    var conversion = x * Math.pow(2, 30);
    return conversion;
}

function petabyteToGigabyte(x) {

    var conversion = x * Math.pow(2, 20);
    return conversion;
}

function petabyteToTerrabyte(x) {

    var conversion = x * Math.pow(2, 10);
    return conversion;
}

function petabyteToExabyte(x) {

    var conversion = x / Math.pow(2, 10);
    return conversion;
}

function petabyteToZettabyte(x) {

    var conversion = x / Math.pow(2, 20);
    return conversion;
}

function petabyteToYottabyte(x) {

    var conversion = x / Math.pow(2, 30);
    return conversion;
}

// beginning of exabyte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function exabyteToBit(x) {
    var conversion = x * Math.pow(2, 60) * 8;
    return conversion;
}

function exabyteToNibble(x) {
    var conversion = x * Math.pow(2, 60) * 2;
    return conversion;
}

function exabyteToByte(x) {

    var conversion = x * Math.pow(2, 60);
    return conversion;
}

function exabyteToWord(x) {
    var conversion = x * Math.pow(2, 60) / 4;
    return conversion;
}

function exabyteToKilobyte(x) {

    var conversion = x * Math.pow(2, 50);
    return conversion;
}

function exabyteToMegabyte(x) {

    var conversion = x * Math.pow(2, 40);
    return conversion;
}

function exabyteToGigabyte(x) {

    var conversion = x * Math.pow(2, 30);
    return conversion;
}

function exabyteToTerrabyte(x) {

    var conversion = x * Math.pow(2, 20);
    return conversion;
}

function exabyteToPetabyte(x) {

    var conversion = x * Math.pow(2, 10);
    return conversion;
}

function exabyteToZettabyte(x) {

    var conversion = x / Math.pow(2, 10);
    return conversion;
}

function exabyteToYottabyte(x) {

    var conversion = x / Math.pow(2, 20);
    return conversion;
}

// beginning of zettabyte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function zettabyteToBit(x) {
    var conversion = x * Math.pow(2, 70) * 8;
    return conversion;
}

function zettabyteToNibble(x) {
    var conversion = x * Math.pow(2, 70) * 2;
    return conversion;
}

function zettabyteToByte(x) {

    var conversion = x * Math.pow(2, 70);
    return conversion;
}

function zettabyteToWord(x) {
    var conversion = x * Math.pow(2, 70) / 4;
    return conversion;
}

function zettabyteToKilobyte(x) {

    var conversion = x * Math.pow(2, 60);
    return conversion;
}

function zettabyteToMegabyte(x) {

    var conversion = x * Math.pow(2, 50);
    return conversion;
}

function zettabyteToGigabyte(x) {

    var conversion = x * Math.pow(2, 40);
    return conversion;
}

function zettabyteToTerrabyte(x) {

    var conversion = x * Math.pow(2, 30);
    return conversion;
}

function zettabyteToPetabyte(x) {

    var conversion = x * Math.pow(2, 20);
    return conversion;
}

function zettabyteToExabyte(x) {

    var conversion = x * Math.pow(2, 10);
    return conversion;
}

function zettabyteToYottabyte(x) {

    var conversion = x / Math.pow(2, 10);
    return conversion;
}

// beginning of yottabyte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function yottabyteToBit(x) {
    var conversion = x * Math.pow(2, 80) * 8;
    return conversion;
}

function yottabyteToNibble(x) {
    var conversion = x * Math.pow(2, 80) * 2;
    return conversion;
}

function yottabyteToByte(x) {

    var conversion = x * Math.pow(2, 80);
    return conversion;
}

function yottabyteToWord(x) {
    var conversion = x * Math.pow(2, 80) / 4;
    return conversion;
}

function yottabyteToKilobyte(x) {

    var conversion = x * Math.pow(2, 70);
    return conversion;
}

function yottabyteToMegabyte(x) {

    var conversion = x * Math.pow(2, 60);
    return conversion;
}

function yottabyteToGigabyte(x) {

    var conversion = x * Math.pow(2, 50);
    return conversion;
}

function yottabyteToTerrabyte(x) {

    var conversion = x * Math.pow(2, 40);
    return conversion;
}

function yottabyteToPetabyte(x) {

    var conversion = x * Math.pow(2, 30);
    return conversion;
}

function yottabyteToExabyte(x) {

    var conversion = x * Math.pow(2, 20);
    return conversion;
}

function yottabyteToZettabyte(x) {

    var conversion = x * Math.pow(2, 10);
    return conversion;
}

function convertBit(x) {

    var ncon = bitToNibble(x)
    var bcon = bitToByte(x);
    var wcon = bitToWord(x);
    var kcon = bitToKilobyte(x);
    var mcon = bitToMegabyte(x);
    var gcon = bitToGigabyte(x);
    var tcon = bitToTerrabyte(x);
    var pcon = bitToPetabyte(x);
    var econ = bitToExabyte(x);
    var zcon = bitToZettabyte(x);
    var ycon = bitToYottabyte(x);

    document.getElementById("conversionBit").innerHTML = document.getElementById("conversionInput").value;
    document.getElementById("conversionNibble").innerHTML = formatNum(ncon);
    document.getElementById("conversionByte").innerHTML = formatNum(bcon);
    document.getElementById("conversionWord").innerHTML = formatNum(wcon);
    document.getElementById("conversionKilobyte").innerHTML = formatNum(kcon);
    document.getElementById("conversionMegabyte").innerHTML = formatNum(mcon);
    document.getElementById("conversionGigabyte").innerHTML = formatNum(gcon);
    document.getElementById("conversionTerrabyte").innerHTML = formatNum(tcon);
    document.getElementById("conversionPetabyte").innerHTML = formatNum(pcon);
    document.getElementById("conversionExabyte").innerHTML = formatNum(econ);
    document.getElementById("conversionZettabyte").innerHTML = formatNum(zcon);
    document.getElementById("conversionYottabyte").innerHTML = formatNum(ycon);
}

function convertNibble(x) {

    var bicon = nibbleToBit(x);
    var bcon = nibbleToByte(x);
    var wcon = nibbleToWord(x);
    var kcon = nibbleToKilobyte(x);
    var mcon = nibbleToMegabyte(x);
    var gcon = nibbleToGigabyte(x);
    var tcon = nibbleToTerrabyte(x);
    var pcon = nibbleToPetabyte(x);
    var econ = nibbleToExabyte(x);
    var zcon = nibbleToZettabyte(x);
    var ycon = nibbleToYottabyte(x);

    document.getElementById("conversionBit").innerHTML = formatNum(bicon);
    document.getElementById("conversionNibble").innerHTML = document.getElementById("conversionInput").value;
    document.getElementById("conversionByte").innerHTML = formatNum(bcon);
    document.getElementById("conversionWord").innerHTML = formatNum(wcon);
    document.getElementById("conversionKilobyte").innerHTML = formatNum(kcon);
    document.getElementById("conversionMegabyte").innerHTML = formatNum(mcon);
    document.getElementById("conversionGigabyte").innerHTML = formatNum(gcon);
    document.getElementById("conversionTerrabyte").innerHTML = formatNum(tcon);
    document.getElementById("conversionPetabyte").innerHTML = formatNum(pcon);
    document.getElementById("conversionExabyte").innerHTML = formatNum(econ);
    document.getElementById("conversionZettabyte").innerHTML = formatNum(zcon);
    document.getElementById("conversionYottabyte").innerHTML = formatNum(ycon);
}

function convertByte(x) {

    var bicon = byteToBit(x);
    var ncon = byteToNibble(x);
    var wcon = byteToWord(x);
    var kcon = byteToKilobyte(x);
    var mcon = byteToMegabyte(x);
    var gcon = byteToGigabyte(x);
    var tcon = byteToTerrabyte(x);
    var pcon = byteToPetabyte(x);
    var econ = byteToExabyte(x);
    var zcon = byteToZettabyte(x);
    var ycon = byteToYottabyte(x);



    document.getElementById("conversionBit").innerHTML = formatNum(bicon);
    document.getElementById("conversionNibble").innerHTML = formatNum(ncon);
    document.getElementById("conversionByte").innerHTML = document.getElementById("conversionInput").value
    document.getElementById("conversionWord").innerHTML = formatNum(wcon);
    document.getElementById("conversionKilobyte").innerHTML = formatNum(kcon);
    document.getElementById("conversionMegabyte").innerHTML = formatNum(mcon);
    document.getElementById("conversionGigabyte").innerHTML = formatNum(gcon);
    document.getElementById("conversionTerrabyte").innerHTML = formatNum(tcon);
    document.getElementById("conversionPetabyte").innerHTML = formatNum(pcon);
    document.getElementById("conversionExabyte").innerHTML = formatNum(econ);
    document.getElementById("conversionZettabyte").innerHTML = formatNum(zcon);
    document.getElementById("conversionYottabyte").innerHTML = formatNum(ycon);
}

function convertWord(x) {

    var bicon = wordToBit(x);
    var ncon = wordToNibble(x);
    var bcon = wordToByte(x);
    var kcon = wordToKilobyte(x);
    var mcon = wordToMegabyte(x);
    var gcon = wordToGigabyte(x);
    var tcon = wordToTerrabyte(x);
    var pcon = wordToPetabyte(x);
    var econ = wordToExabyte(x);
    var zcon = wordToZettabyte(x);
    var ycon = wordToYottabyte(x);

    document.getElementById("conversionBit").innerHTML = formatNum(bicon);
    document.getElementById("conversionNibble").innerHTML = formatNum(ncon);
    document.getElementById("conversionByte").innerHTML = formatNum(bcon);
    document.getElementById("conversionWord").innerHTML = document.getElementById("conversionInput").value;
    document.getElementById("conversionKilobyte").innerHTML = formatNum(kcon);
    document.getElementById("conversionMegabyte").innerHTML = formatNum(mcon);
    document.getElementById("conversionGigabyte").innerHTML = formatNum(gcon);
    document.getElementById("conversionTerrabyte").innerHTML = formatNum(tcon);
    document.getElementById("conversionPetabyte").innerHTML = formatNum(pcon);
    document.getElementById("conversionExabyte").innerHTML = formatNum(econ);
    document.getElementById("conversionZettabyte").innerHTML = formatNum(zcon);
    document.getElementById("conversionYottabyte").innerHTML = formatNum(ycon);
}

function convertKilobyte(x) {

    var bicon = kilobyteToBit(x);
    var ncon = kilobyteToNibble(x);
    var bcon = kilobyteToByte(x);
    var wcon = kilobyteToWord(x);
    var mcon = kilobyteToMegabyte(x);
    var gcon = kilobyteToGigabyte(x);
    var tcon = kilobyteToTerrabyte(x);
    var pcon = kilobyteToPetabyte(x);
    var econ = kilobyteToExabyte(x);
    var zcon = kilobyteToZettabyte(x);
    var ycon = kilobyteToYottabyte(x);

    document.getElementById("conversionBit").innerHTML = formatNum(bicon);
    document.getElementById("conversionNibble").innerHTML = formatNum(ncon);
    document.getElementById("conversionByte").innerHTML = formatNum(bcon);
    document.getElementById("conversionWord").innerHTML = formatNum(wcon);
    document.getElementById("conversionKilobyte").innerHTML = document.getElementById("conversionInput").value
    document.getElementById("conversionMegabyte").innerHTML = formatNum(mcon);
    document.getElementById("conversionGigabyte").innerHTML = formatNum(gcon);
    document.getElementById("conversionTerrabyte").innerHTML = formatNum(tcon);
    document.getElementById("conversionPetabyte").innerHTML = formatNum(pcon);
    document.getElementById("conversionExabyte").innerHTML = formatNum(econ);
    document.getElementById("conversionZettabyte").innerHTML = formatNum(zcon);
    document.getElementById("conversionYottabyte").innerHTML = formatNum(ycon);
}

function convertMegabyte(x) {

    var bicon = megabyteToBit(x);
    var ncon = megabyteToNibble(x);
    var bcon = megabyteToByte(x);
    var wcon = megabyteToWord(x);
    var kcon = megabyteToKilobyte(x);
    var gcon = megabyteToGigabyte(x);
    var tcon = megabyteToTerrabyte(x);
    var pcon = megabyteToPetabyte(x);
    var econ = megabyteToExabyte(x);
    var zcon = megabyteToZettabyte(x);
    var ycon = megabyteToYottabyte(x);

    document.getElementById("conversionBit").innerHTML = formatNum(bicon);
    document.getElementById("conversionNibble").innerHTML = formatNum(ncon);
    document.getElementById("conversionByte").innerHTML = formatNum(bcon);
    document.getElementById("conversionWord").innerHTML = formatNum(wcon);
    document.getElementById("conversionKilobyte").innerHTML = formatNum(kcon);
    document.getElementById("conversionMegabyte").innerHTML = document.getElementById("conversionInput").value
    document.getElementById("conversionGigabyte").innerHTML = formatNum(gcon);
    document.getElementById("conversionTerrabyte").innerHTML = formatNum(tcon);
    document.getElementById("conversionPetabyte").innerHTML = formatNum(pcon);
    document.getElementById("conversionExabyte").innerHTML = formatNum(econ);
    document.getElementById("conversionZettabyte").innerHTML = formatNum(zcon);
    document.getElementById("conversionYottabyte").innerHTML = formatNum(ycon);
}

function convertGigabyte(x) {

    var bicon = gigabyteToBit(x);
    var ncon = gigabyteToNibble(x);
    var bcon = gigabyteToByte(x);
    var wcon = gigabyteToWord(x);
    var kcon = gigabyteToKilobyte(x);
    var mcon = gigabyteToMegabyte(x);
    var tcon = gigabyteToTerrabyte(x);
    var pcon = gigabyteToPetabyte(x);
    var econ = gigabyteToExabyte(x);
    var zcon = gigabyteToZettabyte(x);
    var ycon = gigabyteToYottabyte(x);

    document.getElementById("conversionBit").innerHTML = formatNum(bicon);
    document.getElementById("conversionNibble").innerHTML = formatNum(ncon);
    document.getElementById("conversionByte").innerHTML = formatNum(bcon);
    document.getElementById("conversionWord").innerHTML = formatNum(wcon);
    document.getElementById("conversionKilobyte").innerHTML = formatNum(kcon);
    document.getElementById("conversionMegabyte").innerHTML = formatNum(mcon);
    document.getElementById("conversionGigabyte").innerHTML = document.getElementById("conversionInput").value
    document.getElementById("conversionTerrabyte").innerHTML = formatNum(tcon);
    document.getElementById("conversionPetabyte").innerHTML = formatNum(pcon);
    document.getElementById("conversionExabyte").innerHTML = formatNum(econ);
    document.getElementById("conversionZettabyte").innerHTML = formatNum(zcon);
    document.getElementById("conversionYottabyte").innerHTML = formatNum(ycon);
}

function convertTerrabyte(x) {

    var bicon = terrabyteToBit(x);
    var ncon = terrabyteToNibble(x);
    var bcon = terrabyteToByte(x);
    var wcon = terrabyteToWord(x);
    var kcon = terrabyteToKilobyte(x);
    var mcon = terrabyteToMegabyte(x);
    var gcon = terrabyteToGigabyte(x);
    var pcon = terrabyteToPetabyte(x);
    var econ = terrabyteToExabyte(x);
    var zcon = terrabyteToZettabyte(x);
    var ycon = terrabyteToYottabyte(x);

    document.getElementById("conversionBit").innerHTML = formatNum(bicon);
    document.getElementById("conversionNibble").innerHTML = formatNum(ncon);
    document.getElementById("conversionByte").innerHTML = formatNum(bcon);
    document.getElementById("conversionWord").innerHTML = formatNum(wcon);
    document.getElementById("conversionKilobyte").innerHTML = formatNum(kcon);
    document.getElementById("conversionMegabyte").innerHTML = formatNum(mcon);
    document.getElementById("conversionGigabyte").innerHTML = formatNum(gcon);
    document.getElementById("conversionTerrabyte").innerHTML = document.getElementById("conversionInput").value
    document.getElementById("conversionPetabyte").innerHTML = formatNum(pcon);
    document.getElementById("conversionExabyte").innerHTML = formatNum(econ);
    document.getElementById("conversionZettabyte").innerHTML = formatNum(zcon);
    document.getElementById("conversionYottabyte").innerHTML = formatNum(ycon);
}

function convertPetabyte(x) {

    var bicon = petabyteToBit(x);
    var ncon = petabyteToNibble(x);
    var bcon = petabyteToByte(x);
    var wcon = petabyteToWord(x);
    var kcon = petabyteToKilobyte(x);
    var mcon = petabyteToMegabyte(x);
    var gcon = petabyteToGigabyte(x);
    var tcon = petabyteToTerrabyte(x);
    var econ = petabyteToExabyte(x);
    var zcon = petabyteToZettabyte(x);
    var ycon = petabyteToYottabyte(x);

    document.getElementById("conversionBit").innerHTML = formatNum(bicon);
    document.getElementById("conversionNibble").innerHTML = formatNum(ncon);
    document.getElementById("conversionByte").innerHTML = formatNum(bcon);
    document.getElementById("conversionWord").innerHTML = formatNum(wcon);
    document.getElementById("conversionKilobyte").innerHTML = formatNum(kcon);
    document.getElementById("conversionMegabyte").innerHTML = formatNum(mcon);
    document.getElementById("conversionGigabyte").innerHTML = formatNum(gcon);
    document.getElementById("conversionTerrabyte").innerHTML = formatNum(tcon);
    document.getElementById("conversionPetabyte").innerHTML = document.getElementById("conversionInput").value
    document.getElementById("conversionExabyte").innerHTML = formatNum(econ);
    document.getElementById("conversionZettabyte").innerHTML = formatNum(zcon);
    document.getElementById("conversionYottabyte").innerHTML = formatNum(ycon);
}

function convertExabyte(x) {

    var bicon = exabyteToBit(x);
    var ncon = exabyteToNibble(x);
    var bcon = exabyteToByte(x);
    var wcon = exabyteToWord(x);
    var kcon = exabyteToKilobyte(x);
    var mcon = exabyteToMegabyte(x);
    var gcon = exabyteToGigabyte(x);
    var tcon = exabyteToTerrabyte(x);
    var pcon = exabyteToPetabyte(x);
    var zcon = exabyteToZettabyte(x);
    var ycon = exabyteToYottabyte(x);

    document.getElementById("conversionBit").innerHTML = formatNum(bicon);
    document.getElementById("conversionNibble").innerHTML = formatNum(ncon);
    document.getElementById("conversionByte").innerHTML = formatNum(bcon);
    document.getElementById("conversionWord").innerHTML = formatNum(wcon);
    document.getElementById("conversionKilobyte").innerHTML = formatNum(kcon);
    document.getElementById("conversionMegabyte").innerHTML = formatNum(mcon);
    document.getElementById("conversionGigabyte").innerHTML = formatNum(gcon);
    document.getElementById("conversionTerrabyte").innerHTML = formatNum(tcon);
    document.getElementById("conversionPetabyte").innerHTML = formatNum(pcon);
    document.getElementById("conversionExabyte").innerHTML = document.getElementById("conversionInput").value
    document.getElementById("conversionZettabyte").innerHTML = formatNum(zcon);
    document.getElementById("conversionYottabyte").innerHTML = formatNum(ycon);
}

function convertZettabyte(x) {

    var bicon = zettabyteToBit(x);
    var ncon = zettabyteToNibble(x);
    var bcon = zettabyteToByte(x);
    var wcon = zettabyteToWord(x);
    var kcon = zettabyteToKilobyte(x);
    var mcon = zettabyteToMegabyte(x);
    var gcon = zettabyteToGigabyte(x);
    var tcon = zettabyteToTerrabyte(x);
    var pcon = zettabyteToPetabyte(x);
    var econ = zettabyteToExabyte(x);
    var ycon = zettabyteToYottabyte(x);

    document.getElementById("conversionBit").innerHTML = formatNum(bicon);
    document.getElementById("conversionNibble").innerHTML = formatNum(ncon);
    document.getElementById("conversionByte").innerHTML = formatNum(bcon);
    document.getElementById("conversionWord").innerHTML = formatNum(wcon);
    document.getElementById("conversionKilobyte").innerHTML = formatNum(kcon);
    document.getElementById("conversionMegabyte").innerHTML = formatNum(mcon);
    document.getElementById("conversionGigabyte").innerHTML = formatNum(gcon);
    document.getElementById("conversionTerrabyte").innerHTML = formatNum(tcon);
    document.getElementById("conversionPetabyte").innerHTML = formatNum(pcon);
    document.getElementById("conversionExabyte").innerHTML = formatNum(econ);
    document.getElementById("conversionZettabyte").innerHTML = document.getElementById("conversionInput").value
    document.getElementById("conversionYottabyte").innerHTML = formatNum(ycon);
}

function convertYottabyte(x) {

    var bicon = yottabyteToBit(x);
    var ncon = yottabyteToNibble(x);
    var bcon = yottabyteToByte(x);
    var wcon = yottabyteToWord(x);
    var kcon = yottabyteToKilobyte(x);
    var mcon = yottabyteToMegabyte(x);
    var gcon = yottabyteToGigabyte(x);
    var tcon = yottabyteToTerrabyte(x);
    var pcon = yottabyteToPetabyte(x);
    var econ = yottabyteToExabyte(x);
    var zcon = yottabyteToZettabyte(x);

    document.getElementById("conversionBit").innerHTML = formatNum(bicon);
    document.getElementById("conversionNibble").innerHTML = formatNum(ncon);
    document.getElementById("conversionByte").innerHTML = formatNum(bcon);
    document.getElementById("conversionWord").innerHTML = formatNum(wcon);
    document.getElementById("conversionKilobyte").innerHTML = formatNum(kcon);
    document.getElementById("conversionMegabyte").innerHTML = formatNum(mcon);
    document.getElementById("conversionGigabyte").innerHTML = formatNum(gcon);
    document.getElementById("conversionTerrabyte").innerHTML = formatNum(tcon);
    document.getElementById("conversionPetabyte").innerHTML = formatNum(pcon);
    document.getElementById("conversionExabyte").innerHTML = formatNum(econ);
    document.getElementById("conversionZettabyte").innerHTML = formatNum(zcon);
    document.getElementById("conversionYottabyte").innerHTML = document.getElementById("conversionInput").value
}

var userInput = document.getElementById('conversionInput').value;


//function bclick(clicked) {

//    console.log(clicked)

//    var userInput = document.getElementById('conversionInput').value

//    if (clicked == "Bitt") {
//        console.log("tetetet");
//        convertBit(userInput);
//    }

//    if (clicked == "niible") {

//        convertNibble(userInput);
//    }

//    if (clicked == "Bytee") {

//        convertByte(userInput)
//    }

//    if (clicked == "Word") {
//        convertWord(userInput);
//    }

//    if (clicked == "Kilobyte") {

//        convertKilobyte(userInput)
//    }

//    if (clicked == "Megabyte") {

//        convertMegabyte(userInput)
//    }

//    if (clicked == "Gigabyte") {

//        convertGigabyte(userInput)
//    }

//    if (clicked == "Terrabyte") {

//        convertTerrabyte(userInput)
//    }

//    if (clicked == "Petabyte") {

//        convertPetabyte(userInput)
//    }

//    if (clicked == "Exabyte") {

//        convertExabyte(userInput)
//    }

//    if (clicked == "Zettabyte") {

//        convertZettabyte(userInput)
//    }

//    if (clicked == "Yottabyte") {

//        convertYottabyte(userInput)
//    }
//}



// the following statements implement the hover functionality
$("#Bit").hover(function () {
    var userInput = document.getElementById("conversionInput").value;
    convertBit(userInput);
    changeColor(this.id);
});

$("#Nibble").hover(function () {
    var userInput = document.getElementById("conversionInput").value;
    convertNibble(userInput);
    changeColor(this.id);
});

$("#Byte").hover(function () {
    var userInput = document.getElementById('conversionInput').value
    convertByte(userInput)
    changeColor(this.id)
})

$("#Word").hover(function () {
    var userInput = document.getElementById("conversionInput").value;
    convertWord(userInput);
    changeColor(this.id);
});

$("#Kilobyte").hover(function () {
    var userInput = document.getElementById('conversionInput').value
    convertKilobyte(userInput)
    changeColor(this.id)
})

$("#Megabyte").hover(function () {
    var userInput = document.getElementById('conversionInput').value
    convertMegabyte(userInput)
    changeColor(this.id)
})

$("#Gigabyte").hover(function () {
    var userInput = document.getElementById('conversionInput').value
    convertGigabyte(userInput)
    changeColor(this.id)
})

$("#Terrabyte").hover(function () {
    var userInput = document.getElementById('conversionInput').value
    convertTerrabyte(userInput)
    changeColor(this.id)
})

$("#Petabyte").hover(function () {
    var userInput = document.getElementById('conversionInput').value
    convertPetabyte(userInput)
    changeColor(this.id)
})

$("#Exabyte").hover(function () {
    var userInput = document.getElementById('conversionInput').value
    convertExabyte(userInput)
    changeColor(this.id)
})

$("#Zettabyte").hover(function () {
    var userInput = document.getElementById('conversionInput').value
    convertZettabyte(userInput)
    changeColor(this.id)
})

$("#Yottabyte").hover(function () {
    var userInput = document.getElementById('conversionInput').value
    convertYottabyte(userInput)
    changeColor(this.id)
})