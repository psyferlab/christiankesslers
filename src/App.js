import { Switch, Route, Redirect } from 'react-router-dom';
import landing from 'pages/landing';
import projects from 'pages/projects';
import blog from 'pages/blog';
import contact from 'pages/contact';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={landing} />
            <Route exact path="/projects" component={projects} />
            <Route exact path="/blog" component={blog} />
            <Route exact path="/contact" component={contact} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default App;
