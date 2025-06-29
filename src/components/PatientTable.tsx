import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import type { Patient } from "../types";

interface PatientTableProps {
  patients: Patient[];
}

export default function PatientTable({ patients }: PatientTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Insurance Number</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Date Added</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient: Patient) => (
            <TableRow
              key={patient.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{patient.name}</TableCell>
              <TableCell align="right">{patient.age}</TableCell>
              <TableCell align="right">{patient.insurance}</TableCell>
              <TableCell align="right">{patient.phone}</TableCell>
              <TableCell align="right">{patient.email}</TableCell>
              <TableCell align="right">{patient.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
