import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGraduationCap = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='m20.42 10.42-.84.375-.01 2.587c-.007 1.642.004 2.642.03 2.737.171.636.933.878 1.41.447.327-.294.308-.084.309-3.496.001-1.667-.013-3.029-.029-3.028-.017.001-.408.171-.87.378M7.329 14.65c.015 2.728.006 2.605.233 3.09.125.268.597.737.879.873.454.22.535.226 3.559.226s3.105-.006 3.559-.226c.282-.136.754-.605.879-.873.227-.485.218-.362.233-3.09.009-1.718 0-2.53-.028-2.53-.022 0-.811.342-1.752.759-.941.418-1.855.798-2.031.845-.252.067-.435.086-.86.086s-.608-.019-.86-.086c-.176-.047-1.09-.427-2.031-.845-.941-.417-1.73-.759-1.752-.759-.028 0-.037.812-.028 2.53'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGraduationCap);
export default ForwardRef;
