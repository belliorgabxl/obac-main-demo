"use client";
import { TeacherEnrollment } from "@/dto/teacherDto";
import Link from "next/link";
import React from "react";



interface CardSubjectProps {
  cardSubjectData: TeacherEnrollment;
}

export default function CardSubject({ cardSubjectData }: CardSubjectProps) {
  return (
          <div
            className=" border-[1px] hover:border-black border-gray-200 rounded-md my-3 bg-card text-card-foreground w-full hover:bg-gray-50 shadow-md shadow-gray-200 bg-white grid grid-cols-[40%_21%_3%_36%]"
          >
            <div className="ml-5 py-4 ">
              <div className="flex ">
                <div className="text-gray-600">วิชา: &nbsp;<span className="font-semibold text-blue-600">{cardSubjectData.subjectName}</span> </div>
              </div>
              <div className="text-gray-600">รหัสวิชา :&nbsp;<span className="font-semibold text-gray-800">{cardSubjectData.subjectCode}</span></div>

              <div className="text-gray-600">จำนวนนักเรียน :&nbsp;<span className="font-semibold text-gray-800">{cardSubjectData.totalStudent}</span>&nbsp; คน</div>
            </div>

            <div className="py-3 w-11/12">
              <p className="text-center text-gray-600 font-semibold shadow-sm shadow-gray-400 py-1 px-2 bg-[#e4f1f8] rounded-md">ห้องสอน : {cardSubjectData.room}</p>
              <div className={`${ cardSubjectData.day  == "Monday"
                  ? "bg-yellow-200"
                  : cardSubjectData.day == "Tuesday"
                  ? "bg-pink-200"
                  : cardSubjectData.day == "Wednesday"
                  ? "bg-green-300"
                  : cardSubjectData.day == "Thursday"
                  ? "bg-orange-200"
                  : cardSubjectData.day == "Friday"
                  ? "bg-blue-200"
                  : cardSubjectData.day == "Sunday"
                  ? "bg-red-200"
                  : cardSubjectData.day == "Saturday"
                  ? "bg-purple-300"
                  : ""} text-center font-semibold mt-4 shadow-sm shadow-gray-400  py-1 rounded-sm `}>{cardSubjectData.day}</div>
            </div>
            <div className={`${cardSubjectData.subjectStatus==2?'bg-[#D2F9E0]':'bg-[#DBEFFA] h-full w-full'}`}>

            </div>
            <div className={`${cardSubjectData.subjectStatus==2?'bg-[#9AFFBF]':'bg-[#A0DDFD] h-full w-full'} rounded-r-md`}>
                <div className="text-center pt-1 text-lg text-white font-semibold">
                    สถานะคะแนน
                </div>
                <div className=" text-center text-gray-700 text-xl font-semibold py-3">
                    {cardSubjectData.subjectStatus == 1 ? (<p>ยังไม่กรอกคะแนน
                        </p>):cardSubjectData.subjectStatus == 2 ? (
                            <p>กรอกคะแนนเสร็จสิ้น</p>
                        ) :(<p>ยังไม่ทราบผล</p>)}
                </div>
                <div className="text-center text-black font-semibold">
                    ปีการศึกษา 1/2567
                </div>
            </div>
          </div>
  );
}
