import {
  BookText,
  CalendarDays,
  CreditCard,
  GraduationCap,
} from "lucide-react";

export interface StudentSidebarProps {
  menuItems: {
    title: string;
    tooltip: string;
    href: string;
    icon: React.ReactNode;
  }[];
}

export interface ProfileData {
  name: string;
  id: string;
  href: string;
}

export const ProfileData: ProfileData = {
  name: "ถิรวัฒน์ พงศ์ปฏิสนธิพงศ์ปฏิสนธิ",
  id: "6410450958",
  href: "/pages/student/profile",
};

export const StudentSidebarData: StudentSidebarProps = {
  menuItems: [
    {
      title: "ตารางเรียน",
      tooltip: "schedule",
      href: "/pages/student/schedule",
      icon: (
        <CalendarDays
          style={{ width: "2.5rem", height: "2.5rem" }}
          className="text-[#0C2943]"
        />
      ),
    },
    {
      title: "ตรวจสอบผลการเรียน",
      tooltip: "grade",
      href: "/pages/student/grade",
      icon: (
        <GraduationCap
          style={{ width: "2.5rem", height: "2.5rem" }}
          className="text-[#0C2943]"
        />
      ),
    },
    {
      title: "สถานะการชำระเงิน",
      tooltip: "payment",
      href: "/payment",
      icon: (
        <CreditCard
          style={{ width: "2.5rem", height: "2.5rem" }}
          className="text-[#0C2943]"
        />
      ),
    },
    {
      title: "ประวัตินิสิต",
      tooltip: "profile",
      href: "/pages/student/profile",
      icon: (
        <BookText
          style={{ width: "2.5rem", height: "2.5rem" }}
          className="text-[#0C2943]"
        />
      ),
    },
  ],
};
