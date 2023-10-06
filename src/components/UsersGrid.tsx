import { DataTable } from 'mantine-datatable';
import users from '../data/users.json';

export default function BasicUsageExample() {
 
    return (
        <DataTable
          withBorder
          borderRadius="md"
          shadow="md"
          highlightOnHover
          fontSize="sm"
          columns={[
            { accessor: 'name' },
            { accessor: 'userName' },
            { accessor: 'emailAddress'},
            { accessor: 'group' },
            { accessor: 'status' },
            { accessor: 'createdOn' }
          ]}
          records={users}
        />
      );
  
}