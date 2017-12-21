// Stwórz plik actions.js, w którym zdefiniujesz typy akcji oraz kreatory akcji dla następujących zdarzeń:
//
//     tworzenie komentarza,
//     edycja komentarza,
//     usuwanie komentarza,
// ocenianie +1 / -1 (kciuk w górę/kciuk w dół) komentarza
var uuid = require('uuid');
// import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

function delComment(id) {
    return {
        type: DELETE_COMMENT,
        id
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}

