function saveData() {
  console.log("your data is svaed");
}

function updateData() {
  console.log("your data is updated");
}

function deleteData() {
  console.log("your data is deleted");
}

module.exports.Save = saveData;
module.exports.Update = updateData;
module.exports.Delete = deleteData;

module.exports.Find = () => {
  console.log("Find Data");
};
