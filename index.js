// Code your solution in this file!
const logDriverNames = drivers => drivers.forEach(name => console.log(name.name))

const logDriversByHometown = (drivers, hometown) => {
  let driversList = drivers.filter(driver => driver.hometown === hometown)
  driversList.forEach(driver => console.log(driver.name))
}

const driversByRevenue = (drivers) => {
  const driverRevenue = [...drivers]
  return driverRevenue.sort((a,b) => a.revenue - b.revenue)
}

const driversByName = (drivers) => {
  const driverName = [...drivers]
  return driverName.sort((a,b) => a['name'].localeCompare(b['name']))
}

const totalRevenue = drivers =>
  drivers.reduce((total, currentDriver) =>
    { return currentDriver.revenue + total }, 0)

const averageRevenue = drivers =>
  totalRevenue(drivers) / drivers.length
