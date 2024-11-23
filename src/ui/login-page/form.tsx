export function Form() {
  return (
    <form className="space-y-4 sm:max-w-full md:w-80">
      <div>
        <label
          htmlFor="username"
          className="block text-left text-gray-700 font-semibold mb-1"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your username"
          //required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-left text-gray-700 font-semibold mb-1"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          //required
        />
      </div>
    </form>
  );
}
