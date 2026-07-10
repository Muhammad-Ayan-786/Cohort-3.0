import { useForm } from "react-hook-form";

const Form = ({ setToggle, setUsers }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      contact: "",
    }
  });

  const formSumbit = (data) => {
    setUsers((prev) => [...prev, { ...data, id: crypto.randomUUID() }]);
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-4">
      <div className="text-center">
        <div className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
          New Member
        </div>
        <h1 className="bg-linear-to-r from-white via-cyan-200 to-fuchsia-200 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl">
          Create your user profile
        </h1>
        <p className="mt-2 text-sm text-slate-300 sm:text-base">
          A stunning form experience that feels as premium as the cards it creates.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(formSumbit)}
        className="w-full rounded-[1.75rem] border border-white/15 bg-slate-950/60 p-4 text-white shadow-[0_20px_80px_rgba(15,23,42,0.45)] backdrop-blur-2xl sm:p-6"
      >
        <div className="grid gap-3">
          <div>
            <input
              {...register("name", {
                required: "Name is required",
                validate: (value) => value.trim() !== "" || "Name cannot be empty or just spaces",
                /*
                pattern: {  // Or Regex
                  value: /^\S.*$/,
                  message: "Black spaces are not allowed"
                }
                */
              })}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
              type="text"
              placeholder="Name"
            />
            {errors.name && <p className="mt-2 text-sm text-rose-300">{errors.name.message}</p>}
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
              className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
              type="email"
              placeholder="Email"
            />
            {errors.email && <p className="mt-2 text-sm text-rose-300">{errors.email.message}</p>}
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
              className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
              type="number"
              placeholder="Mobile"
            />
            {errors.mobile && <p className="mt-2 text-sm text-rose-300">{errors.mobile.message}</p>}
          </div>

          <div>
            <input
              {...register("image", {
                required: "Image is required",
              })}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
              type="url"
              placeholder="Image URL"
            />
            {errors.image && <p className="mt-2 text-sm text-rose-300">{errors.image.message}</p>}
          </div>

          <button className="mt-2 rounded-2xl bg-linear-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(96,165,250,0.35)] transition hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(236,72,153,0.35)]">
            Add user
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;