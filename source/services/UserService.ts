import { getRealm } from "../utils/realmService"


export const createUser = async (userName: string, email: string) => {
    const realm = await getRealm();
    try {
        realm.write(() => {
            const uniqueId = new Realm.BSON.ObjectId();
            realm.create('User', {
                _id: uniqueId,
                userName,
                email,
            });
        });
    } catch (error) {
        console.error('Error creating User:', error)
    }
}