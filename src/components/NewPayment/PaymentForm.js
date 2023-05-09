import React from 'react';

import './PaymentForm.css';

const PaymentForm = () => {
  return (
    <form>
      <div className='new-payment__controls'>
        <div className='new-payment__control'>
          <label>이름</label>
          <input type='text' />
        </div>
        <div className='new-payment__control'>
          <label>금액</label>
          <input type='number' min='0.01' step='0.01' />
        </div>
        <div className='new-payment__control'>
          <label>날짜</label>
          <input type='date' min='2019-01-01' max='2022-12-31' />
        </div>
      </div>
      <div className='new-payment__actions'>
        <button type='submit'>결제 추가</button>
      </div>
    </form>
  );
};

export default PaymentForm;
