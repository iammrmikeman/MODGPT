// renderEngine.js — View loader for MODGPT.EXE
// Dynamically injects views into the #mainView container

import archived_builds from './views/archived_buildsView.js';
import art_department from './views/art_departmentView.js';
import audio_department from './views/audio_departmentView.js';
import auto_update from './views/auto_updateView.js';
import blackbox from './views/blackboxView.js';
import boss_gpt from './views/boss_gptView.js';
import compose from './views/composeView.js';
import design_department from './views/design_departmentView.js';
import emails_compose from './views/emails_composeView.js';
import emails_inbox from './views/emails_inboxView.js';
import emails_sent from './views/emails_sentView.js';
import error_logs_black_box from './views/error_logs_black_boxView.js';
import fallback from './views/fallbackView.js';
import governmental_logic_unit from './views/governmental_logic_unitView.js';
import inbox from './views/inboxView.js';
import internal_beta_build from './views/internal_beta_buildView.js';
import latest_stable_build from './views/latest_stable_buildView.js';
import launch_simulation from './views/launch_simulationView.js';
import long_term_archives from './views/long_term_archivesView.js';
import marketing from './views/marketingView.js';
import marketing_pr from './views/marketing_prView.js';
import memory_archive_zips from './views/memory_archive_zipsView.js';
import memory_snapshots from './views/memory_snapshotsView.js';
import mission_critical_utilities from './views/mission_critical_utilitiesView.js';
import modgpt_settings from './views/modgpt_settingsView.js';
import qa_department from './views/qa_departmentView.js';
import qa_testing from './views/qa_testingView.js';
import quality_assurance from './views/quality_assuranceView.js';
import research_division from './views/research_divisionView.js';
import rockstargpt from './views/rockstargptView.js';
import script_department from './views/script_departmentView.js';
import short_term_memory_log from './views/short_term_memory_logView.js';
import system_dashboard from './views/system_dashboardView.js';
import team_leaders from './views/team_leadersView.js';
import themes from './views/themesView.js';
import theme_manager from './views/theme_managerView.js';
import trusted_memory_handler from './views/trusted_memory_handlerView.js';

const VIEWS = {
  archived_builds,
  art_department,
  audio_department,
  auto_update,
  blackbox,
  boss_gpt,
  compose,
  design_department,
  emails_compose,
  emails_inbox,
  emails_sent,
  error_logs_black_box,
  fallback,
  governmental_logic_unit,
  inbox,
  internal_beta_build,
  latest_stable_build,
  launch_simulation,
  long_term_archives,
  marketing,
  marketing_pr,
  memory_archive_zips,
  memory_snapshots,
  mission_critical_utilities,
  modgpt_settings,
  qa_department,
  qa_testing,
  quality_assurance,
  research_division,
  rockstargpt,
  script_department,
  short_term_memory_log,
  system_dashboard,
  team_leaders,
  themes,
  theme_manager,
  trusted_memory_handler
};

export function renderView(viewName, props = {}) {
  const container = document.getElementById('mainView');
  container.innerHTML = '';
  const renderFn = VIEWS[viewName];
  if (renderFn) {
    const view = renderFn(props);
    container.appendChild(view);
  } else {
    container.innerHTML = `<div class='error'>View '${viewName}' not found.</div>`;
  }
}
