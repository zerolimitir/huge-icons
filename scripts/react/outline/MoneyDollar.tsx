import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyDollar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M5.579 3.279A4.753 4.753 0 0 0 1.508 6.48c-.256.75-.248.569-.248 5.52 0 4.192.005 4.525.073 4.86.397 1.966 1.841 3.41 3.807 3.807.339.069.734.073 6.86.073s6.521-.004 6.86-.073c1.966-.397 3.41-1.841 3.807-3.807.068-.335.073-.668.073-4.86s-.005-4.525-.073-4.86c-.39-1.929-1.778-3.349-3.703-3.788l-.384-.088-6.34-.007c-3.487-.004-6.484.006-6.661.022M18.98 4.89c.538.184.878.4 1.304.826.426.426.642.766.826 1.304l.11.32v9.32l-.11.32c-.184.538-.4.878-.826 1.304-.426.426-.766.642-1.304.826l-.32.11H5.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V7.34l.11-.32c.185-.539.4-.878.826-1.304.389-.388.701-.598 1.136-.765.501-.191.28-.186 7.248-.178l6.56.007.32.11m-7.26.915a.865.865 0 0 0-.214.147c-.208.198-.24.306-.258.876l-.017.529-.146.046c-.566.178-1.175.708-1.517 1.317-.4.714-.4 1.846 0 2.56.502.895 1.278 1.382 2.332 1.463.482.036.723.131.974.383.781.781.23 2.114-.874 2.114-.342 0-.629-.12-.874-.366-.205-.204-.366-.528-.366-.734 0-.259-.091-.511-.238-.658-.349-.349-.904-.279-1.169.149-.078.127-.091.196-.085.48.021.963.563 1.829 1.452 2.319.121.067.285.142.365.167l.146.046.017.529c.018.57.05.678.258.875a.72.72 0 0 0 .988 0c.208-.197.24-.305.258-.875l.017-.529.146-.046c.39-.123.937-.515 1.216-.87.427-.545.6-1.042.6-1.727 0-1.047-.512-1.906-1.451-2.432-.284-.159-.727-.276-1.18-.311-.482-.036-.723-.131-.974-.383-.279-.278-.38-.549-.357-.954.021-.353.107-.547.356-.795.248-.249.442-.335.795-.356.395-.022.673.078.941.342.237.233.337.452.386.844.056.454.23.679.586.759.401.09.798-.153.88-.54.048-.224.006-.678-.094-1.014-.222-.747-.98-1.529-1.704-1.757l-.146-.046-.017-.529c-.018-.57-.05-.678-.258-.875a.817.817 0 0 0-.227-.15.952.952 0 0 0-.547.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyDollar);
export default ForwardRef;