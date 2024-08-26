import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  senderName: string;
  senderTelephone: number;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  senderName,
  senderTelephone,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nieuw bericht van uw contactformulier.</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading>{senderName} heeft u volgend bericht gestuurd:</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Gegevens:</Text>
              <Text>Naam: {senderName}</Text>
              <Text>Email: {senderEmail}</Text>
              <Text>Telefoon: {senderTelephone}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
