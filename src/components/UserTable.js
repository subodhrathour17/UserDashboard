import React, { useEffect, useState } from "react";
import { fetchUsers } from "../api/userAPI";
import Modal from "./Modal";
import "../style/UserTable.css";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (column) => {
    setSortBy(column);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.address.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "city") {
      return a.address.city.localeCompare(b.address.city);
    }
    return 0;
  });

  return (
    <div className='user-table'>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search by name or city'
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className='table-wrapper'>
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("name")}>Name</th>
              <th onClick={() => handleSort("city")}>City</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user) => (
              <tr key={user.id} onClick={() => setModalData(user)}>
                <td data-label='Name'>{user.name}</td>
                <td data-label='City'>{user.address.city}</td>
                <td data-label='Email'>
                  <strong>{user.email}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalData && (
        <Modal user={modalData} closeModal={() => setModalData(null)} />
      )}
    </div>
  );
};

export default UserTable;
