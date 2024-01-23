import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles'
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import kubernetes from '../assets/kubernetes-logo.png';
import gap from '../assets/br-logo.png';
import fulbright from '../assets/fulbright-logo.png'

const experiences = [
    {
      title: "Software Engineer",
      company_name: "InKubator (OSLabs)",
      icon: kubernetes,
      iconBg: "#383E56",
      date: "August 2023 - current",
      points: [
        "An open-source desktop app for developers working with Kubernetes backed by tech accelerator OSLabs",
        "Currently designing, developing, and maintaining the frontend using React, Material UI and other related technologies",
      ],
    },
    {
        title: "Website Admin, Teacher, Scholar",
        company_name: "U.S. Fulbright International Grant Program",
        icon: fulbright,
        iconBg: "white",
        date: "January 2022 - April 2023",
        points: [
          "Received funding by the U.S. State Department to teach English and study Korean in an under-serviced community",
          "Redesigned and maintained the website for Infusion, Fulbright's literary magazine",
        ],
      },
      {
        title: "Assistant Site Merchandiser",
        company_name: "Gap, Inc. (Banana Republic)",
        icon: gap,
        iconBg: "white",
        date: "September 2019 - September 2021",
        points: [
          "Delivered a consistently smooth site experience by conducting regular analysis of sales & site KPIs",
          "Collaborated with cross-functional teams including designers, marketing, and buyers",
        ],
      },
];

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    // date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='timeline-icons'
        />
      </div>
    }
  >
    <div className='flex justify-center items-center w-full h-full'>
      <h3 className='timeline-header'>
        {experience.title}
      </h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-${experience.company_name}-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
    <i>{experience.date}</i>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={styles.sectionHeadText}>Work Experience.</h1>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
};

export default SectionWrapper(Experience, "work");