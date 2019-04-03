import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb, Icon } from 'antd';
import breadcrumbNameMap from './BreadcrumbNameMap';
import breadcrumbIconMap from './Icon';

const Breadcrumbs = withRouter((props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>
                    {
                        <span>
                            {
                                breadcrumbIconMap[url]?<Icon type={breadcrumbIconMap[url]}/>:null
                            }
                        <span/>
                            {
                                breadcrumbNameMap[url]
                            }
                        </span>
                    }
                </Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [(
        <Breadcrumb.Item key="home">
            {/*<Link to="/"></Link>*/}
        </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);
    return (
        <div className="demo">
            <Breadcrumb>
                {breadcrumbItems}
            </Breadcrumb>
        </div>
    );
});

export default Breadcrumbs;