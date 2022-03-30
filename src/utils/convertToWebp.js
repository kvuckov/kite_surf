export const convertToWebp = origUrl => {
    if (typeof window === 'undefined') return origUrl;

    const isSafari = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);
    const isIE = window.navigator.pointerEnabled;

    const hasAdditionalParams = !/.(png|gif|jpg|jpeg)$/.test(origUrl);
    const concatenationSymbol = hasAdditionalParams ? '&' : '?';
    const isSvg = /.svg/.test(origUrl);

    return (!isIE && !isSafari && !isSvg)
        ? `${origUrl}${concatenationSymbol}fm=webp`
        : origUrl;
};