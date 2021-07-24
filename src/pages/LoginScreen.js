import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UseAuthLogin from '../hooks/useAuthLogin';

const LoginScreen = () => {

  const urlBase = "https://api-sandbox.elcomercio.pe";
  const urlSDK = "https://arc-subs-sdk.s3.amazonaws.com/prod/sdk-identity.min.js";

  const history =  useHistory();

  const [isLogged, setIsLogged] = useState(false);

  //==============================================================//

  useEffect(() => {
    const sdkIdentity = document.createElement("script");
    sdkIdentity.src = urlSDK;

    sdkIdentity.onload = function () {
      window.Identity.apiOrigin = urlBase;

      window.Identity.isLoggedIn()
        .then((res) => {
          console.log("está logueado?:", res);
          if (res === true) {
            setIsLogged(true);
          } else {
            setIsLogged(false);
          }
        })
        .catch((err) => {
          console.log("Ocurrió un error al ejecutar", err);
          setIsLogged(false);
        });
    };

    document.body.appendChild(sdkIdentity);
  }, []);

  //==============================================================//

  const handleLogged = () => {
    if(isLogged){
    history.replace('/')
    }
  }

//   const init = () => {
//     return JSON.parse(localStorage.getItem('ArcId.USER_INFO')) || {
//         logged: false
//     }
//   }

  // en caso el usuario se registre o logue
//   const handleLogged = () => {

//     window.Identity.isLoggedIn()
//       .then((res) => {

//         console.log(res);

//         if (res === true) {
//           setIsLogged(true);
//           dispatch({
//               type: types.login,
//               payload: {
//                   message: 'Bienvenido'
//               }
//           });

//         } else {
//           setIsLogged(false);
//         }
//       })
//       .catch((err) => {
//         console.log("Ocurrió un error al ejecutar", err);
//         setIsLogged(false);
//       });
//   };
  //==============================================================//
  return (
    <>
        <UseAuthLogin handleLogged={handleLogged}/>
        <div className="form-group">
            <p>
            Aún no registrado?{" "}
            <a id="showRegister" href="/#">
                Regístrate!
            </a>
            </p>
        </div>
    </>
  );
}

export default LoginScreen;