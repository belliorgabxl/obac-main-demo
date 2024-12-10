"use client";

import CardSubject from "@/app/components/card/card-subject";
import React, { useEffect, useState } from "react";
import { TeacherEnrollment } from "@/dto/teacherDto";
import { fetchGetTeacherEnrollmentsByTeacherId } from "@/api/teacher/teacherAPI";
import Link from "next/link";


const getSubjectData = async (
  teacherId: number,
  term: number,
  year: number
) => {
  try {
    const data = fetchGetTeacherEnrollmentsByTeacherId(teacherId, term, year);
    return data;
  } catch (err) {
    console.error("Failed to fetch teacher enroll :", err);
  }
};

export default function SubjectForm() {

  const [subjectCards, setCard] = useState<TeacherEnrollment[]>();
  useEffect(() => {
    getSubjectData(2, 1, 2024).then((item) => {
      setCard(item);
    });
  }, []);

  return (
    <>
      <div className="text-xl px-10 py-5">
        <div className="border-2 py-2 px-5 grid place-items-center border-gray-200 border-dashed">
          {subjectCards && subjectCards.length > 0 ? (
            <div className="lg:w-9/12 sm:w-full md:w-full">
              {subjectCards.map((items) => (
                <Link href={`/pages/teacher/subject/${items.subjectId}_${items.scheduleSubjectId}`} >
                  <CardSubject cardSubjectData={items} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid text-gray-500 text-3xl font-semibold place-items-center py-10">
              ไม่มีวิชาที่สอน
            </div>
          )}
        </div>
      </div>
    </>
  );
}