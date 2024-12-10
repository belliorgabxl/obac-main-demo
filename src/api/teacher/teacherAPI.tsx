import { GetAllTeacher ,GetTeacherByTeacherId, TeacherEnrollment} from "@/dto/teacherDto";

export const fetchGetAllTeacherAsync = async (): Promise<GetAllTeacher[]> => {
  try {
    const response = await fetch(
      `http://localhost:5111/api/Teacher/GetAllTeacher`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch teacher data");
    }
    const text = await response.text();
    const json = JSON.parse(text);
    const data:GetAllTeacher[] = json.data;
    return data;
  } catch (err) {
    console.error("Error fetching teacher data:", err);
    throw err;
  }
};
export const fetchGetTeacherByTeacherIdAsync = async (
  id : number
): Promise<GetTeacherByTeacherId> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_V1}/api/Teacher/GetTeacherByTeacherId?teacherId=${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to get teacher data");
    }
    const text = await response.text();
    const json = JSON.parse(text);
    const data:GetTeacherByTeacherId = json.data;
    return data
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

export const fetchGetTeacherEnrollmentsByTeacherId = async (
    teacherId : number, term : number , year : number
  ): Promise<TeacherEnrollment[]> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL_V1}/api/Teacher/GetTeacherEnrollmentsByTeacherId?teacherId=${teacherId}&term=${term}&year=${year}`
      );
      if (!response.ok) {
        throw new Error("Failed to get teacher enrollment data");
      }
      const text = await response.text();
      const json = JSON.parse(text);
      const data:TeacherEnrollment[] = json.data;
      return data
    } catch (err) {
      console.error("Error:", err);
      throw err;
    }
  };

// ${process.env.NEXT_PUBLIC_API_BASE_URL}/api/