// components/GridCards.js

import Link from "next/link";

const GridCards = () => {
  // Sample data for the cards
  const cardsData = [
    { id: 1, title: "Admissions", description: "Check admission details" },
    { id: 2, title: "Fees", description: "Know about pending and paid fees" },
    { id: 3, title: "Staff", description: "Staff details" },
    { id: 4, title: "Students", description: "Classwise student details" },
  ];

  // Sample data for side menu
  const sideMenuData = [
    { id: 1, title: "About Us", link: "/about" },
    { id: 2, title: "Courses", link: "/courses" },
    { id: 3, title: "Events", link: "/events" },
    { id: 4, title: "Contact Us", link: "/contact" },
    { id: 5, title: "Gallery", link: "/gallery" },
  ];
  const setupTasks = [
    { id: 1, title: "Add Student Data", link: "/add-student" },
    { id: 2, title: "Update Holidays", link: "/update-holidays" },
    { id: 3, title: "Manage Courses", link: "/manage-courses" },
    { id: 4, title: "Teacher Assignments", link: "/teacher-assignments" },
    { id: 5, title: "School functions ", link: "/school-events" },
    { id: 6, title: "Examination Schedule", link: "/examination-schedule" },
    { id: 7, title: "Library Management", link: "/library-management" },
    { id: 8, title: "Feedback & Surveys", link: "/feedback-surveys" },
  ];

  return (
    <div className="grid-container">
      {/* Side menu */}
      <div className="side-menu">
        <ul>
          {sideMenuData.map((item) => (
            <li key={item.id}>
              <Link href={item.link}>
                <h5>{item.title}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Grid of cards */}
      <div className="sidebox">
        <div className="cards-container">
          {cardsData.map((card) => (
            <div key={card.id} className="card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        <div className="setup">
          <h2>School Setup</h2>
          <div className="setup-tasks">
            {setupTasks.map((task) => (
              <Link key={task.id} href={task.link}>
                <div className="setup-task">
                  <h4>{task.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: auto 1fr; // Side menu takes auto width
          gap: 20px;
        }
        .side-menu {
          background-color: #f0f0f0;
          padding: 20px;
          border-radius: 8px;
        }
        .side-menu ul {
          list-style-type: none;
          padding: 0;
        }
        .side-menu li {
          margin-bottom: 10px;
        }
        .side-menu a {
          color: #333;
          text-decoration: none;
        }
        .cards-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .card {
          background-color: #f1f9f7;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .card h3 {
          padding: 5px;
        }
        .sidebox {
          display: flex;
          flex-direction: column;
        }
        .setup {
          margin-top: 20px;
        }
        .setup h2 {
          margin-bottom: 15px;
        }
        .setup-tasks {
          display: grid;
          grid-template-columns: repeat(
            4,
            1fr
          ); // Adjust based on your layout preference
          gap: 20px;
        }
        .setup-task {
          background-color: #f4f4f4;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: box-shadow 0.3s ease;
        }
        .setup-task:hover {
          background: #f1f9f7;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
        }
        .setup-task h4 {
          padding: 8px;
          margin: 0;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default GridCards;
