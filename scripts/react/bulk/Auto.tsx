import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAuto = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.698 7.315a.934.934 0 0 0-.274.208c-.062.074-1.029 1.967-2.149 4.207-2.195 4.392-2.123 4.227-1.98 4.561a.982.982 0 0 0 .438.427.776.776 0 0 0 .832-.23c.052-.064.392-.703.755-1.421l.66-1.305 2.02-.001 2.02-.001.693 1.382c.616 1.228.711 1.395.853 1.498a.726.726 0 0 0 .947-.055c.189-.177.247-.309.247-.562 0-.211-.087-.394-2.035-4.293-1.12-2.24-2.087-4.133-2.149-4.207a.736.736 0 0 0-.878-.208m.932 3.665c.336.671.61 1.229.61 1.24 0 .011-.558.02-1.24.02-.682 0-1.24-.009-1.24-.02 0-.04 1.22-2.46 1.24-2.46.011 0 .295.549.63 1.22'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAuto);
export default ForwardRef;
