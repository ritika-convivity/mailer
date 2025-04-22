import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Row,
    Column,
    Heading,
    Text,
    Hr,
    Img,
    Link,
} from '@react-email/components';

type TextAlignType = 'left' | 'center' | 'right' | 'justify' | 'initial' | 'inherit';
type BorderCollapseType = 'collapse' | 'separate' | 'initial' | 'inherit';

export const QuizReportEmail = ({
    studentName = "Alex Johnson",
    grade = "8th Grade",
    course = "Mathematics",
    lessonTitle = "Lesson 5 - Practice Set B",
    dateCompleted = "April 20, 2025",
    summaryData = {
        totalQuestions: 9,
        attempted: 0,
        correct: 0,
        incorrect: 0,
        skipped: 9,
        score: "0%"
    },
    questionsData = [
        {
            id: "SM3 L5B Q1", points1stTry: "-", pointsRetries: "-", additionalTries: "-", status: "Skipped", reference: `If you
              were not expecting this invitation, you can ignore this email.` },
        { id: "SM3 L5B Q2", points1stTry: "-", pointsRetries: "-", additionalTries: "-", status: "Skipped", reference: "" },
        { id: "SM3 L5B Q3", points1stTry: "-", pointsRetries: "-", additionalTries: "-", status: "Skipped", reference: "" },
        { id: "SM3 L5B Q4", points1stTry: "-", pointsRetries: "-", additionalTries: "-", status: "Skipped", reference: "" },
        { id: "SM3 L5B Q5", points1stTry: "-", pointsRetries: "-", additionalTries: "-", status: "Skipped", reference: "" },
        { id: "SM3 L5B Q6", points1stTry: "-", pointsRetries: "-", additionalTries: "-", status: "Skipped", reference: "" },
        { id: "SM3 L5B Q7", points1stTry: "-", pointsRetries: "-", additionalTries: "-", status: "Skipped", reference: "" },
        { id: "SM3 L5B Q8", points1stTry: "-", pointsRetries: "-", additionalTries: "-", status: "Skipped", reference: "" },
        { id: "SM3 L5B Q9", points1stTry: "-", pointsRetries: "-", additionalTries: "-", status: "Skipped", reference: "" },
    ]
}) => {
    // Helper function to generate status badge style
    const getStatusStyle = (status: string) => {
        if (status === 'Skipped') {
            return { backgroundColor: '#fef9c3', color: '#854d0e' }; // Light yellow bg, dark amber text
        } else if (status === 'Correct') {
            return { backgroundColor: '#dcfce7', color: '#166534' }; // Light green bg, dark green text
        } else {
            return { backgroundColor: '#fee2e2', color: '#b91c1c' }; // Light red bg, dark red text
        }
    };

    return (
        <Html>
            <Head />
            <Body style={styles.body}>

                <Section style={styles.header}>
                    <Row>
                        <Column style={{ width: '80px' }}>
                            <Img
                                src="https://your-domain.com/logo.png"
                                width="40"
                                height="40"
                                alt="Nicole the Math Lady"
                                style={styles.logo}
                            />
                        </Column>
                        <Column>
                            <Text style={styles.headerText}>Nicole the Math Lady</Text>
                        </Column>
                    </Row>
                </Section>

                <Container style={styles.container}>
                    {/* Title Section */}
                    <Section style={styles.titleSection}>
                        <Heading as="h2" style={styles.title}>Quiz Report for {studentName}</Heading>
                        <Text style={styles.subtitle}>{lessonTitle} • {dateCompleted}</Text>
                    </Section>

                    {/* Summary Section */}
                    <Section style={styles.summarySection}>
                        <Heading as="h2" style={styles.sectionTitle}>Performance Summary</Heading>

                        <Row>
                            <Column style={{
                                backgroundColor: '#f0f9ff',
                                padding: '15px',
                                borderRadius: '5px',
                                marginBottom: '15px',
                                textAlign: 'center' as TextAlignType,
                                width: '45%',
                            }}>
                                <Text style={styles.summaryNumber}>{summaryData.totalQuestions}</Text>
                                <Text style={styles.summaryLabel}>Total Questions</Text>
                            </Column>
                            <Column style={{
                                backgroundColor: '#dcfce7',
                                padding: '15px',
                                borderRadius: '5px',
                                marginBottom: '15px',
                                textAlign: 'center' as TextAlignType,
                                width: '45%',
                            }}>
                                <Text style={styles.summaryNumber}>{summaryData.correct}</Text>
                                <Text style={styles.summaryLabel}>Correct</Text>
                            </Column>
                        </Row>

                        <Row>
                            <Column style={{
                                backgroundColor: '#fee2e2',
                                padding: '15px',
                                borderRadius: '5px',
                                marginBottom: '15px',
                                textAlign: 'center' as TextAlignType,
                                width: '45%',
                            }}>
                                <Text style={styles.summaryNumber}>{summaryData.incorrect}</Text>
                                <Text style={styles.summaryLabel}>Incorrect</Text>
                            </Column>
                            <Column style={{
                                backgroundColor: '#fef9c3',
                                padding: '15px',
                                borderRadius: '5px',
                                marginBottom: '15px',
                                textAlign: 'center' as TextAlignType,
                                width: '45%',
                            }}>
                                <Text style={styles.summaryNumber}>{summaryData.skipped}</Text>
                                <Text style={styles.summaryLabel}>Skipped</Text>
                            </Column>

                        </Row>
                        <Row><Column style={{
                            backgroundColor: '#f0f9ff',
                            padding: '15px',
                            borderRadius: '5px',
                            marginBottom: '15px',
                            textAlign: 'center' as TextAlignType,
                            width: '45%',
                        }}>
                            <Text style={styles.summaryNumber}>{summaryData.score}</Text>
                            <Text style={styles.summaryLabel}>Total Score</Text>
                        </Column>
                        </Row>
                    </Section>

                    <Hr style={styles.divider} />
                    <Section style={styles.detailsSection}>
                        <Heading as="h2" style={styles.sectionTitle}>Detailed Question Analysis</Heading>

                        {/* Table Header */}
                        <Row style={styles.tableHeader}>
                            <Column style={styles.columnHeader}>Question</Column>
                            <Column style={styles.columnHeader}>Points (1st Try)</Column>
                            <Column style={styles.columnHeader}>Points (Retries)</Column>
                            <Column style={styles.columnHeader}>Additional Tries</Column>
                            <Column style={styles.columnHeader}>Status</Column>
                            <Column style={styles.columnHeader}>Reference</Column>
                        </Row>

                        {/* Table Body */}
                        {/* {questionsData.map((question, index) => (
                            <Row key={index} style={index % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd}>
                                <Column style={styles.td}>{question.id}</Column>
                                <Column style={styles.td}>{question.points1stTry}</Column>
                                <Column style={styles.td}>{question.pointsRetries}</Column>
                                <Column style={styles.td}>{question.additionalTries}</Column>
                                <Column style={{ ...styles.td, color: '#f59e0b', fontSize: '10px' }}>
                                    {question.status}
                                </Column>
                                <Column style={{
                                    ...styles.td,
                                    width: '10px', fontSize: '10px'
                                }}>{question.reference}</Column>
                            </Row>
                        ))} */}
                        <Row style={{ width: '100%' }}>
                            <Column style={styles.td}>SM3 L5B Q1</Column>
                            <Column style={styles.td}></Column>
                            <Column style={styles.td}>-</Column>
                            <Column style={styles.td}>-</Column>
                            <Column style={{ ...styles.td, color: '#f59e0b' }}>
                                Skipped
                            </Column>
                            <Column style={{
                                ...styles.td
                            }}>If you
                                were not expecting this invitation, you can ignore this email.</Column>
                        </Row>
                        <Row style={{ width: '100%' }}>
                            <Column style={styles.td}>SM3 L5B Q2</Column>
                            <Column style={styles.td}></Column>
                            <Column style={styles.td}>-</Column>
                            <Column style={styles.td}>-</Column>
                            <Column style={{ ...styles.td, color: '#f59e0b' }}>
                                Skipped
                            </Column>
                            <Column style={{
                                ...styles.td
                            }}>If you
                                were not expecting this invitation, you can ignore this email.</Column>
                        </Row>
                        <Row style={{ width: '100%' }}>
                            <Column style={styles.td}>SM3 L5B Q3</Column>
                            <Column style={styles.td}></Column>
                            <Column style={styles.td}>-</Column>
                            <Column style={styles.td}>-</Column>
                            <Column style={{ ...styles.td, color: '#f59e0b' }}>
                                Skipped
                            </Column>
                            <Column style={styles.td}>If you
                                were not expecting this invitation, you can ignore this email.</Column>
                        </Row>
                        <Row style={styles.tableTotals}>
                            <Column style={styles.tdBold}>Total</Column>
                            <Column style={styles.td}>{summaryData.score}</Column>
                            <Column style={styles.td}>{summaryData.score}</Column>
                            <Column style={styles.td}>-</Column>
                            <Column style={styles.td}>{summaryData.skipped} skip and {summaryData.incorrect} incorrect</Column>
                            <Column style={styles.td}>-</Column>
                        </Row>
                    </Section>

                    <Hr style={styles.divider} />

                    <Section style={{
                        padding: '20px',
                        textAlign: 'center' as TextAlignType,
                    }}>
                        <Text style={styles.footerText}>© 2025 Nicole the Math Lady</Text>
                        <Text style={styles.footerText}>PO Box 780224, Orlando, FL</Text>
                        <Text style={styles.footerLinks}>
                            <Link style={styles.link} href="#">View full report</Link> •
                            <Link style={styles.link} href="#">Help center</Link> •
                            <Link style={styles.link} href="#">Unsubscribe</Link>
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default QuizReportEmail;

const styles = {
    body: {
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif',
        margin: '0',
        padding: '0',
    },
    container: {
        maxWidth: '600px',
        margin: '0 auto',
    },
    header: {
        backgroundColor: '#a855f7',
        padding: '18px',
        color: '#ffffff',
    },
    logo: {
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        padding: '8px',
    },
    headerText: {
        fontSize: '24px',
        fontWeight: '600',
        margin: '0',
        color: '#ffffff',
    },
    titleSection: {
        backgroundColor: '#ffffff',
        padding: '20px',
        borderBottom: '1px solid #e5e5e5',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '0',
        color: '#333333',
    },
    subtitle: {
        fontSize: '16px',
        color: '#666666',
        margin: '10px 0 0',
    },
    summarySection: {
        backgroundColor: '#ffffff',
        padding: '20px',
    },
    sectionTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '0 0 20px',
        color: '#333333',
    },
    summaryNumber: {
        fontSize: '28px',
        fontWeight: 'bold',
        margin: '0',
        color: '#2563eb',
    },
    summaryLabel: {
        fontSize: '14px',
        color: '#666666',
        margin: '5px 0 0',
    },
    divider: {
        borderColor: '#e5e5e5',
        margin: '0',
    },
    detailsSection: {
        backgroundColor: '#ffffff',
        padding: '20px',
    },
    tableHeader: {
        backgroundColor: '#f3f4f6',
    },
    columnHeader: {
        padding: '12px',
        fontWeight: 'bold',
        color: '#333333',
        borderBottom: '1px solid #e5e5e5',
        fontSize: '14px',
        width: '16.6666%'
    },
    tableRowEven: {
        backgroundColor: '#f9fafb',
    },
    tableRowOdd: {
        backgroundColor: '#ffffff',
    },
    td: {
        padding: '12px',
        borderBottom: '1px solid #e5e5e5',
        color: '#333333',
        width: '16.6666%',
        fontSize: '12px'
    },
    tdBold: {
        padding: '12px',
        borderBottom: '1px solid #e5e5e5',
        fontWeight: 'bold',
        color: '#333333',
    },
    tableTotals: {
        backgroundColor: '#f3f4f6',
        fontWeight: 'bold',
    },
    statusBadge: {
        display: 'inline-block',
        padding: '4px 8px',
        borderRadius: '10px',
        fontSize: '12px',
    },
    footerText: {
        fontSize: '14px',
        color: '#666666',
        margin: '5px 0',
    },
    footerLinks: {
        fontSize: '14px',
        margin: '15px 0 0',
    },
    link: {
        color: '#6b21a8',
        textDecoration: 'underline',
    },
};