const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

  const emptyarray = [];
  const array = Array(5);

  console.log(array.length)
  console.log(array[0])
  console.log(array[2])
  console.log(array[4])

  const mixeddataTypes = [1, 'Hi', [1,2,3], {name: "Anmol"}, 25, 85];
  console.log(mixeddataTypes.length);
  const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple','IBM', 'Oracle','Amazon'];
  console.log(itCompanies)
  console.log(itCompanies.length);
  console.log(itCompanies[0])
  console.log(itCompanies[Math.floor(itCompanies.length/2)]);
  console.log(itCompanies[itCompanies.length-1])

  for (let i=0; i<itCompanies.length; i++){
    console.log(itCompanies[i]);
  }

  for (let i = 0; i<itCompanies.length; i++){
    itCompanies[i] = itCompanies[i].toUpperCase();
  };

  console.log(itCompanies.toString(), ' are bing IT companies.')

  function find(Name){
    if (itCompanies.includes(Name)){
        return Name
    }
    else {
        return 'not found'
    }
  }

  console.log(find('NewCompany'));
  console.log(itCompanies);

  let j = 0;

  function check(j){
    word = itCompanies[j];
        
        word = word.split('');
        if (word.indexOf('O') != word.lastIndexOf('O')){
            return true
        }
        else{
            return false
        }
  }
  for (let i = 0; i < itCompanies.length;i++){
    if (check(j)){
        itCompanies.splice(j,1);
    }
    else{
        
        j++;
    }
  }
console.log(itCompanies);
itCompanies.sort()
console.log(itCompanies);
itCompanies.reverse();
console.log(itCompanies);
console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(1,4));
itCompanies.shift();
console.log(itCompanies);
itCompanies.splice(1,1);
itCompanies.splice(1,1);
console.log(itCompanies)
itCompanies.splice(0);
console.log(itCompanies);