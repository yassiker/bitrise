/*
This is a view i use in a test app,
very useful to list all the use cases
*/

import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View, ScrollView,
} from 'react-native';


import { Form,
  Separator, InputField, LinkField,
  SwitchField, PickerField, DatePickerField, TimePickerField
} from 'react-native-form-generator';

interface PersonalInformation {
  first_name: string;
  email: string;
  age: Date;
}

export class FormView extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      formData: {}
    };
  }

  handleFormChange(formData: any) {

    this.setState({formData: formData});
    this.props.onFormChange && this.props.onFormChange(formData);

  }

  handleFormFocus(e: any, component: any) {
    // console.log(e, component);
  }

  openTermsAndConditionsURL() {

  }

  helpText = () => {
      console.log('helpText');
      /*if (Object.keys(self.refs).length !== 0) {
        if (!self.refs.registrationForm.refs.first_name.valid) {
          return self.refs.registrationForm.refs.first_name.validationErrors.join('\n');
        }
      }*/
  }

  datepicker() {
    return (
       <DatePickerField ref='meeting'
          minimumDate={new Date('1/1/1900')}
          maximumDate={new Date()} mode='datetime' placeholder='Meeting'/>
    );
  }


  render() {

    return (
    <ScrollView keyboardShouldPersistTaps='always' style={{paddingLeft: 10, paddingRight: 10, height: 200}}>
      <Form
        ref='registrationForm'
        onFocus={this.handleFormFocus.bind(this)}
        onChange={this.handleFormChange.bind(this)}
        label='Personal Information'>
        <Separator />

        <InputField
          ref='first_name'
          label='First Name'
          placeholder='First Name'
          helpText={((self) => this.helpText())(this)}
          />

        <InputField ref='last_name' placeholder='Last Name'/>

        <InputField
          multiline={true}
          ref='other_input'
          placeholder='Other Input'
          helpText='Description' />

        <Separator />
        <LinkField label='Agree' onPress={() => {}}/>

        <SwitchField label='I accept Terms & Conditions'
          ref='has_accepted_conditions'
          helpText='Please read carefully the terms & conditions'/>

        <PickerField ref='gender'
          label='Gender'
          options={{
            '': '',
            male: 'Male',
            female: 'Female'
          }}/>

        <DatePickerField ref='birthday'
          minimumDate={new Date('1/1/1900')}
          maximumDate={new Date()}
          placeholder='Birthday'/>

        <TimePickerField ref='alarm_time'
          placeholder='Set Alarm'/>

        {
          this.props.dateTaker && this.datepicker()
        }

      </Form>
        <Text>{JSON.stringify(this.state.formData)}</Text>

      </ScrollView>);
    }
  }