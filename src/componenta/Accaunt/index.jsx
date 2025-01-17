import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "../Accaunt/Accaunt.module.css";

function Account() {
  const location = useLocation();
  const formData = location.state || {}; // Registratsiyadan kelgan ma'lumotlar

  const [profileImage, setProfileImage] = useState(null);
  const [bio, setBio] = useState("");
  const maxBioLength = 300;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Rasmni URL ko'rinishida saqlash
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBioChange = (e) => {
    const newBio = e.target.value;
    if (newBio.length <= maxBioLength) {
      setBio(newBio);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Account Information</h2>

      {/* Profil rasmi va foydalanuvchi ma'lumotlari */}
      <div className={styles.accountDetails}>
        <div className={styles.profileImageContainer}>
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className={styles.profileImage}
            />
          ) : (
            <div className={styles.placeholderImage}>Upload Photo</div>
          )}
        </div>

        <div className={styles.userInfo}>
          <p className={styles.userName}>
            {formData.name} {formData.lastName}
          </p>
          <p className={styles.userEmail}>
            <p>Email:</p> 
            {formData.email}
          </p>
          <p className={styles.userLicense}>
            <strong>License Number:</strong> {formData.licenseNumber}
          </p>
        </div>
      </div>

      {/* Profil rasmi yuklash */}
      <div className={styles.profileSection}>
        <h3 className={styles.sectionTitle}>Profile Picture</h3>
        <input
          type="file"
          accept="image/*"
          className={styles.fileInput}
          onChange={handleImageChange}
          maxLength="2048" // Maksimal rasm o'lchami (2MB)
        />
      </div>

      {/* Bio qo'shish */}
      <div className={styles.bioSection}>
        <h3 className={styles.sectionTitle}>Bio</h3>
        <textarea
          placeholder="Write a short bio about yourself..."
          value={bio}
          onChange={handleBioChange}
          className={styles.textarea}
          maxLength={maxBioLength}
        />
        <p className={styles.bioLength}>
          {bio.length}/{maxBioLength} characters
        </p>
        {bio && (
          <div className={styles.bioPreview}>
            <p className={styles.bioText}>
              <strong>Your Bio:</strong> {bio}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Account;
