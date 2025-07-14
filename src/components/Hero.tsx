import arrowDownwardIcon from '@iconify/icons-fluent/arrow-down-20-regular';
import arrowRight from '@iconify/icons-fluent/arrow-right-28-regular';
import down from '@iconify/icons-fluent/chevron-down-12-filled';
import { Icon } from '@iconify/react';
import {
  Box,
  Button,
  Chip,
  Divider,
  TextField,
  Typography,
} from '@mui/material';
import { useTheme } from '@xafpay/theme';
import { CurrencyEntity } from '@xafpay/types';
import anime from 'animejs';
import { useCurrencies } from 'api/hooks/useCurrency';
import Lottie from 'lottie-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import CurrencyMenu from './currencyMeny';
// Assuming you have a Lottie JSON animation file in your public folder
import animationData from '../../../public/assets/animation.json';


export function Hero() {
  const { formatMessage, formatNumber } = useIntl();
  const theme = useTheme();
  const heroRef = useRef(null);

  const [amount, setAmount] = useState<number | string>(1);
  const [currencyAnchorEl, setCurrencyAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [activeCurrency, setActiveCurrency] = useState<CurrencyEntity>();

  const { data: currencies, isFetching: areCurrenciesLoading } =
    useCurrencies();

  const correspondingFlags: { [key: string]: string } = {
    USD: '/assets/usa-flag.jpg',
    CAD: '/assets/canada-flag.png',
  };

  useEffect(() => {
    setActiveCurrency(currencies?.[0]);
    // Animate the hero section on mount
    if (heroRef.current) {
      anime({
        targets: heroRef.current,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeOutExpo',
      });
    }
  }, [currencies]);

  /* Handle amount by checking if number value has been typed 
     if so not, clear the value textfield
  */
  const handleChange = (e) => {
    const { value } = e.target;
    if (value === 0 || !isNaN(value)) {
      setAmount("");
    }
    setAmount(value);
  }
  return (
    <>
      <CurrencyMenu
        anchorEl={currencyAnchorEl}
        handleClose={() => setCurrencyAnchorEl(null)}
        open={!!currencyAnchorEl}
        supportedCurrencies={currencies}
        isLoading={areCurrenciesLoading}
        selectItem={setActiveCurrency}
      />
      <Box
        ref={heroRef} // Add ref for animejs
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            mobile: '1fr',
            tablet: 'repeat(2, 1fr)',
          },
          gridTemplateRows: {
            mobile: 'auto auto auto', // Adjust for Lottie animation
            tablet: 'auto auto',
          },
          padding: {
            mobile: '20px 16px 40px', // Adjusted padding for mobile
            tablet: '100px 80px'
          },
          bgcolor: 'rgba(250, 250, 253, 1)',
          rowGap: { mobile: 3, tablet: 4 } // Adjusted rowGap for mobile
        }}
      >
        <Box
          sx={{
            display: 'grid',
            textAlign: { mobile: 'center', tablet: 'start' }, // Center text on mobile
            rowGap: { mobile: 2, tablet: 4 }, // Adjusted rowGap for mobile
            alignSelf: 'center',
            order: { mobile: 2, tablet: 1 } // Change order on mobile
          }}
        >
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: { mobile: 'center', tablet: 'flex-start' }, // Center heading on mobile
            columnGap: 1
          }}>
            <Typography
              variant="h1"
              className="hero-title" // Add class for animejs
              sx={{
                fontFamily: 'Space Grotesk',
                fontWeight: 'bold',
                fontSize: {
                  mobile: '28px', // Adjusted font size for mobile
                  tablet: '48px',
                },
                lineHeight: '120%',
                color: '#0E103A',
              }}
            >
              {formatMessage({ id: 'heroMessage' })}
            </Typography>
            <Typography
              variant="h1"
              className="hero-title" // Add class for animejs
              sx={{
                fontFamily: 'Space Grotesk',
                fontWeight: 'bold',
                fontSize: {
                  mobile: '28px', // Adjusted font size for mobile
                  tablet: '48px',
                },
                lineHeight: '120%',
                color: theme.palette.secondary.main,
              }}
            >
              {formatMessage({ id: 'unbeatable' })}
            </Typography>
            <Typography
              variant="h1"
              className="hero-title" // Add class for animejs
              sx={{
                fontFamily: 'Space Grotesk',
                fontWeight: 'bold',
                fontSize: {
                  mobile: '28px', // Adjusted font size for mobile
                  tablet: '48px',
                },
                lineHeight: '120%',
                color: '#0E103A',
              }}
            >
              {formatMessage({ id: 'rates' })}
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className="hero-subtitle" // Add class for animejs
            sx={{
              color: 'rgba(28, 29, 39, 0.80)',
              leadingTrim: 'both',
              textEdge: 'cap',
              fontFamily: 'Space Grotesk',
              fontSize: { mobile: '14px', tablet: '24px' }, // Adjusted font size for mobile
              fontWeight: 500,
              lineHeight: '130%',
              textAlign: { mobile: 'center', tablet: 'start' } // Center text on mobile
            }}
          >
            {formatMessage({ id: 'descriptionheroMessage' })}
          </Typography>
          <Box sx={{
            display: 'grid',
            gridAutoFlow: {
              mobile: 'row',
              tablet: 'column'
            },
            justifyContent: {
              mobile: 'center', // Center items on mobile
              tablet: 'flex-start'
            },
            alignItems: 'center',
            gap: 2
          }}>
            <Typography
              variant='h4'
              sx={{
                fontFamily: 'Space Grotesk',
                color: 'rgba(28, 29, 39, 0.80)',
                fontSize: { mobile: '14px', tablet: 'inherit' } // Adjusted font size for mobile
              }}
            >
              {formatMessage({ id: 'doYouHaveAnAccount' })}
            </Typography>
            <Button
              variant="contained"
              size="medium"
              className="hero-button" // Add class for animejs
              sx={{
                width: {
                  mobile: '100%',
                  tablet: '12rem'
                },
                fontSize: '14px',
                fontFamily: 'Poppins',
              }}
              onClick={() =>
                window.open(`${process.env.NEXT_PUBLIC_APP_URL}/register`, '_blank')
              }
            >
              {formatMessage({ id: 'register' })}
            </Button>
          </Box>
        </Box>

        {/* Lottie Animation - Placed above text on mobile */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            order: { mobile: 1, tablet: 2 }, // Change order on mobile
            paddingBottom: { mobile: 2, tablet: 0 } // Add some space below animation on mobile
          }}
        >
          <Lottie animationData={animationData} style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
        </Box>

        <Box
          className="hero-form" // Add class for animejs
          sx={{
            display: 'grid',
            border: '1px solid darkgray',
            borderRadius: 3,
            boxShadow: {
              mobile: '0px 5px 10px rgba(21, 124, 251, 0.2)', // Softer shadow for mobile
              tablet: '-40px -40px 8px rgba(21, 124, 251, 0.3), 0px 7px 8px rgba(251, 1, 2, 0.15)'
            },
            maxWidth: { mobile: '100%', tablet: '25rem' }, // Full width on mobile
            backgroundColor: theme.palette.background.paper,
            justifySelf: 'center',
            order: { mobile: 3, tablet: 3 } // Ensure form is last on mobile
          }}
        >
          <Box sx={{
            display: 'grid',
            rowGap: 0.5,
            backgroundColor: theme.palette.primary.main,
            borderRadius: '12px 12px 0 0',
            padding: 1,
            color: 'white'
          }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                fontFamily: 'Space Grotesk',
                fontWeight: 600,
                lineHeight: '130%',
                fontSize: { mobile: '16px', tablet: 'inherit' } // Adjusted font size for mobile
              }}
            >
              {formatMessage({ id: 'feesRates' })}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                fontFamily: 'Space Grotesk',
                fontWeight: 600,
                lineHeight: '130%',
                fontSize: { mobile: '14px', tablet: 'inherit' } // Adjusted font size for mobile
              }}
            >
              {activeCurrency ?
                `1 ${activeCurrency.currency} = XAF ${activeCurrency.xaf_rate}`
                :
                'loading...'
              }
            </Typography>
          </Box>
          <Box sx={{
            display: 'grid',
            rowGap: { mobile: 1.5, tablet: 2 }, // Adjusted rowGap for mobile
            padding: { mobile: '12px', tablet: '0 16px 16px' } // Adjusted padding for mobile
          }}>
            <Divider />
            <Box
              sx={{
                display: 'grid',
                textAlign: 'start',
              }}
            >
              <Typography
                variant="p3r"
                sx={{
                  fontSize: { mobile: '10px', tablet: '12px' },
                  lineHeight: '160%',
                  color: '#12192C',
                  fontFamily: 'Poppins',
                }}
              >
                {formatMessage({ id: 'whenYouSend' })}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <TextField
                  variant="standard"
                  type="number"
                  placeholder="100 $"
                  sx={{
                    '& .MuiInputBase-input': {
                      textAlign: 'start',
                      fontSize: { mobile: '20px', tablet: '36px' }, // Adjusted font size for mobile
                      fontWeight: '700',
                      fontFamily: 'Poppins',
                      width: { mobile: 'calc(100% - 70px)', tablet: '15rem' }, // Adjust width for mobile
                    },
                    '& .MuiInput-root::before': {
                      border: 'none',
                    },
                  }}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  onChange={handleChange}
                  value={amount}
                  disabled={areCurrenciesLoading}
                />
                <Box
                  sx={{
                    display: 'grid',
                    gridAutoFlow: 'column',
                    columnGap: 1,
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => setCurrencyAnchorEl(e.currentTarget)}
                >
                  {activeCurrency && (
                    <Image
                      src={correspondingFlags[activeCurrency.currency]}
                      width={24}
                      height={24}
                      alt={`${activeCurrency} flag`}
                    />
                  )}
                  <Typography
                    variant="p1m"
                    sx={{
                      fontFamily: 'Space Grotesk',
                      fontSize: { mobile: '14px', tablet: '24px' }, // Adjusted font size for mobile
                      lineHeight: '130%',
                    }}
                  >
                    {activeCurrency?.currency}
                  </Typography>
                  <Icon icon={down} />
                </Box>
              </Box>
            </Box>
            <Divider
              variant="fullWidth"
              sx={{
                backgroundColor: 'transparent',
                borderStyle: 'dashed',
              }}
            >
              <Chip
                label={<Icon icon={arrowDownwardIcon} />}
                sx={{
                  backgroundColor: '#0E103A',
                  color: 'white',
                  fontSize: '1rem', // Adjusted icon size
                  height: '30px', // Adjusted chip size
                  width: '30px',  // Adjusted chip size
                  '& .MuiChip-label': {
                    padding: 0,
                  },
                }}
              />
            </Divider>
            <Box
              sx={{
                display: 'grid',
                textAlign: 'start',
              }}
            >
              <Typography
                variant="p3r"
                sx={{
                  fontSize: { mobile: '10px', tablet: '12px' },
                  lineHeight: '160%',
                  color: '#12192C',
                  fontFamily: 'Poppins',
                }}
              >
                {formatMessage({ id: 'WillReceive' })}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'end',
                    gap: 1,
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      textAlign: 'start',
                      fontSize: { mobile: '20px', tablet: '36px' }, // Adjusted font size for mobile
                      fontWeight: '700',
                      fontFamily: 'Poppins',
                    }}
                  >
                    {amount && activeCurrency
                      ? formatNumber(
                        Number((Number(amount) * activeCurrency.xaf_rate).toFixed(2))
                      )
                      : '...'}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'grid',
                    gridAutoFlow: 'column',
                    columnGap: 1,
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src="/assets/cameroon-flag.png"
                    width={24}
                    height={24}
                    alt="cameroon flag"
                  />
                  <Typography
                    variant="p1m"
                    sx={{
                      fontFamily: 'Space Grotesk',
                      fontWeight: 500,
                      fontSize: { mobile: '14px', tablet: '24px' }, // Adjusted font size for mobile
                      lineHeight: '130%',
                    }}
                  >
                    XAF
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box
              sx={{
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'space-between',
                gridAutoFlow: 'column',
              }}
            >
              <Typography
                variant="p2m"
                sx={{
                  fontSize: { mobile: '10px', tablet: '12px' },
                  lineHeight: '160%',
                  fontFamily: 'Poppins',
                }}
              >
                {formatMessage({ id: 'OurTransactionFees' })}
              </Typography>
              <Typography
                variant="p2m"
                sx={{
                  fontSize: { mobile: '10px', tablet: '12px' },
                  lineHeight: '160%',
                  fontFamily: 'Poppins',
                  color: theme.palette.primary.dark,
                  fontWeight: 'bold',
                }}
              >
                {formatMessage({ id: 'feesRate' })}
              </Typography>
            </Box>
            <Divider />
            <Button
              size="large"
              variant="contained"
              color="primary"
              endIcon={<Icon icon={arrowRight} />}
              sx={{
                fontSize: { mobile: '1rem', tablet: '1.2rem'}, // Adjusted font size for mobile
                fontWeight: 'bold',
                fontFamily: 'Poppins',
                width: '100%',
              }}
              onClick={() =>
                window.open(
                  `${process.env.NEXT_PUBLIC_APP_URL}/remittance?amount=${amount}&currency=${activeCurrency?.currency}`,
                  '_blank'
                )
              }
              disabled={areCurrenciesLoading || !activeCurrency}
            >
              {formatMessage({ id: 'transferNow' })}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
