import React from 'react';
class SortFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ' '};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('Sorting in '+ this.state.value+' order by price');
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label className="pl-2 pr-2">
                    Sort{' '}
                    <select value={this.state.value} onChange={this.handleChange}>
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