import React, { Profiler } from "react";
import UserList from "./components/UserList";
import StatsPanel from "./components/StatsPanel";
import SettingsForm from "./components/SettingsForm";
import ProductTile from "./components/ProductTile";
import CommentBox from "./components/CommentBox";
import { logProfilerData } from "./utils/ProfilerLogger";

// Sample props for each component
const statsProps = {
  visits: 1500,
  bounceRate: 42,
  sessionTime: 300,
  conversionRate: 5.2,
  geoDistribution: "IN, US, UK",
};

const settingsProps = {
  theme: "dark",
  notificationsEnabled: true,
  autoSave: false,
  language: "en",
  region: "Asia",
};

const productProps = {
  productName: "Wireless Earbuds",
  price: 2999,
  category: "Electronics",
  stockCount: 120,
  discount: 15,
};

const commentProps = {
  username: "shlok.codes",
  comment: "This is a helpful article!",
  likes: 42,
  timestamp: "2025-06-02T13:00:00Z",
  userAvatar: "avatar.png",
};

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">React AI Optimizer Demo</h1>

      <Profiler id="UserList" onRender={logProfilerData}>
        <UserList />
      </Profiler>

      <Profiler id="StatsPanel" onRender={logProfilerData}>
        <StatsPanel stats={statsProps} />
      </Profiler>

      <Profiler id="SettingsForm" onRender={logProfilerData}>
        <SettingsForm {...settingsProps} />
      </Profiler>

      <Profiler id="ProductTile" onRender={logProfilerData}>
        <ProductTile {...productProps} />
      </Profiler>

      <Profiler id="CommentBox" onRender={logProfilerData}>
        <CommentBox {...commentProps} />
      </Profiler>
    </div>
  );
}

export default App;
