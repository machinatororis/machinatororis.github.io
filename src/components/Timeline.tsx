import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Dnipro / Remote</h4>
            <p>
              Frontend Development, Content Integration, Corporate Websites, CMS
            </p>
            <p>
              Maintaining and extending corporate websites (QuData, Absolutist), implementing new features and updating content. Working closely with designers and marketing teams.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI/ML Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Dnipro / Remote</h4>
            <p>
              Chatbot Development, NLP, Open-Source LLMs, Assistant API Integration
            </p>
            <p>
              Created and customized intelligent assistants using RASA and OpenAI tools. Focused on conversational NLP, dialogue logic, and domain-specific tuning.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Game Developer / Port Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Dnipro</h4>
            <p>
              Flash to HTML5 Porting, Game Logic, Cross-Platform Adaptation
            </p>
            <p>
              Worked on game mechanics and tools in Lua, TypeScript and ActionScript. Ported Flash games to HTML5 for modern platforms.
            </p>
            
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;