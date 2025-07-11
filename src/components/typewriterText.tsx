import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import { Typography } from '@mui/material';
import { useTheme } from '@xafpay/theme';

export function TypewriterText({ text }: { text: string }) {
  const theme = useTheme();
  const textRef = useRef(null);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let animation;
    let timeout;

    const typeWriter = () => {
      let currentIndex = 0;

      animation = anime({
        targets: { index: currentIndex },
        index: text.length,
        duration: 2000, // Typing speed (adjust as needed)
        easing: 'linear',
        update: (anim) => {
          currentIndex = Math.floor(anim.progress * 0.01 * text.length);
          setDisplayText(text.substring(0, currentIndex));
        },
        complete: () => {
          timeout = setTimeout(eraseText, 3000); // Pause before erasing
        },
      });
    };

    const eraseText = () => {
      let currentIndex = text.length;

      animation = anime({
        targets: { index: currentIndex },
        index: 0,
        duration: 1500, // Erasing speed (faster than typing)
        easing: 'linear',
        update: (anim) => {
          currentIndex = Math.floor(
            text.length - anim.progress * 0.01 * text.length
          );
          setDisplayText(text.substring(0, currentIndex));
        },
        complete: () => {
          timeout = setTimeout(typeWriter, 500); // Pause before retyping
        },
      });
    };

    typeWriter(); // Start the cycle

    return () => {
      if (animation) animation.pause();
      if (timeout) clearTimeout(timeout);
    };
  }, [text]);

  return (
    <Typography
      ref={textRef}
      variant="h1"
      sx={{
        fontFamily: 'Space Grotesk',
        fontWeight: 'bold',
        fontSize: { tablet: '48px', mobile: '36px' },
        lineHeight: '120%',
        color: theme.palette.secondary.main,
        minHeight: '1em', // Prevent layout shift
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        borderRight: '2px solid currentColor', // Blinking cursor
        animation: 'blink-caret 0.75s step-end infinite',
        '@keyframes blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
      }}
    >
      {displayText}
    </Typography>
  );
}
