import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';

interface VercelInviteUserEmailProps {
    username?: string;
    userImage?: string;
    invitedByUsername?: string;
    invitedByEmail?: string;
    teamName?: string;
    teamImage?: string;
    inviteLink?: string;
    inviteFromIp?: string;
    inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

export const VercelInviteUserEmail = ({
    username,
    userImage,
    invitedByUsername,
    invitedByEmail,
    teamName,
    teamImage,
    inviteLink,
    inviteFromIp,
    inviteFromLocation,
}: VercelInviteUserEmailProps) => {
    const previewText = `Join ${invitedByUsername} on Vercel`;

    return (
        <Html>
            <Head />
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans px-2">
                    <Preview>{previewText}</Preview>
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Section className="mt-[32px]">
                            <Img
                                src={`${baseUrl}/static/vercel-logo.png`}
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
                            Hello {username},
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

VercelInviteUserEmail.PreviewProps = {
    username: 'alanturing',
    userImage: `${baseUrl}/static/vercel-user.png`,
    invitedByUsername: 'Alan',
    invitedByEmail: 'alan.turing@example.com',
    teamName: 'Enigma',
    teamImage: `${baseUrl}/static/vercel-team.png`,
    inviteLink: 'https://vercel.com',
    inviteFromIp: '204.13.186.218',
    inviteFromLocation: 'São Paulo, Brazil',
} as VercelInviteUserEmailProps;

export default VercelInviteUserEmail;
