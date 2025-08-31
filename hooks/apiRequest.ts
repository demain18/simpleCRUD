import { createClient } from "@supabase/supabase-js";

// const key: string = process.env.EXPO_PUBLIC_API_KEY!;
export const supabase = createClient(
  "https://dlfqevhpjinkmluhnxfv.supabase.co",
  //   process.env.EXPO_PUBLIC_API_KEY! <= .env 값 가져오는거 시점이 달라서 그런건지 await이라서 로드시점이 다른지 오류 오지게 나서 임시로 key값 그냥 가져옴
  process.env.EXPO_PUBLIC_API_KEY || ""
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

export interface readPostDto {
  id: number;
  created_at: string;
  uploader: string;
  title: string;
  desc: string;
  imgUri: string;
}

export interface insertPostDto {
  uploader: string;
  title: string;
  desc: string;
  imgUri: string;
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
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  return error ? console.error(error) : (data as []);
};

export const getPost = async (id: string) => {
  const { data, error } = await supabase.from("posts").select("*").eq("id", id);

  return error ? console.error(error) : data;
};

export const insertPost = async (postdata: insertPostDto) => {
  const { data, error } = await supabase.from("posts").insert(postdata);

  return error ? console.error(error) : data;
};
