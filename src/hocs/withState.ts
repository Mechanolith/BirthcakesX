import { ComponentType } from "react";
import { connect } from "react-redux";
import { DerivedState } from "../../common/types/DerivedState";
import { State } from "../../common/types/State";
import { getCounterPlusOne } from "../redux/selectors/getCounterPlusOne";

export type WithState = {
    state: State;
    derivedState: DerivedState;
};

const mapStateToProps = (state: State): WithState => {
    return {
        state,
        derivedState: {
            counterPlusOne: getCounterPlusOne(state),
        },
    };
};

export const withState = <TProps>(Component: ComponentType<TProps & WithState>): ComponentType<TProps> => {
    return connect(mapStateToProps)(Component as ComponentType<unknown>);
};
