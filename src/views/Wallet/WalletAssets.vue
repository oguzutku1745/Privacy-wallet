<template>
  <WalletAccounts @item-selected="onAccountSelected" :accounts="accountsData" />
</template>

<script>
import { mapGetters } from 'vuex'
import WalletAccounts from '@/components/WalletAccounts'

export default {
  computed: {
    ...mapGetters(['accountsData'])
  },
  components: {
    WalletAccounts
  },
  methods: {
    onAccountSelected({ account, asset }) {
      console.log("account: ", account)
      console.log("asset: ", asset)
      const _asset = asset || account.assets[0]
      this.$router.push(`/accounts/${account.id}/${_asset}`)
    }
  },
  mounted() {
    console.log('Total accounts: ', this.accountsData.length);
    console.log('Accounts Data: ', this.accountsData);
  }
  
}
</script>
<style lang="scss"></style>
