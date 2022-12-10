const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center my-5">
        <div className="text-center">
          <h1 className="text-5xl font-bold my-4">
            Welcome to the Tax Calculator
          </h1>
          <p className="text-2xl">Please select country </p>
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-10">
          <div>
            <button className="text-9xl">🇨🇦</button>
          </div>
          <div>
            <button className="text-9xl">🇺🇸</button>
          </div>
          <div>
            <button className="text-9xl">🇩🇪</button>
          </div>
          <div>
            <button className="text-9xl">🇫🇷</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
