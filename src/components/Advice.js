import React from 'react';
import callToApi from '../services/api';
import { useEffect, useState } from 'react';
//styles
import '../styles/Advice.scss';

const Advice = () => {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    callToApi().then((response) => {
      setAdvice(response);
    });
  }, []);

  return (
    <div className='card'>
      <span>{advice.id}</span>
      <p>{advice.advice}</p>
      <div>linea</div>
      <div>| |</div>
      <div>linea</div>
      <div>dado</div>
    </div>
  );
};

export default Advice;
