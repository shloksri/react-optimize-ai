// src/components/UserList.jsx
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import usersData from "../data/mock_users.json";

const UserList = () => {
  const [users, setUsers] = useState(usersData);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers((prevUsers) => {
        const updatedUsers = [...prevUsers];
        const indicesToUpdate = new Set();

        // Randomly pick 2 unique indices
        while (indicesToUpdate.size < 2) {
          indicesToUpdate.add(Math.floor(Math.random() * prevUsers.length));
        }

        for (let index of indicesToUpdate) {
          updatedUsers[index] = {
            ...updatedUsers[index],
            isOnline: Math.random() > 0.5,
          };
        }

        return updatedUsers;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Team Members</h2>
      <table className="table-auto border-collapse w-full bg-white shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Renders</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
