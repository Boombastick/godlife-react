import { useState } from "react";
import login from "@/services/authService.js";

const useLogin = async (provider) => {
  try {
    const res = await login(provider);
  } catch {}
};

export default useLogin;
