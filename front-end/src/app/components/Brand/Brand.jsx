import React from 'react'
import { Span } from '../Typography'
import { styled, Box } from '@mui/system'
import useSettings from 'app/hooks/useSettings'
import MatxLogo from '../MatxLogo/MatxLogo'
import { H4 } from 'app/components/Typography'

const BrandRoot = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const StyledSpan = styled(Span)(({ theme, mode }) => ({
    fontSize: 18,
    marginLeft: '.5rem',
    display: mode === 'compact' ? 'none' : 'block',
}))

const IMG = styled('img')(() => ({
    width: '240px',
    marginLeft: '15px'
}))

const Brand = ({ children }) => {
    const { settings } = useSettings()
    const leftSidebar = settings.layout1Settings.leftSidebar
    const { mode } = leftSidebar

    return (
        <BrandRoot sx={{ py: 1 }}>
            <Box display="flex" alignItems="center">
                <MatxLogo />
                <StyledSpan mode={mode} className="sidenavHoverShow">
                    <H4>Ocean Data Lab</H4>
                </StyledSpan>
                <IMG src={'/assets/images/logos/uw.png'} />
            </Box>
            <Box
                className="sidenavHoverShow"
                sx={{ display: mode === 'compact' ? 'none' : 'block' }}
            >
                {children || null}
            </Box>
        </BrandRoot>
    )
}

export default Brand
