import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/Root"
          // This is a conditional (ternary) operator that checks to see if the current page is "Root"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/Root' ? 'nav-link active' : 'nav-link'}
        >
          Root
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/GoalTracker"
          // Check to see if the currentPage is `GoalTracker`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/GoalTracker' ? 'nav-link active' : 'nav-link'}
        >
          GoalTracker
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Stats"
          // Check to see if the currentPage is `Stats`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Stats' ? 'nav-link active' : 'nav-link'}
        >
          Stats
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
