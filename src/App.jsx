import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <div className="bg-red-500 sm:bg-black md:bg-green-500 lg:bg-orange-500 xl:bg-yellow-500 2xl:bg-sky-500 h-screen">Hello WORLD</div>
    </>
  );
}

export default App;
