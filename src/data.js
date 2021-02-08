// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };




export const filterByGender = (data, target) => {
    return data.filter(personaje => personaje.gender === target);
};

export const filterByStatus = (data, target) => {
    return data.filter(personaje => personaje.status === target);
};

export const filterBySpecies = (data, target) => {
    return data.filter(personaje => personaje.species === target);
};



