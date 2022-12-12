import { PROVINCE } from './constants/province';

const Canada = () => {
  return (
    <div>
      <div className="flex justify-center items-center my-5">
        <div className="text-center">
          <h1 className="text-5xl font-bold my-4">Canada Tax</h1>
        </div>
      </div>
      <div className="flex justify-center items-center my-5">
        <input
          type="text"
          placeholder="Enter your salary"
          className="w-72 h-10 border-2 border-blue-300 rounded bg-white p-2 text-base font-semibold outline-0 focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="flex justify-center items-center my-5">
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
          <select
            id="countries"
            className="p-2 bg-white w-72 h-10 border-2 border-blue-300 text-base rounded focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a province</option>
            {PROVINCE.map((province) => (
              <option value={province.value}>{province.title}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Canada;
