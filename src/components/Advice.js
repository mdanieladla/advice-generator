import React from 'react';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';
//styles
import '../styles/Advice.scss';
import dice from '../images/icon-dice.svg';
import divider from '../images/pattern-divider-mobile.svg';
import dividerDesktop from '../images/pattern-divider-desktop.svg';
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
      <picture className='card-stuff'>
        <source media='(min-width: 1024px)' srcSet={dividerDesktop} />
        <img src={divider} alt='divider' />
      </picture>
      <button onClick={handleChangeAdvice} className='card-btn'>
        <img className='card-btn__dice' src={dice} alt='icon dice' />
      </button>
    </div>
  );
};

export default Advice;
