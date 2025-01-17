import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    licenseNumber: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    if (!formData.name) {
      newErrors.name = "Name is required.";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.licenseNumber) {
      newErrors.licenseNumber = "License number is required.";
    } else if (!/^[A-Za-z0-9]{6,10}$/.test(formData.licenseNumber)) {
      newErrors.licenseNumber =
        "License number must be 6-10 alphanumeric characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/account", { state: formData }); // Ma'lumotlarni yuborish
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Create Account</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles.input}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={styles.input}
          />
          {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}

          <input
            type="text"
            name="licenseNumber"
            placeholder="License Number"
            value={formData.licenseNumber}
            onChange={handleChange}
            required
            className={styles.input}
          />
          {errors.licenseNumber && (
            <p className={styles.error}>{errors.licenseNumber}</p>
          )}

          <button type="submit" className={styles.button}>
            Go
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
