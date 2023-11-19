import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Card, Grid } from '@mui/material';
import { Zkdata } from '../../dapsjson';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import Label from './Label';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: 'auto',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Dapp() {
  const [searchValue, setSerachValue] = React.useState("")

  const filteredData:any = searchValue
  ? !!Zkdata?.length && Zkdata?.filter(item =>
      item?.name.toLowerCase().includes(searchValue.toLowerCase())
  )
  : Zkdata;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: '#0380fc' }} position="fixed">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            DappHub
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={searchValue}
              onChange={(e)=>setSerachValue(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Grid sx={{ padding: '0px 18px', mt: 9 }}>
        <Typography sx={{ color: '#000' }} >ZkSync Dapps</Typography>
        <Grid sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-between" }}>
          {filteredData?.length ? filteredData?.map((val:any, i:any) => (
            <Card key={i} sx={{ width: { xs: '100%', md: '15%' }, mt: 2, padding: '15px 50px' }}
            >
              <Grid sx={{display:'flex',justifyContent:'space-between',alignContent: 'center', alignItems: 'center'}}>
                <Grid sx={{ display: 'flex', alignContent: 'center', alignItems: 'center', gap: 1 }}>
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      objectFil: 'contain',
                      background: val?.color ? val.color : `#0380fc`,
                      color: `#0380fc`
                    }}
                    src={val.icon}
                  >
                    {val.icon ?
                      <img src={val.icon} style={{ objectFit: 'contain', height: 60, width: 60 }} />
                      :
                      <SubscriptionsTwoToneIcon />

                    }
                  </Avatar>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    sx={{
                      fontSize: 16
                    }}
                  >
                    {val.name}
                    {val.risk ?
                      <Typography
                        sx={{
                          fontSize: 14
                        }}
                      >
                        <Label color="error">
                          <Box
                            component="span"
                            sx={{
                              fontSize: 11,
                              textTransform: 'uppercase',
                              fontWeight: 'bold'
                            }}
                          >
                            {"Risky"}
                          </Box>
                        </Label>

                      </Typography>
                      : <Typography
                        sx={{
                          fontSize: 14
                        }}
                      >
                        <Label color="success">
                          <Box
                            component="span"
                            sx={{
                              fontSize: 11,
                              textTransform: 'uppercase',
                              fontWeight: 'bold'
                            }}
                          >
                            {"Less Risk"}
                          </Box>
                        </Label>

                      </Typography>}
                  </Typography>

                </Grid>
                <Typography
                  onClick={() => window.open(val.link)}
                  component="span"
                  color="text.secondary"
                  sx={{
                    opacity: 0.7,
                    display: 'flex',
                    cursor:'pointer'
                  }}
                >
                  <ArrowForwardTwoToneIcon />
                </Typography>
              </Grid>
            </Card>
          )):<Typography variant='h4' textAlign='center' >No Result Found!</Typography>}
        </Grid>
      </Grid>
    </Box>
  );
}