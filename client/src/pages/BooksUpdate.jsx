import React, { Component } from 'react';
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1'
})``

const Wrapper = styled.div.attrs({
    className: 'form-group'
})``

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control'
})``

const Button = styled.button.attrs({
    className: `btn btn-primary`
})`margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`
})`
    margin: 15px 15px 15px 5px
`

class BooksUpdate extends Component{
    state={
        id: this.props.match.params.id,
        name: '',
        authorName: ''
    }
    componentDidMount = async() => {
        const { id } = this.state;
        const book = await api.getBookById(id)
        this.setState({
            name: book.data.data.name,
            authorName: book.data.data.authorName
        })
    }
    // handleChangeInputAuthorName = event => {
    //     this.setState({name: event.target.value});
    // }
    // handleChangeInputName = event => {
    //     this.setState({authorName: event.target.value});
    // }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }
    handleIncludeBook = async event => {
        const { id, name, authorName } = this.state
        await api.updateBookById(id, {name, authorName}).then(res => {
            window.alert(`Book updated successfully`)
            this.setState({name: '', authorName: ''});
        })
    }
    render(){
        const { name, authorName } = this.state;
        return(
            <Wrapper>
                <Title>Update Book</Title>
                <Label>Name</Label>
                <InputText 
                    type="text"
                    value={name}
                    onChange={this.handleChange}
                />
                <Label>Author Name:</Label>
                <InputText 
                    type="text"
                    value={authorName}
                    onChange={this.handleChange}
                />                
                <Button onClick={this.handleIncludeBook}>Add Book</Button>
                <CancelButton href={'/books/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default BooksUpdate;