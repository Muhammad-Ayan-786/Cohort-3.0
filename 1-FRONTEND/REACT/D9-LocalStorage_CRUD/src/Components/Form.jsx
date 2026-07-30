import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid';

const Form = ({ setToggle, users, setUsers, updatedUser, setUpdatedUser }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updatedUser
  });

  const formSumbit = (data) => {

    if (updatedUser) {
      let currentUser = users.map(val => {
        return val.id === updatedUser.id ? { ...data } : val
      })

      setUsers(currentUser)
      localStorage.setItem("users", JSON.stringify(currentUser));
      setUpdatedUser(null)
    }
    else {
      let arr = [...users, { ...data, id: nanoid() }];

      setUsers(arr);
      localStorage.setItem("users", JSON.stringify(arr));
    }

    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-4">
      <div className="text-center">
        <div className="mb-3 inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-violet-700">
          New Member
        </div>
        <h1 className="bg-linear-to-r from-slate-800 via-violet-700 to-cyan-600 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl">
          Create your user profile
        </h1>
        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          A polished form experience that keeps your team looking sharp.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(formSumbit)}
        className="w-full rounded-[1.75rem] border border-slate-200 bg-white p-4 text-slate-700 shadow-[0_22px_70px_rgba(15,23,42,0.08)] sm:p-6"
      >
        <div className="grid gap-3">
          <div>
            <input
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^\S.*$/,
                  message: "Black spaces are not allowed"
                }
              })}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100"
              type="text"
              placeholder="Name"
            />
            {errors.name && <p className="mt-2 text-sm text-rose-500">{errors.name.message}</p>}
          </div>

          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100"
              type="email"
              placeholder="Email"
            />
            {errors.email && <p className="mt-2 text-sm text-rose-500">{errors.email.message}</p>}
          </div>

          <div>
            <input
              {...register("mobile", {
                required: "Mobile is required",
                minLength: {
                  value: 10,
                  message: "Minimum 10 digits are required",
                },
                maxLength: {
                  value: 10,
                  message: "Maximum 10 digits are required",
                },
              })}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100"
              type="number"
              placeholder="Mobile"
            />
            {errors.mobile && <p className="mt-2 text-sm text-rose-500">{errors.mobile.message}</p>}
          </div>

          <div>
            <input
              {...register("image", {
                required: "Image is required",
              })}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100"
              type="url"
              placeholder="Image URL"
            />
            {errors.image && <p className="mt-2 text-sm text-rose-500">{errors.image.message}</p>}
          </div>

          <button className="mt-2 rounded-2xl bg-linear-to-r from-violet-600 via-indigo-500 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.22)] transition hover:-translate-y-0.5">
            Add user
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;