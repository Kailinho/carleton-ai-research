import {
	encode,
	decode,
	encodeComponents,
	decodeComponents,
} from "firebase-encode"

// safe encodes to 02%2F10%2F2013%2E%24%5B%5D%23%2F%25234_-!@%23%24%25^&*()0%5D;:'"`\=%2F?+|.
const encoded = encode("02/10/2013.$[]#/%234_-!@#$%^&*()0];:'\"`\\=/?+|")

// now is a safe child key.
firebaseRef.child(encoded).set(true)

// encodeComponents is same as encode except that it does not encode `/`.
