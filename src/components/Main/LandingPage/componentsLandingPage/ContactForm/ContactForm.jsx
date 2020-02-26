import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../../../utils/formValidators';

let ContactFormRedux = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
        <div className="form-row">
            <div className="form-group col-md-6">
                <Field name="name" 
                       component="input" 
                       type="text" 
                       className="form-control" 
                       placeholder="Your Name"
                       validate={[required]}/>
            </div>
            <div className="form-group col-md-6">
                <Field name="email" component="input" type="email" className="form-control" placeholder="Your Email"/>
            </div>
        </div>       
        <div className="form-group" style={{"width" : "100%"}}> 
            <Field name="title" component="input" type="text" className="form-control" placeholder="Your Title"/>
        </div>
        <div className="form-group">
            <Field name="comment" component="textarea" type="text" className="form-control" placeholder="Your Comment"/>
        </div>
        <button type="submit">SEND MESSAGE</button>
    </form>)
}

ContactFormRedux = reduxForm({
  form: 'contact'
})(ContactFormRedux);


class ContactForm extends React.Component {
    submit = values => {
      console.log(values);
    }
    render() {
      return <ContactFormRedux onSubmit={this.submit} />
    }
  }

export default ContactForm;