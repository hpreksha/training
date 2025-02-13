function exportUsingCommonJS() {
  return 'exportUsingCommonJS';
}
function exportUsingCommonJS2() {
  return 'exportUsingCommonJS2';
}
// module.exports = exportUsingCommonJS;
module.exports = {
  exportUsingCommonJS,
  exportUsingCommonJS2,
};