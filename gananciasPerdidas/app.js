let income = prompt ("¿De cuanto son tus ingresos?");

let costs = prompt ("¿Cuál es tu cantidad de egresos?");

let taxes = prompt ("¿Cuánto es el valor agregado?");

let grossProfit = income-costs;

let tax = grossProfit*taxes/100;

let netIncome =grossProfit-tax

document.write ("Tu ganancia neta es de $" + netIncome);