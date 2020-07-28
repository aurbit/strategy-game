import React from 'react'

const styles = {
  container: {
    backgroundColor: '#e1e1e9',
    height: '100%'
  }
}
export default ({ mapReady }) => {
  return mapReady ? (
    <div style={styles.container}>
      <p>{mapReady}HERE</p>
    </div>
  ) : null
}
