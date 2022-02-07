import MOCKUP from "../mockup";

const WAREHOUSE_CONTROLLER = {


  async getAll() {
    // api call

    const warehouses = await MOCKUP.getAllWarehouses();

    for (let warehouse of warehouses) {
      warehouse.cars.vehicles = filterByDate(warehouse.cars.vehicles);
    }

    return warehouses;
  }
};

function filterByDate(vehicles) {
  return vehicles.sort((a, b) => {
    return a.date_added > b.date_added ?
      1 :
      a.date_added < b.date_added ?
      -1 :
      0;
  });
}

export default WAREHOUSE_CONTROLLER;