import Navbar from "./components/Navbar/Navbar";
import LeftSideBar from "./components/Sidebar/LeftSideBar";
import RightSidebar from "./components/Sidebar/RightSidebar";

// i want to here show navbar up, sidebar left, sidebar right, footer bottom and main content in the center

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        {/* Left sidebar */}
        <LeftSideBar />

        {/* Main content area */}
        <main className="flex-1 p-4  bg-emerald-500">Main Content</main>

        {/* Right sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
