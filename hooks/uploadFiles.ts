import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { decode } from "base64-arraybuffer";
import { supabase } from "./apiRequest";

// Supabase 업로드 응답 타입
interface SupabaseStorageUploadResponse {
  data: {
    path: string;
  } | null;
  error: any | null;
}

// `uploadFiles.ts` 파일 내 `uploadImage` 함수 수정
export const uploadImage = async (
  base64Image: string
): Promise<string | null> => {
  if (!base64Image) {
    console.error("Base64 이미지가 없습니다.");
    return null;
  }

  // 데이터 스키마가 포함된 경우를 대비하여 제거하는 코드 추가
  const pureBase64 = base64Image.replace(/^data:image\/\w+;base64,/, "");

  const fileName = `${uuidv4()}.jpeg`;

  try {
    const imageBuffer = decode(pureBase64); // 수정된 변수 사용

    const { data, error }: SupabaseStorageUploadResponse =
      await supabase.storage.from("post_images").upload(fileName, imageBuffer, {
        contentType: "image/jpeg",
      });

    if (error) {
      console.error("이미지 업로드 오류:", error.message);
      return null;
    }

    const { data: publicUrlData } = supabase.storage
      .from("post_images")
      .getPublicUrl(fileName);

    return publicUrlData.publicUrl;
  } catch (err) {
    console.error("알 수 없는 이미지 업로드 오류:", err);
    return null;
  }
};
