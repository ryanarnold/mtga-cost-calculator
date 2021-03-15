
let inputGem = document.getElementById('inputGem');
let inputGold = document.getElementById('inputGold');
let inputPacks = document.getElementById('inputPacks');
let inputWildcards = document.getElementById('inputWildcards');
let inputDollar = document.getElementById('inputDollar');

var nf = new Intl.NumberFormat();

function calculateFromGem() {
  gems = inputGem.value.replace(",", "");
  packs = gems / 200;
  gold = packs * 1000;
  wildcards = packs / 6;
  dollar = (gems * 0.0049995).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  if (packs < 1) packs = 0;
  if (wildcards < 1) wildcards = 0;

  inputGem.value = nf.format(gems);
  inputPacks.value = Math.trunc(packs);
  inputGold.value = nf.format(gold);
  inputWildcards.value = Math.trunc(wildcards);
  inputDollar.value = dollar;
}

function calculateFromGold() {
  gold = inputGold.value.replace(",", "");
  gems = (gold / 1000) * 200;
  packs = gold / 1000;
  wildcards = packs / 6;
  dollar = (gems * 0.0049995).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  if (packs < 1) packs = 0;
  if (wildcards < 1) wildcards = 0;

  inputGem.value = nf.format(gems);
  inputPacks.value = Math.trunc(packs);
  inputGold.value = nf.format(gold);
  inputWildcards.value = Math.trunc(wildcards);
  inputDollar.value = dollar;
}

function calculateFromPacks() {
  packs = inputPacks.value;
  gems = packs * 200;
  gold = packs * 1000;
  wildcards = packs / 6;
  dollar = (gems * 0.0049995).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  if (packs < 1) packs = 0;
  if (wildcards < 1) wildcards = 0;

  inputGem.value = nf.format(gems);
  inputPacks.value = Math.trunc(packs);
  inputGold.value = nf.format(gold);
  inputWildcards.value = Math.trunc(wildcards);
  inputDollar.value = dollar;
}

function calculateFromWildcards() {
  wildcards = inputWildcards.value;
  packs = wildcards * 6;
  gems = packs * 200;
  gold = packs * 1000;
  dollar = (gems * 0.0049995).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  if (packs < 1) packs = 0;
  if (wildcards < 1) wildcards = 0;

  inputGem.value = nf.format(gems);
  inputPacks.value = Math.trunc(packs);
  inputGold.value = nf.format(gold);
  inputWildcards.value = Math.trunc(wildcards);
  inputDollar.value = dollar;
}

inputGem.addEventListener('keyup', calculateFromGem);
inputGold.addEventListener('keyup', calculateFromGold);
inputPacks.addEventListener('keyup', calculateFromPacks);
inputWildcards.addEventListener('keyup', calculateFromWildcards);
// inputDollar.addEventListener('keyup', calculateFromDollar);
