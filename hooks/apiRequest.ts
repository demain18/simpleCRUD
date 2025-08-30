import { createClient } from "@supabase/supabase-js";

// const key: string = process.env.EXPO_PUBLIC_API_KEY!;
const supabase = createClient(
  "https://dlfqevhpjinkmluhnxfv.supabase.co",
  //   process.env.EXPO_PUBLIC_API_KEY! <= .env 값 가져오는거 시점이 달라서 그런건지 await이라서 로드시점이 다른지 오류 오지게 나서 임시로 key값 그냥 가져옴
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsZnFldmhwamlua21sdWhueGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0NzIyNDAsImV4cCI6MjA3MjA0ODI0MH0.rzHslwRFJmZWuXIwDiYv8qEtQG_4KJw-w7GljeWZGR0"
);

export interface insertUserDto {
  username: string;
  email: string;
  password: string;
}

export interface checkUserExistDto {
  username: string;
  password: string;
}

export interface postDataDto {
  id: number;
  created_at: string;
  uploader: string;
  title: string;
  desc: string;
}

export const getAllUsers = async () => {
  const { data, error } = await supabase.from("users").select("*");

  return error ? console.error(error) : (data as []);
};

export const insertUserData = async (userdata: insertUserDto) => {
  const { data, error } = await supabase.from("users").insert(userdata);

  return error ? console.error(error) : data;
};

export const checkUserExist = async (loginData: checkUserExistDto) => {
  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("username", loginData.username)
    .eq("password", loginData.password);

  return error ? console.error(error) : (data as []);
};

export const getAllPosts = async () => {
  const { data, error } = await supabase.from("posts").select("*");

  return error ? console.error(error) : (data as []);
};

export const getPost = async (id: string) => {
  const { data, error } = await supabase.from("posts").select("*").eq("id", id);

  return error ? console.error(error) : data;
};
