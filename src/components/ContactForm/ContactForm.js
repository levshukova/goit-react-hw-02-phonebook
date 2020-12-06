import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label htmlFor={this.inputId} className={s.formLabel}>
          Name
          <input
            type="text"
            value={name}
            id={this.inputId}
            name="name"
            className={s.fromInput}
            placeholder=" "
            onChange={this.handleChange}
          />
        </label>
        <label className={s.formLabel}>
          Number
          <input
            type="tel"
            value={number}
            id="tel"
            name="number"
            className={s.fromInput}
            placeholder=" "
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
