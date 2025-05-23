import { MoreVertical } from 'lucide-react';
import React, { useState } from 'react';

import Button from '@/components/buttons/Button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';

import { useTileContext } from '@/app/store/TileContextProvider';

const AllEmployees = () => {
  const { isTileView } = useTileContext();
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const sampleEmployees = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Employee ${i + 1}`,
    title: 'Software Engineer',
    department: 'Engineering',
    location: 'Remote',
    email: `employee${i + 1}@company.com`,
    phone: '123-456-7890',
    status: 'Active',
    dateHired: '2021-01-01',
    manager: `Manager ${i + 1}`,
  }));
  return (
    <div>
      <main className='p-4 grid gap-4'>
        {isTileView ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {sampleEmployees.map((emp) => (
              <Card
                key={emp.id}
                className='cursor-pointer hover:shadow-lg'
                onClick={() => setSelectedEmployee(emp)}
              >
                <CardContent className='p-4'>
                  <div className='flex justify-between'>
                    <div>
                      <h4 className='font-semibold text-lg'>{emp.name}</h4>
                      <p className='text-sm text-gray-600'>{emp.title}</p>
                    </div>
                    <Button size='icon' variant='ghost'>
                      <MoreVertical size={18} />
                    </Button>
                  </div>
                  <p className='mt-2 text-sm text-gray-500'>{emp.department}</p>
                  <p className='text-sm text-gray-500'>{emp.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className='overflow-auto bg-white shadow rounded-lg'>
            <table className='min-w-full'>
              <thead className='bg-gray-200'>
                <tr>
                  <th className='p-2 text-left'>Name</th>
                  <th className='p-2 text-left'>Title</th>
                  <th className='p-2 text-left'>Department</th>
                  <th className='p-2 text-left'>Location</th>
                  <th className='p-2 text-left'>Email</th>
                  <th className='p-2 text-left'>Phone</th>
                  <th className='p-2 text-left'>Status</th>
                  <th className='p-2 text-left'>Date Hired</th>
                  <th className='p-2 text-left'>Manager</th>
                </tr>
              </thead>
              <tbody>
                {sampleEmployees.map((emp) => (
                  <tr key={emp.id} className='border-t hover:bg-gray-50'>
                    <td className='p-2'>{emp.name}</td>
                    <td className='p-2'>{emp.title}</td>
                    <td className='p-2'>{emp.department}</td>
                    <td className='p-2'>{emp.location}</td>
                    <td className='p-2'>{emp.email}</td>
                    <td className='p-2'>{emp.phone}</td>
                    <td className='p-2'>{emp.status}</td>
                    <td className='p-2'>{emp.dateHired}</td>
                    <td className='p-2'>{emp.manager}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <Dialog
        open={!!selectedEmployee}
        onOpenChange={() => setSelectedEmployee(null)}
      >
        <DialogContent className='max-w-md w-full'>
          {selectedEmployee && (
            <div>
              <h2 className='text-xl font-semibold mb-2'>
                {selectedEmployee.name}
              </h2>
              <p>
                <strong>Title:</strong> {selectedEmployee.title}
              </p>
              <p>
                <strong>Department:</strong> {selectedEmployee.department}
              </p>
              <p>
                <strong>Location:</strong> {selectedEmployee.location}
              </p>
              <p>
                <strong>Email:</strong> {selectedEmployee.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedEmployee.phone}
              </p>
              <p>
                <strong>Status:</strong> {selectedEmployee.status}
              </p>
              <p>
                <strong>Date Hired:</strong> {selectedEmployee.dateHired}
              </p>
              <p>
                <strong>Manager:</strong> {selectedEmployee.manager}
              </p>
              <Button
                className='mt-4'
                onClick={() => setSelectedEmployee(null)}
              >
                Back
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AllEmployees;
