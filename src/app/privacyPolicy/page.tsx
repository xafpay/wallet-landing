'use client'

import { SectionTitle, TermsOfConditions } from "@components";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useLanguage } from "@xafpay/theme";
import { IFaqQuestions, privacyPolicyEn, privacyPolicyFr } from "@xafpay/types";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";

export default function PrivacyPolicy() {
    const { formatMessage, formatDate } = useIntl();
    const { activeLanguage } = useLanguage();

    const [privacyPolicy, setPrivacyPolicy] =
        useState<IFaqQuestions[]>();

    useEffect(() => {
        if (activeLanguage === 'En') setPrivacyPolicy(privacyPolicyEn)
        else setPrivacyPolicy(privacyPolicyFr)
    }, [activeLanguage]);

    return (
        <Box
            maxWidth="laptop"
            sx={{
                display: 'grid',
                padding: { desktop: '0 0 48px 0', mobile: '0 16px 48px 16px' },
                justifySelf: 'center',
            }}
        >
            <SectionTitle color="#0E103A">
                {formatMessage({ id: 'privacyPolicy' })}
            </SectionTitle>
            <Typography
                variant='p2r'
                justifySelf='center'
                lineHeight={2}
            >
                {formatMessage({ id: 'updatedAs' })}{' '}
                {formatDate(new Date('2025-06-16'), {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </Typography>
            <Typography
                variant="p1r"
                sx={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '1.1rem',
                    margin: '2rem 0',
                }}
            >
                {formatMessage({ id: 'privacyPolicyDescription' })}
            </Typography>
            {privacyPolicy ? (
                privacyPolicy.map(({
                    question,
                    answer: {
                        response,
                        description
                    } }, index) => (
                    <TermsOfConditions
                        key={question}
                        number={index + 1}
                        title={question}
                        clause={response}
                        points={description}
                    />
                ))
            ) : (
                <CircularProgress sx={{
                    justifySelf: 'center'
                }} />
            )}
        </Box>
    )
}

