import React, { Component } from 'react';
import Card from './Card';
import Input from './Input';

const personPropertyChanged = (key, val) => ({ form }) => ({
  form: {...form, [key]: val},
  valid: !!val
});

class PersonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstname: props.person.firstname,
        lastname: props.person.lastname,
        entity: props.person.entity,
        email: props.person.email,
        phone: props.person.phone
      },
      saving: false,
      valid: true
    }
  }
  
  onSubmit = () => {
    this.setState({ saving: true });
    this.props.onSave(this.state.form)
    .then(success => {
      if (!success) {
        this.setState({ saving: false });
        alert('could not update person :(');
      }
    });
  }

  onInputChange = e => this.setState(personPropertyChanged(e.target.name, e.target.value));
  
  render() {
    const { onCancel } = this.props;
    const { form, saving, valid } = this.state;
    // you won't need person anymore here, but rather use state
    return (
      <Card actions={[
        <button type="button" className="btn btn-default" onClick={this.onSubmit} key="save" disabled={saving || !valid}>save</button>,
        <a onClick={onCancel} key="cancel">cancel</a>
      ]}>
        <Card.Title
          mainTitle={`${form.firstname} ${form.lastname}`}
        />
        <Input name="firstname" type="text" label="first name"
               value={form.firstname} onChange={this.onInputChange}
               isInvalid={!form.firstname} disabled={saving} />
        <Input name="lastname" type="text" label="last name"
               value={form.lastname} onChange={this.onInputChange}
               isInvalid={!form.lastname} disabled={saving} />
        <Input name="entity" type="text" label="entity"
               value={form.entity} onChange={this.onInputChange}
               isInvalid={!form.entity} disabled={saving} />
        <Input name="email" type="text" label="email"
               value={form.email} onChange={this.onInputChange}
               isInvalid={!form.email} disabled={saving} />
        <Input name="phone" type="text" label="phone"
               value={form.phone} onChange={this.onInputChange}
               isInvalid={!form.phone} disabled={saving} />
      </Card>
    );
  }
}

export default PersonForm;