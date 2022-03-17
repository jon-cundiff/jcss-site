const initialState = {};

// Browser must support creating Blobs in order to download files via JS
// This value will never change within a session.
try {
    initialState.supported = !!new Blob();
} catch {
    initialState.supported = false;
}

const reducer = () => {
    return initialState;
};

export default reducer;
