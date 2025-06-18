import { IFaqQuestions } from './interface';

export const faqQuestionsEn: IFaqQuestions[] = [
  {
    question: 'How to send money?',
    answer: {
      response: 'Please follow these steps to send money from the USA :',
      description: [
        'Sign uo or log in to Xafpay',
        'Complete your KYC verification',
        'Link your bank account and fund account',
        "Enter recipient's detail and initiate transfer",
      ],
    },
  },
  {
    question: 'What types of documents do I need to complete KYC?',
    answer: {
      response: 'Any one of the following documents is accepted:',
      description: [
        'Passport',
        'Passport Card',
        "Driver's Licence",
        'National ID Card',
        'Permanent Resident Card',
        'Visa or Work Permit',
      ],
    },
  },
  {
    question: 'Can I send money anytime?',
    answer: {
      response:
        'yes Xafpay operates 24/7 including weekends and public holidays',
    },
  },
  {
    question: 'Which countries can I send money to?',
    answer: {
      response:
        'Xafpay currently enables money tranfers to Camerron, with more currencies and countries coming soon.',
    },
  },
  {
    question: 'What are your transfer fees?',
    answer: {
      response: 'Zafpay offers zero transaction fees',
    },
  },
  {
    question: 'What are the exchange rates?',
    answer: {
      response:
        'We offer unbeatable rates better than standard global exchange rates.',
    },
  },
  {
    question: 'What is the transfer limit?',
    answer: {
      response: 'Our transfer limit is set as follow :',
      description: [
        'Without SSN: $2,999 per transfer/day, $15,000/week.',
        'With SSN: $5,000 per transfer/day, $15,000/week.',
      ],
    },
  },
  {
    question: 'How long does it take to send my money?',
    answer: {
      response:
        'Transfers are instant. It takes a few seconds to deliver your funds to the recipient.',
    },
  },
];

export const faqQuestionsFr: IFaqQuestions[] = [
  {
    question: 'Comment envoyer de l’argent ?',
    answer: {
      response:
        'Suivez ces étapes pour envoyer de l’argent depuis les États-Unis :',
      description: [
        'Inscrivez-vous ou connectez-vous à Xafpay',
        'Complétez votre vérification KYC',
        'Lieez votre compte bancaire et approvisionnez votre compte',
        'Entrez les détails du destinataire et lancez le transfert',
      ],
    },
  },
  {
    question: 'Quels documents faut-il pour compléter le KYC ?',
    answer: {
      response: 'Un seul des documents suivants est accepté :',
      description: [
        'Passeport',
        'Carte de passeport',
        'Permis de conduire',
        'Carte nationale d’identité',
        'Carte de résident permanent',
        'Visa ou permis de travail',
      ],
    },
  },
  {
    question: 'Puis-je envoyer de l’argent à tout moment ?',
    answer: {
      response:
        'Oui, Xafpay fonctionne 24/7, y compris les week-ends et jours fériés.',
    },
  },
  {
    question: 'À quels pays puis-je envoyer de l’argent ?',
    answer: {
      response:
        'Xafpay permet actuellement les transferts vers le Cameroun. D’autres pays et devises arrivent bientôt.',
    },
  },
  {
    question: 'Quels sont vos frais de transfert ?',
    answer: {
      response: 'Xafpay propose des frais de transaction à zéro.',
    },
  },
  {
    question: 'Quels sont vos taux de change ?',
    answer: {
      response:
        'Nous offrons des taux imbattables, meilleurs que les taux standards internationaux.',
    },
  },
  {
    question: 'Quelle est la limite de transfert ?',
    answer: {
      response: 'Nos limites de transfert sont les suivantes :',
      description: [
        'Sans SSN : 2 999 $ par transfert/jour, 15 000 $/semaine.',
        'Avec SSN : 5 000 $ par transfert/jour, 15 000 $/semaine.',
      ],
    },
  },
  {
    question: 'Combien de temps prend le transfert ?',
    answer: {
      response:
        'Les transferts sont instantanés. Quelques secondes suffisent pour que l’argent arrive au destinataire.',
    },
  },
];

export const termsOfConditionsEn: IFaqQuestions[] = [
  {
    question: 'Eligibility',
    answer: {
      response:
        'You must be at least 18 years old and legally capable of entering into a binding agreement. By using the Platform, you represent and warrant that you meet these requirements.',
    },
  },
  {
    question: 'Account Registration',
    answer: {
      response:
        'You must register for an account to use most services on the Platform. You agree to: ',
      description: [
        'Provide accurate and complete information',
        'Maintain the security of your account credentials',
        'Notify us immediately of any unauthorized access or breach',
        'Comply with all applicable laws, regulations, and policies of the Platform',
        'Provide accurate and complete information',
      ],
    },
  },
  {
    question: 'Services Offered',
    answer: {
      response: 'Xafpay enables users to: ',
      description: [
        'Send and receive domestic and international payments',
        'Store and manage digital or fiat balances',
        'Purchase from partnered merchants or transfer to linked accounts. Services may be modified or discontinued at any time.',
      ],
    },
  },
  {
    question: 'Fees and Charges',
    answer: {
      response:
        'Xafpay may charge fees for transactions, conversions, or service access as disclosed within the Platform. Your continued use confirms your acceptance of such fees.',
    },
  },
  {
    question: 'Regulatory Complience and KYC',
    answer: {
      response:
        'You agree to comply with all relevant U.S. regulations, including Anti-Money Laundering (AML), Know Your Customer (KYC), and Combating the Financing of Terrorism (CFT) requirements. We may request identity verification documents or decline services where compliance is not satisfied.',
    },
  },
  {
    question: 'User Responsabilities',
    answer: {
      response: 'You agree not to: ',
      description: [
        'Use the Platform for illegal or fraudulent activity',
        'Attempt to access accounts or features without authorization',
        'Interfere with or disrupt the integrity or performance of the Platform',
        'Violate any applicable federal, state, or local law.',
      ],
    },
  },
  {
    question: 'Service Suspension or Termination',
    answer: {
      response:
        'We reserve the right to suspend or terminate your access to the Platform for any reason, including breach of these Terms, fraud, or regulatory enforcement.',
    },
  },
  {
    question: 'Intellectual Property',
    answer: {
      response:
        'All Xafpay content, software, and branding are protected by U.S. and international intellectual property laws. You may not copy, modify, or reuse our content without explicit written permission.',
    },
  },
  {
    question: 'Disclaimers and Limitation of Liability',
    answer: {
      response:
        "THE PLATFORM IS PROVIDED 'AS IS' WITHOUT WARRANTIES OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, XAFPAY DISCLAIMS ALL IMPLIED WARRANTIES AND SHALL NOT BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM.",
    },
  },
  {
    question: 'Privacy',
    answer: {
      response:
        'Your use of the Platform is subject to our Privacy Policy. By continuing to use the service, you agree to the collection and use of information as described therein.',
    },
  },
  {
    question: 'Governing Law and Juirisdiction',
    answer: {
      response:
        'These Terms shall be governed by the laws of the State of Montana and applicable U.S. federal law. Any disputes shall be resolved exclusively in the state or federal courts located in Kalispell, Montana, USA.',
    },
  },
  {
    question: 'Amendments',
    answer: {
      response:
        'We may revise these Terms from time to time. Material changes will be notified via the Platform. Continued use of our services following such changes constitutes acceptance.',
    },
  },
];

export const termsOfConditionsFr: IFaqQuestions[] = [
  {
    question: 'Eligibilité',
    answer: {
      response:
        'Vous devez avoir au moins 18 ans et être légalement capable de conclure un contrat contraignant. En utilisant la Plateforme, vous déclarez et garantissez que vous remplissez ces conditions.',
    },
  },
  {
    question: 'Création de compte',
    answer: {
      response:
        'Vous devez créer un compte pour utiliser la plupart des services de la Plateforme. Vous acceptez de : ',
      description: [
        'Fournir des informations exactes et complètes',
        'Maintenir la sécurité de vos identifiants de compte',
        'Nous informer immédiatement de tout accès non autorisé ou violation',
        'Respecter toutes les lois, réglementations et politiques applicables de la Plateforme',
        'Fournir des informations exactes et complètes',
      ],
    },
  },
  {
    question: 'Services proposés',
    answer: {
      response: 'Xafpay permet aux utilisateurs de : ',
      description: [
        'Envoyer et recevoir des paiements nationaux et internationaux',
        'Stocker et gérer des soldes numériques ou fiduciaires',
        'Effectuer des achats auprès de marchands partenaires ou transférer vers des comptes liés. Les services peuvent être modifiés ou interrompus à tout moment.',
      ],
    },
  },
  {
    question: 'Frais et charges',
    answer: {
      response:
        'Xafpay peut facturer des frais pour les transactions, conversions ou accès aux services, tels que divulgués sur la Plateforme. Votre utilisation continue confirme votre acceptation de ces frais.',
    },
  },
  {
    question: 'Conformité réglementaire et KYC',
    answer: {
      response:
        "Vous acceptez de respecter toutes les réglementations américaines applicables, y compris les exigences de lutte contre le blanchiment d'argent (AML), de connaissance du client (KYC) et de lutte contre le financement du terrorisme (CFT). Nous pouvons demander des documents de vérification d'identité ou refuser les services si la conformité n'est pas satisfaite.",
    },
  },
  {
    question: "Responsabilités de l'utilisateur",
    answer: {
      response: 'Vous acceptez de ne pas : ',
      description: [
        'Utiliser la Plateforme pour des activités illégales ou frauduleuses',
        "Tenter d'accéder à des comptes ou fonctionnalités sans autorisation",
        "Porter atteinte à l'intégrité ou aux performances de la Plateforme",
        'Enfreindre toute loi fédérale, étatique ou locale applicable.',
      ],
    },
  },
  {
    question: 'Suspension ou résiliation du service',
    answer: {
      response:
        "Nous nous réservons le droit de suspendre ou de résilier votre accès à la Plateforme pour quelque raison que ce soit, y compris en cas de violation de ces Conditions, de fraude ou d'application réglementaire.",
    },
  },
  {
    question: 'Propriété intellectuelle',
    answer: {
      response:
        'Tous les contenus, logiciels et marques de Xafpay sont protégés par les lois américaines et internationales sur la propriété intellectuelle. Vous ne pouvez pas copier, modifier ou réutiliser notre contenu sans autorisation écrite explicite.',
    },
  },
  {
    question: 'Exclusions de garantie et limitation de responsabilité',
    answer: {
      response:
        "LA PLATEFORME EST FOURNIE 'TELLE QUELLE' SANS GARANTIE D'AUCUNE SORTE. DANS LA LIMITE MAXIMALE AUTORISÉE PAR LA LOI, XAFPAY EXCLUT TOUTES GARANTIES IMPLICITES ET NE POURRA ÊTRE TENU RESPONSABLE DE TOUT DOMMAGE INDIRECT, SPÉCIAL, ACCESSOIRE OU CONSÉQUENT DÉCOULANT DE OU LIÉ À VOTRE UTILISATION DE LA PLATEFORME.",
    },
  },
  {
    question: 'Confidentialité',
    answer: {
      response:
        "Votre utilisation de la Plateforme est soumise à notre Politique de confidentialité. En continuant à utiliser le service, vous acceptez la collecte et l'utilisation des informations comme y décrit.",
    },
  },
  {
    question: 'Droit applicable et juridiction',
    answer: {
      response:
        "Ces Conditions sont régies par les lois de l'État du Montana et les lois fédérales américaines applicables. Tout litige sera résolu exclusivement par les tribunaux étatiques ou fédéraux situés à Kalispell, Montana, USA.",
    },
  },
  {
    question: 'Modifications',
    answer: {
      response:
        'Nous pouvons réviser ces Conditions périodiquement. Les changements importants seront notifiés via la Plateforme. Votre utilisation continue de nos services après ces modifications constitue une acceptation.',
    },
  },
];

export const privacyPolicyEn: IFaqQuestions[] = [
  {
    question: 'Scope and Applicability',
    answer: {
      response: 'This Policy applies to personal data collected when you:',
      description: [
        'Use our website (www.xafpay.com) or mobile app',
        'Sign up, transact, or communicate with us',
        'Interact with us via email, phone, or support channels',
        'Engage with us through third-party services or referrals It applies to both online and offline interactions',
      ],
    },
  },
  {
    question: 'Information We Collect',
    answer: {
      response: 'Information you provide directly :',
      description: [
        'Full Name, Date of Birth, Nationality',
        'Address, Phone Number, Email Address',
        'Government-issued ID, Social Security Number (if required)',
        'Bank or Card Information, Transaction Details',
        'Photo and Identity Verification (e.g., selfie with ID)',
        'Communications and support interactions Information About Recipients:',
        "Recipient's name, contact details, and banking info",
        'Purpose of payment',
        'Optional access to your contact list (with consent) Third-Party Sources:',
        'Authentication providers (e.g., Google, Apple)',
        'Referral partners and data enrichment services',
        'Social media and marketing platforms',
        'AML/KYC providers Automatically Collected Data:',
        'Device information (browser, OS, IP address)',
        'App and website usage patterns',
        'Cookie and tracking data (see Cookie Policy)',
      ],
    },
  },
  {
    question: 'How We Use Your Information',
    answer: {
      response: '',
      description: [
        'Deliver our Services, including cross-border payments, wallet services, and transaction processing',
        'Authenticate users and comply with AML/CFT obligations',
        'Provide support and respond to inquiries',
        'Enhance and personalize the user experience',
        'Conduct analytics, improve services, and develop new features',
        'Detect and prevent fraud or unauthorized activities',
        'Fulfill legal and contractual obligations',
        'Send service communications and marketing content (with opt-out rights)',
      ],
    },
  },
  {
    question: 'Sharing Your Information',
    answer: {
      response: '',
      description: [
        'Service Providers (e.g., banks, identity verification services, infrastructure providers)',
        'Regulators and Law Enforcement when required by applicable law or court order',
        'Business Partners for processing transactions or co-branded services',
        'Affiliates and Corporate Transactions such as a merger or acquisition',
        'Marketing Partners (only with your explicit consent) We do not sell your personal data.',
      ],
    },
  },
  {
    question: 'Data Retention',
    answer: {
      response:
        'We retain personal data only as long as necessary for the list below. Data no longer needed is securely deleted or anonymized :',
      description: [
        'Service delivery',
        'Compliance with laws (e.g., tax, AML)',
        'Defense against legal claims',
        'Recordkeeping, auditing, and analytics',
      ],
    },
  },
  {
    question: 'Your Rights and Choices',
    answer: {
      response: 'To exercise these rights, email us at: privacy@xafpay.com',
      description: [
        'Access, correct, or delete your personal information',
        'Object to or restrict certain types of processing',
        'Withdraw consent at any time',
        'Deactivate your account',
        'Opt out of marketing communications',
      ],
    },
  },
  {
    question: 'Security of Your Information',
    answer: {
      response:
        'We use reasonable administrative, technical, and physical safeguards, including:',
      description: ['Encrypted transmissions and storage'],
    },
  },
];

export const privacyPolicyFr: IFaqQuestions[] = [
  {
    question: 'Portée et Applicabilité',
    answer: {
      response:
        "Cette Politique s'applique aux données personnelles collectées lorsque vous :",
      description: [
        'Utilisez notre site web (www.xafpay.com) ou application mobile',
        'Vous inscrivez, effectuez des transactions ou communiquez avec nous',
        'Interagissez avec nous par email, téléphone ou canaux de support',
        "Collaborez avec nous via des services tiers ou des recommandations. Elle s'applique aux interactions en ligne et hors ligne",
      ],
    },
  },
  {
    question: 'Informations que nous Collectons',
    answer: {
      response: 'Informations que vous fournissez directement :',
      description: [
        'Nom complet, date de naissance, nationalité',
        'Adresse, numéro de téléphone, adresse email',
        "Pièce d'identité gouvernementale, numéro de sécurité sociale (si requis)",
        'Informations bancaires ou de carte, détails des transactions',
        "Photo et vérification d'identité (ex : selfie avec pièce d'identité)",
        'Communications et interactions avec le support',
        'Informations sur les bénéficiaires :',
        'Nom du bénéficiaire, coordonnées et informations bancaires',
        'Objet du paiement',
        'Accès facultatif à votre liste de contacts (avec consentement)',
        'Sources tierces :',
        "Fournisseurs d'authentification (ex : Google, Apple)",
        "Partenaires de recommandation et services d'enrichissement de données",
        'Réseaux sociaux et plateformes marketing',
        'Fournisseurs AML/KYC',
        'Données collectées automatiquement :',
        "Informations sur l'appareil (navigateur, OS, adresse IP)",
        "Modèles d'utilisation de l'application et du site web",
        'Cookies et données de suivi (voir Politique des Cookies)',
      ],
    },
  },
  {
    question: 'Comment nous Utilisons vos Informations',
    answer: {
      response: '',
      description: [
        'Fournir nos Services, y compris les paiements transfrontaliers, services de portefeuille et traitement des transactions',
        'Authentifier les utilisateurs et se conformer aux obligations AML/CFT',
        'Fournir un support et répondre aux demandes',
        "Améliorer et personnaliser l'expérience utilisateur",
        'Effectuer des analyses, améliorer les services et développer de nouvelles fonctionnalités',
        'Détecter et prévenir les fraudes ou activités non autorisées',
        'Remplir les obligations légales et contractuelles',
        'Envoyer des communications de service et du contenu marketing (avec droit de désinscription)',
      ],
    },
  },
  {
    question: 'Partage de vos Informations',
    answer: {
      response: '',
      description: [
        "Prestataires de services (ex : banques, services de vérification d'identité, fournisseurs d'infrastructure)",
        "Régulateurs et forces de l'ordre lorsque requis par la loi applicable ou ordonnance du tribunal",
        'Partenaires commerciaux pour le traitement des transactions ou services co-brandés',
        "Filiales et transactions d'entreprise comme une fusion ou acquisition",
        'Partenaires marketing (uniquement avec votre consentement explicite). Nous ne vendons pas vos données personnelles.',
      ],
    },
  },
  {
    question: 'Conservation des Données',
    answer: {
      response:
        'Nous conservons les données personnelles seulement aussi longtemps que nécessaire pour les finalités ci-dessous. Les données non nécessaires sont supprimées ou anonymisées de manière sécurisée :',
      description: [
        'Fourniture des services',
        'Conformité aux lois (ex : fiscales, AML)',
        'Défense contre des réclamations légales',
        'Tenue de registres, audit et analyses',
      ],
    },
  },
  {
    question: 'Vos Droits et Choix',
    answer: {
      response:
        'Pour exercer ces droits, contactez-nous à : privacy@xafpay.com',
      description: [
        'Accéder, corriger ou supprimer vos informations personnelles',
        'Vous opposer ou limiter certains types de traitement',
        'Retirer votre consentement à tout moment',
        'Désactiver votre compte',
        'Vous désinscrire des communications marketing',
      ],
    },
  },
  {
    question: 'Sécurité de vos Informations',
    answer: {
      response:
        'Nous utilisons des mesures de protection administratives, techniques et physiques raisonnables, notamment :',
      description: ['Transmissions et stockage chiffrés'],
    },
  },
];
