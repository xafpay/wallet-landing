import { Fab, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTheme } from '@mui/material/styles';

export function WhatsAppButton() {
    const theme = useTheme();

    const phoneNumber = '13303484326';
    const defaultMessage = 'Hello! I need help.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

    return (
        <Zoom in={true} style={{ transitionDelay: '300ms' }}>
            <Fab
                color="primary"
                aria-label="WhatsApp"
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    right: 20,
                    zIndex: theme.zIndex.speedDial,
                    boxShadow: theme.shadows[10],
                    '&:hover': {
                        backgroundColor: '#128C7E', // Darker green on hover
                    },
                }}
                href={whatsappUrl}
                rel="noopener noreferrer"
            >
                <WhatsAppIcon sx={{ fontSize: 32 }} />
            </Fab>
        </Zoom>
    );
};
