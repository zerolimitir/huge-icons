import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileVideo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13 4.212c0 2.381.008 2.499.209 3.088a4.078 4.078 0 0 0 2.083 2.322c.159.074.45.185.648.245l.36.111 1.98.013c1.089.007 2.147.007 2.35.001l.371-.012-4.001-4-4-4v2.232m-2.32 7.706c-.264.091-.558.384-.632.631-.067.225-.068 4.673-.001 4.899.054.179.308.487.473.572.062.032.194.076.295.099.38.085.449.05 2.281-1.168.926-.616 1.736-1.168 1.799-1.226.395-.362.395-1.088 0-1.45-.063-.058-.873-.61-1.799-1.226-1.941-1.29-1.945-1.292-2.416-1.131'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileVideo);
export default ForwardRef;
