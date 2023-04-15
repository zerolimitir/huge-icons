import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgColorInversion = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.6 2.284C8.892 2.603 5.257 6.22 3.847 10c-.484 1.296-.675 2.536-.57 3.7.253 2.808 1.765 5.279 4.13 6.747 1.515.94 3.454 1.418 5.203 1.28 4.389-.346 7.771-3.726 8.117-8.113.094-1.198-.116-2.454-.632-3.767-1.144-2.918-3.609-5.796-6.008-7.015-.886-.45-1.734-.637-2.487-.548m-.36 9.761v8.165l-.238-.027a7.676 7.676 0 0 1-.72-.144 7.245 7.245 0 0 1-4.817-3.919 7.05 7.05 0 0 1-.572-1.714c-.094-.446-.107-.601-.11-1.306-.004-.932.064-1.356.355-2.238C6.081 8.003 8.684 4.944 11 3.975a9.03 9.03 0 0 1 .23-.093c.006-.001.01 3.672.01 8.163'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgColorInversion);
export default ForwardRef;
