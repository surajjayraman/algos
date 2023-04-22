const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
  
const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const calculateSalesTax = function(salesData, taxRates) {
  // Needs to be refactored
  const salesTax = {};
  let totalSales = 0;
  let totalTaxes = 0;

  for (let company of salesData) {
    console.log(company.name);
    // calculate total sales + tax
    if (company.name in salesTax) {
      for (let sale of company.sales) {
        totalSales = totalSales + sale;
      }
      totalTaxes = totalSales * taxRates[company.province];
      salesTax[company.name]['totalSales'] = salesTax[company.name]['totalSales'] + totalSales;
      salesTax[company.name]['totalTaxes'] = salesTax[company.name]['totalTaxes'] + totalTaxes;
      continue;
    }
    
    // calculate total sales
    for (let sale of company.sales) {
      totalSales = totalSales + sale;
    }
    // calculate total taxes
    totalTaxes = totalSales * taxRates[company.province];

    salesTax[company.name] = {
      'totalSales': totalSales,
      'totalTaxes' : totalTaxes
    };
    totalSales = 0;
    totalTaxes = 0;
  }
  return (`Calculated Sales Tax: ${JSON.stringify(salesTax)}`);
};

const results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);