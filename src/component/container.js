import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as action from '../redux/actions';

// const mapStateToProps = state => (state,
//     console.log("mapStateToProps",state)
// );
//
// const mapDispatchToProps = dispatch => (bindActionCreators(action, dispatch),
//     console.log("mapDispatchToProps",bindActionCreators(action, dispatch))
// );
// export default withRouter(connect(mapStateToProps(), mapDispatchToProps()))

export const Containerization = (mapStateToProps) =>(Component)=> {
    if(mapStateToProps ){
        return withRouter(connect(mapStateToProps)(Component))
    } else {
        return withRouter(Component);
    }

};