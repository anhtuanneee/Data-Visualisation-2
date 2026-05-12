const priceChart = "charts/fuel_prices_over_time.vg.json";
const stateSalesChart = "charts/fuel_sales_by_state.vg.json";
const stateFuelTypeChart = "charts/state_fuel_type_comparison.vg.json";

vegaEmbed("#fuel-prices-chart", priceChart, {
  actions: false
}).catch(console.error);

vegaEmbed("#state-sales-chart", stateSalesChart, {
  actions: false
}).catch(console.error);

vegaEmbed("#state-fuel-type-chart", stateFuelTypeChart, {
  actions: false
}).catch(console.error);
