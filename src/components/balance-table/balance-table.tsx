import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import type { BalanceTableProps } from ".";

export function BalanceTable({ items }: BalanceTableProps) {
  const [page, setPage] = React.useState(0);
  const [pageCount, setPageCount] = React.useState(5);

  if (items.length === 0) {
    return <EmptyMessage />;
  }

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangePageCount = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPageCount(+event.target.value || 0);
    setPage(0);
  };

  const start = page * pageCount;
  const end = start + pageCount;

  const visibleRows = items.slice(start, end);

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Valor inicial</TableCell>
              <TableCell>Valor utilizado</TableCell>
              <TableCell>Valor restante</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {visibleRows.map((row) => {
              return (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.startMoney}</TableCell>
                  <TableCell>{row.startMoney - row.currentMoney}</TableCell>
                  <TableCell>{row.currentMoney}</TableCell>
                  <TableCell align="right">
                    <IconButton aria-label="edit">
                      <EditIcon />
                    </IconButton>

                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[2, 5, 10]}
        component="div"
        count={items.length}
        rowsPerPage={pageCount}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangePageCount}
      />
    </Paper>
  );
}

function EmptyMessage() {
  return (
    <Stack flex={"1"} gap={"2rem"} alignItems={"center"} marginBlock={"auto"}>
      <Typography>Você não possui saldos.</Typography>

      <Button
        variant="contained"
        sx={{
          paddingInline: "2rem",
          borderRadius: "20px",
        }}
      >
        criar saldo
      </Button>
    </Stack>
  );
}
