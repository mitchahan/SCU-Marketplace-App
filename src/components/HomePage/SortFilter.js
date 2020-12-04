import React from 'react';
class SortFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            value: props.sort,
            products: [props.products]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        if (this.state.value === 'ascending') {
            fetch('/api/sortProductAscending')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        products: result
                    });
                },
                (error) => {
                    this.setState({ error });
                }
            );
        }
        if (this.state.value === 'descending') {
            fetch('/api/sortProductDescending')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        products: result
                    });
                },
                (error) => {
                    this.setState({ error });
                }
            );
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label className="pl-2 pr-2">
                    Sort{' '}
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value = "default">Price: default</option>
                        <option value = "ascending">Price: Low to High</option>
                        <option value = "descending">Price: High to Low</option>
                    </select>
                </label>
                <input className="pl-2 pr-2" type="submit" value="Submit" />
            </form>
        );
    }
}
export default SortFilter;