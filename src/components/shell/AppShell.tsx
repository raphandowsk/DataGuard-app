"use client";

import { useEffect } from "react";
import { Header } from "@/components/shell/Header";
import { Sidebar } from "@/components/shell/Sidebar";
import { PageHeader } from "@/components/shell/PageHeader";
import { CommandPalette } from "@/components/shell/CommandPalette";
import { EvidenceDialog } from "@/components/shell/EvidenceDialog";
import { Toast } from "@/components/shell/Toast";
import { DashboardScreen } from "@/components/screens/DashboardScreen";
import { AssessmentScreen } from "@/components/screens/AssessmentScreen";
import { ControlScreen } from "@/components/screens/ControlScreen";
import { RisksScreen } from "@/components/screens/RisksScreen";
import { TasksScreen } from "@/components/screens/TasksScreen";
import { InventoryScreen } from "@/components/screens/InventoryScreen";
import { DataMapScreen } from "@/components/screens/DataMapScreen";
import { TransfersScreen } from "@/components/screens/TransfersScreen";
import { TransferAssessScreen } from "@/components/screens/TransferAssessScreen";
import { SensitiveScreen } from "@/components/screens/SensitiveScreen";
import { RetentionScreen } from "@/components/screens/RetentionScreen";
import { ScreenStub } from "@/components/screens/ScreenStub";
import { useUI, type Screen } from "@/lib/store";

/** Screen registry. Implemented screens map to their component; the rest fall
 *  back to the honest ScreenStub until built. */
const SCREENS: Partial<Record<Screen, React.ComponentType>> = {
  dashboard: DashboardScreen,
  assessment: AssessmentScreen,
  control: ControlScreen,
  risks: RisksScreen,
  tasks: TasksScreen,
  inventory: InventoryScreen,
  map: DataMapScreen,
  transfers: TransfersScreen,
  transferAssess: TransferAssessScreen,
  sensitive: SensitiveScreen,
  retention: RetentionScreen,
};

export function AppShell() {
  const screen = useUI((s) => s.screen);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        useUI.getState().openPalette();
      }
      if (e.key === "Escape") {
        useUI.setState({ palette: false, onboarding: false, portal: false, evidence: false });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const Active = SCREENS[screen] ?? ScreenStub;

  return (
    <div className="flex min-h-screen flex-col bg-ground">
      <Header />
      <div className="flex min-h-0 flex-1 items-stretch">
        <Sidebar />
        <main className="min-w-0 flex-1 overflow-x-hidden">
          <PageHeader />
          <div className="px-7 pb-10 pt-3">
            <Active key={screen} />
          </div>
        </main>
      </div>
      <CommandPalette />
      <EvidenceDialog />
      <Toast />
    </div>
  );
}
