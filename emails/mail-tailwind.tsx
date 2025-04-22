import {
    Body,
    Column,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';


export const VercelInviteUserEmail = () => {

    return (
        <Html>
            <Head />
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans px-2">
                    <Container className="my-[40px] mx-auto max-w-[465px]">
                        <Heading as='h1' className='bg-purple-500 text-center'>Nicole the Math Lady</Heading>
                        <Section>
                            <Heading as="h2">Quiz Report for Alan</Heading>
                            <Text>Lesson 1 • April 20,2025</Text>
                        </Section>
                        <Section className='w-full'>
                            <Heading as="h3">Performance Summary</Heading>
                            <Row>
                                <Column className='p-2 text-center bg-blue-200 w-1/2'>
                                    <Text>10</Text>
                                    <Text>Total Questions</Text>
                                </Column>
                                <Column className='p-2 text-center bg-pink-200 w-1/2'>
                                    <Text>0</Text>
                                    <Text>Correct</Text>
                                </Column>
                            </Row>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default VercelInviteUserEmail;
