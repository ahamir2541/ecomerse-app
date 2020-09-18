import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

firestore.collection('users').doc('Zf7UdHpmUp8gEJvqp847').collection('cartItems').doc('36ZjSuyomK08NaIJDglb')
firestore.doc('/users/Zf7UdHpmUp8gEJvqp847/cartItems/36ZjSuyomK08NaIJDglb')
firestore.collection('/users/Zf7UdHpmUp8gEJvqp847/cartItems')
