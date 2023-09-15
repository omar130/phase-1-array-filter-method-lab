// Code your solution here

//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
//expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'bobby']);

 

function findMatching(driverNames, name){

  const matching = driverNames.filter((driverName) => name.toLowerCase() == driverName.toLowerCase())
  return matching
 
  // const matching = []
  // driverNames.forEach(driverName => {
  //   if (driverName.toLowerCase() == name.toLowerCase()){
  //     matching.push(driverName)
  //   }
  // })

  
}

//expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);
//text.startsWith("Hello");

function fuzzyMatch(driverNames, letters){

  const matching = driverNames.filter((driverName) => driverName.startsWith(letters)) 
  return matching
  
  
}

//const drivers = [
//   {
//     name: 'Bobby',
//     hometown: 'Pittsburgh' },
//   {
//     name: 'Sammy',
//     hometown: 'New York' } ,
//   {
//     name: 'Sally',
//     hometown: 'Cleveland' },
//   {
//     name: 'Annette',
//     hometown: 'Los Angeles' },
//   {
//     name: 'Bobby',
//     hometown: 'Tampa Bay' }
// ];


// expect(matchName(drivers, 'Bobby')).to.eql([
//   {
//     name: 'Bobby',
//     hometown: 'Pittsburgh'
//   },
//   {
//     name: 'Bobby',
//     hometown: 'Tampa Bay'
//   }
// ]);

function matchName(drivers, name){

  const matching = drivers.filter(driver => driver.name == name)
  return matching

}