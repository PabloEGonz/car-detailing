const Form = () => {
  return (
    <div className="flex items-center justify-start bg-black px-5 py-8 rounded shadow-xl hover:shadow-2xl">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="text-4xl font-medium">Contact us</h1>
        <p className="mt-3">Email us at @gmail.com or message us here:</p>
        <form
          action=""
          method="POST"
          className="mt-10"
        >
          <div className="grid gap-6 md::grid-cols-2">
            <div className="relative z-0">
              <input
                type="text"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gold focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gold">
                Your name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gold focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gold">
                Your email
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="number"
                name="phone"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gold focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gold">
                Phone number
              </label>
            </div>
            <div className="relative z-0">
              <label
                className="block tracking-wide text-dark text-sm"
                htmlFor="event-date"
              >
                Schedule Date
              </label>
              <input
                id="event-date"
                className="block w-full text-dark bg-gray rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:outiline-black focus:outline text-gray-800"
                type="date"
                name="date-input"
              />
            </div>
            <div className="relative z-0 md:col-span-2">
              <textarea
                name="message"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-gold focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gold">
                Your message
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 rounded-md bg-gold hover:bg-gold/70 px-10 py-2 text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
