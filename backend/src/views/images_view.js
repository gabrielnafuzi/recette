module.exports = {
  render(image) {
    return {
      id: image?.id,
      url: image?.path ? `http://localhost:3333/uploads/${image.path}` : ''
    }
  }
}
