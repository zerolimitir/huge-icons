import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.336 2.058a4.172 4.172 0 0 0-1.236.39c-.394.198-.069-.021-3.86 2.605-3.573 2.475-3.662 2.546-3.958 3.158-.218.451-.296.827-.268 1.289.042.679.261 1.151.809 1.745.257.279.386.461.52.733.298.604.295.568.297 3.662.001 2.515.007 2.77.076 3.1.316 1.526 1.446 2.695 3.024 3.13l.4.11h9.72l.4-.11c1.507-.415 2.577-1.468 2.991-2.943.084-.298.087-.394.108-3.287l.022-2.98.109-.323c.137-.406.338-.718.743-1.155.809-.87.983-1.941.485-2.972-.296-.61-.385-.682-3.958-3.155-3.842-2.66-3.473-2.411-3.86-2.605a4.303 4.303 0 0 0-2.564-.392m1.334 6.285c.739.165 1.432.728 1.792 1.455.218.442.263.687.283 1.558l.018.777.243.143c.479.283.854.813.951 1.341.056.311.056 2.455 0 2.766-.138.755-.787 1.414-1.549 1.573-.14.029-.959.044-2.408.044-1.449 0-2.268-.015-2.408-.044-.762-.159-1.411-.818-1.549-1.573-.056-.311-.056-2.455 0-2.766a2.065 2.065 0 0 1 .947-1.338l.239-.139.023-.78c.025-.874.072-1.128.286-1.562a2.708 2.708 0 0 1 1.251-1.255c.587-.29 1.189-.354 1.881-.2m-1.079 1.476a1.432 1.432 0 0 0-.602.448c-.194.281-.229.451-.229 1.118V12h2.48v-.618c0-.527-.012-.652-.082-.839a1.297 1.297 0 0 0-.619-.664c-.243-.119-.715-.149-.948-.06'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeLock);
export default ForwardRef;
