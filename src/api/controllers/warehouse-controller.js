//import MOCKUP from "../mockup";
import axios from 'axios'

const WAREHOUSE_CONTROLLER = {
  async getAll() {
    try {
      const httpClient = axios.create({
        baseURL: "https://localhost:44312/",
        timeout: 30000,
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          "Authorization": "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"
        }
      });

      const response = await httpClient.get('warehouse')

      if (response.status !== 200) {
        throw new Error(`Status code is no successful: ${response.status}`);
      }

      const warehouses = response.data;
      //const warehouses = await MOCKUP.getAllWarehouses();

      for (let warehouse of warehouses) {
        warehouse.cars.vehicles = filterByDate(warehouse.cars.vehicles);
      }

      return warehouses;
    } catch (err) {
      console.log(err)
      return []
    }
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