
import { styled, Box, useTheme } from '@mui/system'
import { themeShadows } from 'app/components/MatxTheme/themeColors'
import { topBarHeight } from 'app/utils/constant'
import Brand from '../../Brand/Brand'
import React, { useState } from 'react'
import { Drawer, IconButton, Icon } from '@mui/material'
import { convertHexToRGB } from 'app/utils/utils'
import { H4, Paragraph } from 'app/components/Typography'

const TopbarRoot = styled('div')(() => ({
    top: 0,
    zIndex: 96,
    transition: 'all 0.3s ease',
    boxShadow: themeShadows[8],
    height: topBarHeight,
}))

const TopbarContainer = styled(Box)(({ theme }) => ({
    padding: '8px',
    paddingLeft: 18,
    paddingRight: 20,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    [theme.breakpoints.down('xs')]: {
        paddingLeft: 14,
        paddingRight: 16,
    },
}))

const Layout1Topbar = () => {
    const anchor = 'right'
    const [state, setState] = useState({
        right: false,
    });
    const { palette } = useTheme()
    const textPrimary = palette.text.primary

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))
        {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    return (
        <TopbarRoot>
            <TopbarContainer>
                <Box display="flex">
                    <Brand />
                </Box>
                <IconButton onClick={toggleDrawer(anchor, true)}>
                    <Icon
                        fontSize="small"
                        sx={{
                            color: `rgba(${convertHexToRGB(
                                textPrimary
                            )}, 0.87)`,
                        }}
                    >
                        info
                    </Icon>
                </IconButton>
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    <Box p={4} sx={{ width: 250, paddingTop: '20px' }}>
                        <H4 sx={{ mt: 0, mb: 2 }}>
                            Intruction
                        </H4>
                        <Paragraph
                            sx={{
                                mt: 0,
                                mb: 1,
                                overflow: 'hidden'
                            }}
                        >
                            There are 5 pins representing 5 different Hydrophones on the map. Feel free to click on each of them to explore related data visualzitions.
                        </Paragraph>
                    </Box>
                    <Box p={4} sx={{ width: 250, paddingTop: '0px' }}>
                        <H4 sx={{ mt: 0, mb: 2 }}>
                            Notice
                        </H4>
                        <Box
                            sx={{
                                mt: 0,
                                mb: 1,
                                overflow: 'hidden'
                            }}
                        >
                            For Spectrogram & Octave Band:
                            <div></div>
                            <br />1. feel free to download jpg of the graph by clicking the "save" icon on the right side of the graph.
                            <div></div>
                            <br />
                            2. click the download button to download the data that's used to make the visualization in csv format
                        </Box>
                    </Box>
                </Drawer>
            </TopbarContainer>
        </TopbarRoot>
    )
}

export default React.memo(Layout1Topbar)
