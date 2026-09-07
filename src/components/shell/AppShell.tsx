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
import { RightsScreen } from "@/components/screens/RightsScreen";
import { RightsCaseScreen } from "@/components/screens/RightsCaseScreen";
import { ConsentScreen } from "@/components/screens/ConsentScreen";
import { ConsentHistoryScreen } from "@/components/screens/ConsentHistoryScreen";
import { ProcessorsScreen } from "@/components/screens/ProcessorsScreen";
import { ContractsScreen } from "@/components/screens/ContractsScreen";
import { IncidentsScreen } from "@/components/screens/IncidentsScreen";
import { IncidentIntakeScreen } from "@/components/screens/IncidentIntakeScreen";
import { PoliciesScreen } from "@/components/screens/PoliciesScreen";
import { EvidenceScreen } from "@/components/screens/EvidenceScreen";
import { ReportsScreen } from "@/components/screens/ReportsScreen";
import { AuditScreen } from "@/components/screens/AuditScreen";
import { PortfolioScreen } from "@/components/screens/PortfolioScreen";
import { SettingsScreen } from "@/components/screens/SettingsScreen";
import { FrameworkMigrationScreen } from "@/components/screens/FrameworkMigrationScreen";
import { PublicPortal } from "@/components/shell/PublicPortal";
import { Onboarding } from "@/components/shell/Onboarding";
import { ScreenStub } from "@/components/screens/ScreenStub";
import { ControlsProvider } from "@/components/ControlsProvider";
import { AuthProvider } from "@/lib/supabase/auth";
import { AuthDialog } from "@/components/shell/AuthDialog";
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
  rights: RightsScreen,
  rightsCase: RightsCaseScreen,
  consent: ConsentScreen,
  consentHistory: ConsentHistoryScreen,
  processors: ProcessorsScreen,
  contracts: ContractsScreen,
  incidents: IncidentsScreen,
  incidentIntake: IncidentIntakeScreen,
  policies: PoliciesScreen,
  evidence: EvidenceScreen,
  reports: ReportsScreen,
  audit: AuditScreen,
  portfolio: PortfolioScreen,
  settings: SettingsScreen,
  frameworkMigration: FrameworkMigrationScreen,
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
        useUI.setState({ palette: false, onboarding: false, portal: false, evidence: false, authOpen: false });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const Active = SCREENS[screen] ?? ScreenStub;

  return (
    <AuthProvider>
      <ControlsProvider>
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
          <PublicPortal />
          <Onboarding />
          <AuthDialog />
          <Toast />
        </div>
      </ControlsProvider>
    </AuthProvider>
  );
}
