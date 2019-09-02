import React, { Component } from 'react';
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1'
})``

const Wrapper = styled.div.attrs({
    className: 'form-group'
})`margin: 0 30px`

const Label = styled.label`
    margin: 5px;
`
const InputText = styled.input.attrs({
    className: 'form-control'
})`margin: 5px;`

const Button = styled.button.attrs({
    className: `btn btn-primary`
})`margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`
})`
    margin: 15px 15px 15px 5px
`

class BooksInsert extends Component{
    state = {
        name: '',
        authorName: ''
    }
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }
    handleIncludeBook = async event => {
        const { name, authorName } = this.state
        await api.insertBook({name, authorName}).then(res => {
            window.alert(`Book inserted successfully`)
            this.setState({name: '', authorName: ''});
        })
    }
    render(){
        const { name, authorName } = this.state;
        return(
            <Wrapper>
                <Title>Create Book</Title>
                <Label>Name:</Label>
                <InputText 
                    type="text"
                    value={name}
                    name="name"
                    onChange={this.handleChange}
                />
                <Label>Author Name:</Label>
                <InputText 
                    type="text"
                    value={authorName}
                    name="authorName"
                    onChange={this.handleChange}
                />                
                <Button onClick={this.handleIncludeBook}>Add Book</Button>
                <CancelButton href={'/books/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default BooksInsert;