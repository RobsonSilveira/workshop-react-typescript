export type UserProps = {
  id: number;
  name: string;
  age: number;
  role?: string;
};

export const listingUsers: UserProps[] = [
  { name: 'Robson', age: 33, role: 'dev', id: 1 },
  { name: 'Robson', age: 33, role: 'qa', id: 2 },
  { name: 'Robson', age: 33, role: 'dev', id: 3 },
  { name: 'Robson', age: 33, id: 4 }
];
