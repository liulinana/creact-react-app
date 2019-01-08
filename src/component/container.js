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

/**
 * 是否登录
 * @returns {boolean}
 */
export function isAuthenticated() {
    return !!getCurrentLoginUser();
}

/**
 * 获取当前登录用户
 * @returns {null}
 */
export function getCurrentLoginUser() {
    const currentLoginUser = window.sessionStorage.getItem('currentLoginUser');
    return currentLoginUser ? JSON.parse(currentLoginUser) : null;
}

/**
 * 设置当前登录用户
 * @param currentLoginUser
 */
export function setCurrentLoginUser(currentLoginUser) {
    window.sessionStorage.setItem('currentLoginUser', JSON.stringify(currentLoginUser));
}

/**
 * 跳转到登录页面
 * @returns {null}
 */
export function toLogin() {
    const loginPath = '/';
    const pathname = window.location.pathname;
    const isLogin = pathname.indexOf(loginPath) !== -1;
    if (isLogin) window.sessionStorage.removeItem("currentLoginUser");
    window.sessionStorage.setItem('last-href', window.location.href);
    window.location.href = loginPath;

    return null;
}