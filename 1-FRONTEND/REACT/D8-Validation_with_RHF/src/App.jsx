import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.25),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#111827_45%,_#0f172a_100%)] p-3 text-slate-100 sm:p-5 lg:p-6">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-4">
        <Navbar setToggle={setToggle} />

        {toggle ? (
          <div className="flex flex-1 items-start justify-center py-6">
            <div className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3">
              {users.map((elem, idx) => {
                return <Usercard key={idx} user={elem} setToggle={setToggle} deleteUser={deleteUser} />;
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center py-8">
            <Form setUsers={setUsers} setToggle={setToggle} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;