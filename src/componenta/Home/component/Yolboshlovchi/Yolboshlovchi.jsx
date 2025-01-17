import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Yolboshlovchi.module.css"; // CSS Module faylni import qilish

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // API orqali foydalanuvchi ma'lumotlarini olish
    axios
      .get("https://dummyjson.com/users?limit=900")
      .then((response) => {
        setUsers(response.data.users); // Ma'lumotlarni saqlash
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Recruit the Leader</h1>
      <div className={styles.grid}>
        {users.map((user) => (
          <div key={user.id} className={styles.card}>
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className={styles.image}
            />
            <h2 className={styles.name}>
              {user.firstName} {user.lastName}
            </h2>
            <p className={styles.text}>Email: {user.email}</p>
            <p className={styles.text}>Phone: {user.phone}</p>
            <p className={styles.text}>
              Address: {user.address.city}, {user.address.state}
            </p>
            <p className={styles.text}>Company: {user.company.name}</p>
            <p className={styles.text}>University: {user.university}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersList;
