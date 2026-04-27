import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(undefined); // important

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // ⏳ still checking auth
  if (user === undefined) {
    return <h2>Loading...</h2>;
  }

  // ❌ not logged in
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // ✅ logged in
  return children;
};

export default ProtectedRoute;