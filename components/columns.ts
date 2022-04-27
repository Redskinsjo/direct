import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'id',
    flex: 1,
  },
  {
    field: 'fullname',
    headerName: 'Nom complet',
    flex: 1,
  },
  {
    field: 'firstname',
    headerName: 'Prénom',
    flex: 1,
  },
  {
    field: 'lastname',
    headerName: 'Nom',
    flex: 1,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    flex: 1,
  },
  {
    field: 'profile',
    headerName: 'Profile',
    flex: 1,
  },
  {
    field: 'business',
    headerName: 'Business',
    flex: 1,
  },
  {
    field: 'notes',
    headerName: 'Notes',
    flex: 1,
  },
];
