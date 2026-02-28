import "./styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>

        <div className="sidebar">

          <h2>Spend Tracker</h2>

          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/add-expense">Add Expense</a>
          <a href="/analytics">Analytics</a>
          <a href="/login">Login</a>

        </div>

        <div className="main">
          {children}
        </div>

      </body>
    </html>
  );
}