import React, {useState} from 'react';
import useForm from "./useForm";
import validate from './LoginFormValidationRules';

const Form = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  function login() {
    console.log('No errors, submit callback called!');
  }

  const [mobile, setMobile] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Name *</label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="text" name="name" onChange={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Email *</label>
                <div className="control">
                  <input className={`input ${errors.password && 'is-danger'}`} type="text" name="email" onChange={handleChange} value={values.password || ''} required />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <div className="field">
                <label className="label">Mobile </label>
                <div className="control">
                  <input className={`input`} type="text" name="mobile" onChange={handleChange} value={mobile} />
                </div>
              </div>
              <div className="field">
                <label className="label">Country </label>
                <div className="control">
                  <input className={`input`} type="text" name="country" onChange={handleChange} value={country} />
                </div>
              </div>
              <div className="field">
                <label className="label">City </label>
                <div className="control">
                  <input className={`input`} type="text" name="city" onChange={handleChange} value={city} />
                </div>
              </div>
              <div className="field">
                <label className="label">State </label>
                <div className="control">
                  <input className={`input`} type="text" name="state" onChange={handleChange} value={state} />
                </div>
              </div>
              <div className="field">
                <label className="label">Message </label>
                <div className="control">
                  <textarea className={`input`} type="text" name="message" onChange={handleChange} value={message} />
                </div>
              </div>
              <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
