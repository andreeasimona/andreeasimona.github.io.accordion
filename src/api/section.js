const url = 'https://api.github.com/users/andreeasimona';

const getSection = () => {
  return fetch(`${url}`)
    .then(res => (res.json()))
    .then(response => response)
    .catch(error => error);
};

export default getSection;
