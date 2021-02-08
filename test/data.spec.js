// import { example, anotherExample } from '../src/data.js';
import { filterByGender } from '../src/data.js';
import { filterByStatus } from '../src/data.js';
import { filterBySpecies } from '../src/data.js';
import {dataMock} from './dataMock.js'
// import {target} from './helpers.js'

// describe('This colection is example',()=>{
//   it('validate funtion suma 2+4=6',()=>{
//       expect(suma(2,4)).toBe(6)
//   })
//   it('validate error',()=>{
//       expect(suma("Ilse","Lu")).toBe(6)
//   })
//   it('validate with data',()=>{
//       expect(suma(data.a,data.b)).toBe(30)
//   })
// })

describe("the filter should return the data",()=>{
  it("filterByGender should return the selected gender", ()=>{
    const filters = filterByGender(dataMock, "Male")
    filters.forEach((dataMock) => {
      expect(dataMock.gender).toBe("Male");
    });   
  })
  it("filterByStatus should return the selected status",()=>{
    const filters = filterByStatus(dataMock, "Alive")
    filters.forEach((dataMock) =>{
      expect(dataMock.status).toBe("Alive");
    });
  })
  it("filterBySpecies should return the selected specie",()=>{
    const filters = filterBySpecies(dataMock, "Human")
    filters.forEach((dataMock) =>{
      expect(dataMock.species).toBe("Human");
    });
  })
})





