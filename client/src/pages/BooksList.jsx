import React, { Component } from 'react';
import ReactTable from 'react-table'
import api from '../api'

import 'react-table/react-table.css'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
const Update =styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

const UpdateBook = (props) => {
    function updateBook(event){
        event.preventDefault();
        window.location.href = `/books/update/${props.id}`
    }
    return(
        <Update onClick={(event) => updateBook(event)}>Update</Update>
    )
}

const DeleteBook = (props) => {
    function deleteBook(event){
        event.preventDefault();
        if(window.confirm(`Do you want to delete the book ${props.id} premanently`)){
            api.deleteBookById(props.id)
            window.location.reload();
        }
    }
    return(
        <Delete onClick={deleteBook}>Delete</Delete>
    )
}

class BooksList extends Component{
   constructor(props){
       super(props)
       this.state = {
           books: [],
           columns: [],
           isLoading: false
       }
   }
   componentDidMount = async () => {
       this.setState({ isLoading : true});
       await api.getAllBooks().then(books => {
           this.setState({
               books: books.data.data,
               isLoading: false
           })
       })
   }
   render(){
       const { books, isLoading } = this.state
       const columns = [
        { Header: 'ID', accessor: '_id', filterable: true },
        { Header: 'Name', accessor: 'name', filterable: true },
        { Header: 'Author Name', accessor: 'authorName', filterable: true },
        { Header: '', accessor: '', 
            Cell: function(props){
                return(
                    <span><DeleteBook id={props.original._id}/></span>
                )
            }
        },
        { Header: '', accessor: '', 
            Cell: function(props){
                return(
                    <span><UpdateBook id={props.original._id}/></span>
                )
            }
        }
       ]
       //        { Header: 'Time', accessor: 'time', Cell: () => <span>{this.props.value.join('/')}</span> }
       let showTable = true
       if(!books.length){
           showTable = false
       }
       return(
           <Wrapper>
               {showTable && (
                   <ReactTable 
                    data={books}
                    columns={columns}
                    loading={isLoading}
                    defaultPageSize={10}
                    showPageSizeOptions={true}
                    minRows={0}
                   />
               )}
           </Wrapper>
       )
   }
}

export default BooksList;