// Code your solution in this file!
// logDriverNames() — Receives an array of driver objects and logs the name attribute of each driver to the console.

function logDriverNames(drivers){
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location){
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.slice(0).sort(function(driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  })
}

function driversByName(drivers){
  return drivers.slice(0).sort(function(driverA, driverB){
    return driverA.name.localeCompare(driverB.name)
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function(totalRevenue, eachDriver){
    return totalRevenue + eachDriver.revenue;
  },0)
}
// needs the 0 at the end to be reduces second argument setting the accumulator at 0

function averageRevenue(drivers) {
  return totalRevenue(drivers)/ drivers.length
}
