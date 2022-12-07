import "./App.css";

function App() {
  return (
    //Tailwind is the Key to LEARN FLEX and GRID EASYLY, to it with tailwind and Just check the SNIPPETS
    <div className=" space-y-2 ">
      <div className="flex border-4 border-black justify-between ">
        <h1>
          <i>This is With Tailwind CSS:--</i>
        </h1>
        <div className=" bg-red-500 ">Section 1</div>
        <div className=" bg-green-500 flex-1 ">Section 2</div>
        <div className=" bg-blue-500 ">Section 3</div>
      </div>

      {/* -------------------------------------------------- */}
      {/* With GRID there are Lots of Sections to Display to the USER on One Screen At a Time */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6
      xl:grid-cols-8 border-4 border-red-500 max-w-6xl mx-auto ">
      {/*Use max-w-6xl and mx-auto to Center thr Home Page Body for a good User Experience */}
      <h1>
          <i>This is With CSS Grid:--</i>
        </h1>
        {/*Use GRID for HIGH-LEVEL RESPONSIVE DESIGN */}
        <div className=" bg-yellow-500 ">Section 1</div>
        <div className=" bg-purple-500 ">Section 2</div>
        <div className=" bg-pink-500 ">Section 3</div>
        <div className=" bg-violet-500 ">Section 4</div>
        <div className=" bg-red-500 ">Section 5</div>
        <div className=" bg-blue-500 ">Section 6</div>
        <div className=" bg-lime-500 ">Section 7</div>
        <div className=" bg-purple-500 ">Section 8</div>
        <div className=" bg-pink-500 ">Section 9</div>
        <div className=" bg-yellow-500 ">Section 10</div>
        <div className=" bg-purple-500 ">Section 11</div>
        <div className=" bg-pink-500 ">Section 12</div>
        <div className=" bg-green-500 ">Section 13</div>
      </div>
    </div>
  );
}

export default App;
