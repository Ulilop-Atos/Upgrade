export const longProcess = ( n ) => {

    for( let i = 0; i < n; i++ ) {
        console.log(`Step ${i} of ${n}`);
    }

    return `${ n } steps completed.`;
}