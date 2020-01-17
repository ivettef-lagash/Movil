import { createActions } from "reduxsauce";

const { Types, Creators } = createActions(
  {
    setRanking: ["index"]
  },
  {
    prefix: "MATCH/"
  }
);
const { setRanking } = Creators;

const { SET_RANKING } = Types;

export { Types, setRanking, SET_RANKING };
export default Creators;
