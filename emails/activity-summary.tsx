
import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Heading,
    Column,
    Row,
    Hr,
    Link,
    Img,
} from '@react-email/components';

// Type definitions
interface ProgressHistory {
    completedAt: string | null;
}

interface Topic {
    id: string;
    title: string;
    progress: number;
    progress_data: {
        history: ProgressHistory[];
    };
}

interface Quiz {
    id: string;
    title: string;
    category_name: string;
    avg_first_try_score: number;
    avg_all_try_score: number;
    time_taken: number;
    progress: number;
    time_from_now: string;
}

interface DailyProgress {
    topics?: Topic[];
    quizzes?: Quiz[];
}

interface DailyActivity {
    date: string;
    progress: DailyProgress;
}

interface WeeklySummaryData {
    studentName: string;
    count: {
        topics: number;
        quizzes: number;
    };
    course_start: string;
    activityByDate: DailyActivity[];
    averageQuizScore?: number;
}

// Mock data (normally would be passed as props)
export const mockWeeklySummaryData: WeeklySummaryData = {
    studentName: "Alex Johnson",
    count: {
        topics: 5,
        quizzes: 3,
    },
    course_start: '2025-03-01T00:00:00Z',
    activityByDate: [
        {
            date: '2025-04-15T00:00:00Z',
            progress: {
                topics: [
                    {
                        id: 't1',
                        title: 'Introduction to Fractions',
                        progress: 100,
                        progress_data: {
                            history: [{ completedAt: '2025-04-15T10:30:00Z' }],
                        },
                    },
                    {
                        id: 't2',
                        title: 'Multiplying Fractions',
                        progress: 75,
                        progress_data: {
                            history: [{ completedAt: null }],
                        },
                    },
                ],
                quizzes: [
                    {
                        id: 'q1',
                        title: 'Fraction Basics Quiz',
                        category_name: 'Fractions',
                        avg_first_try_score: 0.85,
                        avg_all_try_score: 0.92,
                        time_taken: 240,
                        progress: 100,
                        time_from_now: '2 days ago',
                    },
                ],
            },
        },
        {
            date: '2025-04-18T00:00:00Z',
            progress: {
                topics: [
                    {
                        id: 't3',
                        title: 'Decimals and Percents',
                        progress: 100,
                        progress_data: {
                            history: [{ completedAt: '2025-04-18T15:45:00Z' }],
                        },
                    },
                ],
                quizzes: [
                    {
                        id: 'q2',
                        title: 'Decimal Conversion Quiz',
                        category_name: 'Decimals',
                        avg_first_try_score: 0.78,
                        avg_all_try_score: 0.88,
                        time_taken: 300,
                        progress: 100,
                        time_from_now: '1 day ago',
                    },
                    {
                        id: 'q3',
                        title: 'Percent Review Quiz',
                        category_name: 'Percents',
                        avg_first_try_score: 0.65,
                        avg_all_try_score: 0.7,
                        time_taken: 180,
                        progress: 100,
                        time_from_now: '1 day ago',
                    },
                ],
            },
        },
    ],
};

// Helper functions
const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
};

const calculateAverageQuizScore = (data: WeeklySummaryData): number => {
    let totalScore = 0;
    let quizCount = 0;

    data.activityByDate.forEach(day => {
        if (day.progress.quizzes) {
            day.progress.quizzes.forEach(quiz => {
                totalScore += quiz.avg_first_try_score;
                quizCount++;
            });
        }
    });

    return quizCount > 0 ? (totalScore / quizCount) * 100 : 0;
};

// Sub-components for better organization
const Header = ({ data }: { data: WeeklySummaryData }) => (
    <Section style={styles.headerSection}>
        <Row>
            <Column>
                <Heading style={styles.mainHeading}>Weekly Activity Report</Heading>
            </Column>
            <Column style={{ textAlign: 'right' }}>
                <Text style={styles.dateText}>{formatDate(new Date().toISOString())}</Text>
            </Column>
        </Row>
        <Row>
            <Column>
                <Text style={styles.studentName}>
                    {data.studentName}'s learning progress
                </Text>
                <Text style={styles.courseStarted}>
                    Course started on {formatDate(data.course_start)}
                </Text>
            </Column>
        </Row>
    </Section>
);

const StatsOverview = ({ data }: { data: WeeklySummaryData }) => {
    const avgQuizScore = calculateAverageQuizScore(data).toFixed(0);

    return (
        <Section style={styles.statsSection}>
            <Row>
                <Column style={styles.statBox}>
                    <Text style={styles.statNumber}>{data.count.topics}</Text>
                    <Text style={styles.statLabel}>Topics Completed</Text>
                </Column>
                <Column style={styles.statBox}>
                    <Text style={styles.statNumber}>{data.count.quizzes}</Text>
                    <Text style={styles.statLabel}>Quizzes Completed</Text>
                </Column>
                <Column style={styles.statBox}>
                    <Text style={styles.statNumber}>{avgQuizScore}%</Text>
                    <Text style={styles.statLabel}>Average Quiz Score</Text>
                </Column>
            </Row>
        </Section>
    );
};

const TopicItem = ({ topic }: { topic: Topic }) => (
    <Row style={styles.itemRow}>
        <Column style={styles.itemContent}>
            <Text style={styles.itemTitle}>{topic.title}</Text>
            <Row>
                <Column>
                    <Text style={styles.itemDetail}>
                        Progress: <span style={{ color: topic.progress === 100 ? '#047857' : '#0369a1' }}>{topic.progress}%</span>
                    </Text>
                </Column>
                <Column>
                    <Text style={styles.itemDetail}>
                        Completed: {topic.progress_data.history[0]?.completedAt
                            ? formatDate(topic.progress_data.history[0].completedAt)
                            : 'In progress'}
                    </Text>
                </Column>
            </Row>
        </Column>
    </Row>
);

const QuizItem = ({ quiz }: { quiz: Quiz }) => (
    <Row style={styles.itemRow}>
        <Column style={styles.itemContent}>
            <Text style={styles.itemTitle}>{quiz.title}</Text>
            <Text style={styles.itemSubtitle}>Category: {quiz.category_name}</Text>

            <Row>
                <Column style={{ width: '50%' }}>
                    <Text style={styles.quizStat}>
                        First Try: <span style={{ fontWeight: 'bold' }}>{(quiz.avg_first_try_score * 100).toFixed(0)}%</span>
                    </Text>
                </Column>
                <Column style={{ width: '50%' }}>
                    <Text style={styles.quizStat}>
                        All Attempts: <span style={{ fontWeight: 'bold' }}>{(quiz.avg_all_try_score * 100).toFixed(0)}%</span>
                    </Text>
                </Column>
            </Row>

            <Row>
                <Column style={{ width: '50%' }}>
                    <Text style={styles.quizStat}>
                        Time: <span style={{ fontWeight: 'bold' }}>{Math.floor(quiz.time_taken / 60)}:{(quiz.time_taken % 60).toString().padStart(2, '0')}</span>
                    </Text>
                </Column>
                <Column style={{ width: '50%' }}>
                    <Text style={styles.quizStat}>
                        Last attempt: <span style={{ fontWeight: 'bold' }}>{quiz.time_from_now}</span>
                    </Text>
                </Column>
            </Row>
        </Column>
    </Row>
);

// Update the DailyActivitySection component to handle optional properties

const DailyActivitySection = ({ day }: { day: DailyActivity }) => (
    <Section style={styles.daySection}>
        <Heading as="h3" style={styles.dayHeading}>
            {formatDate(day.date)}
        </Heading>
        <Hr style={styles.sectionDivider} />

        {day.progress?.topics && day.progress.topics.length > 0 && (
            <div>
                <Text style={styles.sectionTitle}>TOPICS</Text>
                {day.progress.topics.map((topic) => (
                    <TopicItem key={topic.id} topic={topic} />
                ))}
            </div>
        )}

        {day.progress?.quizzes && day.progress.quizzes.length > 0 && (
            <div style={{ marginTop: '20px' }}>
                <Text style={styles.sectionTitle}>QUIZZES</Text>
                {day.progress.quizzes.map((quiz) => (
                    <QuizItem key={quiz.id} quiz={quiz} />
                ))}
            </div>
        )}
    </Section>
);

// Main component
export const WeeklySummaryTemplate = ({ data = mockWeeklySummaryData }) => {
    return (
        <Html>
            <Head />
            <Body style={styles.main}>
                <Container style={styles.container}>
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
                    <Header data={data} />
                    <Hr style={styles.mainDivider} />
                    <StatsOverview data={data} />

                    {data.activityByDate.map((day, index) => (
                        <DailyActivitySection key={index} day={day} />
                    ))}

                    <Section style={styles.footerSection}>
                        <Text style={styles.footerText}>
                            This is an automated email. Please do not reply.
                        </Text>
                        <Text style={styles.footerLinks}>
                            <Link href="#" style={styles.link}>View Online</Link> •
                            <Link href="#" style={styles.link}>Learning Dashboard</Link> •
                            <Link href="#" style={styles.link}>Settings</Link>
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default WeeklySummaryTemplate;

// Consolidated styles object for better organization
const styles = {
    main: {
        backgroundColor: '#f9fafb',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        padding: '30px 0',
    },
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
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
    headerSection: {
        padding: '24px',
    },
    mainHeading: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#111827',
        margin: '0',
    },
    dateText: {
        color: '#6b7280',
        fontSize: '14px',
        margin: '4px 0 0 0',
    },
    studentName: {
        margin: '16px 0 4px 0',
        fontSize: '18px',
        color: '#374151',
        fontWeight: '500',
    },
    courseStarted: {
        margin: '0',
        fontSize: '14px',
        color: '#6b7280',
    },
    mainDivider: {
        borderTop: '1px solid #e5e7eb',
        margin: '0',
    },
    statsSection: {
        padding: '24px',
        backgroundColor: '#f3f4f6',
    },
    statBox: {
        padding: '12px',
        textAlign: 'center' as const,
        width: '33.33%',
    },
    statNumber: {
        fontSize: '30px',
        fontWeight: '700',
        color: '#1f2937',
        margin: '0',
    },
    statLabel: {
        fontSize: '14px',
        color: '#4b5563',
        fontWeight: '500',
        margin: '4px 0 0 0',
    },
    daySection: {
        padding: '24px',
        borderTop: '1px solid #e5e7eb',
    },
    dayHeading: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#1f2937',
        margin: '0 0 12px 0',
    },
    sectionDivider: {
        borderTop: '1px solid #e5e7eb',
        margin: '0 0 16px 0',
    },
    sectionTitle: {
        fontSize: '12px',
        fontWeight: '600',
        color: '#6b7280',
        letterSpacing: '0.05em',
        margin: '0 0 12px 0',
    },
    itemRow: {
        marginBottom: '12px',
    },
    itemContent: {
        backgroundColor: '#f9fafb',
        padding: '16px',
        borderRadius: '6px',
        border: '1px solid #e5e7eb',
    },
    itemTitle: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#111827',
        margin: '0 0 8px 0',
    },
    itemSubtitle: {
        fontSize: '14px',
        color: '#4b5563',
        margin: '0 0 12px 0',
    },
    itemDetail: {
        fontSize: '14px',
        color: '#4b5563',
        margin: '0',
    },
    quizStat: {
        fontSize: '14px',
        color: '#4b5563',
        margin: '4px 0',
    },
    footerSection: {
        padding: '24px',
        backgroundColor: '#f3f4f6',
        textAlign: 'center' as const,
        borderTop: '1px solid #e5e7eb',
    },
    footerText: {
        fontSize: '12px',
        color: '#6b7280',
        margin: '0 0 12px 0',
    },
    footerLinks: {
        fontSize: '12px',
        color: '#6b7280',
        margin: '0',
    },
    link: {
        color: '#2563eb',
        textDecoration: 'none',
        margin: '0 6px',
    }
};