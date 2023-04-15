import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPencil = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.735 3.041a3.372 3.372 0 0 0-.965.364c-.146.086-.541.442-1.081.975l-.851.84 1.972 1.971 1.973 1.972.838-.852c.91-.923 1.059-1.126 1.248-1.691.093-.28.106-.385.107-.84.001-.467-.011-.553-.111-.84-.321-.923-1.022-1.591-1.929-1.839-.288-.079-.922-.11-1.201-.06m-8.6 7.889c-3.14 3.143-4.7 4.733-4.815 4.905a4.376 4.376 0 0 0-.554 1.225c-.044.176-.182.853-.305 1.504-.201 1.062-.22 1.203-.181 1.38.087.391.391.695.775.775.189.039.319.022 1.387-.18.648-.123 1.322-.26 1.498-.305a4.672 4.672 0 0 0 1.38-.67c.143-.109 2.317-2.257 4.83-4.772l4.57-4.572-1.97-1.97-1.971-1.97-4.644 4.65'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPencil);
export default ForwardRef;
