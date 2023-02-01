import { listingUsers, UserProps } from './Mocks/listingUsers';

export const Listing = () => {
  return (
    <div>
      <h1>User Listing</h1>

      <ul>
        {listingUsers.length > 0 &&
          listingUsers.map((user: UserProps) => {
            return (
              <li key={user.id}>
                <span>{user.name}</span>
                <span>{user.age}</span>

                <span>{user.role ? user.role : 'não informado'} </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
