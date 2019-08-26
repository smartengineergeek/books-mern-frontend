import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Collapse = styled.div.attrs({
    className: 'collapse navbar-collapse'
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto'
})``

const Item = styled.div.attrs({
    className: 'collapse navbar-collapse'
})``

class Links extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Books Application <code>created in MERN</code>
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/books/list" className="nav-link">
                                List Books
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/books/create" className="nav-link">
                                Create Book
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links;