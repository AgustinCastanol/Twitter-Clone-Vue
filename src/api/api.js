
import { initializeApp } from "firebase/app";
import firebaseConfig from './setting'
import { getFirestore, addDoc,collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default{
        async getTweetsFollowers(){
            const querySnapshot = await getDocs(collection(db,"followers"))
            let aux = []
            querySnapshot.forEach((doc)=>{
                let obj = doc.data()
                obj.id = doc.id
                aux.push(obj)
            })
            return aux;
        
        },        
        async getTweetsOwn(){
            const querySnapshot = await getDocs(collection(db,"tweets"))
            let aux = []
            querySnapshot.forEach((doc)=>{
                let obj = doc.data()
                obj.id = doc.id
                aux.push(obj)
            })
            return aux;
        
        },
        async addNewTweetFromDataBase(cb){
        await addDoc(collection(db,"tweets"),{
            content:cb
        })
    },
    deleteTweetById(id){
        deleteDoc(doc(db,"tweets",id))
    }
}

