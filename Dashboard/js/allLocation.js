 db.collection('tourLocation').onSnapshot(snapshot => {
     // console.log(snapshot.docs);
     //let data = snapshot.docs.data();
     setupTable(snapshot.docs);
 }, err => {
     console.log(err.message)
 });