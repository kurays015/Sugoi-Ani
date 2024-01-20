import { useToast } from "@chakra-ui/react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { setCookies } from "./useCookies";
import { useGetAnimeDataInLocalStorage } from "./useLocalStorage";
import axios from "axios";

export default function useGoogleCredentials() {
  const navigate = useNavigate();
  const toast = useToast();
  const anime = useGetAnimeDataInLocalStorage();

  const googleLogin = useGoogleLogin({
    onSuccess: async res => {
      setCookies("googleUser", res.access_token);
      await axios.post(`${import.meta.env.VITE_BACKEND_GOOGLE}`, {
        access_token: res.access_token,
      });
      navigate(`/watch/${anime.episodes[0]?.id}`);
      // window.location.reload();
    },
    onError: () => {
      toast({
        title: "Something went wrong.",
        status: "error",
        isClosable: true,
        duration: 4000,
      });
    },
  });
  return googleLogin;
}
