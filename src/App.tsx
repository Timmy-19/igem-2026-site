import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectOverviewPage from './pages/ProjectOverviewPage';
import RoadmapPage from './pages/RoadmapPage';
import WorkstreamsPage from './pages/WorkstreamsPage';
import OwnershipDashboardPage from './pages/OwnershipDashboardPage';
import WeeklyUpdatesPage from './pages/WeeklyUpdatesPage';
import TeamStructurePage from './pages/TeamStructurePage';
import ResourcesPage from './pages/ResourcesPage';
import QuickViewPage from './pages/QuickViewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="overview" element={<ProjectOverviewPage />} />
          <Route path="roadmap" element={<RoadmapPage />} />
          <Route path="workstreams" element={<WorkstreamsPage />} />
          <Route path="ownership" element={<OwnershipDashboardPage />} />
          <Route path="updates" element={<WeeklyUpdatesPage />} />
          <Route path="team" element={<TeamStructurePage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="quick-view" element={<QuickViewPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
