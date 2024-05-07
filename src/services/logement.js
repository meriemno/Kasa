import { getlogement } from "./logement";


async function getlogements() {
    let url = '../services/logement.json';
    try {
        let res = await fetch(url);
        console.log(res);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

export default getlogements