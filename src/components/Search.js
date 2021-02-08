import React from 'react'
import Button from 'react-bootstrap/Button';


class Search extends React.Component {
    state={ title: "" }

    onSearchChanged = event => {

        const title = event.target.value;

        console.log(title)

        this.setState({ title: title })
    };

    onSubmit = event => {
        event.preventDefault();

        this.props.onSearch(this.state.title);
    };


    render() {
        return (
            <div className="search-form">
                            <input
                                value={this.state.title}
                                onChange={this.onSearchChanged} 
                                type="text"
                                placeholder="Enter Search keyword"
                                className="search-field"
                            />
                            <Button variant={"primary"} onClick={this.onSubmit}> Search </Button>
            </div>
        );
    }
}

export default Search;