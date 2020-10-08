import React, {Suspense} from "react";
import InterviewerPage from "../Pages/InterviewerPage/InterviewerPage";
import Header from "../Layouts/Header/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";


const Pages = () => {
    const ConfirmationPage = React.lazy(() => import("./ConfirmationPage/ConfirmationPage"));
    const AfterSubmitPage = React.lazy(() => import("./AfterSubmitPage/AfterSubmitPage"));

    const loading = <div/>;
    const lazyConfirmationPage = <Suspense fallback={loading}><ConfirmationPage/></Suspense>;
    const lazyAfterSubmitPage = <Suspense fallback={loading}><AfterSubmitPage/></Suspense>;

    return (
        <div className="app">
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route path="/interviewer/:index" component={InterviewerPage}/>
                    <Route path="/confirmation" exact render={() => lazyConfirmationPage}/>
                    <Route path="/confirmed" exact render={() => lazyAfterSubmitPage}/>
                    <Route path="/*" component={InterviewerPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Pages;
