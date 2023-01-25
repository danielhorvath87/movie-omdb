const Http = {
  removeBase(value: string) {
    return value.split('https://swapi.dev').pop();
  },

  isValidHttpUrl(value: string) {
    return value.includes('https://');
  },
};

export default Http;
