import axios from "axios";
import React, { useEffect, useState } from "react";
import { setHeaders, url } from "../features/api";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Formcontainer from "../components/FormContainer";
import { toast } from "react-toastify";

const User = () => {
  const params = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    isAdmin: false,
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${url}/users/find/${params.id}`,
          setHeaders()
        );
        setUser({
          ...res.data,
          password: "",
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    setLoading(false);
  }, [params.id]);

  const submitHandler = async (e) => {
    console.log('seeeeeennnnn')
    e.preventDefault();
    setUpdating(true);
    try {
      const res = await axios.put(
        `${url}/users/${params.id}`,
        {
          ...user,
        },
        setHeaders()
      );
      setUser({ ...res.data, password: "" });
      toast.success("Profile updated ...", {position: "top-right"})
    } catch (error) {
      console.log(error);
    }
    setUpdating(false);
  };

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <Formcontainer>
          <h3>User Profile</h3>
          {user.isAdmin ? <p>Admin</p> : <p>Customer</p>}

          <Form onSubmit={submitHandler} className=" p-3">
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="dark">
              {updating ? "Updating" : "Update Profile"}
            </Button>
          </Form>
        </Formcontainer>
      )}
    </>
  );
};

export default User;



// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Form, Button } from "react-bootstrap";
// import { toast } from "react-toastify";

// const User = () => {
//   const params = useParams();

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     isAdmin: false,
//   });

//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`/users/find/${params.id}`);
//         setUser(response.data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [params.id]);

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setUpdating(true);
//     try {
//       const response = await axios.put(`/users/${params.id}`, user);
//       setUser(response.data);
//       toast.success("Profile updated...", { position: "top-right" });
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to update profile.", { position: "top-right" });
//     } finally {
//       setUpdating(false);
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h3>User Profile</h3>
//       {user.isAdmin ? <p>Admin</p> : <p>Customer</p>}
//       <Form onSubmit={submitHandler} className="p-3">
//         <Form.Group controlId="name" className="mb-3">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             value={user.name}
//             onChange={(e) => setUser({ ...user, name: e.target.value })}
//           />
//         </Form.Group>
//         <Form.Group controlId="email" className="mb-3">
//           <Form.Label>Email Address</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//           />
//         </Form.Group>
//         <Button type="submit" variant="dark">
//           {updating ? "Updating" : "Update Profile"}
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default User;
