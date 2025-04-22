import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
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
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Section className="mt-[32px]">
                            <Img
                                src={`localhost:3002/static/logo.png`}
                                width="40"
                                height="37"
                                alt="Logo"
                                className="my-0 mx-auto"
                            />
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Join Us
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px] text-red-400">
                            Hello Alan,
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default VercelInviteUserEmail;
