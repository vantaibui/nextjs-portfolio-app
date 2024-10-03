"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { FaAngular, FaBootstrap, FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus, cum nihil magnam expedita quidem vel, suscipit laboriosam voluptates in tempora velit est quisquam veritatis, mollitia rerum! Eaque, repellendus hic!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tai Bui",
    },
    {
      fieldName: "Phone",
      fieldValue: "+84968367953",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ years",
    },
    {
      fieldName: "Skype",
      fieldValue: "live:.cid.968b36ff7f26bb3a",
    },
    {
      fieldName: "Email",
      fieldValue: "vantaibui92@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Vietnamese",
    },
  ],
};

const experience = {
  icon: "/assets/images/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus, cum nihil magnam expedita quidem vel, suscipit laboriosam voluptates in tempora velit est quisquam veritatis, mollitia rerum! Eaque, repellendus hic!",
  items: [
    {
      company: "TMA Solution",
      position: "Frontend Developer",
      dururation: "2022 - Persent",
    },
    {
      company: "TMA Solution",
      position: "Frontend Developer",
      dururation: "2022 - Persent",
    },
    {
      company: "TMA Solution",
      position: "Frontend Developer",
      dururation: "2022 - Persent",
    },
    {
      company: "TMA Solution",
      position: "Frontend Developer",
      dururation: "2022 - Persent",
    },
    {
      company: "TMA Solution",
      position: "Frontend Developer",
      dururation: "2022 - Persent",
    },
    {
      company: "TMA Solution",
      position: "Frontend Developer",
      dururation: "2022 - Persent",
    },
    {
      company: "TMA Solution",
      position: "Frontend Developer",
      dururation: "2022 - Persent",
    },
    {
      company: "TMA Solution",
      position: "Frontend Developer",
      dururation: "2022 - Persent",
    },
    {
      company: "TMA Solution",
      position: "Frontend Developer",
      dururation: "2022 - Persent",
    },
  ],
};

const education = {
  icon: "/assets/images/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus, cum nihil magnam expedita quidem vel, suscipit laboriosam voluptates in tempora velit est quisquam veritatis, mollitia rerum! Eaque, repellendus hic!",
  items: [
    {
      institution: "Nong Lam University",
      major: "Software Enginner",
      dururation: "2017 - 2022",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus, cum nihil magnam expedita quidem vel, suscipit laboriosam voluptates in tempora velit est quisquam veritatis, mollitia rerum! Eaque, repellendus hic!",
  items: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "Css3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaAngular />,
      name: "angular",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "angular",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        key={index}
                      >
                        <span className="text-accent">{item.dururation}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        key={index}
                      >
                        <span className="text-accent">{item.dururation}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.major}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.items.map((item, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li className="flex items-center justify-center xl;justify-start gap-4" key={index}>
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-white/60">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
