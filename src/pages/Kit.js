import React, {Component} from 'react';

class Kit extends Component {
    render() {
        return (<div id="hero" class='container'>
        <h1>KIT검사 소개 동영상</h1>
        {/* <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe> */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/aa_uaZc__c8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>);
    }
}

export default Kit;