import React, { useState } from 'react'
import './homepage.css'

function AccordionItem({title, children}){
  const [open, setOpen] = useState(false)
  return (
    <div className={`cm-item ${open? 'open':''}`}>
      <button className="cm-summary" onClick={() => setOpen(!open)}>
        <div className="cm-left">
          <span className="cm-icon">📄</span>
          <span>{title}</span>
        </div>
        <div className="cm-right">{open? '▴':'▾'}</div>
      </button>

      <div className="cm-panel" style={{display: open? 'block':'none'}}>
        {children}
      </div>
    </div>
  )
}

export default function CourseMaterial(){
  return (
    <section className="course-materials">
      <div className="cm-inner">
        <h3 className="cm-heading">Course Materials</h3>

        <AccordionItem title="HTML and CSS Basics">
          <div className="cm-panel-inner">
            <a className="cm-link">Web Developing</a>
            <h4>Course Details</h4>
            <p>
              Hypertext Markup Language (HTML) is the foundation of website and web application development. It allows you to ensure that your content is understood by both segments of your audience: the people who watch, read, or listen to your content, and the computers that display it. In this course, learn how to craft excellent HTML with the pieces that HTML itself has to offer. Instructor Jen Simmons highlights all of the fundamental concepts you need to use HTML thoughtfully. She focuses on semantic markup: tagging content as what it is, and not just for formatting, convention, or convenience.
            </p>
          </div>
        </AccordionItem>

        <AccordionItem title="JavaScript & DOM">
          <div className="cm-panel-inner">More content about JavaScript & DOM</div>
        </AccordionItem>

        <AccordionItem title="Responsive Design">
          <div className="cm-panel-inner">Responsive design lessons and resources</div>
        </AccordionItem>

        <AccordionItem title="Advanced JavaScript">
          <div className="cm-panel-inner">Advanced JS modules, patterns, and performance</div>
        </AccordionItem>

        <AccordionItem title="Assignments">
          <div className="cm-panel-inner">Assignment list and submission instructions</div>
        </AccordionItem>

        <AccordionItem title="React UI Building">
          <div className="cm-panel-inner">React component lessons and UI practices</div>
        </AccordionItem>
      </div>
    </section>
  )
}
