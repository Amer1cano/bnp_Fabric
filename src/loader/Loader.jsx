import {  RotatingLines } from "react-loader-spinner"


const Loader = () => {
  return (
    <div className="flex items-center justify-center max-h-screen mt-36">
        <div className="">
        <RotatingLines
  visible={true}
  height="15rem"
  width="15rem"
  color="grey"
  strokeWidth="5"
  animationDuration="1"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div>
 

    </div>
  )
}

export default Loader