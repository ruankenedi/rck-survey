export function initState() {
  return {
    messages: {
      success: '',
      error: [],
      warning: '',
      validation: {}
    },
    fetching: false,
    assets: [],
    areMarkersAlreadyOnMap: false,
    allAlerts: {
      assets: {},
      allAssetsAlerts: {},
      fetching: false,
      fetched: false,
      count: {
        assets: [],
        all: 0
      }
    },
    assetsWatcher: undefined,
    history: {
      day: {
        isFetching: false,
        list: [],
        lastCardRenderedIndex: undefined
      },
      isAnyHistoryPointSelected: false,
      stopPointSelected: undefined
    },
    currAsset: {
      fence: {
        parking: false,
        ignition: false,
        batt: false,
        spd: 0
      }
    },
    reactiveFence: {
      parking: false,
      ignition: false,
      batt: false,
      spd: 0
    },
    alertsSettings: {
      isSaving: false,
      open: false
    },
    lastMapInteraction: undefined,
    panel: false,
    isPanelFullOpen: false,
    alertsPanel: false,
    isAlertsPanelFullOpen: false,
    selectedTab: '',
    userCellPhone: {
      number: '',
      code: '',
      verified: false,
      error: {
        value: false,
        message: ''
      },
      isWaitingVerificationCode: false,
      btn: {
        text: 'Enviar',
        edit: false,
        disableSendCodeBtn: false
      },
      inputs: {
        disableAll: false
      }
    },
    isNotificatiosPermissionDenied: false,
    pushNotifications: false,
    disableDevelopmentFeatures: false,
    shouldNotificationsToggleChange: true,
    view: '',
    updateToNewVersion: false,
    installationReminder: false,
    enableNotificationsReminder: false
  };
}

export default {
  ...initState()
};
