import { jsPDF } from "jspdf";
import "jspdf-autotable";

export const exportToPDF = (appointments) => {
  const doc = new jsPDF();

  // Title
  doc.text("S.A.Y Appointment Lists", 10, 10);

  // Table Headers
  const tableHeaders = [
    { title: "ID", dataKey: "id" },
    { title: "Date", dataKey: "date" },
    { title: "Time", dataKey: "time" },
    { title: "Name", dataKey: "name" },
    { title: "Email", dataKey: "email" },
    { title: "Address", dataKey: "address" },
    { title: "Zipcode", dataKey: "zipcode" },
    { title: "Status", dataKey: "status" },
  ];

  // Function to add pages with data
  const addPage = (appointments, startIndex) => {
    if (startIndex > 0) {
      doc.addPage();
    }

    doc.autoTable({
      head: [tableHeaders.map(header => header.title)],
      body: appointments.slice(startIndex, startIndex + 12).map(app => [
        app.apt_id,
        app.date,
        app.time.slice(0, 5), // Only HH:MM
        app.name,
        app.email,
        `${app.address_1} ${app.address_2 || ""}`,
        app.zipcode,
        app.status,
      ]),
    });
  };

  // Add the first page with the appointments data
  addPage(appointments, 0);

  // Add "The End" text on the last page if needed
  if (appointments.length > 12) {
    const lastPageY = doc.internal.pageSize.height - 10;
    doc.text("The End", 10, lastPageY);
  }

  // Save the PDF
  doc.save(`Appointment_List_${new Date().toLocaleDateString().replace(/\//g, "")}.pdf`);
};
