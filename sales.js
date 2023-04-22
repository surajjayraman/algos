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
  // Implement your code here
  let salesTax = {};
  let companyTotals = {};
  let totalSales = 0;
  for (let company of salesData) {
    console.log(company.name);
    
    if (company.name in salesTax) {
      for (let sale of company.sales) {
        totalSales = totalSales + sale;
      }
      salesTax[company.name]['totalSales'] = salesTax[company.name]['totalSales'] + totalSales;
      continue;
    }
    
    for (let sale of company.sales) {
      totalSales = totalSales + sale;
    }
    salesTax[company.name] = {
      'totalSales': totalSales
    };
    totalSales = 0;
  }
  return (`Calculated Sales Tax: ${JSON.stringify(salesTax)}`);
};

const results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);