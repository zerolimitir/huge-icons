import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDevices = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.62 7.041c-.703.148-1.249.622-1.514 1.315l-.086.224v9.84l.088.23a2.112 2.112 0 0 0 1.248 1.244c.22.085.265.086 2.644.086s2.424-.001 2.644-.086a2.112 2.112 0 0 0 1.248-1.244l.088-.23V8.58l-.086-.224a2.108 2.108 0 0 0-1.244-1.247c-.226-.086-.274-.088-2.55-.095-1.276-.004-2.392.008-2.48.027M3.117 17.055c-.412.111-.798.445-.99.858-.09.192-.106.282-.106.588-.001.327.011.386.129.624.156.317.442.598.761.748l.229.107 4.93.011 4.93.011V17l-4.85.003c-3.71.002-4.893.014-5.033.052'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDevices);
export default ForwardRef;
