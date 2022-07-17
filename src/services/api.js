const callToApi = () => {
  return fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((response) => {
      const result = {
        advice: response.slip.advice,
        id: response.slip.id,
      };
      return result;
    });
};

export default callToApi;
