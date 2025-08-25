import { AiFillBulb } from "react-icons/ai";
function Header() {
  return (
    <div className="py-4 p-12  border-b-2 bg-violet-200  border-gray-700 flex justify-around items-center ml-90 w-294">
      <h1 className="text-4xl ">Todo-app</h1>
      <p className="flex justify-center items-center gap-2">
        Finish your Tasks with Awesome Todo-App <AiFillBulb />
      </p>
      <h4 className="text-4xl">Focus on Task</h4>
    </div>
  );
}

export default Header;
