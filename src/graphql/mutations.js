/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
      id
      userID
      firstname
      middlename
      lastname
      dob
      phone
      email
      appointments {
        items {
          id
          patientID
          time
          date
          doctor
          confirmed
          createdAt
          updatedAt
          patientAppointmentsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
      id
      userID
      firstname
      middlename
      lastname
      dob
      phone
      email
      appointments {
        items {
          id
          patientID
          time
          date
          doctor
          confirmed
          createdAt
          updatedAt
          patientAppointmentsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
      id
      userID
      firstname
      middlename
      lastname
      dob
      phone
      email
      appointments {
        items {
          id
          patientID
          time
          date
          doctor
          confirmed
          createdAt
          updatedAt
          patientAppointmentsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAppointment = /* GraphQL */ `
  mutation CreateAppointment(
    $input: CreateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    createAppointment(input: $input, condition: $condition) {
      id
      patientID
      time
      date
      doctor
      confirmed
      patient {
        id
        userID
        firstname
        middlename
        lastname
        dob
        phone
        email
        appointments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      patientAppointmentsId
    }
  }
`;
export const updateAppointment = /* GraphQL */ `
  mutation UpdateAppointment(
    $input: UpdateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    updateAppointment(input: $input, condition: $condition) {
      id
      patientID
      time
      date
      doctor
      confirmed
      patient {
        id
        userID
        firstname
        middlename
        lastname
        dob
        phone
        email
        appointments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      patientAppointmentsId
    }
  }
`;
export const deleteAppointment = /* GraphQL */ `
  mutation DeleteAppointment(
    $input: DeleteAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    deleteAppointment(input: $input, condition: $condition) {
      id
      patientID
      time
      date
      doctor
      confirmed
      patient {
        id
        userID
        firstname
        middlename
        lastname
        dob
        phone
        email
        appointments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      patientAppointmentsId
    }
  }
`;
