import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDisLike = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.64 3.027c-.341.04-.851.195-1.22.37A3.954 3.954 0 0 0 4.327 5.76c-.047.143-.463 1.777-.926 3.631-.87 3.486-.888 3.58-.797 4.017.114.546.562 1.135 1.036 1.364.475.228.473.228 3.268.228 1.415 0 2.572.007 2.572.015s-.321.564-.713 1.237c-.83 1.421-.905 1.607-.906 2.248-.001.335.018.458.114.752A2.537 2.537 0 0 0 9.6 20.888c.224.074.375.089 1.08.103l.82.015 1.956-3.424c1.281-2.242 1.975-3.496 2.011-3.633.045-.171.052-.968.044-4.429-.012-4.606.003-4.314-.234-4.615-.121-.154-1.91-1.34-2.302-1.526a5.054 5.054 0 0 0-.693-.251l-.382-.104-2.06-.007a78.899 78.899 0 0 0-2.2.01m10.94 1.02c-.721.138-1.381.801-1.536 1.545C17.014 5.738 17 6.956 17 9.5c0 2.544.014 3.762.044 3.908.157.75.798 1.391 1.548 1.548.274.057 1.542.057 1.816 0a2.062 2.062 0 0 0 1.548-1.548c.03-.146.044-1.364.044-3.908 0-2.544-.014-3.762-.044-3.908-.159-.762-.818-1.411-1.573-1.549-.286-.052-1.523-.049-1.803.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDisLike);
export default ForwardRef;