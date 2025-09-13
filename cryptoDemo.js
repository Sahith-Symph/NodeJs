import crypto from 'crypto'

//hashes are one way can't turn back into original data 

//Cannot apply digest on the same hash object multiple times

const hash  = crypto.createHash('sha256'); 
 hash.update ('Mypassword123');
console.log(hash.digest('hex')) //

//randomBytes  add salt to make the password predictability much difficult 
const uniqueSalt = crypto.randomBytes(16 ).toString('hex');


console.log("unique salt: " , uniqueSalt)

const hash2 = crypto.createHash('sha512');
hash2.update('MyPassword123' + uniqueSalt);
console.log(hash2.digest('hex'));

//Cipher text is an encryption which can be decrypted back to original data

//createCipheriv & createDecipheriv these methods require an initialization vector (IV) along with key and algorithm

const algorith = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
// const iv2 = crypto.randomBytes(16);
const cipher =crypto.createCipheriv(algorith , key , iv);
let encrypted = cipher.update('Hello this is a secret message' , 'utf8' , 'hex'); //update returns some of the encrypted
//data and final returns the rest so we need to concatenate both 

encrypted+=cipher.final('hex');
console.log("encrypted: " , encrypted);

//use the same iv for decryption which was used for encryption
const decipher = crypto.createDecipheriv(algorith , key , iv);
let decrypted= decipher.update(encrypted , 'hex' , 'utf8');
 decrypted += decipher.final('utf8');
console.log("decrypted: " , decrypted);