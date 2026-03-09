import Pocketbase from 'pocketbase';
const pb = new Pocketbase("https://sae-203.aglaenicolle.fr");

export async function getAllArtistesSByDate() {
    try {
        return await pb.collection('artiste').getFullList({ sort: 'dateRepresentation' });
    } catch (e) {
        console.error(e);
    }
}

export async function getAllScenes() {
    try {
        return await pb.collection('scene').getFullList({ sort: 'nomScene' });
    } catch (e) {
        console.error(e);
    }
}

export async function getAllArtistesSByName() {
    try {
        return await pb.collection('artiste').getFullList({ sort: 'nomArtiste' });
    } catch (e) {
        console.error(e);
    }
}

export async function getArtisteById(id) {
    try {
        return await pb.collection('artiste').getOne(id);
    } catch (e) {
        console.error(e);
    }
}

export async function getSceneById(id) {
    try {
        return await pb.collection('scene').getOne(id);
    } catch (e) {
        console.error(e);
    }
}

export async function getAllArtistesBySceneIdSByDate(id) {
    try {
        return await pb.collection('artiste').getFullList({
            filter: `scene = '${id}'`,
            sort: 'dateRepresentation'
        });
    } catch (e) {
        console.error(e);
    }
}

export async function getAllArtistesBySceneNom(nom) {
    try {
        const idScene = await pb.collection('scene').getList(1, 1, { filter: `nomScene='${nom}'` });
        if (idScene.items.length === 0) {
            return [];
        }

        return await pb.collection('artiste').getFullList({
            filter: `scene = '${idScene.items[0].id}'`,
            sort: 'dateRepresentation'
        });

    } catch (e) {
        console.error(e);
    }
}

export async function createArtiste(data) {
    try {
        await pb.collection('artiste').create(data);
        console.log('Artiste créé avec succès');
    } catch (e) {
        console.error(e);
        console.log("Une erreur est survenue lors de la création de l'artiste");
    }
}

export async function editArtiste(id, data) {
    try {
        await pb.collection('artiste').update(id, data);
        console.log('Artiste modifié avec succès');
    } catch (e) {
        console.error(e);
        console.log("Une erreur est intervenue lors de la modification de l'artiste");
    }
}

export async function createScene(data) {
    try {
        await pb.collection('scene').create(data);
        console.log('La scène a été créée avec succès');
    } catch (e) {
        console.error(e);
        console.log("Une erreur est intervenue lors de la création d'une scène");
    }
}

export async function editScene(id, data) {
    try {
        await pb.collection('scene').update(id, data);
        console.log('La scène a été modifiée avec succès');
    } catch (e) {
        console.error(e);
        console.log("Une erreur est intervenue lors de la modification de la scène");
    }
}






