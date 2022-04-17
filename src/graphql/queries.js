/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
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
export const listPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
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
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        patientAppointmentsId
      }
      nextToken
    }
  }
`;
export const patientByUserID = /* GraphQL */ `
  query PatientByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    patientByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
