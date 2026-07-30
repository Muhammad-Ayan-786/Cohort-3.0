import { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });
  const [updatedUser, setUpdatedUser] = useState(null);

  const deleteUser = (id) => {
    let arr = users.filter((user) => user.id !== id);
    setUsers(arr);
    localStorage.setItem("users", JSON.stringify(arr));
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#f8fbff_0%,#eef4ff_35%,#fdf2f8_100%)] p-3 text-slate-700 sm:p-5 lg:p-6">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-4">
        <Navbar setToggle={setToggle} />

        {toggle ? (
          <div className="flex flex-1 items-start justify-center py-4 sm:py-6">
            <div className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3">
              {users.map((elem, idx) => {
                return (
                  <Usercard
                    setUpdatedUser={setUpdatedUser}
                    key={idx}
                    user={elem}
                    setToggle={setToggle}
                    deleteUser={deleteUser}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center py-4 sm:py-8">
            <Form
              users={users}
              setUsers={setUsers}
              setToggle={setToggle}
              updatedUser={updatedUser}
              setUpdatedUser={setUpdatedUser}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;