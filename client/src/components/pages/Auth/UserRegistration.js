import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'react-phone-input-2/lib/style.css';
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';



const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function SignUp() {

    const countries = require('./Const/countries');

    const ExtraQalification = require('./Const/ExtraQalification');

    const Employees_at_work = require('./Const/Employees_at_work');

    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
   
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };

    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
    const defaultTheme = createTheme(); 

    const [phoneNumber, setPhoneNumber] = useState('');
    const [whatsappNumber, setWhatsappNumber] = useState('');


    const handlePhoneNumberChange = (event) => {
        const numericValue = event.target.value.replace(/[^0-9]/g, '');
        setPhoneNumber(numericValue);
    };

    const handleWhatsappNumberChange = (event) => {
        const numericValue = event.target.value.replace(/[^0-9]/g, '');
        setWhatsappNumber(numericValue);
    };

    const formRef = React.createRef(); // Create a ref to hold the form reference

    const handleReset = () => {
      if (formRef.current) {
        formRef.current.reset(); // Use the ref to access the form element
      }
      setPhoneNumber(''); // Reset the state for phone number
      setWhatsappNumber(''); // Reset the state for WhatsApp number
      setSelectedFile(null); // Reset the selected file
    };


      return (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="max">
            <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  
                  <Grid container spacing={6} sx={{ paddingTop: '20px' }}>

                    <Grid item xs={12} sm={6}>
                          <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                          />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                          />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                          <TextField
                            autoComplete="Entered Year"
                            name="Entered Year To University"
                            required
                            fullWidth
                            id="Entered Year To University"
                            label="Entered Year To University"
                            autoFocus
                          />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            id="Past Out Year"
                            label="Past Out Year"
                            name="Past Out Year"
                            autoComplete="Past Out Year"
                          />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                          <TextField
                            autoComplete="SC Number"
                            name="SC Number"
                            required
                            fullWidth
                            id="SC Number"
                            label="SC Number"
                            autoFocus
                          />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            id="Email Address"
                            label="Email Address"
                            name="Email Addresse"
                            autoComplete="Email Address"
                          />
                    </Grid>
                        
                    <Grid item xs={2} sx={{ paddingTop: '20px' }}>
                          <Autocomplete
                            id="country-select-demo"
                            sx={{ width: '100%' }}
                            options={countries}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => (
                              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                <img
                                  loading="lazy"
                                  width="20"
                                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                  alt=""
                                />
                                {option.label} ({option.code}) +{option.phone}
                              </Box>
                            )}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="Choose a country"
                                inputProps={{
                                  ...params.inputProps,
                                  autoComplete: 'new-password',
                                }}
                              />
                            )}
                          />
                    </Grid>
                    <Grid item xs={4} sx={{ paddingTop: '20px' }}>
                    <TextField
                    required
                    fullWidth
                    name="phoneNumber"
                    label="Phone Number"
                    type="tel"  // Use type "tel" for phone numbers
                    id="phoneNumber"
                    autoComplete="tel"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    />
                    </Grid>

                    <Grid item xs={2} sx={{ paddingTop: '20px' }}>
                          <Autocomplete
                            id="country-select-demo"
                            sx={{ width: '100%' }}
                            options={countries}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => (
                              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                <img
                                  loading="lazy"
                                  width="20"
                                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                  alt=""
                                />
                                {option.label} ({option.code}) +{option.phone}
                              </Box>
                            )}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="Choose a country"
                                inputProps={{
                                  ...params.inputProps,
                                  autoComplete: 'new-password',
                                }}
                              />
                            )}
                          />
                    </Grid>

                    <Grid item xs={4} sx={{ paddingTop: '20px' }}>
                    <TextField
                    required
                    fullWidth
                    name="whatsappNumber"
                    label="Whatsapp Number"
                    type="tel"  // Use type "tel" for phone numbers
                    id="whatsappNumber"
                    autoComplete="tel"
                    value={whatsappNumber}
                    onChange={handleWhatsappNumberChange}
                    />
                    </Grid>            

                    <Grid item xs={6} sx={{ paddingTop: '20px' }}>
                        <FormControl sx={{ display: 'flex', alignItems: 'left', justifyContent: 'flex-start' }}>
                          <FormLabel sx={{ paddingRight: '10px', textAlign: 'left' }}>Role:</FormLabel> 
                          <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                            <FormControlLabel value="BCS General" control={<Radio />} label="BCS General" />
                            <FormControlLabel value="BCS Special" control={<Radio />} label="BCS Special" />
                            <FormControlLabel value="BSC General" control={<Radio />} label="BSC General" />
                            <FormControlLabel value="BSC Special" control={<Radio />} label="BSC Special" />
                            <FormControlLabel value="Other" control={<Radio />} label="Other" />
                          </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sx={{ paddingTop: '20px' }}>
                          <TextField
                            required
                            fullWidth
                            name="Job Position"
                            label="Job Position"
                            type="Job Position"
                            id="Job Position"
                            autoComplete="Job Position"
                          />
                    </Grid>

                    <Grid item xs={12} sm={6} sx={{ paddingTop: '20px' }}>
                            <Autocomplete
                              multiple
                              id="checkboxes-tags-demo"
                              options={ExtraQalification}
                              disableCloseOnSelect
                              getOptionLabel={(option) => option.title}
                              renderOption={(props, option, { selected }) => (
                                <li {...props}>
                                  <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{ marginRight: 8 }}
                                    checked={selected}
                                  />
                                  {option.title}
                                </li>
                              )}
                              sx={{ width: '100%' }}
                              renderInput={(params) => (
                                <TextField {...params} label="Extra Qualifications" placeholder="" />
                              )}
                            />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                            <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={Employees_at_work}
                              sx={{ width: '100%' }}
                              renderInput={(params) => <TextField {...params} label="Employees at work place" />}
                            />
                    </Grid>
                        
                    <Grid item xs={12} sm={6}>
                            <Autocomplete
                              id="country-select-demo"
                              sx={{ width: '100%' }} // Adjust the width to take 100% on all screen sizes
                              options={countries}
                              autoHighlight
                              getOptionLabel={(option) => option.label}
                              renderOption={(props, option) => (
                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                  <img
                                    loading="lazy"
                                    width="20"
                                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                    alt=""
                                  />
                                  {option.label} ({option.code}) +{option.phone}
                                </Box>
                              )}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="Country Where you Live"
                                  inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password',
                                  }}
                                />
                              )}
                            />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <div style={{ flex: 1 }}>
                                Upload Profile Photo:
                              </div>
                              <TextField
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                disabled
                                value={selectedFile ? selectedFile.name : 'No file selected'}
                                sx={{ flex: 1, marginRight: '10px' }} // Adjust the styles for responsive layout
                              />
                              <Button
                                component="label"
                                variant="contained"
                                startIcon={<CloudUploadIcon />}
                                sx={{ width: '120px' }} // Adjust the width for responsive layout
                              >
                                Upload
                                <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                              </Button>
                            </div>
                    </Grid>

                  </Grid> 
                    <Grid container justifyContent="center">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 5, mb: 2 }}
                    >
                      Sign Up
                    </Button>

                    <Button
                      type="reset"
                      variant="contained"
                      color="secondary"
                      sx={{ mt: 5, mb: 2, ml: 2 }} // Add margin to the left for spacing between buttons
                      onClick={handleReset} // Call the handleReset function on button click

                    >
                      Reset
                    </Button>
                  </Grid>

                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>

                </Box>


              </Box>
          </Container>
        </ThemeProvider>
      );
    }





