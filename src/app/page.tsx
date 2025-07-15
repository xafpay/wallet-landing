'use client';

import {
  ContactUsSection,
  Cta,
  Engagement,
  FAQ,
  Hero,
  HowItWorks,
  LocationSection,
  PageLayout,
  PaymentMethods,
  TrustSection,
  WhatsAppButton,
} from '@components';
import { keyframes } from '@emotion/react';

export default function Index() {
  const emotionStyle = keyframes`
from {
opacity: 0;
scale: 0.5;
}
to {
opacity: 1;
scale: 1;
}
`;
  const animationStyle = {
    animation: `${emotionStyle} linear`,
    animationTimeline: 'view()',
    animationRange: 'entry 20% cover 40%',
  };
  return (
    <PageLayout>
      <Hero />
      <LocationSection {...animationStyle} />
      <TrustSection {...animationStyle} />
      <Engagement {...animationStyle} />
      <HowItWorks {...animationStyle} />
      <ContactUsSection {...animationStyle} />
      <PaymentMethods {...animationStyle} />
      <Cta {...animationStyle} />
      <FAQ {...animationStyle} />
      <WhatsAppButton />
    </PageLayout>
  );
}
