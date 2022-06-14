/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

// Firebase
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../database/firebase.js';

// Firebase database collection
const userCollection = collection(db, 'users');

// Get All Users
const getAllUsers = async () => {
  const data = await getDocs(userCollection);

  const usersData = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return usersData;
};

export default { getAllUsers };
