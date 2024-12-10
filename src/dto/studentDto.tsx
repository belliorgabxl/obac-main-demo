export interface StudentCreateData {
  userName: string;
  password: string;
  firstName: string; // /
  lastName: string; // /
  thaiName: string; // /
  thaiLastName: string; // /
  gender: string; // /
  studentGroupId: number; // 1
  studentCode: string; // null
  thaiId: string; // /
  email: string; // /
  phoneNumber: string; // /
  address: string;
  nationality: string;
  religion: string;
  class: string; // null
  enrollYear: number; // หลังบ้านทำให้ได้
  currentYear: number; // null
  graduateYear: number; // null
  currentRoom: string; // null
  programId: number;
  facultyId: number;
  birthDate: Date; // /
}
