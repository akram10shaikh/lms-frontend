import React from 'react'
import './homepage.css'
import bulletIcon from './icons/bullet.svg'
import certIcon from './icons/certificate.svg'
import quizIcon from './icons/quiz.svg'
import codeIcon from './icons/code.svg'
import projectIcon from './icons/project.svg'
import completionIcon from './icons/completion.svg'
import deviceIcon from './icons/device.svg'

function Item({title, desc, icon}){
  return (
    <div className="learn-item">
      <div className="learn-icon"><img src={icon || bulletIcon} alt="icon" className="learn-icon-img"/></div>
      <div>
        <div className="learn-item-title">{title}</div>
        <div className="learn-item-desc">{desc}</div>
      </div>
    </div>
  )
}

export default function LearnSection(){
  return (
    <section className="learn-section">
      <div className="learn-inner">
        <h3 className="learn-heading">What you'll learn</h3>

        <div className="learn-grid">
          <Item title="Basic HTML Structure:" desc={`Learn how to structure an HTML document using essential tags like <html>, <head>, and <body>.`} icon={bulletIcon} />
          <Item title="Working with Images and Media:" desc={`Add images to web pages using the <img> tag and control their attributes (size, alt text).`} icon={bulletIcon} />
          <Item title="Text Formatting and Structure:" desc={`Discover how to use tags for formatting text (headings, paragraphs, lists, bold, italics).`} icon={bulletIcon} />
          <Item title="Creating Forms and Input Elements:" desc={`Understand how forms are used to collect user data and how to use basic attributes for form validation.`} icon={bulletIcon} />
          <Item title="Hyperlinks and Navigation:" desc={`Learn how to create links using the <a> (anchor) tag.`} icon={bulletIcon} />
          <Item title="Accessibility and Web Standards:" desc={`Learn the basics of creating accessible web pages by using correct HTML elements and attributes.`} icon={bulletIcon} />
        </div>

        <hr className="learn-sep" />

        <h4 className="includes-heading">This Course Includes</h4>
        <div className="includes-grid">
          <div className="include-item"><div className="include-icon"><img src={certIcon} alt="cert"/></div>Certificate of Achievement</div>
          <div className="include-item"><div className="include-icon"><img src={quizIcon} alt="quiz"/></div>Quiz: Data structure & Algorithms</div>
          <div className="include-item"><div className="include-icon"><img src={codeIcon} alt="code"/></div>Course Code ah483n8c</div>
          <div className="include-item"><div className="include-icon"><img src={projectIcon} alt="project"/></div>Mini Project</div>
          <div className="include-item"><div className="include-icon"><img src={completionIcon} alt="completion"/></div>Certificate of completion</div>
          <div className="include-item"><div className="include-icon"><img src={deviceIcon} alt="device"/></div>Access on mobile and TV</div>
        </div>

        <div className="course-description">
          <h4>Description</h4>
          <p>The Advanced Front-End Programming course sharpens students’ critical thinking, creativity, and analytical skills, empowering them to effectively tackle complex challenges in web development. <a href="#">View More.....</a></p>
        </div>
      </div>
    </section>
  )
}
