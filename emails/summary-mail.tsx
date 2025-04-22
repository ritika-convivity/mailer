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
} from '@react-email/components';

export const mockWeeklySummaryData = {
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
                            history: [
                                { completedAt: '2025-04-15T10:30:00Z' },
                            ],
                        },
                    },
                    {
                        id: 't2',
                        title: 'Multiplying Fractions',
                        progress: 75,
                        progress_data: {
                            history: [
                                { completedAt: null },
                            ],
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
                            history: [
                                { completedAt: '2025-04-18T15:45:00Z' },
                            ],
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


export const WeeklySummaryTemplate = () => {
    return (
        <Html>
            <Head />
            <Body style={main}>
                <Container style={container}>
                    <Section>
                        <Row>
                            <Column>
                                <Heading style={{ fontSize: '1.5rem', color: '#1f2937' }}>Weeky Activity Report</Heading>
                            </Column>
                            <Column>
                                <Text style={{ color: '#6b7280' }}>Apr 22, 2025</Text>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <Text style={{ margin: '0', fontSize: '1.125rem', color: '#374151' }}>
                                    Alex Johnson's learning progress
                                </Text>
                                <Text style={{ margin: '0', fontSize: '0.875rem', color: '#6b7280' }}>Course started on Mar 1, 2025</Text>
                            </Column>
                        </Row>
                    </Section>
                    <Hr />
                    <Section>
                        <Row>
                            <Column style={{
                                // backgroundColor: '#f0f9ff',
                                padding: '15px',
                                borderRadius: '5px',
                                marginBottom: '15px',
                                textAlign: 'center' as const,
                                width: '33.33%',
                            }}>
                                <Text style={{ fontSize: '1.875rem', fontWeight: '700' }}>{mockWeeklySummaryData.count.topics}</Text>
                                <Text style={{ fontSize: '1rem', color: ' #374151', fontWeight: '600' }}>Topics Completed</Text>
                            </Column>
                            <Column style={{
                                // backgroundColor: '#f0f9ff',
                                padding: '15px',
                                borderRadius: '5px',
                                marginBottom: '15px',
                                textAlign: 'center' as const,
                                width: '33.33%',
                            }}>
                                <Text style={{ fontSize: '1.875rem', fontWeight: '700' }}>{mockWeeklySummaryData.count.quizzes}</Text>
                                <Text style={{ fontSize: '1rem', color: ' #374151', fontWeight: '600' }}>Quiz Completed</Text>
                            </Column>
                            <Column style={{
                                // backgroundColor: '#f0f9ff',
                                padding: '15px',
                                borderRadius: '5px',
                                marginBottom: '15px',
                                textAlign: 'center' as const,
                                width: '33.33%',
                            }}>
                                <Text style={{ fontSize: '1.875rem', fontWeight: '700' }}>76%</Text>
                                <Text style={{ fontSize: '1rem', color: ' #374151', fontWeight: '600' }}>Average Quiz Score</Text>
                            </Column>
                        </Row>
                    </Section>

                    {mockWeeklySummaryData.activityByDate.map(({ date, progress }, index) => (
                        <Section key={index} style={{ marginBottom: '24px' }}>
                            <Heading as="h3" style={subHeading}>
                                Date: {new Date(date).toLocaleDateString()}
                            </Heading>
                            <Hr />
                            {progress?.topics?.length > 0 && (
                                <>
                                    <Text style={sectionTitle}>Topics:</Text>
                                    {progress.topics.map((topic) => (
                                        <Row key={topic.id}>
                                            <Column style={{ padding: '15px' }}>
                                                <strong>{topic.title}</strong> - Progress: {topic.progress}%
                                                <br />
                                                Completed:{' '}
                                                {topic.progress_data.history[0]?.completedAt
                                                    ? new Date(
                                                        topic.progress_data.history[0].completedAt!,
                                                    ).toLocaleString()
                                                    : 'N/A'}
                                            </Column>
                                        </Row>
                                    ))}
                                </>
                            )}

                            {progress?.quizzes?.length > 0 && (
                                <>
                                    <Text style={sectionTitle}>Quizzes:</Text>
                                    {progress.quizzes.map((quiz) => (
                                        <Section key={quiz.id} style={{ paddingBottom: '8px' }}>
                                            <Row style={{ paddingBottom: '15px' }}>
                                                <Column><strong>{quiz.title}</strong> - Category:
                                                    {quiz.category_name}</Column>
                                            </Row>
                                            <Row>
                                                <Column>
                                                    First Try Avg Score:
                                                    {(quiz.avg_first_try_score * 100).toFixed(2)}%</Column>
                                                <Column>
                                                    All Attempts Avg Score:
                                                    {(quiz.avg_all_try_score * 100).toFixed(2)}%
                                                </Column>
                                                <Column>
                                                    Time Taken:
                                                    {quiz.time_taken} seconds</Column>

                                                <Column>Progress:
                                                    {quiz.progress}%</Column>
                                                <Column>Last Attempt:
                                                    {quiz.time_from_now}</Column>
                                            </Row>
                                        </Section>
                                    ))}
                                </>
                            )}
                        </Section>
                    ))}

                    <Text style={footer}>
                        This is an automated email. Please do not reply.
                    </Text>
                </Container>
            </Body>
        </Html >
    );
};

export default WeeklySummaryTemplate;

// ===== Styles =====
const main = {
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
};

const container = {
    maxWidth: '600px',
    margin: '0 auto',
};

const heading = {
    textAlign: 'left' as const,
    color: '#333',
};

const paragraph = {
    fontSize: '16px',
    color: '#555',
};

const subText = {
    fontSize: '14px',
    color: '#777',
};

const subHeading = {
    color: '#555',
    fontSize: '16px',
};

const sectionTitle = {
    color: '#777',
    fontSize: '14px',
    marginTop: '10px',
};

const listItem = {
    fontSize: '14px',
    marginBottom: '10px',
    lineHeight: '1.4',
};

const footer = {
    fontSize: '12px',
    color: '#999',
    textAlign: 'center' as const,
    marginTop: '30px',
};
