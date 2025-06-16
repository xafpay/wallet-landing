'use client';

import { PageLayout } from '@components';
import { Cta } from '@components';
import { Engagement } from '@components';
import { FAQ } from '@components';
import { Hero } from '@components';
import { HowItWorks } from '@components';
import { LocationSection } from '@components';
import { PaymentMethods } from '@components';
import { TrustSection } from '@components';
import { ContactUsSection } from '@components';


export default function Index() {

  return (
    <PageLayout>
      <Hero />
      <LocationSection />
      <TrustSection />
      <Engagement />
      <HowItWorks />
      <ContactUsSection />
      <PaymentMethods />
      <Cta />
      <FAQ />
    </PageLayout>
  );
}
