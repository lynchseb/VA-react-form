import { useState } from "react";

export default function useApplicationData() {

  //Default state values
  const [state, setState ] = useState({
    avatar : "https://bootdey.com/img/Content/avatar/avatar7.png",
    name : {
      first: "Sebastian",
      last: "Lynch",
     
    },
    address : {
      street: "22 Wellesley Street East",
      city: "Toronto",
      country: "Canada",
      province: "Ontario",
      postal: "M4Y 1G3"
    },
    contact : {
      phone: "416-301-6900",
      email: "lynchseb@gmail.com",
      website: "https://github.com/lynchseb"
    },
    about: "Full stack, junior web developer who loves the Maple Leafs."
  })

  // useEffect(() => {
  //   let chosen = Math.floor(Math.random() * Math.floor(10))
  //   const newState = {
  //     ...state, avatar : avatars[chosen]
  //   }
  //   setState(newState)
  // },[state.name])

  //   const avatars =  ["https://i.imgur.com/nlhLi3I.png","https://i.imgur.com/z5LNkkB.png","https://i.imgur.com/v0JXau2.png","https://i.imgur.com/lRUnDgU.png", "https://i.imgur.com/3GvwNBf.png", "https://i.imgur.com/73hZDYK.png","https://i.imgur.com/5fUVPRP.png","https://i.imgur.com/DVpDmdR.png","https://i.imgur.com/2WZtOD6.png", "https://i.imgur.com/ilT4JDe.png"]

  const setAccountInfo = function(_state){
    const newState = {
      ..._state, 
    }
    setState(newState)
  }
  return {state, setAccountInfo}
}

