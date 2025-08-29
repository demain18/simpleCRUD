import { createClient } from "@supabase/supabase-js";

// const key: string = process.env.EXPO_PUBLIC_API_KEY!;
const supabase = createClient(
  "https://nghbmduaqcujckucnofm.supabase.co",
  //   process.env.EXPO_PUBLIC_API_KEY! <= .env 값 가져오는거 시점이 달라서 그런건지 await이라서 로드시점이 다른지 오류 오지게 나서 임시로 key값 그냥 가져옴
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5naGJtZHVhcWN1amNrdWNub2ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0NDk5MzIsImV4cCI6MjA3MjAyNTkzMn0.w0C6HMYOGJjO-K1DzX_9avKkktmvLlqHJgaXD4nqn9w"
);

export interface insertUserDataDto {
  username: string;
  email: string;
  password: string;
}

export const getAllUsers = async () => {
  const { data, error } = await supabase.from("users").select("*");

  return error ? console.error(error) : data;
};

export const insertUserData = async (data: insertUserDataDto) => {
  const { error } = await supabase.from("users").insert(data);
};
