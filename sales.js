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
  const salesTax = {};
  let totalSales;
  let totalTaxes;

  for (let company of salesData) {
    console.log(company.name);
    totalSales = 0;
    totalTaxes = 0;
    // calculate total sales
    totalSales = companySales(company);
    // calculate total taxes
    totalTaxes = companyTaxes(totalSales, taxRates[company.province]);
      
    if (company.name in salesTax) {
      salesTax[company.name]['totalSales'] = salesTax[company.name]['totalSales'] + totalSales;
      salesTax[company.name]['totalTaxes'] = salesTax[company.name]['totalTaxes'] + totalTaxes;
      continue;
    }
    salesTax[company.name] = {
      'totalSales': totalSales,
      'totalTaxes' : totalTaxes
    };
    
  }
  return (`Calculated Sales Tax: ${JSON.stringify(salesTax)}`);
};

const companySales = (company) => {
  let sales = 0;
  for (let sale of company.sales) {
    sales = sales + sale;
  }
  return sales;
};

const companyTaxes = (sales, taxRate) => {
  return sales * taxRate;
};

const results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

module.exports = {calculateSalesTax};