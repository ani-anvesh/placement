var admin = require("firebase-admin");
const fs = require("fs").promises;
/* var serviceAccount = require("./avasyu-764da-firebase-adminsdk-6thd3-3fe35f8189.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://avasyu-764da.firebaseio.com",
});

const data = [];
async function getData() {
  const citiesRef = admin
    .firestore()
    .collection("Placement")
    .doc("VEC")
    .collection("Year")
    .doc("third")
    .collection("Branch")
    .doc("EEE")
    .collection("Section")
    .doc("C")
    .collection("Name")
    .get()
    .then(function (snapshot) {
      snapshot.forEach((doc) => {
        //console.log(doc.id, "=>", doc.data());
        data.push(doc.data());
        async function writeData() {
          const der = await fs.readFile("node.json");
          const def = JSON.parse(der.toString());
          def.College.VEC.Year.Third.Branch.EEE.Section.C = data;
          await fs.writeFile("node1.json", JSON.stringify(def));
        }
        writeData();
        console.log(data);
      });
    });
}
getData();
console.log("wesc"); */
