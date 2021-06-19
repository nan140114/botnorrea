const firebase = require('firebase-admin');
const { FIREBASE_CREDENTIALS } = require('../constants');

const authOptions = {
    credential: firebase.credential.cert(FIREBASE_CREDENTIALS)
};

const firestore = firebase
    .initializeApp(authOptions)
    .firestore();

const getAll = async collection => {
    try {
        const filesRef = firestore
            .collection(collection);
        const { docs } = await filesRef.get();

        return docs.map(doc => doc.data());
    } catch (error) {
        return new Error(error.message);
    }
};

const get = async (collection, id) => {
    try {
        const docRef = await firestore.collection(collection).doc(id);
        const doc = await docRef.get();
        return doc.data();
    } catch (error) {
        return new Error(error.message);
    }
};

const create = async (collection, doc, id = null) => {
    try {
        if (!id) {
            const docRef = await firestore
                .collection(collection)
                .add(doc);
            const newDoc = await docRef.get();
            return newDoc.data();
        }

        await firestore
            .collection(collection)
            .doc(id)
            .set(doc);
        const newDoc = await get(collection, id);

        return newDoc;
    } catch (error) {
        return new Error(error.message);
    }
};

const remove = async (collection, id) => {
    try {
        await firestore
            .collection(collection)
            .doc(id)
            .delete();
        return id;
    } catch (error) {
        return new Error(error.message);
    }
};

module.exports = {
    create,
    get,
    getAll,
    remove
};
