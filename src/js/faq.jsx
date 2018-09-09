import React from 'react';
import {faq} from './content.json';

class FAQ extends React.Component {
  render() {
    return(
      <div id="faq">
        <h1 className="section-heading">Frequently Asked Questions</h1>
        <div className="container">
          <HeaderRow initial={0} elements={4} />
          <ParagraphRow initial={0} elements={4} />
          <HeaderRow initial={4} elements={4} />
          <ParagraphRow initial={4} elements={4} />
        </div>
      </div>
    );
  }
}

class HeaderRow extends React.Component {
  render() {
    var row = [];
    for (var i = this.props.initial; i < this.props.initial + this.props.elements; i++) {
      row.push(<h1>{faq[i].q}</h1>);
    }
    return(
      <div className="header-row">
        {row}
      </div>
    );
  }
}

class ParagraphRow extends React.Component {
  render() {
    var row = [];
    for (var i = this.props.initial; i < this.props.initial + this.props.elements; i++) {
      (faq[i].link)
      ? row.push(<p>{faq[i].textBefore}<a href={faq[i].link}>{faq[i].textIn}</a>{faq[i].textAfter}</p>)
      : row.push(<p>{faq[i].a}</p>);
    }
    return(
      <div className="paragraph-row">
        {row}
      </div>
    );
  }
}

export default FAQ;