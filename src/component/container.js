import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

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