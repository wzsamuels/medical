/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient {
    onCreatePatient {
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
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient {
    onUpdatePatient {
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
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient {
    onDeletePatient {
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
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment {
    onCreateAppointment {
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
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment {
    onUpdateAppointment {
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
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment {
    onDeleteAppointment {
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
