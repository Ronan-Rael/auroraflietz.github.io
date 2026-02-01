function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("./assets/golden age", false, /\.(PNG|JPG)$/)
  );

  export default images;