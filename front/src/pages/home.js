import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Row,
  Col,
  Timeline,
  Tag,
  Space,
  Button,
  Upload,
  message,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ArrowRightOutlined,
  CameraOutlined,
  DeleteOutlined,
  UserOutlined,
  ReadOutlined,
  MedicineBoxOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  LaptopOutlined,
  HeartOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import "../App.css";

// This is your default headshot, used until you upload a different one from
// the page itself. It must exist at this exact path for the build to succeed
// — bundlers resolve imports at build time, so this can't be made "optional"
// with a try/catch. If you don't have a photo saved yet, delete this import
// line and set DEFAULT_PHOTO to null below; the hero will show a placeholder
// icon until you upload one via the camera button.
import DEFAULT_PHOTO from "../assets/images/annie.jpeg";

const { Title, Paragraph } = Typography;
const PHOTO_STORAGE_KEY = "anm_profile_photo";

/* ---------------------------------------------------------------
   Small shared pieces — kept local to this file on purpose so the
   whole page lives in one component.
   --------------------------------------------------------------- */

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="anm-section-head"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="anm-eyebrow">{eyebrow}</span>
      <Title level={2} className="anm-display">
        {title}
      </Title>
      {description && (
        <Paragraph
          className="anm-muted"
          style={{ fontSize: 15.5, marginTop: 10 }}
        >
          {description}
        </Paragraph>
      )}
    </motion.div>
  );
}

function ProfilePhoto() {
  const [photo, setPhoto] = useState(DEFAULT_PHOTO);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(PHOTO_STORAGE_KEY);
      if (saved) setPhoto(saved);
    } catch (e) {
      // localStorage unavailable — keep whatever default we already have
    }
  }, []);

  const beforeUpload = (file) => {
    if (!file.type.startsWith("image/")) {
      message.error("Please choose an image file (JPG, PNG or WEBP).");
      return false;
    }
    if (file.size / 1024 / 1024 >= 5) {
      message.error("Image must be smaller than 5MB.");
      return false;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(reader.result);
      try {
        window.localStorage.setItem(PHOTO_STORAGE_KEY, reader.result);
      } catch (e) {
        /* storage full or unavailable — photo still shows for this session */
      }
      message.success("Profile photo updated.");
    };
    reader.readAsDataURL(file);
    return false; // we handle the read ourselves, skip antd's default upload
  };

  const removePhoto = (e) => {
    e.stopPropagation();
    setPhoto(DEFAULT_PHOTO);
    try {
      window.localStorage.removeItem(PHOTO_STORAGE_KEY);
    } catch (err) {
      /* no-op */
    }
  };

  return (
    <div className="anm-photo-wrap">
      <div className="anm-photo-ring" />
      <div className="anm-photo-frame">
        {photo ? (
          <img src={photo} alt="Ann Njeri Maina" />
        ) : (
          <UserOutlined className="anm-photo-placeholder" />
        )}
      </div>

      <Upload
        accept="image/*"
        showUploadList={false}
        beforeUpload={beforeUpload}
      >
        <Button
          shape="circle"
          icon={<CameraOutlined />}
          className="anm-photo-edit"
          aria-label="Upload profile photo"
        />
      </Upload>

      {photo && photo !== DEFAULT_PHOTO && (
        <Button
          shape="circle"
          size="small"
          danger
          icon={<DeleteOutlined />}
          className="anm-photo-remove"
          onClick={removePhoto}
          aria-label="Remove uploaded photo"
        />
      )}
    </div>
  );
}

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ---------------------------------------------------------------
   Content — grounded in the resume, no invented duties or metrics.
   --------------------------------------------------------------- */

const JOURNEY = [
  {
    title: "Volunteer — African Women Development Network (AWDN)",
    period: "June 2025 — Present",
    body: "Supporting community outreach programmes for widows and orphans, contributing to counselling and awareness sessions on women's empowerment, and helping with blog and proposal writing for AWDN's advocacy work.",
  },
  {
    title: "Attachment — Ministry of Interior & National Administration",
    period: "May — Aug 2024",
    body: "Probation and Aftercare Services, Ruiru. Conducted interviews and social inquiries, maintained confidential case records, and prepared reports for decision-making.",
  },
  {
    title: "Attachment — Ministry of Labour",
    period: "May — Aug 2023",
    body: "State Department of Children's Services, Kigumo. Maintained confidential records, prepared official documentation, and coordinated meetings with stakeholders.",
  },
  {
    title: "Volunteer — AVSI Foundation",
    period: "Sep 2023 — Jan 2024",
    body: "Supported the DREAMS project's work to reduce HIV/AIDS vulnerability among adolescent girls through community engagement.",
  },
];

const SKILL_GROUPS = [
  {
    icon: <TeamOutlined />,
    title: "Human Resources",
    skills: [
      "Interviewing",
      "Records Management",
      "Report Writing",
      "Stakeholder Communication",
      "Customer Service",
    ],
  },
  {
    icon: <LaptopOutlined />,
    title: "Administrative",
    skills: [
      "Microsoft Office",
      "Data Entry",
      "Meeting Coordination",
      "Information Management",
      "Planning & Organising",
    ],
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Professional Values",
    skills: [
      "Integrity",
      "Empathy",
      "Teamwork",
      "Accountability",
      "Continuous Learning",
    ],
  },
];

/* =================================================================
   HOME
   ================================================================= */

function Home() {
  return (
    <div>
      {/* ---------------- HERO ---------------- */}
      <section id="hero" className="anm-hero">
        <div className="anm-hero-inner">
          <motion.div
            className="anm-hero-text"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="anm-hero-eyebrow">
              Sociology Graduate · Aspiring HR Professional
            </div>
            <Title level={1} className="anm-display anm-hero-name">
              Ann Njeri Maina
            </Title>
            <div className="anm-hero-role">
              Human Resources &amp; Community Development
            </div>
            <p className="anm-hero-tagline">
              Building strong communities through people-centred solutions,
              effective communication, and continuous learning.
            </p>

            <div className="anm-hero-contacts" style={{ marginBottom: 28 }}>
              <span className="anm-pill">
                <EnvironmentOutlined /> Nairobi, Kenya
              </span>
              <span className="anm-pill">
                <MailOutlined />
                <a href="mailto:annienje442@gmail.com">annienje442@gmail.com</a>
              </span>
              <span className="anm-pill">
                <PhoneOutlined />
                <a href="tel:+254728967802">+254 728 967 802</a>
              </span>
            </div>

            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <ProfilePhoto />
          </motion.div>
        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="anm-section anm-section-white">
        <div className="anm-section-inner">
          <SectionHeading
            eyebrow="About Me"
            title="A people-first approach to professional life"
          />
          <Row gutter={[48, 32]}>
            <Col xs={24} md={14}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <Paragraph
                  style={{ fontSize: 16, lineHeight: 1.8, color: "#2c333a" }}
                >
                  I am a Sociology graduate from Multimedia University of Kenya
                  with practical experience gained through government
                  attachments and community-based organisations. This background
                  has equipped me with strong skills in interviewing, records
                  management, report writing, stakeholder engagement, and
                  community outreach — all while maintaining the confidentiality
                  and professionalism that sensitive work demands.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 16, lineHeight: 1.8, color: "#2c333a" }}
                >
                  I am drawn to Human Resources because I enjoy working with
                  people, understanding their needs, and contributing to
                  environments where individuals and organisations grow
                  together. I believe in professionalism, integrity, empathy,
                  and lifelong learning.
                </Paragraph>
              </motion.div>
            </Col>
            <Col xs={24} md={10}>
              <motion.div
                className="anm-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  background: "var(--anm-paper)",
                  borderColor: "transparent",
                }}
              >
                <Title
                  level={4}
                  className="anm-display"
                  style={{ marginTop: 0 }}
                >
                  Career Objective
                </Title>
                <Paragraph
                  style={{
                    color: "#42494f",
                    fontSize: 14.5,
                    lineHeight: 1.75,
                    marginBottom: 0,
                  }}
                >
                  To begin my career in Human Resources, applying my
                  communication, interviewing, organisational, and
                  people-management skills to attract and recruit top talent
                  while contributing to organisational growth.
                </Paragraph>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>

      {/* ---------------- JOURNEY: experience timeline + education ---------------- */}
      <section id="journey" className="anm-section anm-section-paper">
        <div className="anm-section-inner">
          <SectionHeading
            eyebrow="Career Journey"
            title="Hands-on experience in people-facing roles"
            description="Government attachments and volunteer work where confidentiality, accuracy, and clear communication mattered most."
          />
          <Row gutter={[40, 32]}>
            <Col xs={24} md={13}>
              <motion.div
                className="anm-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45 }}
              >
                <h4 style={{ marginBottom: 18 }}>Professional Experience</h4>
                <Timeline
                  className="anm-timeline"
                  items={JOURNEY.map((step) => ({
                    children: (
                      <div className="anm-timeline-content">
                        <div className="anm-timeline-date">{step.period}</div>
                        <h4>{step.title}</h4>
                        <p>{step.body}</p>
                      </div>
                    ),
                  }))}
                />
              </motion.div>
            </Col>

            <Col xs={24} md={11}>
              <Space direction="vertical" size={20} style={{ width: "100%" }}>
                <motion.div
                  className="anm-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                >
                  <div className="anm-card-icon">
                    <ReadOutlined />
                  </div>
                  <h4>Education</h4>
                  <p style={{ marginBottom: 10 }}>
                    <strong style={{ color: "var(--anm-ink)" }}>
                      Multimedia University of Kenya
                    </strong>
                    <br />
                    Bachelor of Arts in Sociology — Second Class Upper Division
                    <br />
                    2020 – 2024
                  </p>
                  <p>
                    <strong style={{ color: "var(--anm-ink)" }}>
                      Nyandarua High School
                    </strong>
                    <br />
                    Kenya Certificate of Secondary Education, 2016 – 2019
                  </p>
                </motion.div>

                <motion.div
                  className="anm-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: 0.16 }}
                >
                  <div className="anm-card-icon">
                    <MedicineBoxOutlined />
                  </div>
                  <h4>Certifications &amp; Training</h4>
                  <p style={{ marginBottom: 10 }}>
                    <strong style={{ color: "var(--anm-ink)" }}>
                      International Youth Fellowship Academy
                    </strong>
                    <br />
                    Paramedics Programme · Aug – Dec 2025
                  </p>
                  <p style={{ marginBottom: 10 }}>
                    <strong style={{ color: "var(--anm-ink)" }}>
                      Kenya Institute of Business and Counselling Studies
                    </strong>
                    <br />
                    Aug – Sep 2022
                  </p>
                  <Space wrap size={[8, 8]}>
                    <Tag className="anm-skill-tag">
                      Trauma &amp; Psychological First Aid
                    </Tag>
                    <Tag className="anm-skill-tag">
                      Depression &amp; Suicide Counselling
                    </Tag>
                  </Space>
                </motion.div>
              </Space>
            </Col>
          </Row>
        </div>
      </section>

      {/* ---------------- SKILLS & VALUES ---------------- */}
      <section id="skills" className="anm-section anm-section-white">
        <div className="anm-section-inner">
          <SectionHeading
            eyebrow="Capabilities"
            title="Skills &amp; values guiding my work"
          />
          <Row gutter={[24, 24]}>
            {SKILL_GROUPS.map((group, i) => (
              <Col xs={24} sm={8} key={group.title}>
                <motion.div
                  className="anm-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <div className="anm-card-icon">{group.icon}</div>
                  <h4>{group.title}</h4>
                  <div>
                    {group.skills.map((s) => (
                      <Tag key={s} className="anm-skill-tag">
                        {s}
                      </Tag>
                    ))}
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>

          <Row gutter={[20, 20]} style={{ marginTop: 8 }}>
            {[
              {
                icon: <HeartOutlined />,
                title: "Empathy",
                body: "Understanding people and responding to their needs with compassion.",
              },
              {
                icon: <TeamOutlined />,
                title: "Teamwork",
                body: "Collaborating effectively with colleagues and communities.",
              },
              {
                icon: <RiseOutlined />,
                title: "Continuous Learning",
                body: "Always seeking opportunities to grow my knowledge and skills.",
              },
            ].map((v, i) => (
              <Col xs={24} sm={8} key={v.title}>
                <motion.div
                  className="anm-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  style={{
                    background: "var(--anm-paper)",
                    borderColor: "transparent",
                  }}
                >
                  <div className="anm-card-icon">{v.icon}</div>
                  <h4>{v.title}</h4>
                  <p>{v.body}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="anm-section anm-contact">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="anm-eyebrow"
            style={{ color: "var(--anm-brass-light)" }}
          >
            Let's Connect
          </span>
          <Title level={2} className="anm-display">
            Thank you for visiting
          </Title>
          <p className="anm-contact-sub">
            I look forward to contributing my skills, passion, and commitment to
            an organisation that values professionalism, teamwork, and
            continuous growth. References are available upon request.
          </p>
          <div className="anm-contact-links">
            <span className="anm-pill">
              <MailOutlined />
              <a href="mailto:annienje442@gmail.com">annienje442@gmail.com</a>
            </span>
            <span className="anm-pill">
              <PhoneOutlined />
              <a href="tel:+254728967802">+254 728 967 802</a>
            </span>
            <span className="anm-pill">
              <EnvironmentOutlined /> Nairobi, Kenya
            </span>
          </div>
          <div className="anm-contact-foot">
            © {new Date().getFullYear()} Ann Njeri Maina. Built with care.
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
