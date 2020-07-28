import React from 'react'
import Aurbit from 'shared/services/aurbit'

const styles = {
  container: {
    backgroundColor: '#e1e1e9',
    height: '100%'
  }
}
export default ({ mapReady }) => {
  const { usePlanet, useWallet } = Aurbit()

  const { planet } = usePlanet()
  const { getAddress } = useWallet()

  return mapReady ? (
    <div style={styles.container}>
      <p>{mapReady}HERE</p>
    </div>
  ) : null
}
