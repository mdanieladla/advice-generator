import React from 'react';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';
//styles
import '../styles/Advice.scss';
import dice from '../images/icon-dice.svg';
import divider from '../images/pattern-divider-mobile.svg';
const Advice = () => {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    callToApi().then((response) => {
      setAdvice(response);
    });
  }, []);

  const handleChangeAdvice = () => {
    callToApi().then((response) => {
      setAdvice(response);
      console.log('he clickado');
    });
  };

  return (
    <div className='card'>
      <p className='card-id'>Advice #{advice.id}</p>
      <p className='card-advice'>"{advice.advice}"</p>
      <div className='card-stuff'>
        <img src={divider} alt='divider' />
      </div>
      <button onClick={handleChangeAdvice} className='card-btn'>
        <img className='card-btn__dice' src={dice} alt='icon dice' />
      </button>
    </div>
  );
};

export default Advice;
