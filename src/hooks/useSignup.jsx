import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { removeEmailDomain } from "../utils/removeEmailDomain";

export default function useSignUp() {
  const navigate = useNavigate();
  const toast = useToast();
  return useMutation({
    mutationFn: async credentials =>
      await axios.post(`${import.meta.env.VITE_BACKEND_SIGNUP}`, credentials),
    onSuccess: ({ data: credentials }) => {
      navigate("/");
      Cookies.set("user", JSON.stringify(credentials), { expires: 7 });
      toast({
        title: `Welcome ${removeEmailDomain(credentials?.email)} and enjoy! -christ`,
        status: "success",
        isClosable: true,
        duration: 2000,
      });
    },
  });
}
