import styled from "styled-components";
import Imageslider from "./imgSlider";
import NewDisney from "./newdisney";
import Orignals from "./orignals";
import Recommended from "./recommended";
import Trending from "./trending";
import Viewers from "./viewers";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { onSnapshot, collection, query} from "firebase/firestore";
import db from "../firebase";
import { setMovies } from "../features/movie/movieslice";
import { selectUserName } from "../features/user/userslice";

const Home = (props) =>{
    const dispatch = useDispatch();
    const username =  useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        const q = query(collection(db, "movies"))
        const unsub = onSnapshot(q,(querySnapshot) => {
          querySnapshot.docs.map((doc) => {
            switch (doc.data().type) {
              case "recommend":
                recommends = [...recommends, { id: doc.id, ...doc.data() }];
                break;
    
              case "new":
                newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                break;
    
              case "original":
                originals = [...originals, { id: doc.id, ...doc.data() }];
                break;
    
              case "trending":
                trending = [...trending, { id: doc.id, ...doc.data() }];
                break;
             
                default:return "";
            }
          });
    
          dispatch(
            setMovies({
              recommended: recommends,
              newDisney: newDisneys,
              orignals: originals,
              trending: trending,
            })
          );
        });
      }, [username]);
    return <Container>
        <Imageslider />
        <Viewers />
        <Recommended />
        <NewDisney />
        <Orignals />
        <Trending />
    </Container>
}
const Container =  styled.main`
position: relative;
top: 72px;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
padding: 0 calc(3.5vw + 5px);

&::after{
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
}
`;
export default Home