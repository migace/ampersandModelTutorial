import * as React from "react";

interface Props {
    skip: number;
    limit: number;
    all: number;
    current: number;
    onPrevClick?: any;
    onNextClick?: any;
}

interface State {}

export default class Paginator extends React.Component<Props, State> {
    prevClick() {
        const current = this.props.current - this.props.limit;

        return (current < 0) ? 0 : current;
    }

    nextClick() {
        let current = this.props.current;

        if (this.props.current < this.props.all &&
            this.props.current + this.props.limit < this.props.all)
        {
            current = this.props.current + this.props.limit;
        }

        return current;
    }

    render() {
        let nextFieldNumber = Math.ceil(this.props.all / this.props.limit),
            prevFieldNumber = Math.ceil((this.props.current + this.props.limit) / (this.props.limit));

        nextFieldNumber = nextFieldNumber === 0 ? 1 : nextFieldNumber;
        prevFieldNumber = prevFieldNumber === 0 ? 1 : prevFieldNumber;

        return (
            <div className="paginator">
                <div className="pure-g">
                    <div className="pure-u-1-2"></div>
                    <div className="pure-u-1-2">
                        <div className="paginator-content">
                            <button
                                type="button"
                                className="button-xsmall pure-button pure-button-primary"
                                onClick={() => this.props.onPrevClick(this.prevClick())}
                            >
                                Prev
                            </button>
                            <button
                                type="button"
                                className="button-xsmall pure-button pure-button-primary"
                                onClick={() => this.props.onNextClick(this.nextClick())}
                            >
                                Next
                            </button>
                            <span className="prevField">
                                {prevFieldNumber}
                            </span>
                            <span className="paginatorChar"> / </span>
                            <span className="nextField">
                                {nextFieldNumber}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
