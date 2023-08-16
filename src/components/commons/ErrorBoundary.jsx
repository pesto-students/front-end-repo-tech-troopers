import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service here
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI for when an error occurs
            return (
                <div>
                    <h2>Something went wrong</h2>
                    <img src="/path/to/error-image.png" alt="Error" />
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
