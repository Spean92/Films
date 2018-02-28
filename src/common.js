import React, { Component } from 'react';

class First extends Component {
    constructor() {
        super();
        this.state = {
            titles: [],
        };
    }

    getData() {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&primary_release_date.gte=2014-09-15&primary_release_date.lte=2017-10-22")
            .then(response => response.json())
            .then(data => this.setState({ titles: data }));
    }
    render() {
        const { titles } = this.state;

        return (
            <div>
                {titles.map(titles =>
                    <div>
                        <p>{titles.title}</p>
                    </div>
                )}
            </div>
        );
    }
}


export default First;