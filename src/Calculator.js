import Button from './Button';

function Calculator() {
    return (
        <div className="calculator">
            <div class="btn-row">
                <Button text="1" className="btn-number"/>
                <Button text="+" className="btn-action"/>
                <Button text="-" className="btn-action"/>
            </div>
            <div class="btn-row">
                <Button text="1" className="btn-number"/>
                <Button text="+" className="btn-action"/>
            </div>
        </div>
    );
}

export default Calculator;