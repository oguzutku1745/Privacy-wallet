<template>
  <div class="settings-footer">
    <div id="settings_app_version">
      <router-link to="/settings/experiments">
        <span class="text-muted"> {{ $t('pages.settings.version') }} {{ appVersion }} </span>
      </router-link>
    </div>
  </div>
</template>
<script>
import pkg from '../../package.json'
const Version = pkg.version;

export default {
  name: 'SettingsFooter',

  computed: {
    appVersion() {
      return version
    }
  }
}
</script>
