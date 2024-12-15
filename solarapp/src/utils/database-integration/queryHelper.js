/* all SQL queries to be used */

// queryHelper.js

// Query to insert an appointment into the 'appointment_details' table
export const insertAppointmentQuery = `
  INSERT INTO appointment_details (
    name, email, phone, address1, address2, zip_code, appointment_date, appointment_time
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`;

// Query to fetch all appointments from the 'appointment_details' table
export const fetchAllAppointmentsQuery = `
  SELECT * FROM appointment_details
`;

