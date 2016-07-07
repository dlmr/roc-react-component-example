import React from 'react'

// React Hot Loader has problems with functional components
// that is why we have used the class syntax here.
export default class Hello extends React.Component {
    render() {
        return <div>Hello World</div>;
    }
}
