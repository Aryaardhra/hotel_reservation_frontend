import "./featured.css";
import useFetch from "../../hooks/useFetch";
import LoadingIcon from "../loadingIcon/LoadingIcon";

const Featured = () => {

  const { data, loading, error } = useFetch("/hotels/countByCity?cities=Tokyo,Paris,Hong Kong"); 
 // console.log(data);
  return (
    <>
    <div className="featured">
      { loading ? (
        <LoadingIcon />
      ):(
        <>
      <div className="featuredItem">
        <img
          src="https://i.ibb.co/9VJTg65/dreamnight-2.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Tokyo</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://i.ibb.co/0fhMpyW/forname.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Paris</h1>
          <h2>{ data[1] } properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://i.ibb.co/16RWY0j/forname-2.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hong Kong</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      </>
      )
      }
    </div>
    </>
  )
}

export default Featured;