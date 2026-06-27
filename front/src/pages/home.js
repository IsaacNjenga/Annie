import React from "react";
import { motion } from "framer-motion";
import annie from "../assets/images/annie.jpeg";
import {
  Typography,
  Row,
  Col,
  Avatar,
  Card,
  Timeline,
  Tag,
  Divider,
  Space,
  Button,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  CheckCircleOutlined,
  HeartOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  ShopOutlined,
  ArrowRightOutlined,
  AuditOutlined,
  SnippetsOutlined,
  GlobalOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

// --- PROFILE IMAGE PROVISION ---
// Replace this with your local asset path or an online hosted URL.
const PROFILE_IMAGE_URL = annie;

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ background: "#ffffff" }}
    >
      {/* 1. HERO BANNER */}
      <section
        id="hero"
        style={{
          padding: "120px 24px",
          background: "linear-gradient(180deg, #f4f7fc 0%, #ffffff 100%)",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <Row
          justify="center"
          align="middle"
          gutter={[48, 48]}
          style={{ maxWidth: 1200, margin: "0 auto" }}
        >
          <Col xs={24} md={14} style={{ textAlign: "left" }}>
            <motion.div variants={itemVariants}>
              <Tag
                color="blue"
                style={{
                  marginBottom: 16,
                  fontSize: "14px",
                  padding: "4px 14px",
                  borderRadius: "4px",
                  fontWeight: 600,
                }}
              >
                SOCIOLOGY GRADUATE
              </Tag>
              <Title
                level={1}
                style={{
                  margin: "0 0 16px 0",
                  fontSize: "3.5rem",
                  fontWeight: 800,
                  color: "#141414",
                  lineHeight: 1.2,
                }}
              >
                Ann Njeri Maina
              </Title>
              <Title
                level={3}
                style={{
                  marginTop: 0,
                  fontWeight: 500,
                  color: "#434343",
                  fontSize: "1.5rem",
                }}
              >
                Human Resources & Community Development Professional
              </Title>
              <Paragraph
                style={{
                  fontSize: "18px",
                  color: "#595959",
                  maxWidth: 620,
                  lineHeight: "1.6",
                  marginBottom: 32,
                }}
              >
                "Building strong communities through people-centered solutions,
                effective communication, and continuous learning."
              </Paragraph>

              <Row gutter={[24, 16]} style={{ marginBottom: 32 }}>
                <Col xs={24} sm={12}>
                  <Space direction="vertical" size={10}>
                    <Text style={{ fontSize: "15px", color: "#434343" }}>
                      <EnvironmentOutlined style={{ color: "#1890ff" }} />{" "}
                      Nairobi, Kenya
                    </Text>
                    <Text style={{ fontSize: "15px", color: "#434343" }}>
                      <MailOutlined style={{ color: "#1890ff" }} />{" "}
                      annienje442@gmail.com
                    </Text>
                  </Space>
                </Col>
                <Col xs={24} sm={12}>
                  <Space direction="vertical" size={10}>
                    <Text style={{ fontSize: "15px", color: "#434343" }}>
                      <PhoneOutlined style={{ color: "#1890ff" }} /> +254 728
                      967 802
                    </Text>
                  </Space>
                </Col>
              </Row>

              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                onClick={() => scrollToSection("contact")}
                style={{
                  borderRadius: "6px",
                  height: "48px",
                  padding: "0 24px",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                Let's Work Together
              </Button>
            </motion.div>
          </Col>

          <Col xs={24} md={10}>
            <motion.div
              variants={itemVariants}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    width: "280px",
                    height: "280px",
                    // border: "2px solid #1890ff",
                    borderRadius: "50%",
                    zIndex: 1,
                  }}
                ></div>
                <Avatar
                  size={280}
                  src={PROFILE_IMAGE_URL || null}
                  icon={
                    !PROFILE_IMAGE_URL && (
                      <UserOutlined style={{ fontSize: "80px" }} />
                    )
                  }
                  style={{
                    boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                    border: "6px solid #ffffff",
                    position: "relative",
                    zIndex: 2,
                  }}
                />
              </div>
            </motion.div>
          </Col>
        </Row>
      </section>

      {/* MAIN LAYOUT WRAPPER */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* 2. ABOUT ME */}
        <section id="about" style={{ padding: "100px 0 60px 0" }}>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={15}>
              <motion.div variants={itemVariants}>
                <Title
                  level={2}
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  About Me
                </Title>
                <div
                  style={{
                    width: "60px",
                    height: "4px",
                    background: "#1890ff",
                    marginBottom: 32,
                    borderRadius: "2px",
                  }}
                ></div>
                <Paragraph
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#262626",
                    marginBottom: 20,
                  }}
                >
                  I am a Sociology graduate from Multimedia University of Kenya
                  with practical experience in government institutions and
                  community-based organizations. My background has equipped me
                  with strong skills in interviewing, records management, report
                  writing, stakeholder engagement, and community outreach.
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#262626",
                  }}
                >
                  I am passionate about Human Resources because I enjoy working
                  with people, understanding their needs, and contributing to
                  environments where individuals and organizations can succeed
                  together. I believe in professionalism, integrity, empathy,
                  and lifelong learning.
                </Paragraph>
              </motion.div>
            </Col>

            <Col xs={24} md={9}>
              <motion.div variants={itemVariants}>
                <Card
                  bordered={false}
                  style={{
                    background: "#fafafa",
                    borderRadius: "12px",
                    borderLeft: "4px solid #1890ff",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                  }}
                >
                  <Title level={4} style={{ marginTop: 0, marginBottom: 16 }}>
                    Career Objective
                  </Title>
                  <Paragraph
                    style={{
                      color: "#595959",
                      fontSize: "14px",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    To begin my career in Human Resources where I can apply my
                    communication, interviewing, organizational, and people
                    management skills to attract and recruit top talent while
                    contributing to organizational growth.
                  </Paragraph>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </section>

        {/* 3. CAREER JOURNEY & EXPERIENCE */}
        <section id="journey" style={{ padding: "80px 0" }}>
          <motion.div
            variants={itemVariants}
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <Title
              level={2}
              style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: 8 }}
            >
              My Career Journey
            </Title>
            <Text type="secondary" style={{ fontSize: "16px" }}>
              A timeline of my academic background and professional hands-on
              experience
            </Text>
            <div
              style={{
                width: "60px",
                height: "4px",
                background: "#1890ff",
                margin: "16px auto 0 auto",
                borderRadius: "2px",
              }}
            ></div>
          </motion.div>

          <Row gutter={[48, 48]}>
            <Col xs={24} md={13}>
              <Card
                title={
                  <Space>
                    <AuditOutlined style={{ color: "#1890ff" }} />
                    <span>Professional Experience</span>
                  </Space>
                }
                bordered={false}
                style={{
                  background: "#ffffff",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  borderRadius: "12px",
                  padding: "10px",
                }}
              >
                <Timeline
                  mode="left"
                  style={{ marginTop: 20 }}
                  items={[
                    {
                      color: "#52c41a",
                      children: (
                        <div style={{ paddingBottom: "20px" }}>
                          <Text
                            strong
                            style={{ fontSize: "16px", color: "#141414" }}
                          >
                            Volunteer — African Women Development Network (AWDN)
                          </Text>
                          <div
                            style={{
                              color: "#1890ff",
                              fontWeight: 500,
                              margin: "4px 0",
                            }}
                          >
                            June 2025 – Present
                          </div>
                          <Paragraph
                            type="secondary"
                            style={{ fontSize: "14px", margin: 0 }}
                          >
                            Assisted in community outreach programs for widows
                            and orphans. Contributed significantly to proposal
                            writing, blog creation, and strategic grassroots
                            reporting.
                          </Paragraph>
                        </div>
                      ),
                    },
                    {
                      color: "#1890ff",
                      children: (
                        <div style={{ paddingBottom: "20px" }}>
                          <Text
                            strong
                            style={{ fontSize: "16px", color: "#141414" }}
                          >
                            Attachment — Ministry of Interior & National
                            Administration
                          </Text>
                          <div
                            style={{
                              color: "#1890ff",
                              fontWeight: 500,
                              margin: "4px 0",
                            }}
                          >
                            May 2024 – Aug 2024
                          </div>
                          <Paragraph
                            type="secondary"
                            style={{ fontSize: "14px", margin: 0 }}
                          >
                            Located at Ruiru's Probation and Aftercare Services.
                            Conducted structural client interviews, prepared
                            case metrics, and safely preserved confidential
                            records.
                          </Paragraph>
                        </div>
                      ),
                    },
                    {
                      color: "#1890ff",
                      children: (
                        <div style={{ paddingBottom: "20px" }}>
                          <Text
                            strong
                            style={{ fontSize: "16px", color: "#141414" }}
                          >
                            Attachment — Ministry of Labour
                          </Text>
                          <div
                            style={{
                              color: "#1890ff",
                              fontWeight: 500,
                              margin: "4px 0",
                            }}
                          >
                            May 2023 – Aug 2023
                          </div>
                          <Paragraph
                            type="secondary"
                            style={{ fontSize: "14px", margin: 0 }}
                          >
                            Served within the State Department of Children
                            Services at Kigumo. Orchestrated cross-stakeholder
                            documentation setups and calendar planning
                            schedules.
                          </Paragraph>
                        </div>
                      ),
                    },
                    {
                      color: "#d9d9d9",
                      children: (
                        <div>
                          <Text
                            strong
                            style={{ fontSize: "16px", color: "#141414" }}
                          >
                            Volunteer — AVSI Foundation
                          </Text>
                          <div
                            style={{
                              color: "#8c8c8c",
                              fontWeight: 500,
                              margin: "4px 0",
                            }}
                          >
                            Sept 2023 – Jan 2024
                          </div>
                          <Paragraph
                            type="secondary"
                            style={{ fontSize: "14px", margin: 0 }}
                          >
                            Contributed to the execution parameters of the
                            DREAMS initiative, championing social empowerment
                            benchmarks for adolescent girls.
                          </Paragraph>
                        </div>
                      ),
                    },
                  ]}
                />
              </Card>
            </Col>

            <Col xs={24} md={11}>
              <Space direction="vertical" size={24} style={{ width: "100%" }}>
                <Card
                  title={
                    <Space>
                      <SnippetsOutlined style={{ color: "#1890ff" }} />
                      <span>Education & Degrees</span>
                    </Space>
                  }
                  bordered={false}
                  style={{
                    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                    borderRadius: "12px",
                  }}
                >
                  <div style={{ marginBottom: "16px" }}>
                    <Tag color="cyan">Degree</Tag>
                    <div style={{ margin: "8px 0 4px 0" }}>
                      <Text strong style={{ fontSize: "16px" }}>
                        Multimedia University of Kenya
                      </Text>
                    </div>
                    <Text style={{ color: "#434343" }}>
                      Bachelor of Arts in Sociology
                    </Text>
                    <div style={{ color: "#8c8c8c", fontSize: "13px" }}>
                      Second Class Upper Division • 2020 – 2024
                    </div>
                  </div>
                  <Divider style={{ margin: "16px 0" }} />
                  <div>
                    <Tag color="purple">High School</Tag>
                    <div style={{ margin: "8px 0 4px 0" }}>
                      <Text strong style={{ fontSize: "15px" }}>
                        Nyandarua High School
                      </Text>
                    </div>
                    <Text type="secondary" style={{ fontSize: "13px" }}>
                      Kenya Certificate of Secondary Education (2016 – 2019)
                    </Text>
                  </div>
                </Card>

                <Card
                  title={
                    <Space>
                      <ShopOutlined style={{ color: "#1890ff" }} />
                      <span>Certifications & Specialized Training</span>
                    </Space>
                  }
                  bordered={false}
                  style={{
                    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                    borderRadius: "12px",
                  }}
                >
                  <Space
                    direction="vertical"
                    size={16}
                    style={{ width: "100%" }}
                  >
                    <div>
                      <Text
                        strong
                        style={{ display: "block", color: "#141414" }}
                      >
                        Kenya Institute of Business and Counseling Studies
                      </Text>
                      <Text
                        type="secondary"
                        style={{
                          fontSize: "13px",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
                        Professional Certificate (2022)
                      </Text>
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          flexWrap: "wrap",
                        }}
                      >
                        <Tag>Trauma & Psychological First Aid</Tag>
                        <Tag>Depression & Suicide Counseling</Tag>
                      </div>
                    </div>
                    <Divider style={{ margin: "8px 0" }} />
                    <div>
                      <Text
                        strong
                        style={{ display: "block", color: "#141414" }}
                      >
                        International Youth Fellowship Academy
                      </Text>
                      <Text type="secondary" style={{ fontSize: "13px" }}>
                        Paramedics Program Training (2025)
                      </Text>
                    </div>
                  </Space>
                </Card>
              </Space>
            </Col>
          </Row>
        </section>

        {/* 4. SKILLS & VALUES */}
        <section
          id="skills"
          style={{
            padding: "80px 40px",
            background: "#f8f9fa",
            borderRadius: "20px",
          }}
        >
          <motion.div
            variants={itemVariants}
            style={{ textAlign: "center", marginBottom: 50 }}
          >
            <Title
              level={2}
              style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: 8 }}
            >
              Core Capabilities & Values
            </Title>
            <Text type="secondary" style={{ fontSize: "16px" }}>
              The competencies and foundational ethics guiding my professional
              execution
            </Text>
          </motion.div>

          <Row gutter={[24, 24]}>
            <Col xs={24} sm={8}>
              <Card
                title="Human Resources"
                bordered={false}
                style={{ borderRadius: "12px", height: "100%" }}
                headStyle={{
                  borderBottom: "2px solid #e6f7ff",
                  fontWeight: 600,
                }}
              >
                <Space direction="vertical" size={12}>
                  <Text>
                    <CheckCircleOutlined
                      style={{ color: "#52c41a", marginRight: 8 }}
                    />{" "}
                    Structural Interviewing
                  </Text>
                  <Text>
                    <CheckCircleOutlined
                      style={{ color: "#52c41a", marginRight: 8 }}
                    />{" "}
                    Records Management
                  </Text>
                  <Text>
                    <CheckCircleOutlined
                      style={{ color: "#52c41a", marginRight: 8 }}
                    />{" "}
                    Document Governance
                  </Text>
                  <Text>
                    <CheckCircleOutlined
                      style={{ color: "#52c41a", marginRight: 8 }}
                    />{" "}
                    Technical Report Writing
                  </Text>
                  <Text>
                    <CheckCircleOutlined
                      style={{ color: "#52c41a", marginRight: 8 }}
                    />{" "}
                    Stakeholder Relations
                  </Text>
                </Space>
              </Card>
            </Col>

            <Col xs={24} sm={8}>
              <Card
                title="Administrative Management"
                bordered={false}
                style={{ borderRadius: "12px", height: "100%" }}
                headStyle={{
                  borderBottom: "2px solid #f6ffed",
                  fontWeight: 600,
                }}
              >
                <Space direction="vertical" size={12}>
                  <Text>
                    <CheckCircleOutlined
                      style={{ color: "#1890ff", marginRight: 8 }}
                    />{" "}
                    Microsoft Office Suite
                  </Text>
                  <Text>
                    <CheckCircleOutlined
                      style={{ color: "#1890ff", marginRight: 8 }}
                    />{" "}
                    Accurate Data Ingestion
                  </Text>
                  <Text>
                    <CheckCircleOutlined
                      style={{ color: "#1890ff", marginRight: 8 }}
                    />{" "}
                    Meeting Coordination
                  </Text>
                  <Text>
                    <CheckCircleOutlined
                      style={{ color: "#1890ff", marginRight: 8 }}
                    />{" "}
                    Information Security
                  </Text>
                  <Text>
                    <CheckCircleOutlined
                      style={{ color: "#1890ff", marginRight: 8 }}
                    />{" "}
                    Organizational Tasks
                  </Text>
                </Space>
              </Card>
            </Col>

            <Col xs={24} sm={8}>
              <Card
                title="Professional Ethics"
                bordered={false}
                style={{ borderRadius: "12px", height: "100%" }}
                headStyle={{
                  borderBottom: "2px solid #fff7e6",
                  fontWeight: 600,
                }}
              >
                <Space direction="vertical" size={12}>
                  <Text>
                    <SafetyCertificateOutlined
                      style={{ color: "#fa8c16", marginRight: 8 }}
                    />{" "}
                    Integrity & Trust
                  </Text>
                  <Text>
                    <HeartOutlined
                      style={{ color: "#fa8c16", marginRight: 8 }}
                    />{" "}
                    Empathy & Social Insight
                  </Text>
                  <Text>
                    <TeamOutlined
                      style={{ color: "#fa8c16", marginRight: 8 }}
                    />{" "}
                    Cohesive Team Alignment
                  </Text>
                  <Text>
                    <GlobalOutlined
                      style={{ color: "#fa8c16", marginRight: 8 }}
                    />{" "}
                    Continuous Growth Mindset
                  </Text>
                  <Text>
                    <CheckCircleOutlined
                      style={{ color: "#fa8c16", marginRight: 8 }}
                    />{" "}
                    Operational Accountability
                  </Text>
                </Space>
              </Card>
            </Col>
          </Row>
        </section>

        {/* 5. CONTACT & FOOTER */}
        <section
          id="contact"
          style={{ padding: "100px 0 40px 0", textAlign: "center" }}
        >
          <motion.div variants={itemVariants}>
            <Title
              level={2}
              style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 12 }}
            >
              Let's Connect
            </Title>
            <Paragraph
              style={{
                fontSize: "16px",
                color: "#595959",
                maxWidth: 600,
                margin: "0 auto 48px auto",
                lineHeight: "1.6",
              }}
            >
              Thank you for taking the time to review my portfolio. I look
              forward to contributing my skills, passion, and collaborative
              energy to a growing organization.
            </Paragraph>

            <Row
              justify="center"
              gutter={[24, 24]}
              style={{ maxWidth: 700, margin: "0 auto" }}
            >
              <Col xs={24} sm={12}>
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #f0f0f0",
                    borderRadius: "12px",
                    padding: "24px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                  }}
                >
                  <MailOutlined
                    style={{
                      fontSize: "24px",
                      color: "#1890ff",
                      marginBottom: 12,
                    }}
                  />
                  <div
                    style={{
                      color: "#8c8c8c",
                      fontSize: "13px",
                      marginBottom: 4,
                    }}
                  >
                    Email Address
                  </div>
                  <Text strong style={{ fontSize: "16px", color: "#141414" }}>
                    annienje442@gmail.com
                  </Text>
                </div>
              </Col>
              <Col xs={24} sm={12}>
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #f0f0f0",
                    borderRadius: "12px",
                    padding: "24px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                  }}
                >
                  <PhoneOutlined
                    style={{
                      fontSize: "24px",
                      color: "#1890ff",
                      marginBottom: 12,
                    }}
                  />
                  <div
                    style={{
                      color: "#8c8c8c",
                      fontSize: "13px",
                      marginBottom: 4,
                    }}
                  >
                    Phone Connection
                  </div>
                  <Text strong style={{ fontSize: "16px", color: "#141414" }}>
                    +254 728 967 802
                  </Text>
                </div>
              </Col>
            </Row>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}

export default Home;
