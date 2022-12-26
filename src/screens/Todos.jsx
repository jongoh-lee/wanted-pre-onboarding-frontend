import { clientPost } from "../api/api";
import { CenterBox } from "../components/shared";

function Todos() {
  const getTodos = async () => {
    try {
      const res = await clientPost.read();
      console.log(res);
    } catch (e) {}
  };
  getTodos();
  return (
    <CenterBox>
      <p onClick={getTodos}>todo List</p>
    </CenterBox>
  );
}

export default Todos;
