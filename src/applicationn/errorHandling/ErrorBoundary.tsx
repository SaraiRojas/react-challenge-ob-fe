import React from 'react';

interface IErrorBoundaryProps {
    children: React.ReactNode;
    fallBackComponent: React.ReactNode;
}

interface IState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<IErrorBoundaryProps, IState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        console.error(error);
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallBackComponent;
        }
        return this.props.children;
    }
}
