import React, {Component} from 'react';
import {Paper, TextField, Typography} from '@material-ui/core';

export default class SearchBar extends Component {
    state = {
        searchTerms: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {searchTerms} = this.state;
        const {onFormSubmit} = this.props;
        onFormSubmit(searchTerms);
    };

    handleChange = (event) => this.setState({searchTerms: event.target.value});

    render() {
        return (
            <Paper elevation={6} style={{padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Buscar..." onChange={this.handleChange}/>
                </form>
            </Paper>
        );
    }

}