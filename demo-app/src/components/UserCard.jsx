// src/components/UserCard.jsx
import { useRef, useEffect, useState } from "react";

const UserCard = ({ user }) => {
  const renderCount = useRef(0);
  const [flash, setFlash] = useState(false);
  renderCount.current += 1;

  useEffect(() => {
    setFlash(true);
    const timeout = setTimeout(() => setFlash(false), 300);
    return () => clearTimeout(timeout);
  }, [user]);

  return (
    <tr className={flash ? "bg-yellow-100 transition-colors duration-300" : ""}>
      <td className="border px-4 py-2">{user.name}</td>
      <td className="border px-4 py-2">{user.phone}</td>
      <td className="border px-4 py-2">{user.email}</td>
      <td className="border px-4 py-2">{user.role}</td>

      <td className="border px-4 py-2 text-xs text-gray-500">
        Render: {renderCount.current}
      </td>
    </tr>
  );
};

export default UserCard;
