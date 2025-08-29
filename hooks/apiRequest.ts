// import firestore from "@react-native-firebase/firestore";
// import "@/firebase";

// export interface getAllUsersDto {
//   username: string;
//   email: string;
//   password: string;
// }

// export interface addUserDto {
//   username: string;
//   email: string;
//   password: string;
// }

// export const getAllUsers = async () => {
//   try {
//     const usersCollection = await firestore().collection("clients").get();

//     const usersData: getAllUsersDto[] = usersCollection.docs.map((doc) => {
//       const data = doc.data();
//       return {
//         id: doc.id,
//         username: data.username,
//         email: data.email,
//         password: data.password,
//       } as getAllUsersDto;
//     });

//     return usersData;
//   } catch (error) {
//     console.error("데이터 조회 중 오류가 발생했습니다:", error);
//   }
// };

// export const addUser = async (id: string, userdata: addUserDto) => {
//   try {
//     await firestore().collection("clients").doc(id).set(userdata);
//     console.log(`클라이언트가 ID '${id}'로 성공적으로 추가되었습니다.`);
//     return id;
//   } catch (error) {
//     console.error("클라이언트 추가 중 오류가 발생했습니다:", error);
//     throw error;
//   }
// };
