module.exports = {
  render(image) {
    const url = process.env.APP_URL || 'http://localhost:3333'

    return {
      id: image?.id,
      url: image?.path ? `${url}/uploads/${image.path}` : ''
    }
  }
}
