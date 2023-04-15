import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCanvas = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.785 1.299a.956.956 0 0 0-.288.184c-.233.225-.257.368-.257 1.504V4h1.52V2.987c0-1.161-.024-1.291-.28-1.523-.134-.12-.373-.227-.5-.222a1.16 1.16 0 0 0-.195.057M6.786 18.03c-.01.017-.364.894-.786 1.95-.699 1.746-.766 1.937-.75 2.109.06.632.847.904 1.281.443.078-.084.371-.769.99-2.315.483-1.208.879-2.201.879-2.206 0-.027-1.597-.008-1.614.019m4.454 1.5c0 .993.016 1.586.045 1.689.059.213.293.441.513.5.4.108.812-.12.92-.51.025-.091.042-.75.042-1.679V18h-1.52v1.53m4.36-1.52c0 .006.396.999.879 2.207.619 1.546.912 2.231.99 2.315.443.471 1.236.183 1.278-.464.013-.191-.048-.362-.759-2.128l-.772-1.92-.808-.011a13.337 13.337 0 0 0-.808.001'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCanvas);
export default ForwardRef;
