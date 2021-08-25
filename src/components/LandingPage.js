import React, { useState } from 'react';
//import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
import { FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Form } from 'reactstrap';
// import { Form } from 'react-bootstrap'
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Payment from '@material-ui/icons/Payment';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import "../Login.css";
import ListItem from '@material-ui/core/ListItem';
import { useGatsbyListItemStyles } from '@mui-treasury/styles/listItem/gatsby';
import { purple } from '@material-ui/core/colors';
import { roundTextFieldStylesHook } from '@mui-treasury/styles/textField/round';
import { category } from '../data/Category';
import { Utilities } from '../data/Utilities';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center" style={{ color: 'white' }}>
            {'Copyright © '}
            <Link color="inherit" href="https://novambl.com/">
                NOVA Merchant Bank
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    image: {
        // backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundImage: 'url(https://images.unsplash.com/photo-1629889946619-c5939829b86b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=539&q=80)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    Modal: {
        backgroundColor: "#333"
    },
}));

export default function LandingPage() {
    const classes = useStyles();
    const classes2 = useGatsbyListItemStyles();
    const [isQuicktellerModalOpen, setIsQuicktellerModalOpen] = useState(false);
    const [isRemitaModalOpen, setIsRemitaModalOpen] = useState(false);
    const [isEbillsModalOpen, setIsEbillsModalOpen] = useState(false);
    const [isUtilityModalOpen, setIsUtilityModalOpen] = useState(false);
    const [isUnavailableModalOpen, setIsUnavailableModalOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [searchUtility, setSearchUtility] = useState('');
    const [foundCategory, setFoundCategory] = useState(category);
    const [foundUtility, setFoundUtility] = useState(Utilities);
    const [account, setAccount] = useState('100002234');
    const [biller, setBiller] = useState('Quickteller');  

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = category.filter((cat) => {
                return cat.categoryname.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundCategory(results);
        } else {
            setFoundCategory(category);
            // If the text field is empty, show all users
        }

        setSearch(keyword);
    };

    const filterUtility = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = Utilities.filter((util) => {
                return util.name.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundUtility(results);
        } else {
            setFoundUtility(Utilities);
            // If the text field is empty, show all users
        }

        setSearchUtility(keyword);
    };

    const toggleQuickteller = () => {
        setIsQuicktellerModalOpen(!isQuicktellerModalOpen);
    }

    const toggleRemita = () => {
        setIsRemitaModalOpen(!isRemitaModalOpen);
    }

    const toggleEbills = () => {
        setIsEbillsModalOpen(!isEbillsModalOpen);
    }

    const toggleUtility = () => {
        setIsUtilityModalOpen(!isUtilityModalOpen);
    }

    const toggleUnavailable = () => {
        setIsUnavailableModalOpen(!isUnavailableModalOpen);
    }

    const theme = createTheme({
        secondary: {
            main: purple[700],
        },
    });

    const TextFields = () => {
        const inputBaseStyles = roundTextFieldStylesHook.useInputBase();
        const inputLabelStyles = roundTextFieldStylesHook.useInputLabel();
        return (
            <div>
                <TextField
                    color={'secondary'}
                    placeholder={'Search'}
                    value={search}
                    onChange={filter}
                    autoFocus="true"
                    InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
                    InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
                    fullWidth
                />
                <div />
            </div>
        );
    };

    const UtilityTextFields = () => {
        const inputBaseStyles = roundTextFieldStylesHook.useInputBase();
        const inputLabelStyles = roundTextFieldStylesHook.useInputLabel();
        return (
            <div>
                <TextField
                    color={'secondary'}
                    placeholder={'Search'}
                    value={searchUtility}
                    onChange={filterUtility}
                    autoFocus="true"
                    InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
                    InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
                    fullWidth
                />
                <div />
            </div>
        );
    };

    const Search = () => (
        <ThemeProvider theme={theme}>
            <TextFields />
        </ThemeProvider>
    );

    const UtilitySearch = () => (
        <ThemeProvider theme={theme}>
            <UtilityTextFields />
        </ThemeProvider>
    );

    const test = (e) => {
        e.preventDefault();
        alert(`Current Value is : ${JSON.stringify({ biller, account })}`);
    }

    const changeAccount = (e) => {
        setAccount(e.target.value);
    }

    const changeBiller = (e) => {
        setBiller(e.target.value);
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />

            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ backgroundColor: '#333' }}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <Payment />
                    </Avatar>
                    <Typography component="h1" variant="h4" style={{ color: 'white' }}>
                        Bills Payment
                    </Typography>
                    <Form className={classes.form} noValidate onSubmit={test} role="form">
                        <FormGroup>
                            <Label style={{ color: 'white' }}><h5>Select Account</h5></Label>
                            <Input type="select" name="select" id="select"
                                onChange={changeAccount}>
                                <option value='100002234'>100002234</option>
                                <option value='103522223'>103522223</option>
                                <option value='112202221'>112202221</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label style={{ color: 'white' }}><h5>Select Biller</h5></Label>
                            <Input type="select" name="select" id="select" onChange={changeBiller}>
                                <option value="Quickteller">Quickteller</option>
                                <option value="Remita">Remita</option>
                                <option value="E-Bills">E-Bills</option>
                            </Input>
                        </FormGroup>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={biller === "Quickteller" ? toggleQuickteller : biller === "Remita" ? toggleRemita : biller === "E-Bills" ? toggleEbills : test}
                        >
                            Proceed
                        </Button>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </Form>
                </div>
                <Modal isOpen={isQuicktellerModalOpen} toggle={toggleQuickteller}>
                    <ModalHeader toggle={toggleQuickteller} style={{ backgroundColor: '#333', color: 'white' }}><h4>Quickteller</h4></ModalHeader>
                    <ModalBody style={{ backgroundColor: 'white' }} >
                        <Search />
                        <Box minWidth={240}>
                            {foundCategory && foundCategory.length > 0 ? (
                                foundCategory.map((cat) => (
                                    <div key={cat.categoryid}>
                                        <ListItem classes={classes2} button onClick={cat.categoryid === 1 ? toggleUtility : toggleUnavailable}>
                                            <h3>{cat.categoryname}</h3>
                                        </ListItem>
                                    </div>
                                ))
                            ) : (
                                <h1>No results found!</h1>
                            )}
                            {/* {category.map((cat) => (
                                    <div key={cat.id}>
                                        <ListItem classes={classes2} button>
                                            <h3>{cat.categoryname}</h3>
                                        </ListItem>
                                    </div>
                                ))} */}
                        </Box>
                    </ModalBody>
                </Modal>
                <Modal isOpen={isRemitaModalOpen} toggle={toggleRemita}>
                    <ModalHeader toggle={toggleRemita} style={{ backgroundColor: '#333', color: 'white' }}><h4>Remita</h4></ModalHeader>
                    <ModalBody style={{ backgroundColor: 'white' }} >
                        <h1>Biller is currently unavailable! 😳</h1>
                    </ModalBody>
                </Modal>
                <Modal isOpen={isEbillsModalOpen} toggle={toggleEbills}>
                    <ModalHeader toggle={toggleEbills} style={{ backgroundColor: '#333', color: 'white' }}><h4>E-Bills</h4></ModalHeader>
                    <ModalBody style={{ backgroundColor: 'white' }} >
                        <h1>Biller is currently unavailable! 😳</h1>
                    </ModalBody>
                </Modal>

                <Modal isOpen={isUtilityModalOpen} toggle={toggleUtility}>
                    <ModalHeader toggle={toggleUtility} style={{ backgroundColor: '#333', color: 'white' }}><h4>Utility</h4></ModalHeader>
                    <ModalBody style={{ backgroundColor: 'white' }} >
                        <UtilitySearch />
                        <Box minWidth={240}>

                            {foundUtility && foundUtility.length > 0 ? (foundUtility.map((util) => (
                                <div key={util.id}>
                                    <ListItem classes={classes2} button>
                                        <h3>{util.name}</h3>
                                    </ListItem>
                                </div>
                            ))
                            ) : (
                                <h1>No results found!</h1>
                            )}
                        </Box>
                    </ModalBody>
                    </Modal>
                    {/* <Modal isOpen={isPaymentModalOpen} toggle={togglePayment}>
                    <ModalHeader toggle={togglePayment} style={{ backgroundColor: '#333', color: 'white' }}><h4>Make Payment</h4></ModalHeader>
                    <ModalBody style={{ backgroundColor: 'white' }} >
                    <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="phone"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
             Make Payment
            </Button>
            </form>
                    </ModalBody>
                </Modal> */}
                <Modal isOpen={isUnavailableModalOpen} toggle={toggleUnavailable}>
                    <ModalHeader toggle={toggleUnavailable} style={{ backgroundColor: '#333', color: 'white' }}></ModalHeader>
                    <ModalBody style={{ backgroundColor: 'white' }} >
                        <h1>Biller is currently unavailable! 😳</h1>
                    </ModalBody>
                    </Modal>
            </Grid>
        </Grid>
    );
}
