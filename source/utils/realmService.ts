import Realm from "realm";
import User from "../schemas/UserSchema";

export const realmConfig: Realm.Configuration = {
    schema: [User],
    schemaVersion: 0
};

export const getRealm = () => {
    return Realm.open(realmConfig)
}