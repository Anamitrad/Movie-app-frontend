import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import  Home from '../../screens/Home/Home'
import ReactDOM from 'react-dom';
import Header from '../../common/Header/Header';
import Typography from '@material-ui/core/Typography';
import './BookShow.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';

class BookShow extends Component {

    constructor() {
        super();
        this.state = {
            location: "",
            theatre: "",
            language: "",
            showDate: "",
            tickets: 0,
            unitPrice: 500,
            availableTickets: 20,
        }
    }
    backToHomeHandler = event =>{
        ReactDOM.render( <div>
            <Home />
          </div> ,
            document.getElementById('root'));
    }
    locationChangeHandler = event => {
        this.setState({ location: event.target.value });
    }

  

    languageChangeHandler = event => {
        this.setState({ language: event.target.value });
    }

    showDateChangeHandler = event => {
        this.setState({ showDate: event.target.value });
    }

    ticketsChangeHandler = event => {
        this.setState({ tickets: event.target.value.split(",") });
    }



    render() {
        return (
            <div>
                <Header />
                <div className="bookShow">
                    
                        <Button className="back" variant="contained" color="primary" onClick={this.backToHomeHandler}> Back</Button>
                    <br /><br />
                    <Card className="cardStyle">
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                BOOK SHOW
                            </Typography><br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="location">Choose Location:</InputLabel>
                                <Select
                                    value={this.state.location}
                                    onChange={this.locationChangeHandler}
                                >
                                    {location.map(loc => (
                                        <MenuItem key={"loc" + loc.id} value={loc.location}>
                                            {loc.location}
                                        </MenuItem>
                                    ))}
                                </Select>

                            </FormControl>
                            <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="language">Choose Language:</InputLabel>
                                <Select
                                    value={this.state.language}
                                    onChange={this.languageChangeHandler}
                                >
                                    {language.map(lang => (
                                        <MenuItem key={"lang" + lang.id} value={lang.language}>
                                            {lang.language}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="showDate">Choose Show Date:</InputLabel>
                                <Select
                                    value={this.state.showDate}
                                    onChange={this.showDateChangeHandler}
                                >
                                    {showDate.map(sd => (
                                        <MenuItem key={"showDate" + sd.id} value={sd.showDate}>
                                            {sd.showDate}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="tickets">Tickets: ( {this.state.availableTickets} available )</InputLabel>
                                <Input id="tickets" value={this.state.tickets !== 0 ? this.state.tickets : ""} onChange={this.ticketsChangeHandler} />
                            </FormControl>
                            <br /><br />
                            <Typography>
                                Unit Price Rs. {this.state.unitPrice}
                            </Typography>
                            <Typography>
                                Total Price Rs. {this.state.unitPrice * this.state.tickets}
                            </Typography>
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.bookShowButtonHadler}>
                            BOOK SHOW
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default BookShow;